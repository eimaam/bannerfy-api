import { Resend } from "resend";
import { EMAIL_SUBJECTS } from "../utils/constants";
import envConfig from "../config/env.config";
import emailTemplate from "../utils/email-templates";
import { logError } from "../utils/utils";

const resend = new Resend(envConfig.RESEND.API_KEY);

class EmailService {
  static async sendOnboardingEmail(
    email: string,
    fullName: string,
    verificationToken: string
  ) {
    const { data, error } = await resend.emails.send({
      from: `${envConfig.PROJECT_NAME} <${envConfig.RESEND.SENDING_EMAIL}>`,
      to: [email],
      subject: EMAIL_SUBJECTS.VERIFY_EMAIL,
      html: emailTemplate.WELCOME_EMAIL(fullName, verificationToken),
    });

    if (error) {
      logError("Error sending Onboarding Email", error);
      throw new Error("There was a problem sending Onboarding Email");
    }

    return data;
  }

  static async sendAccountUpdateNotification(email: string, fullName: string) {
    const { data, error } = await resend.emails.send({
      from: `${envConfig.PROJECT_NAME} <${envConfig.RESEND.SENDING_EMAIL}>`,
      to: [email],
      subject: EMAIL_SUBJECTS.CHANGE_EMAIL,
      html: emailTemplate.ACCOUNT_UPDATE_NOTIFICATION_EMAIL(fullName),
    });

    if (error) {
      console.log("Error sending Email/Username Change Email", error);
      throw new Error(
        "There was a problem sending Email/Username Change Email"
      );
    }

    return data;
  }
}

export default EmailService;
