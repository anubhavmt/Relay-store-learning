import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
  DefaultHandlerProvider
} from "relay-runtime";
import { HandlerProvider } from "relay-runtime/lib/handlers/RelayDefaultHandlerProvider";
import { RelayNetworkLayer,loggerMiddleware, cacheMiddleware, urlMiddleware } from 'react-relay-network-modern'
const url = "http://localhost:4444/";

// function fetchQuery(operation: RequestParameters, variables: Variables) {
//   return fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query: operation.text,
//       variables,
//     }),
//   }).then((response) => {
//     return response.json();
//   });
// }

const logger = console.log.bind(console, "[RELAY-API-CALL]");

function handlerProviderHelper(handlerProvider: HandlerProvider) {
  return (handle: string) => {
    const Provider = handlerProvider(handle);
    if (Provider) {
      return Provider;
    } else {
      return DefaultHandlerProvider(handle);
    }
  };
}

const network = new RelayNetworkLayer(
  [
    cacheMiddleware({
      size: 10, // max 100 requests
      ttl: 1000*60, // 15 minutes
    }),
    urlMiddleware({
      url: "http://localhost:4444/",
    }),
    loggerMiddleware({
      logger,
    })
  ]
);

const environment = new Environment({
  handlerProvider: handlerProviderHelper(DefaultHandlerProvider),
  network: network,
  store: new Store(new RecordSource()),
});

export default environment;
