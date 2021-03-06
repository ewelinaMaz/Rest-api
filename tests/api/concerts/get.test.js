const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../server.js");
chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe("GET /concerts", () => {
  it("should return concerts list", async () => {
    try {
      const res = await request(server).get("/api/concerts");
      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.an("array");
      expect(res.body.length).to.be.equal(3);
    } catch (e) {
      console.log(e);
    }
  });
  it("should add new attribute to concert object", async () => {
    try {
      const res = await request(server).get("/api/concerts");
      res.body.forEach((concert) => {
        expect(concert).haveOwnProperty("tickets");
      });
    } catch (e) {
      console.log(e);
    }
  });
});
