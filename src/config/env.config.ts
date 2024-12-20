import * as dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
    BASE_URL: string;
    PROJECT_NAME: string
    NODE_ENV: string;
    PORT: number;
    MONGODB: {
        devUri: string | undefined;
        prodUri: string | undefined;
    },
    JWT: {
        secret: string | undefined;
        refreshSecret: string | undefined;
        expiry: number;
    };
    SALT_ROUNDS: number;
    DEFAULT_AVATAR_URL: string;
    DEFAULT_TEMPLATE_TYPE: string;
    RESEND: {
        API_KEY: string | undefined;
        SENDING_EMAIL: string | undefined;
    }
    TOTAL_ONBOARDING_STEPS: number;
    EMAIL_VERIFICATION_TOKEN_EXPIRY: number;
}

const envConfig: EnvConfig = {
    BASE_URL: process.env.BASE_URL as string,
    PROJECT_NAME: process.env.PROJECT_NAME as string,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: parseInt(process.env.PORT || '8000', 10),
    MONGODB: {
        devUri: process.env.DEV_MONGODB_URI,
        prodUri: process.env.PROD_MONGODB_URI
    },
    JWT: {
        secret: process.env.JWT_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET,
        expiry: parseInt(process.env.JWT_EXPIRY || '3600', 10)
    },
    SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS || '10', 10),
    DEFAULT_AVATAR_URL: process.env.DEFAULT_AVATAR_URL as string,
    DEFAULT_TEMPLATE_TYPE: process.env.DEFAULT_TEMPLATE_TYPE as string,
    RESEND: {
        API_KEY: process.env.RESEND_API_KEY,
        SENDING_EMAIL: process.env.RESEND_SENDING_EMAIL
    },
    TOTAL_ONBOARDING_STEPS: parseInt(process.env.TOTAL_ONBOARDING_STEPS as string, 10),
    EMAIL_VERIFICATION_TOKEN_EXPIRY: parseInt(process.env.EMAIL_VERIFICATION_TOKEN_EXPIRY || '3600', 10)
};

export default envConfig;