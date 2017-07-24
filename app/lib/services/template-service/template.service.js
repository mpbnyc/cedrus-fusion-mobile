"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Rx_1 = require("rxjs/Rx");
var configuration_service_1 = require("../configuration-service/configuration.service");
var TemplateService = (function () {
    function TemplateService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.hashtable = [];
    }
    TemplateService.prototype.loadTemplateJson = function (name, templatesObject, templateFolder) {
        var config = this.configService.getConfiguration();
        var url = "";
        var defaultDirectory = "default";
        if (config != null && config.templateURL != null) {
            url = config.templateURL;
            if (config.defaultDirectory != null)
                defaultDirectory = config.defaultDirectory;
        }
        if (!url.endsWith("/"))
            url = url + "/";
        if (templateFolder == null || templateFolder == "")
            templateFolder = defaultDirectory;
        var path = templateFolder.split("/");
        if (path.length > 1) {
            if (!templateFolder.endsWith(".json"))
                templateFolder = templateFolder + ".json";
            url = url + templateFolder;
        }
        else {
            if (templateFolder == "") {
                url = url + name + "-template.json";
            }
            else {
                url = url + templateFolder + "/" + name + "-template.json";
            }
        }
        // for(let temp of this.hashtable)
        // {
        // 	if(temp["key"]==url)
        // 	{
        // 		console.log(temp["key"]);
        // 		return temp["value"];
        // 	}
        // }
        return this.http.get(url).map(function (res) {
            // console.log("pushing into ",this.hashtable);
            // this.hashtable.push({key:url, value:res.json()});
            console.log(res);
            return res.json();
        })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.throw('Server error');
        });
    };
    TemplateService.prototype.getTemplate = function () {
        return this.defaultTemp;
    };
    return TemplateService;
}());
TemplateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, configuration_service_1.ConfigService])
], TemplateService);
exports.TemplateService = TemplateService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlbXBsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBQ3JDLG1CQUFpQjtBQUNqQiw4QkFBcUM7QUFJckMsd0ZBQStFO0FBRy9FLElBQWEsZUFBZTtJQU0xQix5QkFBb0IsSUFBVSxFQUFVLGFBQTRCO1FBQWhELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUY3RCxjQUFTLEdBQUcsRUFBRSxDQUFDO0lBRWlELENBQUM7SUFFekUsMENBQWdCLEdBQWhCLFVBQWlCLElBQVcsRUFBRSxlQUFtQixFQUFFLGNBQWM7UUFDaEUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ25ELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBRSxJQUFJLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBRSxJQUFJLENBQUMsQ0FDNUMsQ0FBQztZQUNBLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBRSxJQUFJLENBQUM7Z0JBQ2hDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLENBQUM7UUFDckMsRUFBRSxDQUFBLENBQUMsY0FBYyxJQUFFLElBQUksSUFBSSxjQUFjLElBQUUsRUFBRSxDQUFDO1lBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDO1FBRWpGLElBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FDakIsQ0FBQztZQUNBLEVBQUUsQ0FBQSxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFBQyxjQUFjLEdBQUcsY0FBYyxHQUFDLE9BQU8sQ0FBQztZQUM5RSxHQUFHLEdBQUcsR0FBRyxHQUFDLGNBQWMsQ0FBQztRQUMxQixDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDQSxFQUFFLENBQUEsQ0FBQyxjQUFjLElBQUUsRUFBRSxDQUFDLENBQ3RCLENBQUM7Z0JBQ0EsR0FBRyxHQUFHLEdBQUcsR0FBQyxJQUFJLEdBQUMsZ0JBQWdCLENBQUM7WUFDakMsQ0FBQztZQUNELElBQUksQ0FDSixDQUFDO2dCQUNBLEdBQUcsR0FBRyxHQUFHLEdBQUMsY0FBYyxHQUFDLEdBQUcsR0FBQyxJQUFJLEdBQUMsZ0JBQWdCLENBQUM7WUFDcEQsQ0FBQztRQUNGLENBQUM7UUFDRCxrQ0FBa0M7UUFDbEMsSUFBSTtRQUNKLHdCQUF3QjtRQUN4QixLQUFLO1FBQ0wsOEJBQThCO1FBQzlCLDBCQUEwQjtRQUMxQixLQUFLO1FBQ0wsSUFBSTtRQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ2hDLCtDQUErQztZQUMvQyxvREFBb0Q7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQVM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTVERCxJQTREQztBQTVEWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBT2UsV0FBSSxFQUF5QixxQ0FBYTtHQU56RCxlQUFlLENBNEQzQjtBQTVEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IFRlbXBsYXRlQ2xhc3MgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZSc7XG5cbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWd1cmF0aW9uLXNlcnZpY2UvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlU2VydmljZSB7XG5cblx0cHJpdmF0ZSBkZWZhdWx0VGVtcDogVGVtcGxhdGVDbGFzcztcblxuXHRwcml2YXRlIGhhc2h0YWJsZSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7fVxuXG5cdGxvYWRUZW1wbGF0ZUpzb24obmFtZTpzdHJpbmcsIHRlbXBsYXRlc09iamVjdDphbnksIHRlbXBsYXRlRm9sZGVyKTogT2JzZXJ2YWJsZTxPYmplY3Q+IHsgXG5cdFx0bGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWd1cmF0aW9uKCk7XG5cdFx0bGV0IHVybCA9IFwiXCI7XG5cdFx0bGV0IGRlZmF1bHREaXJlY3RvcnkgPSBcImRlZmF1bHRcIjtcblx0XHRpZihjb25maWchPW51bGwgJiYgY29uZmlnLnRlbXBsYXRlVVJMIT1udWxsKVxuXHRcdHtcblx0XHRcdHVybCA9IGNvbmZpZy50ZW1wbGF0ZVVSTDtcblx0XHRcdGlmKGNvbmZpZy5kZWZhdWx0RGlyZWN0b3J5IT1udWxsKVxuXHRcdFx0XHRkZWZhdWx0RGlyZWN0b3J5ID0gY29uZmlnLmRlZmF1bHREaXJlY3Rvcnk7XG5cdFx0fVxuXHRcdGlmKCF1cmwuZW5kc1dpdGgoXCIvXCIpKSB1cmwgPSB1cmwrXCIvXCI7XG5cdFx0aWYodGVtcGxhdGVGb2xkZXI9PW51bGwgfHwgdGVtcGxhdGVGb2xkZXI9PVwiXCIpIHRlbXBsYXRlRm9sZGVyID0gZGVmYXVsdERpcmVjdG9yeTtcblxuXHRcdHZhciBwYXRoID0gdGVtcGxhdGVGb2xkZXIuc3BsaXQoXCIvXCIpO1xuXHRcdGlmKHBhdGgubGVuZ3RoPjEpXG5cdFx0e1xuXHRcdFx0aWYoIXRlbXBsYXRlRm9sZGVyLmVuZHNXaXRoKFwiLmpzb25cIikpIHRlbXBsYXRlRm9sZGVyID0gdGVtcGxhdGVGb2xkZXIrXCIuanNvblwiO1xuXHRcdFx0dXJsID0gdXJsK3RlbXBsYXRlRm9sZGVyO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0aWYodGVtcGxhdGVGb2xkZXI9PVwiXCIpXG5cdFx0XHR7XG5cdFx0XHRcdHVybCA9IHVybCtuYW1lK1wiLXRlbXBsYXRlLmpzb25cIjtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0dXJsID0gdXJsK3RlbXBsYXRlRm9sZGVyK1wiL1wiK25hbWUrXCItdGVtcGxhdGUuanNvblwiO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBmb3IobGV0IHRlbXAgb2YgdGhpcy5oYXNodGFibGUpXG5cdFx0Ly8ge1xuXHRcdC8vIFx0aWYodGVtcFtcImtleVwiXT09dXJsKVxuXHRcdC8vIFx0e1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyh0ZW1wW1wia2V5XCJdKTtcblx0XHQvLyBcdFx0cmV0dXJuIHRlbXBbXCJ2YWx1ZVwiXTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5tYXAocmVzPT57XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcInB1c2hpbmcgaW50byBcIix0aGlzLmhhc2h0YWJsZSk7XG5cdFx0XHQvLyB0aGlzLmhhc2h0YWJsZS5wdXNoKHtrZXk6dXJsLCB2YWx1ZTpyZXMuanNvbigpfSk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0cmV0dXJuIHJlcy5qc29uKCk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yOmFueSkgPT4geyBcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KCdTZXJ2ZXIgZXJyb3InKTt9KTtcbiAgfVxuXG4gIGdldFRlbXBsYXRlKCk6VGVtcGxhdGVDbGFzcyB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFRlbXA7XG4gIH1cbn0iXX0=