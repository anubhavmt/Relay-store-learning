/**
 * @generated SignedSource<<905018a830a778ffd0d99343e06a46ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ApprootQuery$variables = {};
export type ApprootQuery$data = {
  readonly books: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"App_detail">;
  } | null>;
};
export type ApprootQuery = {
  response: ApprootQuery$data;
  variables: ApprootQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ApprootQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "books",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "App_detail"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ApprootQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "books",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "064d0235fbd9e971c9fd2ff4db9beeaa",
    "id": null,
    "metadata": {},
    "name": "ApprootQuery",
    "operationKind": "query",
    "text": "query ApprootQuery {\n  books {\n    id\n    ...App_detail\n  }\n}\n\nfragment App_detail on Book {\n  title\n}\n"
  }
};
})();

(node as any).hash = "938e991c903a95d18e0391148e59f080";

export default node;
