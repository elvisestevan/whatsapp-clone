import ChatsCtrl from "../controllers/chats.controller";
import ChatCtrl from "../controllers/chat.controller";
import InputDirective from "../directives/input.directive";
import CalendarFilter from "../filters/calendar.filter";
import RoutesConfig from "../routes";

const App = "WhatsApp";

Angular.module(App, [
  "angular-meteor",
  "angularMoment",
  "ionic"
]);

new Loader(App)
  .load(ChatsCtrl)
  .load(ChatCtrl)
  .load(InputDirective)
  .load(CalendarFilter)
  .load(RoutesConfig);
