import { Client } from "./Client";

export type Log = {
  log_id: string;
  timestamp: string;
  client_details: Client;
  author_details: {};
  action: string;
};
