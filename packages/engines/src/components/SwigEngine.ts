import {ViewEngine} from "../decorators/viewEngine.js";
import {Engine} from "./Engine.js";

@ViewEngine("swig", {
  requires: ["swig", "swig-templates"]
})
export class SwigEngine extends Engine {
  protected $compile(template: string, options: any): (options: any) => Promise<string> {
    if (options.cache === true) options.cache = "memory";
    this.engine.setDefaults({cache: options.cache});

    return this.engine.compile(template, options);
  }
}
