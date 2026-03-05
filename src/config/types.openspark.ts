export type OpenSparkConsentMode = "always" | "once-per-session";

export type OpenSparkMcpServerConfig = {
  /** Human-readable name shown in UI and logs. */
  name: string;
  /** MCP bridge endpoint (http/https). */
  url: string;
  /** Transport protocol for the server endpoint. */
  transport?: "http" | "https";
};

export type OpenSparkConfig = {
  /** Turn on the Open Spark workspace experience. */
  enabled?: boolean;
  security?: {
    /** Require explicit operator confirmation before privileged actions. */
    requireConsent?: boolean;
    /** Decide whether approvals are requested per action or once per session. */
    consentMode?: OpenSparkConsentMode;
    /** Allow saving API keys/passwords after first consent is granted. */
    allowSecretsAfterConsent?: boolean;
  };
  memory?: {
    /** Let operators inspect and prune memory from the control UI. */
    operatorControls?: boolean;
    /** Maximum memory entries retained by Open Spark context tools. */
    maxEntries?: number;
  };
  models?: {
    /** Show model picker controls in Open Spark surfaces. */
    allowModelSelection?: boolean;
    /** Optional provider/model id used as a startup default. */
    defaultModel?: string;
  };
  integrations?: {
    /** Self-hosted n8n base URL (Open Source edition). */
    n8nBaseUrl?: string;
    /** Optional MCP servers exposed over HTTP/S. */
    mcpServers?: OpenSparkMcpServerConfig[];
  };
  browserExtension?: {
    /** Enable browser extension bridge integration. */
    enabled?: boolean;
    /** Restrict extension bridge to trusted origins. */
    allowedOrigins?: string[];
  };
};
