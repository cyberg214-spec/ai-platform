export type Currency = "INR" | "USD" | "EUR";
export type Billing = "monthly" | "annual";

export const pricingMatrix = {
  starter: {
    name: "Starter",
    description: "Perfect for small teams getting started with AI automation.",
    base: 29,
    features: [
      "5 AI Pipelines",
      "10K tasks/month",
      "Basic Analytics",
      "Email Support",
      "2 Team Members",
      "REST API Access",
    ],
  },
  pro: {
    name: "Pro",
    description: "For growing teams that need more power and flexibility.",
    base: 79,
    features: [
      "Unlimited Pipelines",
      "500K tasks/month",
      "Advanced Analytics",
      "Priority Support",
      "20 Team Members",
      "GraphQL + REST API",
      "Custom Integrations",
      "Audit Logs",
    ],
    popular: true,
  },
  enterprise: {
    name: "Enterprise",
    description: "For organizations that need enterprise-grade security and scale.",
    base: 199,
    features: [
      "Unlimited Everything",
      "Unlimited tasks",
      "Real-time Analytics",
      "24/7 Dedicated Support",
      "Unlimited Members",
      "Full API Suite",
      "SSO & SAML",
      "SLA Guarantee",
      "Custom Contracts",
    ],
  },
};

export const currencyConfig = {
  INR: { symbol: "₹", rate: 83.5,  tariff: 1.18 },
  USD: { symbol: "$", rate: 1,     tariff: 1.00 },
  EUR: { symbol: "€", rate: 0.92,  tariff: 1.05 },
};

export const ANNUAL_DISCOUNT = 0.8;

export function computePrice(
  base: number,
  currency: Currency,
  billing: Billing
): string {
  const { rate, tariff } = currencyConfig[currency];
  const billingMultiplier = billing === "annual" ? ANNUAL_DISCOUNT : 1;
  const final = base * rate * tariff * billingMultiplier;
  return Math.round(final).toLocaleString();
}