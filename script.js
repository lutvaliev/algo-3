class Message {
  author;
  body;
  time;
  constructor(author, body) {
    this.author = author;
    this.time = gettime();
    this.body = body;
  }

  show() {
    let item = document.getElementById("history");
    item.innerHTML = item.innerHTML + this.toHtml();
  }

  toHtml() {
    return `<p>${this.time} ${this.author}: ${this.body}</p>`;
  }
}

class Messenger {
  messages = [];
  send(author, text) {
    this.messages.push(new Message(author, text));
  }

  show_history() {
    let item = document.getElementById("history");
    item.innerHTML = "";
    this.messages.forEach((message) => {
      message.show();
    });
  }
}

function gettime() {
  let currentTime = new Date();
  return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
}

function sendMessage() {
  let authorItem = document.getElementById("name");
  let textItem = document.getElementById("message");
  let author = authorItem.value;
  let text = textItem.value;
  messenger.send(author, text);
}

function showHistory() {
  messenger.show_history();
}

let messenger = new Messenger();
