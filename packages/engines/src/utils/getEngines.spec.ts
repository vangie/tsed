import {expect} from "chai";
import filedirname from "filedirname";
import {join} from "path";
import {getEngine, getEngines} from "./getEngines";

// FIXME remove when esm is ready
const [, rootDir] = filedirname();

describe("getEngines", () => {
  describe("getEngine()", () => {
    describe("render file", () => {
      it("should return a render function", async () => {
        const render = getEngine("ejs");

        const result = await new Promise((resolve, reject) => {
          render(
            join(rootDir, "../../test/fixtures/ejs/user.ejs"),
            {
              user: {
                name: "Tobi"
              }
            },
            (err, html) => {
              err ? reject(err) : resolve(html);
            }
          );
        });

        expect(result).to.equal("<p>Tobi</p>");
      });
      it("should catch error", async () => {
        const render = getEngine("ejs");

        const error: any = await new Promise((resolve) => {
          render(
            join(rootDir, "../../test/fixtures/ejs/user2.ejs"),
            {
              user: {
                name: "Tobi"
              }
            },
            (err) => {
              resolve(err);
            }
          );
        });

        expect(error.message).to.contains("ENOENT: no such file or directory");
      });
    });
    describe("render template", () => {
      it("should return a render function", async () => {
        const {render} = getEngine("ejs");

        const result = await new Promise((resolve, reject) => {
          render(
            "<p><%= user.name %></p>",
            {
              user: {
                name: "Tobi"
              }
            },
            (err, html) => {
              err ? reject(err) : resolve(html);
            }
          );
        });

        expect(result).to.equal("<p>Tobi</p>");
      });
      it("should catch error", async () => {
        const {render} = getEngine("ejs");

        const error: any = await new Promise((resolve) => {
          render(
            "<p><%= user.name></p>",
            {
              user: {
                name: "Tobi"
              }
            },
            (err) => {
              resolve(err);
            }
          );
        });

        expect(error.message).to.contains('Could not find matching close tag for "<%=".');
      });
    });
  });
  describe("getEngines()", () => {
    it("should return engines", () => {
      const engines = getEngines();
      expect(Object.keys(engines)).to.deep.eq([
        "atpl",
        "bracket",
        "dot",
        "dust",
        "ect",
        "ejs",
        "haml-coffee",
        "haml",
        "hamlet",
        "handlebars",
        "hogan",
        "htmling",
        "jazz",
        "jqtpl",
        "just",
        "liquor",
        "lodash",
        "mote",
        "mustache",
        "nunjucks",
        "plates",
        "pug",
        "ractive",
        "react",
        "slm",
        "squirrelly",
        "swig",
        "templayed",
        "toffee",
        "twig",
        "twing",
        "underscore",
        "vash",
        "velocityjs",
        "walrus"
      ]);
    });
  });
});
