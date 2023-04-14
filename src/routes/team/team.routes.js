const express = require("express");
const {
  httpTeamRegister,
  httpGetAllTeams,
  httpGetTeamDetailById,
  httpUpdateTeam,
  httpGetTeamByUserId,
  httpPostTournament,
} = require("./team.controller");
const { isAuthenticatedUser } = require("../../middlewares/auth");

const teamRouter = express.Router();

teamRouter.post("/registration", isAuthenticatedUser, httpTeamRegister);
teamRouter.get("/list/:page&:TeamName", isAuthenticatedUser, httpGetAllTeams);
teamRouter.get("/user/:userId", isAuthenticatedUser, httpGetTeamByUserId);
teamRouter.put("/update", isAuthenticatedUser, httpUpdateTeam);
teamRouter.post(
  "/tournament/register",
  isAuthenticatedUser,
  httpPostTournament
);
teamRouter.get("/detail/:id", isAuthenticatedUser, httpGetTeamDetailById);
module.exports = teamRouter;
