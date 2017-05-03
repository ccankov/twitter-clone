const FollowToggle = require('./follow_toggle.js');

$(() => {
  let $followButtons = $('button.follow-toggle');
  $followButtons.each(function construct(index, el) {
    new FollowToggle(el);
  });
});
