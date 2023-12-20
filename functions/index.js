const { setGlobalOptions } = require('firebase-functions/v2');
const { onDocumentCreated } = require('firebase-functions/v2/firestore');
// const { onRequest } = require('firebase-functions/v2/https');
// const logger = require('firebase-functions/logger');

const sendEmail = (data) => {
	var SibApiV3Sdk = require('sib-api-v3-sdk');
	var defaultClient = SibApiV3Sdk.ApiClient.instance;

	const API_KEY = process.env.BREVO_API_KEY;
	const TEMPLATE_ID = process.env.BREVO_TEMPLATE_ID;

	// Configure API key authorization: api-key
	var apiKey = defaultClient.authentications['api-key'];
	apiKey.apiKey = API_KEY;
	// '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';

	var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

	var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

	sendSmtpEmail = {
		to: [
			{
				email: data.email,
				name: data.name,
			},
		],
		templateId: JSON.parse(TEMPLATE_ID),
		params: {
			name: 'John',
			surname: 'Doe',
			code: 'Abc',
			message: 'Hello world',
		},
		headers: {
			'X-Mailin-custom':
				'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
		},
	};

	apiInstance
		.sendTransacEmail(sendSmtpEmail)
		.then(
			function (data) {
				console.log('API called successfully. Returned data: ' + data);
				return data;
			},
			function (error) {
				console.error(error);
				return error;
			}
		)
		.catch((err) => console.log(err));
};

setGlobalOptions({
	maxInstances: 10,
});

// Event triggered function
exports.sendEmailOnNewSubmission = onDocumentCreated(
	'students/{studentId}',
	(event) => {
		const snapshot = event.data;

		if (!snapshot) {
			console.log('No data associated with the event');
			return;
		}

		const data = snapshot.data();

		console.log({ data });

		return sendEmail(data);
	}
);

// exports.helloWorld = onRequest((request, response) => {
// 	logger.info('Hello logs!', { structuredData: true });
// 	response.send('Hello Thariq from Firebase!');
// });
