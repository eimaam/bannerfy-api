import { IPlan } from "../models/Plan";

export const SUBSCRIPTION_PLANS: {
    [key: string]: Partial<IPlan>
} = {
    FREE: {
        name: 'Free',
        price: 0,
        maxCustomLinks: 3,
        maxSocialLinks: 5,
        durationInDays: 0,
        maxTemplates: 2,
        trialPeriodDays: 0,
        hasCustomDomain: false,
        features: [
            "Basic link tracking",
            "Default social links",
            "Link collections"
        ],
        description: "Get started with essential features to manage a few links and basic analytics."
    },
    STARTER: {
        name: 'Starter',
        price: 9.99,
        annualPrice: 99.99,
        durationInDays: 30, // Monthly
        maxCustomLinks: 5,
        maxSocialLinks: 15,
        maxTemplates: 5,
        hasCustomDomain: false,
        trialPeriodDays: 7,
        features: [
            "All free features",
            "Enhanced analytics",
            "Custom domain",
            "Customizable profile",
            "Profile template selection",
            "Customer support"
        ],
        description: "Unlock additional customization and analytics features to enhance your profile."
    },
    PRO: {
        name: 'Pro',
        price: 19.99,
        annualPrice: 199.99,
        durationInDays: 30, // Monthly
        maxCustomLinks: 20,
        maxSocialLinks: 50,
        hasCustomDomain: true,
        maxTemplates: 10,
        trialPeriodDays: 14,
        features: [
            "All starter features",
            "Advanced analytics",
            "Multiple custom domains",
            "API access",
            "Custom branding options",
            "Priority customer support",
            "Scheduled posts",
            "Collaborative team access"
        ],
        description: "Full access to advanced features, team collaboration, and priority support."
    }
};
