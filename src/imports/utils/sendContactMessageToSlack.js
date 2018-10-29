import request from 'utils/request';

const WEBHOOK_URL = 'https://hooks.slack.com/services/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';
const DEV_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

const sendContactMessageToSlack = ({name, email, message}) => {
  const formData = JSON.stringify({
    attachments: [
      {
        color: '#000000',
        pretext: 'New Contact Us form request',
        author_name: `From: ${name}`,
        text: `*Email:* ${email}\n*Message:* _${message}_`,
      }
    ]
  });

  return request.post(process.env.NODE_ENV === 'development' ? DEV_WEBHOOK_URL : WEBHOOK_URL, formData);
};

export default sendContactMessageToSlack;
