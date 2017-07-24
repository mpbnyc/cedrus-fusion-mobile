"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Rx_1 = require("rxjs/Rx");
var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.load = function (url) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(url).map(function (res) {
                return res.json();
            })
                .catch(function (error) {
                console.log('Configuration file could not be read');
                resolve(true);
                return Rx_1.Observable.throw(error.json().error || 'Server error');
            })
                .subscribe(function (config) {
                _this.config = config;
                resolve();
            }, function (err) { console.log("File not Found"); }, function () { return console.log("Done"); });
        }).catch(function (err) { return console.log("Promise Catch"); });
    };
    ConfigService.prototype.getConfiguration = function () {
        return this.config;
    };
    return ConfigService;
}());
ConfigService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQTJDO0FBQzNDLHNDQUFvQztBQUNwQyxtQkFBaUI7QUFDakIsOEJBQW1DO0FBS25DLElBQWEsYUFBYTtJQUV2Qix1QkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBRyxDQUFDO0lBRWxDLDRCQUFJLEdBQUosVUFBSyxHQUFVO1FBQWYsaUJBaUJDO1FBaEJDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDekIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRztnQkFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUNyQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBVTtnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7Z0JBQ3BELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQztpQkFDTCxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNmLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFDRCxVQUFDLEdBQUcsSUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzNDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0FHZSxXQUFJO0dBRm5CLGFBQWEsQ0EwQnpCO0FBMUJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb247XG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkge31cbiAgXG4gIGxvYWQodXJsOnN0cmluZykgeyBcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5nZXQodXJsKS5tYXAocmVzPT57XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yOiBhbnkpOmFueSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpZ3VyYXRpb24gZmlsZSBjb3VsZCBub3QgYmUgcmVhZCcpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoY29uZmlnID0+IHtcbiAgICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHsgY29uc29sZS5sb2coXCJGaWxlIG5vdCBGb3VuZFwiKTsgfSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJEb25lXCIpKTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcIlByb21pc2UgQ2F0Y2hcIikpO1xuICB9XG5cbiAgZ2V0Q29uZmlndXJhdGlvbigpOkNvbmZpZ3VyYXRpb24ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxufSJdfQ==