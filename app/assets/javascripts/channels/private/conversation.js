App.private_conversation = App.cable.subscriptions.create("Private::ConversationChannel", {
  connected: function() {},
  disconnected: function() {},
  received: function() {},
  send_message: function() {
    return this.perform('send_message', {
      message: message
    });
  }
});

$(document).on('submit', '.send-private-message', function(e) {
  e.preventDefault();
  var values = $(this).serializeArray();
  App.private_conversation.send_message(values);
  $(this).trigger('reset');
});