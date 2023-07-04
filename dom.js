const notificationsData = [
  {
    icon: "./image/b.jpg",
    text: "John Doe liked your tweet.",
    time: "2 hours ago"
  },
  {
    icon: "./image/e.jpg",
    text: "Jane Smith retweeted your tweet.",
    time: "3 hours ago"
  },
  {
    icon: "./image/b.jpg",
    text: "Jane Smith liked your tweet.",
    time: "3 hours ago"
  },
  {
    icon: "./image/m.jpg",
    text: "Jane Smith retweeted your tweet.",
    time: "3 hours ago"
  },
  {
    icon: "./image/m.jpg",
    text: "Jane Smith liked your tweet.",
    time: "3 hours ago"
  },
  {
    icon: "./image/b.jpg",
    text: "Jane Smith retweeted your tweet.",
    time: "3 hours ago"
  },
  {
    icon: "./image/e.jpg",
    text: "Jane Smith liked your tweet.",
    time: "3 hours ago"
  },
  {
    icon: "./image/m.jpg",
    text: "Jane Smith retweeted your tweet.",
    time: "3 hours ago"
  }
];
function addnotifications() {
  const notificationsContainer = document.querySelector(".notifications");

  notificationsData.forEach(notification => {
    const notificationElement = document.createElement("div");
    notificationElement.classList.add("notification");

    const iconElement = document.createElement("img");
    iconElement.src = notification.icon;
    iconElement.alt = "Notification Icon";
    iconElement.classList.add("notification_icon");

    const contentElement = document.createElement("div");
    contentElement.classList.add("notification_content");

    const textElement = document.createElement("p");
    textElement.classList.add("notification_text");
    textElement.textContent = notification.text;

    const timeElement = document.createElement("p");
    timeElement.classList.add("notification_time");
    timeElement.textContent = notification.time;

    contentElement.appendChild(textElement);
    contentElement.appendChild(timeElement);

    notificationElement.appendChild(iconElement);
    notificationElement.appendChild(contentElement);

    notificationsContainer.appendChild(notificationElement);
  });
}

const messageData = [
  {
    userImageSrc: './image/m.jpg',
    userName: 'Oliver Jameson Smith',
    userUsername: '@johndoe',
    messageText: "Hey, how's it going?",
    messageTime: '2 hours ago'
  },
  {
    userImageSrc: './image/b.jpg',
    userName: 'Emma Grace Thompson',
    userUsername: '@johndoe',
    messageText: "Welcome to our community!",
    messageTime: '2 hours ago'
  },
  {
    userImageSrc: './image/download.jpg',
    userName: 'Liam Alexander Brown',
    userUsername: '@johndoe',
    messageText: "Greetings and warm welcome!",
    messageTime: '2 hours ago'
  },
  {
    userImageSrc: './image/m.jpg',
    userName: 'Isabella Rose Mitchell',
    userUsername: '@johndoe',
    messageText: "Hello and nice to meet you!",
    messageTime: '2 hours ago'
  },
  {
    userImageSrc: './image/e.jpg',
    userName: 'Noah Benjamin Wright',
    userUsername: '@johndoe',
    messageText: "We're glad you're here!",
    messageTime: '2 hours ago'
  },
  {
    userImageSrc: './image/b.jpg',
    userName: 'Ava Sophia Jenkins',
    userUsername: '@johndoe',
    messageText: "Welcome aboard our team!",
    messageTime: '2 hours ago'
  },
  {
    userImageSrc: './image/download.jpg',
    userName: 'Lucas Daniel Rodriguez',
    userUsername: '@johndoe',
    messageText: "Step right in, welcome!",
    messageTime: '2 hours ago'
  },
  {
    userImageSrc: './image/e.jpg',
    userName: 'Mia Olivia Campbell',
    userUsername: '@johndoe',
    messageText: "Greetings, new friends!",
    messageTime: '2 hours ago'
  }
];

function addMessages() {
  const messagesContainer = document.querySelector(".messages");

  messageData.forEach(massege => {

    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    const messageUserElement = document.createElement("div");
    messageUserElement.classList.add("message_user");

    const userImageElement = document.createElement("img");
    userImageElement.src = massege.userImageSrc;
    userImageElement.alt = "";
    userImageElement.classList.add("user_image");

    const userInfoElement = document.createElement("div");
    userInfoElement.classList.add("user_info");

    const NameElement = document.createElement("p");
    NameElement.classList.add("user_name");
    NameElement.textContent = massege.userName;

    const UsernameElement = document.createElement("p");
    UsernameElement.classList.add("user_username");
    UsernameElement.textContent = massege.userUsername;

    const messageContentElement = document.createElement("div");
    messageContentElement.classList.add("message_content");

    const messageTextElement = document.createElement("p");
    messageTextElement.classList.add("message_text");
    messageTextElement.textContent = massege.messageText;

    const messageTimeElement = document.createElement("p");
    messageTimeElement.classList.add("message_time");
    messageTimeElement.textContent = massege.messageTime;

    userInfoElement.appendChild(NameElement);
    userInfoElement.appendChild(UsernameElement);

    messageUserElement.appendChild(userImageElement);
    messageUserElement.appendChild(userInfoElement);

    messageContentElement.appendChild(messageTextElement);
    messageContentElement.appendChild(messageTimeElement);

    messageElement.appendChild(messageUserElement);
    messageElement.appendChild(messageContentElement);

    messagesContainer.appendChild(messageElement);
  });
}


document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  const currentPageUrl = window.location.pathname;

  if (currentPageUrl.includes("message.html")) {
    addMessages(); // Execute addMessages function on message.html page
  } else if (currentPageUrl.includes("notifications.html")) {
    addnotifications(); // Execute addnotifications function on notifications.html page
  }
});