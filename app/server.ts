import { createRequestHandler } from "@remix-run/node";

// @ts-ignore
import * as build from "../build/server/index.js";

export default createRequestHandler(build, process.env.NODE_ENV);
