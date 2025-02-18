"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAction = void 0;
const core = require("@actions/core");
const runAction = async () => {
    try {
        const name = core.getInput('name');
        const message = `Hola, ${name}! Bienvenido a GitHub Actions 🚀`;
        core.setOutput('message', message);
        console.log(message);
    }
    catch (error) {
        core.setFailed(`Error ejecutando la Action: ${error.message}`);
    }
};
exports.runAction = runAction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFFL0IsTUFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDbEMsSUFBSSxDQUFDO1FBQ0gsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxNQUFNLE9BQU8sR0FBRyxTQUFTLElBQUksa0NBQWtDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsK0JBQWdDLEtBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7QUFDSCxDQUFDLENBQUM7QUFUVyxRQUFBLFNBQVMsYUFTcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb3JlIGZyb20gJ0BhY3Rpb25zL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgcnVuQWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG5hbWUgPSBjb3JlLmdldElucHV0KCduYW1lJyk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBIb2xhLCAke25hbWV9ISBCaWVudmVuaWRvIGEgR2l0SHViIEFjdGlvbnMg8J+agGA7XG4gICAgY29yZS5zZXRPdXRwdXQoJ21lc3NhZ2UnLCBtZXNzYWdlKTtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb3JlLnNldEZhaWxlZChgRXJyb3IgZWplY3V0YW5kbyBsYSBBY3Rpb246ICR7KGVycm9yIGFzIEVycm9yKS5tZXNzYWdlfWApO1xuICB9XG59O1xuIl19