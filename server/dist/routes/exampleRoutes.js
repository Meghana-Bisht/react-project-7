"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var exampleControllers_1 = require("../controllers/exampleControllers");
var authChecker_1 = require("../middleware/authChecker");
var exampleValidation_1 = require("../validation/exampleValidation/exampleValidation");
var router = (0, express_1.Router)();
router.get("/", authChecker_1.authChecker, exampleControllers_1.getExample);
router.post("/", exampleValidation_1.getExampleDataValidation, exampleControllers_1.getExampleData);
exports.default = router;