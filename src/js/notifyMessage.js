export const optionsNotifyWarning = {
  closeButton: true,
};

export const closeNotifyMessage = function closeNotifyMessage() {
  const notifyMessage = document.querySelector('#NotiflixNotifyWrap');

  if (!notifyMessage) {
    return;
  }

  notifyMessage.remove();
};
