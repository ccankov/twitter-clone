const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(() => {
  let $followButtons = $('button.follow-toggle');
  $followButtons.each(function construct(index, el) {
    new FollowToggle(el);
  });
  let $users = $('nav.users-search');
  $users.each(function construct(index, el) {
    new UsersSearch(el);
  });
});
