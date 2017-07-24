import { Component, ElementRef, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList, TemplateRef, AfterContentInit, DoCheck } from '@angular/core';
import { CfCoreComponent } from '../core/core.component';
import { IconModel } from '../../models/icon/icon.model';
import { ButtonModel } from '../../models/button/button.model';
import { TabsModel } from '../../models/tabs/tabs.model';
import { TabsStylingModel } from '../../models/tabs/tabs-styling.model';
import { CfTabsCardComponent } from '../tabs-card/tabs-card.component';
import { TabsTemplates } from '../../templates/tabs.template';

import { TemplateService } from '../../services/template-service/template.service';
/**
 * <p>Tabs component based on Angular Material Tabs and Angular animations system</p>
 * <p>Example of using:</p>
 * <pre>
 * <code><</code>cf-tabs [properties]="myTabs" [styling]="myTabsStyles"<code>></code><code><</code><code>/</code>cf-tabs<code>></code>
 * </pre>
 */
@Component({
  selector: 'cf-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class CfTabsComponent extends CfCoreComponent implements OnInit, AfterContentInit {
  /**
   * It is an TabsModel object with options to be rendered into component template
   */
  cfTabs: TabsModel;
  /**
   * It is an attribute <b>[properties]</b> of directive <b>cf-tabs</b> which take TabsModel object.
   * <p>Example of model:</p>
   * <pre>{
   *  showStepNumberAsIcon: true
   *  showStepNumberAsPrefix: true
   * }</pre>
   * <h4>showStepNumberAsIcon: boolean</h4>
   * Showing step number as icon in tabs header steps buttons
   * <h4>showStepNumberAsPrefix: boolean</h4>
   * Showing step prefix as icon in tabs header steps buttons
   */
  @Input() properties: TabsModel;
  /**
   * It is an attribute <b>[styling]</b> of directive <b>cf-tabs</b> which take WizardStylingModel object with next properties:
   * <h4>container: StylingModel</h4>
   * Styling properties for main tabs container
   */
  @Input() styling: TabsStylingModel;
  /**
   * It is an array of tabs cards
   */
  @ContentChildren(CfTabsCardComponent) tabsCards: QueryList<CfTabsCardComponent>;
  /**
   * It is an array of tabs cards
   */
  private _cards: Array<CfTabsCardComponent> = [];
  /**
   * Property which means if tabs cards list container is scrollable based on tabs container width and total width of all cards
   */
  private _scrollable: boolean = false;
  /**
   * Property which means one card offset width to move cards list container to the left/right
   */
  private _scrollableCard: number = 0;
  /**
   * It is width in pixels and means how much tabs cards list container is bigger than cards container
   */
  private _scrollableOffset: number = 0;
  /**
   * Current tabs card index
   */
  private _currentCardIndex: number = 0;
  /**
   * It is card part width which is hidden inside cards list container on init
   */
  private _scrollableCardLast: number = 0;
  /**
   * It is number which means how mush in pixels to move left/right cards list container
   */
  private _scrollablePosition: number = 0;
  /**
   * It is number of possible moving cards
   */
  private _availableScrollCards: number = 0;
  /**
   * It is index of current card of all possible moving cards
   */
  private _currentAvailableCard: number = 0;
  /**
   * Link to tabs cards html section
   */
  @ViewChild('tabsPaginationSection') tabsPaginationSection;
  /**
   * Link to tabs cards html container
   */
  @ViewChild('tabsPaginationContainer') tabsPaginationContainer;
  /**
   * Link to tabs cards html list container
   */
  @ViewChild('tabsPaginationList') tabsPaginationList;
  /**
   * It is <b>(onCardChanged)</b> attribute of <b>cf-tabs</b> component. Is emmiting event with active card.
   */
  @Output() onCardChanged: EventEmitter<CfTabsCardComponent> = new EventEmitter<CfTabsCardComponent>();

  constructor(public elementRef: ElementRef,/**@hidden */ templateService:TemplateService) { super(elementRef, templateService); }
  /**
   * Initialize all data 
   */
  ngOnInit() {
    this.getMyTemplate("tabs",TabsTemplates).then(() => {
      if(this.compTemplate!=null && this.compTemplate!="")
      {
        if(TabsTemplates[this.compTemplate]!=null)
        {
          this.activeTemplate = TabsTemplates[this.compTemplate];
        }
        else
          this.activeTemplate = this.compTemplate;
      }
      if(this.properties==null)
      {
        this.properties = new TabsModel(this.activeTemplate["property"]);
      }
      else
      {
        var mainKeys = Object.keys(this.activeTemplate["property"]);
        for(let key of mainKeys)
        {
          if(this.properties[key]==null)
            this.properties[key]=this.activeTemplate["property"][key];
        }
      }

      if(this.styling==null)
      {
        this.styling = new TabsStylingModel (this.activeTemplate["style"]);
      }

      this.cfTabs = this.properties;
    });
  }
  /**
   * Angular 2 event triggered after component content was initialized. Here all cards are collected to an array and first array card became active.
   */
  ngAfterContentInit() {

    this.tabsCards.forEach(card => {
      this._cards.push(card);
    });

    setTimeout(() => {
      this.cards[0].isActive = true;
      this.cards[0].cardAnimationState = 'center';
      this.makeScrollableCard();
    }, 0);
  }
  /** 
   * Private function to buils cards array
   */
  private get cards(): Array<CfTabsCardComponent> {
    return this._cards.filter(card => !card.hidden);
  }
  /** 
   * Private function to find active card
   */
  private get activeCard(): CfTabsCardComponent {
    return this.cards.find(card => card.isActive);
  }
  /** 
   * Private function to set active card
   */
  private set activeCard(card: CfTabsCardComponent) {
    if (card !== this.activeCard && !card.isDisabled) {
      this.activeCard.isActive = false;
      card.isActive = true;
      this.onCardChanged.emit(card);
    }
  }
  /** 
   * Private function to find active card index
   */
  private get activeCardIndex(): number {
    return this.cards.indexOf(this.activeCard);
  }
  /** 
   * Private function to set if card has next card
   */
  private get hasNextCard(): boolean {
    return this.activeCardIndex < this.cards.length - 1;
  }
  /** 
   * Private function to set if card has previous card
   */
  private get hasPrevCard(): boolean {
    return this.activeCardIndex > 0;
  }
  /** 
   * Function to calculate possible scroll steps
   */
  calculatePossibleScrollCards() {
    var possibleScrolls = (this.tabsPaginationList.nativeElement.offsetWidth - this.tabsPaginationSection.nativeElement.offsetWidth) / this._scrollableCard;
    this._availableScrollCards = Math.ceil(possibleScrolls);
  }
  /** 
   * Function make tabs scrollable
   */
  makeScrollable() {
    return this.tabsPaginationSection.nativeElement.offsetWidth < this.tabsPaginationList.nativeElement.offsetWidth ? true : false;
  }
  /** 
   * Function to take tabs scrollable length
   */
  takeScrollableOffset() {
    this._scrollableOffset = this.tabsPaginationContainer.nativeElement.offsetWidth - this.tabsPaginationList.nativeElement.offsetWidth;
  }
  /** 
   * Function to make tabs scrollable step
   */
  makeScrollableCard() {
    this._scrollableCard = this.tabsPaginationList.nativeElement.offsetWidth / this.cards.length;
    this._scrollableCardLast = this._scrollableCard - (this.tabsPaginationContainer.nativeElement.offsetWidth - Math.floor(this.tabsPaginationContainer.nativeElement.offsetWidth / this._scrollableCard) * this._scrollableCard) - 8;
    this.takeScrollableOffset();
    this.calculatePossibleScrollCards();
  }
  /** 
   * Function to check tabs scrollable position
   */
  checkScrollablePosition() {
    var scrollableSpace = this.tabsPaginationContainer.nativeElement.offsetWidth - (this._currentCardIndex + 1) * this._scrollableCard;

    if(scrollableSpace < 0) {
      if(this._scrollablePosition !== scrollableSpace) this.moveRight();
    } else {
      this.moveLeft();
    }
  }
  /** 
   * Function to move tabs cards to the right
   */
  moveRight() {
    if(this._currentAvailableCard < this._availableScrollCards) {
      ++this._currentAvailableCard;
      this._scrollablePosition = this._currentAvailableCard === 1 ? this._scrollablePosition - this._scrollableCardLast : this._scrollablePosition - this._scrollableCard;
      this.tabsPaginationList.nativeElement.style.transform = 'translate3d(' + this._scrollablePosition + 'px, 0px, 0px)';
    }
    this.takeScrollableOffset();
  }
  /** 
   * Function to move tabs cards to the left
   */
  moveLeft() {
    if (this._scrollablePosition < 0) {
      this._scrollablePosition = this._currentAvailableCard === 1 ? this._scrollablePosition + this._scrollableCardLast : this._scrollablePosition + this._scrollableCard;
      --this._currentAvailableCard;
      this.tabsPaginationList.nativeElement.style.transform = 'translate3d(' + this._scrollablePosition + 'px, 0px, 0px)';
    }
    this.takeScrollableOffset();
  }
  /** 
   * Function to set animation to each step according to active card index
   * @param card  it is json step object
   * @param cardIndex  it is step index
   */
  setCardsAnmations(card: CfTabsCardComponent, cardIndex: number) {
    var animationDirection = '';

    if(this.activeCardIndex > cardIndex) {
      this.activeCard.cardAnimationState = 'right';
      card.cardAnimationState = 'center';
    }
    
    if(this.activeCardIndex < cardIndex) {
      this.activeCard.cardAnimationState = 'left';
      card.cardAnimationState = 'center';
    }
    for (var i = 0; i < this.cards.length; ++i) {
      if(i < cardIndex) this.cards[i].cardAnimationState = 'left';
      if(i > cardIndex) this.cards[i].cardAnimationState = 'right';
    }
  }
  /** 
   * Function to go to tabs card
   * @param card  it is json card object
   * @param cardIndex  it is card index
   */
  goToCard(card: CfTabsCardComponent, cardIndex: number) {
    if (!card.isDisabled) {
      this.setCardsAnmations(card, cardIndex);
      this._currentCardIndex = cardIndex;
      this.activeCard = card;
      this.takeScrollableOffset();
      this.checkScrollablePosition();
    }
  }
  /** 
   * Function to go to the next card
   */
  next() {
    let nextCard: CfTabsCardComponent;
    this.hasNextCard ? nextCard = this.cards[this.activeCardIndex + 1] : null;
    if (nextCard && !nextCard.isDisabled) {
      ++this._currentCardIndex;
      this.setCardsAnmations(this._cards[this.activeCardIndex + 1], this.activeCardIndex + 1);
      this.activeCard.onNext.emit();
      this.activeCard = nextCard;
      this.takeScrollableOffset();
      this.checkScrollablePosition();
    }
  }
  /** 
   * Function to go to the previous card
   */
  previous() {
    let prevCard: CfTabsCardComponent;
    this.hasPrevCard ? prevCard = this.cards[this.activeCardIndex - 1] : null;
    if (prevCard && !prevCard.isDisabled) {
      --this._currentCardIndex;
      this.setCardsAnmations(this._cards[this.activeCardIndex - 1], this.activeCardIndex - 1);
      this.activeCard.onPrev.emit();
      this.activeCard = prevCard;
      this.takeScrollableOffset();
      this.checkScrollablePosition();
    }
  }
}