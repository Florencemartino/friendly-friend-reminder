import commands from "probot-commands";
//const reminders = require('./lib/index')
//import { getMessage } from './lib/index';


module.exports = (app) => {
  app.on("pull_request.opened", async (context) => {
    const { body } = context.user.login;

    // create a comment
    const pullRequestComment = context.issue({
      body: body.includes("Florencemartino") ? "Salut Florence, oui bien sûr !" : "Mmm on se connait ?",
    });
    // publish it
    return context.github.issues.createComment(pullRequestComment);
  });
};
  // Type `/label foo, bar` in a comment box for an Issue or Pull Request
  // commands(app, 'remind', reminders.set)
  // app.on('schedule.repository', reminders.check)

  //app.on

  // commands(app, "remind", (context, command) => {
  //   const labels = command.arguments.split(/, */);

  //   console.log(labels)
  //   return context.github.issues.addLabels(context.issue({ labels }));
  // });

// 1-) une PR est mergée sur un repo
// 2-) on reçoit un event, avec les metadatas de la PR
// 3-) L'event est analysé, et un commentaire est créé ex: remind me to release in 7 days
// 4-) Le message est stocké et transformé en slash command : /remind me to release in 7 days
// 5-) La commande est utilisée pour créer un scheduler github