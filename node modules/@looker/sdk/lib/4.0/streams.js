"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Looker40SDKStream = void 0;
var _sdkRtl = require("@looker/sdk-rtl");
var _constants = require("../constants");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class Looker40SDKStream extends _sdkRtl.APIMethods {
  constructor(authSession) {
    super(authSession, _constants.sdkVersion);
    this.apiVersion = Looker40SDKStream.ApiVersion;
    this.apiPath = authSession.settings.base_url === '' ? '' : authSession.settings.base_url + '/api/' + this.apiVersion;
  }
  follow_alert(callback, alert_id, options) {
    var _this = this;
    return _asyncToGenerator(function* () {
      alert_id = (0, _sdkRtl.encodeParam)(alert_id);
      return _this.authStream(callback, 'POST', "/alerts/".concat(alert_id, "/follow"), null, null, options);
    })();
  }
  unfollow_alert(callback, alert_id, options) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      alert_id = (0, _sdkRtl.encodeParam)(alert_id);
      return _this2.authStream(callback, 'DELETE', "/alerts/".concat(alert_id, "/follow"), null, null, options);
    })();
  }
  search_alerts(callback, request, options) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      return _this3.authStream(callback, 'GET', '/alerts/search', {
        limit: request.limit,
        offset: request.offset,
        group_by: request.group_by,
        fields: request.fields,
        disabled: request.disabled,
        frequency: request.frequency,
        condition_met: request.condition_met,
        last_run_start: request.last_run_start,
        last_run_end: request.last_run_end,
        all_owners: request.all_owners
      }, null, options);
    })();
  }
  get_alert(callback, alert_id, options) {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      alert_id = (0, _sdkRtl.encodeParam)(alert_id);
      return _this4.authStream(callback, 'GET', "/alerts/".concat(alert_id), null, null, options);
    })();
  }
  update_alert(callback, alert_id, body, options) {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      alert_id = (0, _sdkRtl.encodeParam)(alert_id);
      return _this5.authStream(callback, 'PUT', "/alerts/".concat(alert_id), null, body, options);
    })();
  }
  update_alert_field(callback, alert_id, body, options) {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      alert_id = (0, _sdkRtl.encodeParam)(alert_id);
      return _this6.authStream(callback, 'PATCH', "/alerts/".concat(alert_id), null, body, options);
    })();
  }
  delete_alert(callback, alert_id, options) {
    var _this7 = this;
    return _asyncToGenerator(function* () {
      alert_id = (0, _sdkRtl.encodeParam)(alert_id);
      return _this7.authStream(callback, 'DELETE', "/alerts/".concat(alert_id), null, null, options);
    })();
  }
  create_alert(callback, body, options) {
    var _this8 = this;
    return _asyncToGenerator(function* () {
      return _this8.authStream(callback, 'POST', '/alerts', null, body, options);
    })();
  }
  enqueue_alert(callback, alert_id, force, options) {
    var _this9 = this;
    return _asyncToGenerator(function* () {
      alert_id = (0, _sdkRtl.encodeParam)(alert_id);
      return _this9.authStream(callback, 'POST', "/alerts/".concat(alert_id, "/enqueue"), {
        force
      }, null, options);
    })();
  }
  alert_notifications(callback, request, options) {
    var _this10 = this;
    return _asyncToGenerator(function* () {
      return _this10.authStream(callback, 'GET', '/alert_notifications', {
        limit: request.limit,
        offset: request.offset
      }, null, options);
    })();
  }
  read_alert_notification(callback, alert_notification_id, options) {
    var _this11 = this;
    return _asyncToGenerator(function* () {
      alert_notification_id = (0, _sdkRtl.encodeParam)(alert_notification_id);
      return _this11.authStream(callback, 'PATCH', "/alert_notifications/".concat(alert_notification_id), null, null, options);
    })();
  }
  login(callback, request, options) {
    var _this12 = this;
    return _asyncToGenerator(function* () {
      return _this12.authStream(callback, 'POST', '/login', {
        client_id: request.client_id,
        client_secret: request.client_secret
      }, null, options);
    })();
  }
  login_user(callback, user_id, associative, options) {
    var _this13 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this13.authStream(callback, 'POST', "/login/".concat(user_id), {
        associative
      }, null, options);
    })();
  }
  logout(callback, options) {
    var _this14 = this;
    return _asyncToGenerator(function* () {
      return _this14.authStream(callback, 'DELETE', '/logout', null, null, options);
    })();
  }
  artifact_usage(callback, fields, options) {
    var _this15 = this;
    return _asyncToGenerator(function* () {
      return _this15.authStream(callback, 'GET', '/artifact/usage', {
        fields
      }, null, options);
    })();
  }
  artifact_namespaces(callback, request, options) {
    var _this16 = this;
    return _asyncToGenerator(function* () {
      return _this16.authStream(callback, 'GET', '/artifact/namespaces', {
        fields: request.fields,
        limit: request.limit,
        offset: request.offset
      }, null, options);
    })();
  }
  artifact_value(callback, namespace, key, options) {
    var _this17 = this;
    return _asyncToGenerator(function* () {
      namespace = (0, _sdkRtl.encodeParam)(namespace);
      return _this17.authStream(callback, 'GET', "/artifact/".concat(namespace, "/value"), {
        key
      }, null, options);
    })();
  }
  purge_artifacts(callback, namespace, options) {
    var _this18 = this;
    return _asyncToGenerator(function* () {
      namespace = (0, _sdkRtl.encodeParam)(namespace);
      return _this18.authStream(callback, 'DELETE', "/artifact/".concat(namespace, "/purge"), null, null, options);
    })();
  }
  search_artifacts(callback, request, options) {
    var _this19 = this;
    return _asyncToGenerator(function* () {
      request.namespace = (0, _sdkRtl.encodeParam)(request.namespace);
      return _this19.authStream(callback, 'GET', "/artifact/".concat(request.namespace, "/search"), {
        fields: request.fields,
        key: request.key,
        user_ids: request.user_ids,
        min_size: request.min_size,
        max_size: request.max_size,
        limit: request.limit,
        offset: request.offset
      }, null, options);
    })();
  }
  artifact(callback, request, options) {
    var _this20 = this;
    return _asyncToGenerator(function* () {
      request.namespace = (0, _sdkRtl.encodeParam)(request.namespace);
      return _this20.authStream(callback, 'GET', "/artifact/".concat(request.namespace), {
        key: request.key,
        fields: request.fields,
        limit: request.limit,
        offset: request.offset
      }, null, options);
    })();
  }
  delete_artifact(callback, namespace, key, options) {
    var _this21 = this;
    return _asyncToGenerator(function* () {
      namespace = (0, _sdkRtl.encodeParam)(namespace);
      return _this21.authStream(callback, 'DELETE', "/artifact/".concat(namespace), {
        key
      }, null, options);
    })();
  }
  update_artifacts(callback, namespace, body, fields, options) {
    var _this22 = this;
    return _asyncToGenerator(function* () {
      namespace = (0, _sdkRtl.encodeParam)(namespace);
      return _this22.authStream(callback, 'PUT', "/artifacts/".concat(namespace), {
        fields
      }, body, options);
    })();
  }
  create_embed_secret(callback, body, options) {
    var _this23 = this;
    return _asyncToGenerator(function* () {
      return _this23.authStream(callback, 'POST', '/embed_config/secrets', null, body, options);
    })();
  }
  delete_embed_secret(callback, embed_secret_id, options) {
    var _this24 = this;
    return _asyncToGenerator(function* () {
      embed_secret_id = (0, _sdkRtl.encodeParam)(embed_secret_id);
      return _this24.authStream(callback, 'DELETE', "/embed_config/secrets/".concat(embed_secret_id), null, null, options);
    })();
  }
  create_sso_embed_url(callback, body, options) {
    var _this25 = this;
    return _asyncToGenerator(function* () {
      return _this25.authStream(callback, 'POST', '/embed/sso_url', null, body, options);
    })();
  }
  create_embed_url_as_me(callback, body, options) {
    var _this26 = this;
    return _asyncToGenerator(function* () {
      return _this26.authStream(callback, 'POST', '/embed/token_url/me', null, body, options);
    })();
  }
  validate_embed_url(callback, url, options) {
    var _this27 = this;
    return _asyncToGenerator(function* () {
      return _this27.authStream(callback, 'GET', '/embed/sso/validate', {
        url
      }, null, options);
    })();
  }
  acquire_embed_cookieless_session(callback, body, options) {
    var _this28 = this;
    return _asyncToGenerator(function* () {
      return _this28.authStream(callback, 'POST', '/embed/cookieless_session/acquire', null, body, options);
    })();
  }
  delete_embed_cookieless_session(callback, session_reference_token, options) {
    var _this29 = this;
    return _asyncToGenerator(function* () {
      session_reference_token = (0, _sdkRtl.encodeParam)(session_reference_token);
      return _this29.authStream(callback, 'DELETE', "/embed/cookieless_session/".concat(session_reference_token), null, null, options);
    })();
  }
  generate_tokens_for_cookieless_session(callback, body, options) {
    var _this30 = this;
    return _asyncToGenerator(function* () {
      return _this30.authStream(callback, 'PUT', '/embed/cookieless_session/generate_tokens', null, body, options);
    })();
  }
  ldap_config(callback, options) {
    var _this31 = this;
    return _asyncToGenerator(function* () {
      return _this31.authStream(callback, 'GET', '/ldap_config', null, null, options);
    })();
  }
  update_ldap_config(callback, body, options) {
    var _this32 = this;
    return _asyncToGenerator(function* () {
      return _this32.authStream(callback, 'PATCH', '/ldap_config', null, body, options);
    })();
  }
  test_ldap_config_connection(callback, body, options) {
    var _this33 = this;
    return _asyncToGenerator(function* () {
      return _this33.authStream(callback, 'PUT', '/ldap_config/test_connection', null, body, options);
    })();
  }
  test_ldap_config_auth(callback, body, options) {
    var _this34 = this;
    return _asyncToGenerator(function* () {
      return _this34.authStream(callback, 'PUT', '/ldap_config/test_auth', null, body, options);
    })();
  }
  test_ldap_config_user_info(callback, body, options) {
    var _this35 = this;
    return _asyncToGenerator(function* () {
      return _this35.authStream(callback, 'PUT', '/ldap_config/test_user_info', null, body, options);
    })();
  }
  test_ldap_config_user_auth(callback, body, options) {
    var _this36 = this;
    return _asyncToGenerator(function* () {
      return _this36.authStream(callback, 'PUT', '/ldap_config/test_user_auth', null, body, options);
    })();
  }
  register_mobile_device(callback, body, options) {
    var _this37 = this;
    return _asyncToGenerator(function* () {
      return _this37.authStream(callback, 'POST', '/mobile/device', null, body, options);
    })();
  }
  update_mobile_device_registration(callback, device_id, options) {
    var _this38 = this;
    return _asyncToGenerator(function* () {
      device_id = (0, _sdkRtl.encodeParam)(device_id);
      return _this38.authStream(callback, 'PATCH', "/mobile/device/".concat(device_id), null, null, options);
    })();
  }
  deregister_mobile_device(callback, device_id, options) {
    var _this39 = this;
    return _asyncToGenerator(function* () {
      device_id = (0, _sdkRtl.encodeParam)(device_id);
      return _this39.authStream(callback, 'DELETE', "/mobile/device/".concat(device_id), null, null, options);
    })();
  }
  all_oauth_client_apps(callback, fields, options) {
    var _this40 = this;
    return _asyncToGenerator(function* () {
      return _this40.authStream(callback, 'GET', '/oauth_client_apps', {
        fields
      }, null, options);
    })();
  }
  oauth_client_app(callback, client_guid, fields, options) {
    var _this41 = this;
    return _asyncToGenerator(function* () {
      client_guid = (0, _sdkRtl.encodeParam)(client_guid);
      return _this41.authStream(callback, 'GET', "/oauth_client_apps/".concat(client_guid), {
        fields
      }, null, options);
    })();
  }
  register_oauth_client_app(callback, client_guid, body, fields, options) {
    var _this42 = this;
    return _asyncToGenerator(function* () {
      client_guid = (0, _sdkRtl.encodeParam)(client_guid);
      return _this42.authStream(callback, 'POST', "/oauth_client_apps/".concat(client_guid), {
        fields
      }, body, options);
    })();
  }
  update_oauth_client_app(callback, client_guid, body, fields, options) {
    var _this43 = this;
    return _asyncToGenerator(function* () {
      client_guid = (0, _sdkRtl.encodeParam)(client_guid);
      return _this43.authStream(callback, 'PATCH', "/oauth_client_apps/".concat(client_guid), {
        fields
      }, body, options);
    })();
  }
  delete_oauth_client_app(callback, client_guid, options) {
    var _this44 = this;
    return _asyncToGenerator(function* () {
      client_guid = (0, _sdkRtl.encodeParam)(client_guid);
      return _this44.authStream(callback, 'DELETE', "/oauth_client_apps/".concat(client_guid), null, null, options);
    })();
  }
  invalidate_tokens(callback, client_guid, options) {
    var _this45 = this;
    return _asyncToGenerator(function* () {
      client_guid = (0, _sdkRtl.encodeParam)(client_guid);
      return _this45.authStream(callback, 'DELETE', "/oauth_client_apps/".concat(client_guid, "/tokens"), null, null, options);
    })();
  }
  activate_app_user(callback, client_guid, user_id, fields, options) {
    var _this46 = this;
    return _asyncToGenerator(function* () {
      client_guid = (0, _sdkRtl.encodeParam)(client_guid);
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this46.authStream(callback, 'POST', "/oauth_client_apps/".concat(client_guid, "/users/").concat(user_id), {
        fields
      }, null, options);
    })();
  }
  deactivate_app_user(callback, client_guid, user_id, fields, options) {
    var _this47 = this;
    return _asyncToGenerator(function* () {
      client_guid = (0, _sdkRtl.encodeParam)(client_guid);
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this47.authStream(callback, 'DELETE', "/oauth_client_apps/".concat(client_guid, "/users/").concat(user_id), {
        fields
      }, null, options);
    })();
  }
  oidc_config(callback, options) {
    var _this48 = this;
    return _asyncToGenerator(function* () {
      return _this48.authStream(callback, 'GET', '/oidc_config', null, null, options);
    })();
  }
  update_oidc_config(callback, body, options) {
    var _this49 = this;
    return _asyncToGenerator(function* () {
      return _this49.authStream(callback, 'PATCH', '/oidc_config', null, body, options);
    })();
  }
  oidc_test_config(callback, test_slug, options) {
    var _this50 = this;
    return _asyncToGenerator(function* () {
      test_slug = (0, _sdkRtl.encodeParam)(test_slug);
      return _this50.authStream(callback, 'GET', "/oidc_test_configs/".concat(test_slug), null, null, options);
    })();
  }
  delete_oidc_test_config(callback, test_slug, options) {
    var _this51 = this;
    return _asyncToGenerator(function* () {
      test_slug = (0, _sdkRtl.encodeParam)(test_slug);
      return _this51.authStream(callback, 'DELETE', "/oidc_test_configs/".concat(test_slug), null, null, options);
    })();
  }
  create_oidc_test_config(callback, body, options) {
    var _this52 = this;
    return _asyncToGenerator(function* () {
      return _this52.authStream(callback, 'POST', '/oidc_test_configs', null, body, options);
    })();
  }
  password_config(callback, options) {
    var _this53 = this;
    return _asyncToGenerator(function* () {
      return _this53.authStream(callback, 'GET', '/password_config', null, null, options);
    })();
  }
  update_password_config(callback, body, options) {
    var _this54 = this;
    return _asyncToGenerator(function* () {
      return _this54.authStream(callback, 'PATCH', '/password_config', null, body, options);
    })();
  }
  force_password_reset_at_next_login_for_all_users(callback, options) {
    var _this55 = this;
    return _asyncToGenerator(function* () {
      return _this55.authStream(callback, 'PUT', '/password_config/force_password_reset_at_next_login_for_all_users', null, null, options);
    })();
  }
  saml_config(callback, options) {
    var _this56 = this;
    return _asyncToGenerator(function* () {
      return _this56.authStream(callback, 'GET', '/saml_config', null, null, options);
    })();
  }
  update_saml_config(callback, body, options) {
    var _this57 = this;
    return _asyncToGenerator(function* () {
      return _this57.authStream(callback, 'PATCH', '/saml_config', null, body, options);
    })();
  }
  saml_test_config(callback, test_slug, options) {
    var _this58 = this;
    return _asyncToGenerator(function* () {
      test_slug = (0, _sdkRtl.encodeParam)(test_slug);
      return _this58.authStream(callback, 'GET', "/saml_test_configs/".concat(test_slug), null, null, options);
    })();
  }
  delete_saml_test_config(callback, test_slug, options) {
    var _this59 = this;
    return _asyncToGenerator(function* () {
      test_slug = (0, _sdkRtl.encodeParam)(test_slug);
      return _this59.authStream(callback, 'DELETE', "/saml_test_configs/".concat(test_slug), null, null, options);
    })();
  }
  create_saml_test_config(callback, body, options) {
    var _this60 = this;
    return _asyncToGenerator(function* () {
      return _this60.authStream(callback, 'POST', '/saml_test_configs', null, body, options);
    })();
  }
  parse_saml_idp_metadata(callback, body, options) {
    var _this61 = this;
    return _asyncToGenerator(function* () {
      return _this61.authStream(callback, 'POST', '/parse_saml_idp_metadata', null, body, options);
    })();
  }
  fetch_and_parse_saml_idp_metadata(callback, body, options) {
    var _this62 = this;
    return _asyncToGenerator(function* () {
      return _this62.authStream(callback, 'POST', '/fetch_and_parse_saml_idp_metadata', null, body, options);
    })();
  }
  session_config(callback, options) {
    var _this63 = this;
    return _asyncToGenerator(function* () {
      return _this63.authStream(callback, 'GET', '/session_config', null, null, options);
    })();
  }
  update_session_config(callback, body, options) {
    var _this64 = this;
    return _asyncToGenerator(function* () {
      return _this64.authStream(callback, 'PATCH', '/session_config', null, body, options);
    })();
  }
  get_support_access_allowlist_entries(callback, fields, options) {
    var _this65 = this;
    return _asyncToGenerator(function* () {
      return _this65.authStream(callback, 'GET', '/support_access/allowlist', {
        fields
      }, null, options);
    })();
  }
  add_support_access_allowlist_entries(callback, body, options) {
    var _this66 = this;
    return _asyncToGenerator(function* () {
      return _this66.authStream(callback, 'POST', '/support_access/allowlist', null, body, options);
    })();
  }
  delete_support_access_allowlist_entry(callback, entry_id, options) {
    var _this67 = this;
    return _asyncToGenerator(function* () {
      entry_id = (0, _sdkRtl.encodeParam)(entry_id);
      return _this67.authStream(callback, 'DELETE', "/support_access/allowlist/".concat(entry_id), null, null, options);
    })();
  }
  enable_support_access(callback, body, options) {
    var _this68 = this;
    return _asyncToGenerator(function* () {
      return _this68.authStream(callback, 'PUT', '/support_access/enable', null, body, options);
    })();
  }
  disable_support_access(callback, options) {
    var _this69 = this;
    return _asyncToGenerator(function* () {
      return _this69.authStream(callback, 'PUT', '/support_access/disable', null, null, options);
    })();
  }
  support_access_status(callback, options) {
    var _this70 = this;
    return _asyncToGenerator(function* () {
      return _this70.authStream(callback, 'GET', '/support_access/status', null, null, options);
    })();
  }
  all_user_login_lockouts(callback, fields, options) {
    var _this71 = this;
    return _asyncToGenerator(function* () {
      return _this71.authStream(callback, 'GET', '/user_login_lockouts', {
        fields
      }, null, options);
    })();
  }
  search_user_login_lockouts(callback, request, options) {
    var _this72 = this;
    return _asyncToGenerator(function* () {
      return _this72.authStream(callback, 'GET', '/user_login_lockouts/search', {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        auth_type: request.auth_type,
        full_name: request.full_name,
        email: request.email,
        remote_id: request.remote_id,
        filter_or: request.filter_or
      }, null, options);
    })();
  }
  delete_user_login_lockout(callback, key, options) {
    var _this73 = this;
    return _asyncToGenerator(function* () {
      key = (0, _sdkRtl.encodeParam)(key);
      return _this73.authStream(callback, 'DELETE', "/user_login_lockout/".concat(key), null, null, options);
    })();
  }
  all_boards(callback, fields, options) {
    var _this74 = this;
    return _asyncToGenerator(function* () {
      return _this74.authStream(callback, 'GET', '/boards', {
        fields
      }, null, options);
    })();
  }
  create_board(callback, body, fields, options) {
    var _this75 = this;
    return _asyncToGenerator(function* () {
      return _this75.authStream(callback, 'POST', '/boards', {
        fields
      }, body, options);
    })();
  }
  search_boards(callback, request, options) {
    var _this76 = this;
    return _asyncToGenerator(function* () {
      return _this76.authStream(callback, 'GET', '/boards/search', {
        title: request.title,
        created_at: request.created_at,
        first_name: request.first_name,
        last_name: request.last_name,
        fields: request.fields,
        favorited: request.favorited,
        creator_id: request.creator_id,
        sorts: request.sorts,
        page: request.page,
        per_page: request.per_page,
        offset: request.offset,
        limit: request.limit,
        filter_or: request.filter_or,
        permission: request.permission
      }, null, options);
    })();
  }
  board(callback, board_id, fields, options) {
    var _this77 = this;
    return _asyncToGenerator(function* () {
      board_id = (0, _sdkRtl.encodeParam)(board_id);
      return _this77.authStream(callback, 'GET', "/boards/".concat(board_id), {
        fields
      }, null, options);
    })();
  }
  update_board(callback, board_id, body, fields, options) {
    var _this78 = this;
    return _asyncToGenerator(function* () {
      board_id = (0, _sdkRtl.encodeParam)(board_id);
      return _this78.authStream(callback, 'PATCH', "/boards/".concat(board_id), {
        fields
      }, body, options);
    })();
  }
  delete_board(callback, board_id, options) {
    var _this79 = this;
    return _asyncToGenerator(function* () {
      board_id = (0, _sdkRtl.encodeParam)(board_id);
      return _this79.authStream(callback, 'DELETE', "/boards/".concat(board_id), null, null, options);
    })();
  }
  all_board_items(callback, request, options) {
    var _this80 = this;
    return _asyncToGenerator(function* () {
      return _this80.authStream(callback, 'GET', '/board_items', {
        fields: request.fields,
        sorts: request.sorts,
        board_section_id: request.board_section_id
      }, null, options);
    })();
  }
  create_board_item(callback, body, fields, options) {
    var _this81 = this;
    return _asyncToGenerator(function* () {
      return _this81.authStream(callback, 'POST', '/board_items', {
        fields
      }, body, options);
    })();
  }
  board_item(callback, board_item_id, fields, options) {
    var _this82 = this;
    return _asyncToGenerator(function* () {
      board_item_id = (0, _sdkRtl.encodeParam)(board_item_id);
      return _this82.authStream(callback, 'GET', "/board_items/".concat(board_item_id), {
        fields
      }, null, options);
    })();
  }
  update_board_item(callback, board_item_id, body, fields, options) {
    var _this83 = this;
    return _asyncToGenerator(function* () {
      board_item_id = (0, _sdkRtl.encodeParam)(board_item_id);
      return _this83.authStream(callback, 'PATCH', "/board_items/".concat(board_item_id), {
        fields
      }, body, options);
    })();
  }
  delete_board_item(callback, board_item_id, options) {
    var _this84 = this;
    return _asyncToGenerator(function* () {
      board_item_id = (0, _sdkRtl.encodeParam)(board_item_id);
      return _this84.authStream(callback, 'DELETE', "/board_items/".concat(board_item_id), null, null, options);
    })();
  }
  all_board_sections(callback, request, options) {
    var _this85 = this;
    return _asyncToGenerator(function* () {
      return _this85.authStream(callback, 'GET', '/board_sections', {
        fields: request.fields,
        sorts: request.sorts
      }, null, options);
    })();
  }
  create_board_section(callback, body, fields, options) {
    var _this86 = this;
    return _asyncToGenerator(function* () {
      return _this86.authStream(callback, 'POST', '/board_sections', {
        fields
      }, body, options);
    })();
  }
  board_section(callback, board_section_id, fields, options) {
    var _this87 = this;
    return _asyncToGenerator(function* () {
      board_section_id = (0, _sdkRtl.encodeParam)(board_section_id);
      return _this87.authStream(callback, 'GET', "/board_sections/".concat(board_section_id), {
        fields
      }, null, options);
    })();
  }
  update_board_section(callback, board_section_id, body, fields, options) {
    var _this88 = this;
    return _asyncToGenerator(function* () {
      board_section_id = (0, _sdkRtl.encodeParam)(board_section_id);
      return _this88.authStream(callback, 'PATCH', "/board_sections/".concat(board_section_id), {
        fields
      }, body, options);
    })();
  }
  delete_board_section(callback, board_section_id, options) {
    var _this89 = this;
    return _asyncToGenerator(function* () {
      board_section_id = (0, _sdkRtl.encodeParam)(board_section_id);
      return _this89.authStream(callback, 'DELETE', "/board_sections/".concat(board_section_id), null, null, options);
    })();
  }
  all_color_collections(callback, fields, options) {
    var _this90 = this;
    return _asyncToGenerator(function* () {
      return _this90.authStream(callback, 'GET', '/color_collections', {
        fields
      }, null, options);
    })();
  }
  create_color_collection(callback, body, options) {
    var _this91 = this;
    return _asyncToGenerator(function* () {
      return _this91.authStream(callback, 'POST', '/color_collections', null, body, options);
    })();
  }
  color_collections_custom(callback, fields, options) {
    var _this92 = this;
    return _asyncToGenerator(function* () {
      return _this92.authStream(callback, 'GET', '/color_collections/custom', {
        fields
      }, null, options);
    })();
  }
  color_collections_standard(callback, fields, options) {
    var _this93 = this;
    return _asyncToGenerator(function* () {
      return _this93.authStream(callback, 'GET', '/color_collections/standard', {
        fields
      }, null, options);
    })();
  }
  default_color_collection(callback, options) {
    var _this94 = this;
    return _asyncToGenerator(function* () {
      return _this94.authStream(callback, 'GET', '/color_collections/default', null, null, options);
    })();
  }
  set_default_color_collection(callback, collection_id, options) {
    var _this95 = this;
    return _asyncToGenerator(function* () {
      return _this95.authStream(callback, 'PUT', '/color_collections/default', {
        collection_id
      }, null, options);
    })();
  }
  color_collection(callback, collection_id, fields, options) {
    var _this96 = this;
    return _asyncToGenerator(function* () {
      collection_id = (0, _sdkRtl.encodeParam)(collection_id);
      return _this96.authStream(callback, 'GET', "/color_collections/".concat(collection_id), {
        fields
      }, null, options);
    })();
  }
  update_color_collection(callback, collection_id, body, options) {
    var _this97 = this;
    return _asyncToGenerator(function* () {
      collection_id = (0, _sdkRtl.encodeParam)(collection_id);
      return _this97.authStream(callback, 'PATCH', "/color_collections/".concat(collection_id), null, body, options);
    })();
  }
  delete_color_collection(callback, collection_id, options) {
    var _this98 = this;
    return _asyncToGenerator(function* () {
      collection_id = (0, _sdkRtl.encodeParam)(collection_id);
      return _this98.authStream(callback, 'DELETE', "/color_collections/".concat(collection_id), null, null, options);
    })();
  }
  cloud_storage_configuration(callback, options) {
    var _this99 = this;
    return _asyncToGenerator(function* () {
      return _this99.authStream(callback, 'GET', '/cloud_storage', null, null, options);
    })();
  }
  update_cloud_storage_configuration(callback, body, options) {
    var _this100 = this;
    return _asyncToGenerator(function* () {
      return _this100.authStream(callback, 'PATCH', '/cloud_storage', null, body, options);
    })();
  }
  custom_welcome_email(callback, options) {
    var _this101 = this;
    return _asyncToGenerator(function* () {
      return _this101.authStream(callback, 'GET', '/custom_welcome_email', null, null, options);
    })();
  }
  update_custom_welcome_email(callback, body, send_test_welcome_email, options) {
    var _this102 = this;
    return _asyncToGenerator(function* () {
      return _this102.authStream(callback, 'PATCH', '/custom_welcome_email', {
        send_test_welcome_email
      }, body, options);
    })();
  }
  update_custom_welcome_email_test(callback, body, options) {
    var _this103 = this;
    return _asyncToGenerator(function* () {
      return _this103.authStream(callback, 'PUT', '/custom_welcome_email_test', null, body, options);
    })();
  }
  digest_emails_enabled(callback, options) {
    var _this104 = this;
    return _asyncToGenerator(function* () {
      return _this104.authStream(callback, 'GET', '/digest_emails_enabled', null, null, options);
    })();
  }
  update_digest_emails_enabled(callback, body, options) {
    var _this105 = this;
    return _asyncToGenerator(function* () {
      return _this105.authStream(callback, 'PATCH', '/digest_emails_enabled', null, body, options);
    })();
  }
  create_digest_email_send(callback, options) {
    var _this106 = this;
    return _asyncToGenerator(function* () {
      return _this106.authStream(callback, 'POST', '/digest_email_send', null, null, options);
    })();
  }
  public_egress_ip_addresses(callback, options) {
    var _this107 = this;
    return _asyncToGenerator(function* () {
      return _this107.authStream(callback, 'GET', '/public_egress_ip_addresses', null, null, options);
    })();
  }
  internal_help_resources_content(callback, options) {
    var _this108 = this;
    return _asyncToGenerator(function* () {
      return _this108.authStream(callback, 'GET', '/internal_help_resources_content', null, null, options);
    })();
  }
  update_internal_help_resources_content(callback, body, options) {
    var _this109 = this;
    return _asyncToGenerator(function* () {
      return _this109.authStream(callback, 'PATCH', '/internal_help_resources_content', null, body, options);
    })();
  }
  internal_help_resources(callback, options) {
    var _this110 = this;
    return _asyncToGenerator(function* () {
      return _this110.authStream(callback, 'GET', '/internal_help_resources_enabled', null, null, options);
    })();
  }
  update_internal_help_resources(callback, body, options) {
    var _this111 = this;
    return _asyncToGenerator(function* () {
      return _this111.authStream(callback, 'PATCH', '/internal_help_resources', null, body, options);
    })();
  }
  all_legacy_features(callback, options) {
    var _this112 = this;
    return _asyncToGenerator(function* () {
      return _this112.authStream(callback, 'GET', '/legacy_features', null, null, options);
    })();
  }
  legacy_feature(callback, legacy_feature_id, options) {
    var _this113 = this;
    return _asyncToGenerator(function* () {
      legacy_feature_id = (0, _sdkRtl.encodeParam)(legacy_feature_id);
      return _this113.authStream(callback, 'GET', "/legacy_features/".concat(legacy_feature_id), null, null, options);
    })();
  }
  update_legacy_feature(callback, legacy_feature_id, body, options) {
    var _this114 = this;
    return _asyncToGenerator(function* () {
      legacy_feature_id = (0, _sdkRtl.encodeParam)(legacy_feature_id);
      return _this114.authStream(callback, 'PATCH', "/legacy_features/".concat(legacy_feature_id), null, body, options);
    })();
  }
  all_locales(callback, options) {
    var _this115 = this;
    return _asyncToGenerator(function* () {
      return _this115.authStream(callback, 'GET', '/locales', null, null, options);
    })();
  }
  mobile_settings(callback, options) {
    var _this116 = this;
    return _asyncToGenerator(function* () {
      return _this116.authStream(callback, 'GET', '/mobile/settings', null, null, options);
    })();
  }
  get_setting(callback, fields, options) {
    var _this117 = this;
    return _asyncToGenerator(function* () {
      return _this117.authStream(callback, 'GET', '/setting', {
        fields
      }, null, options);
    })();
  }
  set_setting(callback, body, fields, options) {
    var _this118 = this;
    return _asyncToGenerator(function* () {
      return _this118.authStream(callback, 'PATCH', '/setting', {
        fields
      }, body, options);
    })();
  }
  set_smtp_settings(callback, body, options) {
    var _this119 = this;
    return _asyncToGenerator(function* () {
      return _this119.authStream(callback, 'POST', '/smtp_settings', null, body, options);
    })();
  }
  smtp_status(callback, fields, options) {
    var _this120 = this;
    return _asyncToGenerator(function* () {
      return _this120.authStream(callback, 'GET', '/smtp_status', {
        fields
      }, null, options);
    })();
  }
  all_timezones(callback, options) {
    var _this121 = this;
    return _asyncToGenerator(function* () {
      return _this121.authStream(callback, 'GET', '/timezones', null, null, options);
    })();
  }
  versions(callback, fields, options) {
    var _this122 = this;
    return _asyncToGenerator(function* () {
      return _this122.authStream(callback, 'GET', '/versions', {
        fields
      }, null, options);
    })();
  }
  api_spec(callback, api_version, specification, options) {
    var _this123 = this;
    return _asyncToGenerator(function* () {
      api_version = (0, _sdkRtl.encodeParam)(api_version);
      specification = (0, _sdkRtl.encodeParam)(specification);
      return _this123.authStream(callback, 'GET', "/api_spec/".concat(api_version, "/").concat(specification), null, null, options);
    })();
  }
  whitelabel_configuration(callback, fields, options) {
    var _this124 = this;
    return _asyncToGenerator(function* () {
      return _this124.authStream(callback, 'GET', '/whitelabel_configuration', {
        fields
      }, null, options);
    })();
  }
  update_whitelabel_configuration(callback, body, options) {
    var _this125 = this;
    return _asyncToGenerator(function* () {
      return _this125.authStream(callback, 'PUT', '/whitelabel_configuration', null, body, options);
    })();
  }
  all_connections(callback, fields, options) {
    var _this126 = this;
    return _asyncToGenerator(function* () {
      return _this126.authStream(callback, 'GET', '/connections', {
        fields
      }, null, options);
    })();
  }
  create_connection(callback, body, options) {
    var _this127 = this;
    return _asyncToGenerator(function* () {
      return _this127.authStream(callback, 'POST', '/connections', null, body, options);
    })();
  }
  connection(callback, connection_name, fields, options) {
    var _this128 = this;
    return _asyncToGenerator(function* () {
      connection_name = (0, _sdkRtl.encodeParam)(connection_name);
      return _this128.authStream(callback, 'GET', "/connections/".concat(connection_name), {
        fields
      }, null, options);
    })();
  }
  update_connection(callback, connection_name, body, options) {
    var _this129 = this;
    return _asyncToGenerator(function* () {
      connection_name = (0, _sdkRtl.encodeParam)(connection_name);
      return _this129.authStream(callback, 'PATCH', "/connections/".concat(connection_name), null, body, options);
    })();
  }
  delete_connection(callback, connection_name, options) {
    var _this130 = this;
    return _asyncToGenerator(function* () {
      connection_name = (0, _sdkRtl.encodeParam)(connection_name);
      return _this130.authStream(callback, 'DELETE', "/connections/".concat(connection_name), null, null, options);
    })();
  }
  delete_connection_override(callback, connection_name, override_context, options) {
    var _this131 = this;
    return _asyncToGenerator(function* () {
      connection_name = (0, _sdkRtl.encodeParam)(connection_name);
      override_context = (0, _sdkRtl.encodeParam)(override_context);
      return _this131.authStream(callback, 'DELETE', "/connections/".concat(connection_name, "/connection_override/").concat(override_context), null, null, options);
    })();
  }
  test_connection(callback, connection_name, tests, options) {
    var _this132 = this;
    return _asyncToGenerator(function* () {
      connection_name = (0, _sdkRtl.encodeParam)(connection_name);
      return _this132.authStream(callback, 'PUT', "/connections/".concat(connection_name, "/test"), {
        tests
      }, null, options);
    })();
  }
  test_connection_config(callback, body, tests, options) {
    var _this133 = this;
    return _asyncToGenerator(function* () {
      return _this133.authStream(callback, 'PUT', '/connections/test', {
        tests
      }, body, options);
    })();
  }
  all_dialect_infos(callback, fields, options) {
    var _this134 = this;
    return _asyncToGenerator(function* () {
      return _this134.authStream(callback, 'GET', '/dialect_info', {
        fields
      }, null, options);
    })();
  }
  all_external_oauth_applications(callback, request, options) {
    var _this135 = this;
    return _asyncToGenerator(function* () {
      return _this135.authStream(callback, 'GET', '/external_oauth_applications', {
        name: request.name,
        client_id: request.client_id
      }, null, options);
    })();
  }
  create_external_oauth_application(callback, body, options) {
    var _this136 = this;
    return _asyncToGenerator(function* () {
      return _this136.authStream(callback, 'POST', '/external_oauth_applications', null, body, options);
    })();
  }
  create_oauth_application_user_state(callback, body, options) {
    var _this137 = this;
    return _asyncToGenerator(function* () {
      return _this137.authStream(callback, 'POST', '/external_oauth_applications/user_state', null, body, options);
    })();
  }
  all_ssh_servers(callback, fields, options) {
    var _this138 = this;
    return _asyncToGenerator(function* () {
      return _this138.authStream(callback, 'GET', '/ssh_servers', {
        fields
      }, null, options);
    })();
  }
  create_ssh_server(callback, body, options) {
    var _this139 = this;
    return _asyncToGenerator(function* () {
      return _this139.authStream(callback, 'POST', '/ssh_servers', null, body, options);
    })();
  }
  ssh_server(callback, ssh_server_id, options) {
    var _this140 = this;
    return _asyncToGenerator(function* () {
      ssh_server_id = (0, _sdkRtl.encodeParam)(ssh_server_id);
      return _this140.authStream(callback, 'GET', "/ssh_server/".concat(ssh_server_id), null, null, options);
    })();
  }
  update_ssh_server(callback, ssh_server_id, body, options) {
    var _this141 = this;
    return _asyncToGenerator(function* () {
      ssh_server_id = (0, _sdkRtl.encodeParam)(ssh_server_id);
      return _this141.authStream(callback, 'PATCH', "/ssh_server/".concat(ssh_server_id), null, body, options);
    })();
  }
  delete_ssh_server(callback, ssh_server_id, options) {
    var _this142 = this;
    return _asyncToGenerator(function* () {
      ssh_server_id = (0, _sdkRtl.encodeParam)(ssh_server_id);
      return _this142.authStream(callback, 'DELETE', "/ssh_server/".concat(ssh_server_id), null, null, options);
    })();
  }
  test_ssh_server(callback, ssh_server_id, options) {
    var _this143 = this;
    return _asyncToGenerator(function* () {
      ssh_server_id = (0, _sdkRtl.encodeParam)(ssh_server_id);
      return _this143.authStream(callback, 'GET', "/ssh_server/".concat(ssh_server_id, "/test"), null, null, options);
    })();
  }
  all_ssh_tunnels(callback, fields, options) {
    var _this144 = this;
    return _asyncToGenerator(function* () {
      return _this144.authStream(callback, 'GET', '/ssh_tunnels', {
        fields
      }, null, options);
    })();
  }
  create_ssh_tunnel(callback, body, options) {
    var _this145 = this;
    return _asyncToGenerator(function* () {
      return _this145.authStream(callback, 'POST', '/ssh_tunnels', null, body, options);
    })();
  }
  ssh_tunnel(callback, ssh_tunnel_id, options) {
    var _this146 = this;
    return _asyncToGenerator(function* () {
      ssh_tunnel_id = (0, _sdkRtl.encodeParam)(ssh_tunnel_id);
      return _this146.authStream(callback, 'GET', "/ssh_tunnel/".concat(ssh_tunnel_id), null, null, options);
    })();
  }
  update_ssh_tunnel(callback, ssh_tunnel_id, body, options) {
    var _this147 = this;
    return _asyncToGenerator(function* () {
      ssh_tunnel_id = (0, _sdkRtl.encodeParam)(ssh_tunnel_id);
      return _this147.authStream(callback, 'PATCH', "/ssh_tunnel/".concat(ssh_tunnel_id), null, body, options);
    })();
  }
  delete_ssh_tunnel(callback, ssh_tunnel_id, options) {
    var _this148 = this;
    return _asyncToGenerator(function* () {
      ssh_tunnel_id = (0, _sdkRtl.encodeParam)(ssh_tunnel_id);
      return _this148.authStream(callback, 'DELETE', "/ssh_tunnel/".concat(ssh_tunnel_id), null, null, options);
    })();
  }
  test_ssh_tunnel(callback, ssh_tunnel_id, options) {
    var _this149 = this;
    return _asyncToGenerator(function* () {
      ssh_tunnel_id = (0, _sdkRtl.encodeParam)(ssh_tunnel_id);
      return _this149.authStream(callback, 'GET', "/ssh_tunnel/".concat(ssh_tunnel_id, "/test"), null, null, options);
    })();
  }
  ssh_public_key(callback, options) {
    var _this150 = this;
    return _asyncToGenerator(function* () {
      return _this150.authStream(callback, 'GET', '/ssh_public_key', null, null, options);
    })();
  }
  search_content_favorites(callback, request, options) {
    var _this151 = this;
    return _asyncToGenerator(function* () {
      return _this151.authStream(callback, 'GET', '/content_favorite/search', {
        id: request.id,
        user_id: request.user_id,
        content_metadata_id: request.content_metadata_id,
        dashboard_id: request.dashboard_id,
        look_id: request.look_id,
        board_id: request.board_id,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        fields: request.fields,
        filter_or: request.filter_or
      }, null, options);
    })();
  }
  content_favorite(callback, content_favorite_id, fields, options) {
    var _this152 = this;
    return _asyncToGenerator(function* () {
      content_favorite_id = (0, _sdkRtl.encodeParam)(content_favorite_id);
      return _this152.authStream(callback, 'GET', "/content_favorite/".concat(content_favorite_id), {
        fields
      }, null, options);
    })();
  }
  delete_content_favorite(callback, content_favorite_id, options) {
    var _this153 = this;
    return _asyncToGenerator(function* () {
      content_favorite_id = (0, _sdkRtl.encodeParam)(content_favorite_id);
      return _this153.authStream(callback, 'DELETE', "/content_favorite/".concat(content_favorite_id), null, null, options);
    })();
  }
  create_content_favorite(callback, body, options) {
    var _this154 = this;
    return _asyncToGenerator(function* () {
      return _this154.authStream(callback, 'POST', '/content_favorite', null, body, options);
    })();
  }
  all_content_metadatas(callback, parent_id, fields, options) {
    var _this155 = this;
    return _asyncToGenerator(function* () {
      return _this155.authStream(callback, 'GET', '/content_metadata', {
        parent_id,
        fields
      }, null, options);
    })();
  }
  content_metadata(callback, content_metadata_id, fields, options) {
    var _this156 = this;
    return _asyncToGenerator(function* () {
      content_metadata_id = (0, _sdkRtl.encodeParam)(content_metadata_id);
      return _this156.authStream(callback, 'GET', "/content_metadata/".concat(content_metadata_id), {
        fields
      }, null, options);
    })();
  }
  update_content_metadata(callback, content_metadata_id, body, options) {
    var _this157 = this;
    return _asyncToGenerator(function* () {
      content_metadata_id = (0, _sdkRtl.encodeParam)(content_metadata_id);
      return _this157.authStream(callback, 'PATCH', "/content_metadata/".concat(content_metadata_id), null, body, options);
    })();
  }
  all_content_metadata_accesses(callback, content_metadata_id, fields, options) {
    var _this158 = this;
    return _asyncToGenerator(function* () {
      return _this158.authStream(callback, 'GET', '/content_metadata_access', {
        content_metadata_id,
        fields
      }, null, options);
    })();
  }
  create_content_metadata_access(callback, body, send_boards_notification_email, options) {
    var _this159 = this;
    return _asyncToGenerator(function* () {
      return _this159.authStream(callback, 'POST', '/content_metadata_access', {
        send_boards_notification_email
      }, body, options);
    })();
  }
  update_content_metadata_access(callback, content_metadata_access_id, body, options) {
    var _this160 = this;
    return _asyncToGenerator(function* () {
      content_metadata_access_id = (0, _sdkRtl.encodeParam)(content_metadata_access_id);
      return _this160.authStream(callback, 'PUT', "/content_metadata_access/".concat(content_metadata_access_id), null, body, options);
    })();
  }
  delete_content_metadata_access(callback, content_metadata_access_id, options) {
    var _this161 = this;
    return _asyncToGenerator(function* () {
      content_metadata_access_id = (0, _sdkRtl.encodeParam)(content_metadata_access_id);
      return _this161.authStream(callback, 'DELETE', "/content_metadata_access/".concat(content_metadata_access_id), null, null, options);
    })();
  }
  search_content(callback, request, options) {
    var _this162 = this;
    return _asyncToGenerator(function* () {
      request.terms = (0, _sdkRtl.encodeParam)(request.terms);
      return _this162.authStream(callback, 'GET', "/content/".concat(request.terms), {
        fields: request.fields,
        types: request.types,
        limit: request.limit,
        offset: request.offset,
        page: request.page,
        per_page: request.per_page
      }, null, options);
    })();
  }
  content_thumbnail(callback, request, options) {
    var _this163 = this;
    return _asyncToGenerator(function* () {
      request.type = (0, _sdkRtl.encodeParam)(request.type);
      request.resource_id = (0, _sdkRtl.encodeParam)(request.resource_id);
      return _this163.authStream(callback, 'GET', "/content_thumbnail/".concat(request.type, "/").concat(request.resource_id), {
        reload: request.reload,
        theme: request.theme,
        format: request.format,
        width: request.width,
        height: request.height
      }, null, options);
    })();
  }
  content_validation(callback, fields, options) {
    var _this164 = this;
    return _asyncToGenerator(function* () {
      return _this164.authStream(callback, 'GET', '/content_validation', {
        fields
      }, null, options);
    })();
  }
  search_content_views(callback, request, options) {
    var _this165 = this;
    return _asyncToGenerator(function* () {
      return _this165.authStream(callback, 'GET', '/content_view/search', {
        view_count: request.view_count,
        group_id: request.group_id,
        look_id: request.look_id,
        dashboard_id: request.dashboard_id,
        content_metadata_id: request.content_metadata_id,
        start_of_week_date: request.start_of_week_date,
        all_time: request.all_time,
        user_id: request.user_id,
        fields: request.fields,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        filter_or: request.filter_or
      }, null, options);
    })();
  }
  vector_thumbnail(callback, type, resource_id, reload, options) {
    var _this166 = this;
    return _asyncToGenerator(function* () {
      type = (0, _sdkRtl.encodeParam)(type);
      resource_id = (0, _sdkRtl.encodeParam)(resource_id);
      return _this166.authStream(callback, 'GET', "/vector_thumbnail/".concat(type, "/").concat(resource_id), {
        reload
      }, null, options);
    })();
  }
  all_dashboards(callback, fields, options) {
    var _this167 = this;
    return _asyncToGenerator(function* () {
      return _this167.authStream(callback, 'GET', '/dashboards', {
        fields
      }, null, options);
    })();
  }
  create_dashboard(callback, body, options) {
    var _this168 = this;
    return _asyncToGenerator(function* () {
      return _this168.authStream(callback, 'POST', '/dashboards', null, body, options);
    })();
  }
  search_dashboards(callback, request, options) {
    var _this169 = this;
    return _asyncToGenerator(function* () {
      return _this169.authStream(callback, 'GET', '/dashboards/search', {
        id: request.id,
        slug: request.slug,
        title: request.title,
        description: request.description,
        content_favorite_id: request.content_favorite_id,
        folder_id: request.folder_id,
        deleted: request.deleted,
        user_id: request.user_id,
        view_count: request.view_count,
        content_metadata_id: request.content_metadata_id,
        curate: request.curate,
        last_viewed_at: request.last_viewed_at,
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        filter_or: request.filter_or,
        not_owned_by: request.not_owned_by
      }, null, options);
    })();
  }
  import_lookml_dashboard(callback, lookml_dashboard_id, space_id, body, raw_locale, options) {
    var _this170 = this;
    return _asyncToGenerator(function* () {
      lookml_dashboard_id = (0, _sdkRtl.encodeParam)(lookml_dashboard_id);
      space_id = (0, _sdkRtl.encodeParam)(space_id);
      return _this170.authStream(callback, 'POST', "/dashboards/".concat(lookml_dashboard_id, "/import/").concat(space_id), {
        raw_locale
      }, body, options);
    })();
  }
  sync_lookml_dashboard(callback, lookml_dashboard_id, body, raw_locale, options) {
    var _this171 = this;
    return _asyncToGenerator(function* () {
      lookml_dashboard_id = (0, _sdkRtl.encodeParam)(lookml_dashboard_id);
      return _this171.authStream(callback, 'PATCH', "/dashboards/".concat(lookml_dashboard_id, "/sync"), {
        raw_locale
      }, body, options);
    })();
  }
  dashboard(callback, dashboard_id, fields, options) {
    var _this172 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
      return _this172.authStream(callback, 'GET', "/dashboards/".concat(dashboard_id), {
        fields
      }, null, options);
    })();
  }
  update_dashboard(callback, dashboard_id, body, options) {
    var _this173 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
      return _this173.authStream(callback, 'PATCH', "/dashboards/".concat(dashboard_id), null, body, options);
    })();
  }
  delete_dashboard(callback, dashboard_id, options) {
    var _this174 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
      return _this174.authStream(callback, 'DELETE', "/dashboards/".concat(dashboard_id), null, null, options);
    })();
  }
  dashboard_aggregate_table_lookml(callback, dashboard_id, options) {
    var _this175 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
      return _this175.authStream(callback, 'GET', "/dashboards/aggregate_table_lookml/".concat(dashboard_id), null, null, options);
    })();
  }
  dashboard_lookml(callback, dashboard_id, options) {
    var _this176 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
      return _this176.authStream(callback, 'GET', "/dashboards/lookml/".concat(dashboard_id), null, null, options);
    })();
  }
  move_dashboard(callback, dashboard_id, folder_id, options) {
    var _this177 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
      return _this177.authStream(callback, 'PATCH', "/dashboards/".concat(dashboard_id, "/move"), {
        folder_id
      }, null, options);
    })();
  }
  import_dashboard_from_lookml(callback, body, options) {
    var _this178 = this;
    return _asyncToGenerator(function* () {
      return _this178.authStream(callback, 'POST', '/dashboards/lookml', null, body, options);
    })();
  }
  create_dashboard_from_lookml(callback, body, options) {
    var _this179 = this;
    return _asyncToGenerator(function* () {
      return _this179.authStream(callback, 'POST', '/dashboards/from_lookml', null, body, options);
    })();
  }
  copy_dashboard(callback, dashboard_id, folder_id, options) {
    var _this180 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
      return _this180.authStream(callback, 'POST', "/dashboards/".concat(dashboard_id, "/copy"), {
        folder_id
      }, null, options);
    })();
  }
  search_dashboard_elements(callback, request, options) {
    var _this181 = this;
    return _asyncToGenerator(function* () {
      return _this181.authStream(callback, 'GET', '/dashboard_elements/search', {
        dashboard_id: request.dashboard_id,
        look_id: request.look_id,
        title: request.title,
        deleted: request.deleted,
        fields: request.fields,
        filter_or: request.filter_or,
        sorts: request.sorts
      }, null, options);
    })();
  }
  dashboard_element(callback, dashboard_element_id, fields, options) {
    var _this182 = this;
    return _asyncToGenerator(function* () {
      dashboard_element_id = (0, _sdkRtl.encodeParam)(dashboard_element_id);
      return _this182.authStream(callback, 'GET', "/dashboard_elements/".concat(dashboard_element_id), {
        fields
      }, null, options);
    })();
  }
  update_dashboard_element(callback, dashboard_element_id, body, fields, options) {
    var _this183 = this;
    return _asyncToGenerator(function* () {
      dashboard_element_id = (0, _sdkRtl.encodeParam)(dashboard_element_id);
      return _this183.authStream(callback, 'PATCH', "/dashboard_elements/".concat(dashboard_element_id), {
        fields
      }, body, options);
    })();
  }
  delete_dashboard_element(callback, dashboard_element_id, options) {
    var _this184 = this;
    return _asyncToGenerator(function* () {
      dashboard_element_id = (0, _sdkRtl.encodeParam)(dashboard_element_id);
      return _this184.authStream(callback, 'DELETE', "/dashboard_elements/".concat(dashboard_element_id), null, null, options);
    })();
  }
  dashboard_dashboard_elements(callback, dashboard_id, fields, options) {
    var _this185 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
      return _this185.authStream(callback, 'GET', "/dashboards/".concat(dashboard_id, "/dashboard_elements"), {
        fields
      }, null, options);
    })();
  }
  create_dashboard_element(callback, request, options) {
    var _this186 = this;
    return _asyncToGenerator(function* () {
      return _this186.authStream(callback, 'POST', '/dashboard_elements', {
        fields: request.fields,
        apply_filters: request.apply_filters
      }, request.body, options);
    })();
  }
  dashboard_filter(callback, dashboard_filter_id, fields, options) {
    var _this187 = this;
    return _asyncToGenerator(function* () {
      dashboard_filter_id = (0, _sdkRtl.encodeParam)(dashboard_filter_id);
      return _this187.authStream(callback, 'GET', "/dashboard_filters/".concat(dashboard_filter_id), {
        fields
      }, null, options);
    })();
  }
  update_dashboard_filter(callback, dashboard_filter_id, body, fields, options) {
    var _this188 = this;
    return _asyncToGenerator(function* () {
      dashboard_filter_id = (0, _sdkRtl.encodeParam)(dashboard_filter_id);
      return _this188.authStream(callback, 'PATCH', "/dashboard_filters/".concat(dashboard_filter_id), {
        fields
      }, body, options);
    })();
  }
  delete_dashboard_filter(callback, dashboard_filter_id, options) {
    var _this189 = this;
    return _asyncToGenerator(function* () {
      dashboard_filter_id = (0, _sdkRtl.encodeParam)(dashboard_filter_id);
      return _this189.authStream(callback, 'DELETE', "/dashboard_filters/".concat(dashboard_filter_id), null, null, options);
    })();
  }
  dashboard_dashboard_filters(callback, dashboard_id, fields, options) {
    var _this190 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
      return _this190.authStream(callback, 'GET', "/dashboards/".concat(dashboard_id, "/dashboard_filters"), {
        fields
      }, null, options);
    })();
  }
  create_dashboard_filter(callback, body, fields, options) {
    var _this191 = this;
    return _asyncToGenerator(function* () {
      return _this191.authStream(callback, 'POST', '/dashboard_filters', {
        fields
      }, body, options);
    })();
  }
  dashboard_layout_component(callback, dashboard_layout_component_id, fields, options) {
    var _this192 = this;
    return _asyncToGenerator(function* () {
      dashboard_layout_component_id = (0, _sdkRtl.encodeParam)(dashboard_layout_component_id);
      return _this192.authStream(callback, 'GET', "/dashboard_layout_components/".concat(dashboard_layout_component_id), {
        fields
      }, null, options);
    })();
  }
  update_dashboard_layout_component(callback, dashboard_layout_component_id, body, fields, options) {
    var _this193 = this;
    return _asyncToGenerator(function* () {
      dashboard_layout_component_id = (0, _sdkRtl.encodeParam)(dashboard_layout_component_id);
      return _this193.authStream(callback, 'PATCH', "/dashboard_layout_components/".concat(dashboard_layout_component_id), {
        fields
      }, body, options);
    })();
  }
  dashboard_layout_dashboard_layout_components(callback, dashboard_layout_id, fields, options) {
    var _this194 = this;
    return _asyncToGenerator(function* () {
      dashboard_layout_id = (0, _sdkRtl.encodeParam)(dashboard_layout_id);
      return _this194.authStream(callback, 'GET', "/dashboard_layouts/".concat(dashboard_layout_id, "/dashboard_layout_components"), {
        fields
      }, null, options);
    })();
  }
  dashboard_layout(callback, dashboard_layout_id, fields, options) {
    var _this195 = this;
    return _asyncToGenerator(function* () {
      dashboard_layout_id = (0, _sdkRtl.encodeParam)(dashboard_layout_id);
      return _this195.authStream(callback, 'GET', "/dashboard_layouts/".concat(dashboard_layout_id), {
        fields
      }, null, options);
    })();
  }
  update_dashboard_layout(callback, dashboard_layout_id, body, fields, options) {
    var _this196 = this;
    return _asyncToGenerator(function* () {
      dashboard_layout_id = (0, _sdkRtl.encodeParam)(dashboard_layout_id);
      return _this196.authStream(callback, 'PATCH', "/dashboard_layouts/".concat(dashboard_layout_id), {
        fields
      }, body, options);
    })();
  }
  delete_dashboard_layout(callback, dashboard_layout_id, options) {
    var _this197 = this;
    return _asyncToGenerator(function* () {
      dashboard_layout_id = (0, _sdkRtl.encodeParam)(dashboard_layout_id);
      return _this197.authStream(callback, 'DELETE', "/dashboard_layouts/".concat(dashboard_layout_id), null, null, options);
    })();
  }
  dashboard_dashboard_layouts(callback, dashboard_id, fields, options) {
    var _this198 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
      return _this198.authStream(callback, 'GET', "/dashboards/".concat(dashboard_id, "/dashboard_layouts"), {
        fields
      }, null, options);
    })();
  }
  create_dashboard_layout(callback, body, fields, options) {
    var _this199 = this;
    return _asyncToGenerator(function* () {
      return _this199.authStream(callback, 'POST', '/dashboard_layouts', {
        fields
      }, body, options);
    })();
  }
  perform_data_action(callback, body, options) {
    var _this200 = this;
    return _asyncToGenerator(function* () {
      return _this200.authStream(callback, 'POST', '/data_actions', null, body, options);
    })();
  }
  fetch_remote_data_action_form(callback, body, options) {
    var _this201 = this;
    return _asyncToGenerator(function* () {
      return _this201.authStream(callback, 'POST', '/data_actions/form', null, body, options);
    })();
  }
  all_datagroups(callback, options) {
    var _this202 = this;
    return _asyncToGenerator(function* () {
      return _this202.authStream(callback, 'GET', '/datagroups', null, null, options);
    })();
  }
  datagroup(callback, datagroup_id, options) {
    var _this203 = this;
    return _asyncToGenerator(function* () {
      datagroup_id = (0, _sdkRtl.encodeParam)(datagroup_id);
      return _this203.authStream(callback, 'GET', "/datagroups/".concat(datagroup_id), null, null, options);
    })();
  }
  update_datagroup(callback, datagroup_id, body, options) {
    var _this204 = this;
    return _asyncToGenerator(function* () {
      datagroup_id = (0, _sdkRtl.encodeParam)(datagroup_id);
      return _this204.authStream(callback, 'PATCH', "/datagroups/".concat(datagroup_id), null, body, options);
    })();
  }
  graph_derived_tables_for_model(callback, request, options) {
    var _this205 = this;
    return _asyncToGenerator(function* () {
      request.model = (0, _sdkRtl.encodeParam)(request.model);
      return _this205.authStream(callback, 'GET', "/derived_table/graph/model/".concat(request.model), {
        format: request.format,
        color: request.color
      }, null, options);
    })();
  }
  graph_derived_tables_for_view(callback, request, options) {
    var _this206 = this;
    return _asyncToGenerator(function* () {
      request.view = (0, _sdkRtl.encodeParam)(request.view);
      return _this206.authStream(callback, 'GET', "/derived_table/graph/view/".concat(request.view), {
        models: request.models,
        workspace: request.workspace
      }, null, options);
    })();
  }
  start_pdt_build(callback, request, options) {
    var _this207 = this;
    return _asyncToGenerator(function* () {
      request.model_name = (0, _sdkRtl.encodeParam)(request.model_name);
      request.view_name = (0, _sdkRtl.encodeParam)(request.view_name);
      return _this207.authStream(callback, 'GET', "/derived_table/".concat(request.model_name, "/").concat(request.view_name, "/start"), {
        force_rebuild: request.force_rebuild,
        force_full_incremental: request.force_full_incremental,
        workspace: request.workspace,
        source: request.source
      }, null, options);
    })();
  }
  check_pdt_build(callback, materialization_id, options) {
    var _this208 = this;
    return _asyncToGenerator(function* () {
      materialization_id = (0, _sdkRtl.encodeParam)(materialization_id);
      return _this208.authStream(callback, 'GET', "/derived_table/".concat(materialization_id, "/status"), null, null, options);
    })();
  }
  stop_pdt_build(callback, materialization_id, source, options) {
    var _this209 = this;
    return _asyncToGenerator(function* () {
      materialization_id = (0, _sdkRtl.encodeParam)(materialization_id);
      return _this209.authStream(callback, 'GET', "/derived_table/".concat(materialization_id, "/stop"), {
        source
      }, null, options);
    })();
  }
  search_folders(callback, request, options) {
    var _this210 = this;
    return _asyncToGenerator(function* () {
      return _this210.authStream(callback, 'GET', '/folders/search', {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        name: request.name,
        id: request.id,
        parent_id: request.parent_id,
        creator_id: request.creator_id,
        filter_or: request.filter_or,
        is_shared_root: request.is_shared_root,
        is_users_root: request.is_users_root
      }, null, options);
    })();
  }
  folder(callback, folder_id, fields, options) {
    var _this211 = this;
    return _asyncToGenerator(function* () {
      folder_id = (0, _sdkRtl.encodeParam)(folder_id);
      return _this211.authStream(callback, 'GET', "/folders/".concat(folder_id), {
        fields
      }, null, options);
    })();
  }
  update_folder(callback, folder_id, body, options) {
    var _this212 = this;
    return _asyncToGenerator(function* () {
      folder_id = (0, _sdkRtl.encodeParam)(folder_id);
      return _this212.authStream(callback, 'PATCH', "/folders/".concat(folder_id), null, body, options);
    })();
  }
  delete_folder(callback, folder_id, options) {
    var _this213 = this;
    return _asyncToGenerator(function* () {
      folder_id = (0, _sdkRtl.encodeParam)(folder_id);
      return _this213.authStream(callback, 'DELETE', "/folders/".concat(folder_id), null, null, options);
    })();
  }
  all_folders(callback, fields, options) {
    var _this214 = this;
    return _asyncToGenerator(function* () {
      return _this214.authStream(callback, 'GET', '/folders', {
        fields
      }, null, options);
    })();
  }
  create_folder(callback, body, options) {
    var _this215 = this;
    return _asyncToGenerator(function* () {
      return _this215.authStream(callback, 'POST', '/folders', null, body, options);
    })();
  }
  folder_children(callback, request, options) {
    var _this216 = this;
    return _asyncToGenerator(function* () {
      request.folder_id = (0, _sdkRtl.encodeParam)(request.folder_id);
      return _this216.authStream(callback, 'GET', "/folders/".concat(request.folder_id, "/children"), {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts
      }, null, options);
    })();
  }
  folder_children_search(callback, request, options) {
    var _this217 = this;
    return _asyncToGenerator(function* () {
      request.folder_id = (0, _sdkRtl.encodeParam)(request.folder_id);
      return _this217.authStream(callback, 'GET', "/folders/".concat(request.folder_id, "/children/search"), {
        fields: request.fields,
        sorts: request.sorts,
        name: request.name
      }, null, options);
    })();
  }
  folder_parent(callback, folder_id, fields, options) {
    var _this218 = this;
    return _asyncToGenerator(function* () {
      folder_id = (0, _sdkRtl.encodeParam)(folder_id);
      return _this218.authStream(callback, 'GET', "/folders/".concat(folder_id, "/parent"), {
        fields
      }, null, options);
    })();
  }
  folder_ancestors(callback, folder_id, fields, options) {
    var _this219 = this;
    return _asyncToGenerator(function* () {
      folder_id = (0, _sdkRtl.encodeParam)(folder_id);
      return _this219.authStream(callback, 'GET', "/folders/".concat(folder_id, "/ancestors"), {
        fields
      }, null, options);
    })();
  }
  folder_looks(callback, folder_id, fields, options) {
    var _this220 = this;
    return _asyncToGenerator(function* () {
      folder_id = (0, _sdkRtl.encodeParam)(folder_id);
      return _this220.authStream(callback, 'GET', "/folders/".concat(folder_id, "/looks"), {
        fields
      }, null, options);
    })();
  }
  folder_dashboards(callback, folder_id, fields, options) {
    var _this221 = this;
    return _asyncToGenerator(function* () {
      folder_id = (0, _sdkRtl.encodeParam)(folder_id);
      return _this221.authStream(callback, 'GET', "/folders/".concat(folder_id, "/dashboards"), {
        fields
      }, null, options);
    })();
  }
  all_groups(callback, request, options) {
    var _this222 = this;
    return _asyncToGenerator(function* () {
      return _this222.authStream(callback, 'GET', '/groups', {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        ids: request.ids,
        content_metadata_id: request.content_metadata_id,
        can_add_to_content_metadata: request.can_add_to_content_metadata
      }, null, options);
    })();
  }
  create_group(callback, body, fields, options) {
    var _this223 = this;
    return _asyncToGenerator(function* () {
      return _this223.authStream(callback, 'POST', '/groups', {
        fields
      }, body, options);
    })();
  }
  search_groups(callback, request, options) {
    var _this224 = this;
    return _asyncToGenerator(function* () {
      return _this224.authStream(callback, 'GET', '/groups/search', {
        fields: request.fields,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        filter_or: request.filter_or,
        id: request.id,
        name: request.name,
        external_group_id: request.external_group_id,
        externally_managed: request.externally_managed,
        externally_orphaned: request.externally_orphaned
      }, null, options);
    })();
  }
  search_groups_with_roles(callback, request, options) {
    var _this225 = this;
    return _asyncToGenerator(function* () {
      return _this225.authStream(callback, 'GET', '/groups/search/with_roles', {
        fields: request.fields,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        filter_or: request.filter_or,
        id: request.id,
        name: request.name,
        external_group_id: request.external_group_id,
        externally_managed: request.externally_managed,
        externally_orphaned: request.externally_orphaned
      }, null, options);
    })();
  }
  search_groups_with_hierarchy(callback, request, options) {
    var _this226 = this;
    return _asyncToGenerator(function* () {
      return _this226.authStream(callback, 'GET', '/groups/search/with_hierarchy', {
        fields: request.fields,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        filter_or: request.filter_or,
        id: request.id,
        name: request.name,
        external_group_id: request.external_group_id,
        externally_managed: request.externally_managed,
        externally_orphaned: request.externally_orphaned
      }, null, options);
    })();
  }
  group(callback, group_id, fields, options) {
    var _this227 = this;
    return _asyncToGenerator(function* () {
      group_id = (0, _sdkRtl.encodeParam)(group_id);
      return _this227.authStream(callback, 'GET', "/groups/".concat(group_id), {
        fields
      }, null, options);
    })();
  }
  update_group(callback, group_id, body, fields, options) {
    var _this228 = this;
    return _asyncToGenerator(function* () {
      group_id = (0, _sdkRtl.encodeParam)(group_id);
      return _this228.authStream(callback, 'PATCH', "/groups/".concat(group_id), {
        fields
      }, body, options);
    })();
  }
  delete_group(callback, group_id, options) {
    var _this229 = this;
    return _asyncToGenerator(function* () {
      group_id = (0, _sdkRtl.encodeParam)(group_id);
      return _this229.authStream(callback, 'DELETE', "/groups/".concat(group_id), null, null, options);
    })();
  }
  all_group_groups(callback, group_id, fields, options) {
    var _this230 = this;
    return _asyncToGenerator(function* () {
      group_id = (0, _sdkRtl.encodeParam)(group_id);
      return _this230.authStream(callback, 'GET', "/groups/".concat(group_id, "/groups"), {
        fields
      }, null, options);
    })();
  }
  add_group_group(callback, group_id, body, options) {
    var _this231 = this;
    return _asyncToGenerator(function* () {
      group_id = (0, _sdkRtl.encodeParam)(group_id);
      return _this231.authStream(callback, 'POST', "/groups/".concat(group_id, "/groups"), null, body, options);
    })();
  }
  all_group_users(callback, request, options) {
    var _this232 = this;
    return _asyncToGenerator(function* () {
      request.group_id = (0, _sdkRtl.encodeParam)(request.group_id);
      return _this232.authStream(callback, 'GET', "/groups/".concat(request.group_id, "/users"), {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts
      }, null, options);
    })();
  }
  add_group_user(callback, group_id, body, options) {
    var _this233 = this;
    return _asyncToGenerator(function* () {
      group_id = (0, _sdkRtl.encodeParam)(group_id);
      return _this233.authStream(callback, 'POST', "/groups/".concat(group_id, "/users"), null, body, options);
    })();
  }
  delete_group_user(callback, group_id, user_id, options) {
    var _this234 = this;
    return _asyncToGenerator(function* () {
      group_id = (0, _sdkRtl.encodeParam)(group_id);
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this234.authStream(callback, 'DELETE', "/groups/".concat(group_id, "/users/").concat(user_id), null, null, options);
    })();
  }
  delete_group_from_group(callback, group_id, deleting_group_id, options) {
    var _this235 = this;
    return _asyncToGenerator(function* () {
      group_id = (0, _sdkRtl.encodeParam)(group_id);
      deleting_group_id = (0, _sdkRtl.encodeParam)(deleting_group_id);
      return _this235.authStream(callback, 'DELETE', "/groups/".concat(group_id, "/groups/").concat(deleting_group_id), null, null, options);
    })();
  }
  update_user_attribute_group_value(callback, group_id, user_attribute_id, body, options) {
    var _this236 = this;
    return _asyncToGenerator(function* () {
      group_id = (0, _sdkRtl.encodeParam)(group_id);
      user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
      return _this236.authStream(callback, 'PATCH', "/groups/".concat(group_id, "/attribute_values/").concat(user_attribute_id), null, body, options);
    })();
  }
  delete_user_attribute_group_value(callback, group_id, user_attribute_id, options) {
    var _this237 = this;
    return _asyncToGenerator(function* () {
      group_id = (0, _sdkRtl.encodeParam)(group_id);
      user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
      return _this237.authStream(callback, 'DELETE', "/groups/".concat(group_id, "/attribute_values/").concat(user_attribute_id), null, null, options);
    })();
  }
  all_primary_homepage_sections(callback, fields, options) {
    var _this238 = this;
    return _asyncToGenerator(function* () {
      return _this238.authStream(callback, 'GET', '/primary_homepage_sections', {
        fields
      }, null, options);
    })();
  }
  all_integration_hubs(callback, fields, options) {
    var _this239 = this;
    return _asyncToGenerator(function* () {
      return _this239.authStream(callback, 'GET', '/integration_hubs', {
        fields
      }, null, options);
    })();
  }
  create_integration_hub(callback, body, fields, options) {
    var _this240 = this;
    return _asyncToGenerator(function* () {
      return _this240.authStream(callback, 'POST', '/integration_hubs', {
        fields
      }, body, options);
    })();
  }
  integration_hub(callback, integration_hub_id, fields, options) {
    var _this241 = this;
    return _asyncToGenerator(function* () {
      integration_hub_id = (0, _sdkRtl.encodeParam)(integration_hub_id);
      return _this241.authStream(callback, 'GET', "/integration_hubs/".concat(integration_hub_id), {
        fields
      }, null, options);
    })();
  }
  update_integration_hub(callback, integration_hub_id, body, fields, options) {
    var _this242 = this;
    return _asyncToGenerator(function* () {
      integration_hub_id = (0, _sdkRtl.encodeParam)(integration_hub_id);
      return _this242.authStream(callback, 'PATCH', "/integration_hubs/".concat(integration_hub_id), {
        fields
      }, body, options);
    })();
  }
  delete_integration_hub(callback, integration_hub_id, options) {
    var _this243 = this;
    return _asyncToGenerator(function* () {
      integration_hub_id = (0, _sdkRtl.encodeParam)(integration_hub_id);
      return _this243.authStream(callback, 'DELETE', "/integration_hubs/".concat(integration_hub_id), null, null, options);
    })();
  }
  accept_integration_hub_legal_agreement(callback, integration_hub_id, options) {
    var _this244 = this;
    return _asyncToGenerator(function* () {
      integration_hub_id = (0, _sdkRtl.encodeParam)(integration_hub_id);
      return _this244.authStream(callback, 'POST', "/integration_hubs/".concat(integration_hub_id, "/accept_legal_agreement"), null, null, options);
    })();
  }
  all_integrations(callback, request, options) {
    var _this245 = this;
    return _asyncToGenerator(function* () {
      return _this245.authStream(callback, 'GET', '/integrations', {
        fields: request.fields,
        integration_hub_id: request.integration_hub_id
      }, null, options);
    })();
  }
  integration(callback, integration_id, fields, options) {
    var _this246 = this;
    return _asyncToGenerator(function* () {
      integration_id = (0, _sdkRtl.encodeParam)(integration_id);
      return _this246.authStream(callback, 'GET', "/integrations/".concat(integration_id), {
        fields
      }, null, options);
    })();
  }
  update_integration(callback, integration_id, body, fields, options) {
    var _this247 = this;
    return _asyncToGenerator(function* () {
      integration_id = (0, _sdkRtl.encodeParam)(integration_id);
      return _this247.authStream(callback, 'PATCH', "/integrations/".concat(integration_id), {
        fields
      }, body, options);
    })();
  }
  fetch_integration_form(callback, integration_id, body, options) {
    var _this248 = this;
    return _asyncToGenerator(function* () {
      integration_id = (0, _sdkRtl.encodeParam)(integration_id);
      return _this248.authStream(callback, 'POST', "/integrations/".concat(integration_id, "/form"), null, body, options);
    })();
  }
  test_integration(callback, integration_id, options) {
    var _this249 = this;
    return _asyncToGenerator(function* () {
      integration_id = (0, _sdkRtl.encodeParam)(integration_id);
      return _this249.authStream(callback, 'POST', "/integrations/".concat(integration_id, "/test"), null, null, options);
    })();
  }
  all_looks(callback, fields, options) {
    var _this250 = this;
    return _asyncToGenerator(function* () {
      return _this250.authStream(callback, 'GET', '/looks', {
        fields
      }, null, options);
    })();
  }
  create_look(callback, body, fields, options) {
    var _this251 = this;
    return _asyncToGenerator(function* () {
      return _this251.authStream(callback, 'POST', '/looks', {
        fields
      }, body, options);
    })();
  }
  search_looks(callback, request, options) {
    var _this252 = this;
    return _asyncToGenerator(function* () {
      return _this252.authStream(callback, 'GET', '/looks/search', {
        id: request.id,
        title: request.title,
        description: request.description,
        content_favorite_id: request.content_favorite_id,
        folder_id: request.folder_id,
        user_id: request.user_id,
        view_count: request.view_count,
        deleted: request.deleted,
        query_id: request.query_id,
        curate: request.curate,
        last_viewed_at: request.last_viewed_at,
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        filter_or: request.filter_or
      }, null, options);
    })();
  }
  look(callback, look_id, fields, options) {
    var _this253 = this;
    return _asyncToGenerator(function* () {
      look_id = (0, _sdkRtl.encodeParam)(look_id);
      return _this253.authStream(callback, 'GET', "/looks/".concat(look_id), {
        fields
      }, null, options);
    })();
  }
  update_look(callback, look_id, body, fields, options) {
    var _this254 = this;
    return _asyncToGenerator(function* () {
      look_id = (0, _sdkRtl.encodeParam)(look_id);
      return _this254.authStream(callback, 'PATCH', "/looks/".concat(look_id), {
        fields
      }, body, options);
    })();
  }
  delete_look(callback, look_id, options) {
    var _this255 = this;
    return _asyncToGenerator(function* () {
      look_id = (0, _sdkRtl.encodeParam)(look_id);
      return _this255.authStream(callback, 'DELETE', "/looks/".concat(look_id), null, null, options);
    })();
  }
  run_look(callback, request, options) {
    var _this256 = this;
    return _asyncToGenerator(function* () {
      request.look_id = (0, _sdkRtl.encodeParam)(request.look_id);
      request.result_format = (0, _sdkRtl.encodeParam)(request.result_format);
      return _this256.authStream(callback, 'GET', "/looks/".concat(request.look_id, "/run/").concat(request.result_format), {
        limit: request.limit,
        apply_formatting: request.apply_formatting,
        apply_vis: request.apply_vis,
        cache: request.cache,
        image_width: request.image_width,
        image_height: request.image_height,
        generate_drill_links: request.generate_drill_links,
        force_production: request.force_production,
        cache_only: request.cache_only,
        path_prefix: request.path_prefix,
        rebuild_pdts: request.rebuild_pdts,
        server_table_calcs: request.server_table_calcs
      }, null, options);
    })();
  }
  copy_look(callback, look_id, folder_id, options) {
    var _this257 = this;
    return _asyncToGenerator(function* () {
      look_id = (0, _sdkRtl.encodeParam)(look_id);
      return _this257.authStream(callback, 'POST', "/looks/".concat(look_id, "/copy"), {
        folder_id
      }, null, options);
    })();
  }
  move_look(callback, look_id, folder_id, options) {
    var _this258 = this;
    return _asyncToGenerator(function* () {
      look_id = (0, _sdkRtl.encodeParam)(look_id);
      return _this258.authStream(callback, 'PATCH', "/looks/".concat(look_id, "/move"), {
        folder_id
      }, null, options);
    })();
  }
  all_lookml_models(callback, request, options) {
    var _this259 = this;
    return _asyncToGenerator(function* () {
      return _this259.authStream(callback, 'GET', '/lookml_models', {
        fields: request.fields,
        limit: request.limit,
        offset: request.offset
      }, null, options);
    })();
  }
  create_lookml_model(callback, body, options) {
    var _this260 = this;
    return _asyncToGenerator(function* () {
      return _this260.authStream(callback, 'POST', '/lookml_models', null, body, options);
    })();
  }
  lookml_model(callback, lookml_model_name, fields, options) {
    var _this261 = this;
    return _asyncToGenerator(function* () {
      lookml_model_name = (0, _sdkRtl.encodeParam)(lookml_model_name);
      return _this261.authStream(callback, 'GET', "/lookml_models/".concat(lookml_model_name), {
        fields
      }, null, options);
    })();
  }
  update_lookml_model(callback, lookml_model_name, body, options) {
    var _this262 = this;
    return _asyncToGenerator(function* () {
      lookml_model_name = (0, _sdkRtl.encodeParam)(lookml_model_name);
      return _this262.authStream(callback, 'PATCH', "/lookml_models/".concat(lookml_model_name), null, body, options);
    })();
  }
  delete_lookml_model(callback, lookml_model_name, options) {
    var _this263 = this;
    return _asyncToGenerator(function* () {
      lookml_model_name = (0, _sdkRtl.encodeParam)(lookml_model_name);
      return _this263.authStream(callback, 'DELETE', "/lookml_models/".concat(lookml_model_name), null, null, options);
    })();
  }
  lookml_model_explore(callback, lookml_model_name, explore_name, fields, options) {
    var _this264 = this;
    return _asyncToGenerator(function* () {
      lookml_model_name = (0, _sdkRtl.encodeParam)(lookml_model_name);
      explore_name = (0, _sdkRtl.encodeParam)(explore_name);
      return _this264.authStream(callback, 'GET', "/lookml_models/".concat(lookml_model_name, "/explores/").concat(explore_name), {
        fields
      }, null, options);
    })();
  }
  model_fieldname_suggestions(callback, request, options) {
    var _this265 = this;
    return _asyncToGenerator(function* () {
      request.model_name = (0, _sdkRtl.encodeParam)(request.model_name);
      request.view_name = (0, _sdkRtl.encodeParam)(request.view_name);
      request.field_name = (0, _sdkRtl.encodeParam)(request.field_name);
      return _this265.authStream(callback, 'GET', "/models/".concat(request.model_name, "/views/").concat(request.view_name, "/fields/").concat(request.field_name, "/suggestions"), {
        term: request.term,
        filters: request.filters
      }, null, options);
    })();
  }
  get_model(callback, model_name, options) {
    var _this266 = this;
    return _asyncToGenerator(function* () {
      model_name = (0, _sdkRtl.encodeParam)(model_name);
      return _this266.authStream(callback, 'GET', "/models/".concat(model_name), null, null, options);
    })();
  }
  connection_databases(callback, connection_name, options) {
    var _this267 = this;
    return _asyncToGenerator(function* () {
      connection_name = (0, _sdkRtl.encodeParam)(connection_name);
      return _this267.authStream(callback, 'GET', "/connections/".concat(connection_name, "/databases"), null, null, options);
    })();
  }
  connection_features(callback, connection_name, fields, options) {
    var _this268 = this;
    return _asyncToGenerator(function* () {
      connection_name = (0, _sdkRtl.encodeParam)(connection_name);
      return _this268.authStream(callback, 'GET', "/connections/".concat(connection_name, "/features"), {
        fields
      }, null, options);
    })();
  }
  connection_schemas(callback, request, options) {
    var _this269 = this;
    return _asyncToGenerator(function* () {
      request.connection_name = (0, _sdkRtl.encodeParam)(request.connection_name);
      return _this269.authStream(callback, 'GET', "/connections/".concat(request.connection_name, "/schemas"), {
        database: request.database,
        cache: request.cache,
        fields: request.fields
      }, null, options);
    })();
  }
  connection_tables(callback, request, options) {
    var _this270 = this;
    return _asyncToGenerator(function* () {
      request.connection_name = (0, _sdkRtl.encodeParam)(request.connection_name);
      return _this270.authStream(callback, 'GET', "/connections/".concat(request.connection_name, "/tables"), {
        database: request.database,
        schema_name: request.schema_name,
        cache: request.cache,
        fields: request.fields,
        table_filter: request.table_filter,
        table_limit: request.table_limit
      }, null, options);
    })();
  }
  connection_columns(callback, request, options) {
    var _this271 = this;
    return _asyncToGenerator(function* () {
      request.connection_name = (0, _sdkRtl.encodeParam)(request.connection_name);
      return _this271.authStream(callback, 'GET', "/connections/".concat(request.connection_name, "/columns"), {
        database: request.database,
        schema_name: request.schema_name,
        cache: request.cache,
        table_limit: request.table_limit,
        table_names: request.table_names,
        fields: request.fields
      }, null, options);
    })();
  }
  connection_search_columns(callback, request, options) {
    var _this272 = this;
    return _asyncToGenerator(function* () {
      request.connection_name = (0, _sdkRtl.encodeParam)(request.connection_name);
      return _this272.authStream(callback, 'GET', "/connections/".concat(request.connection_name, "/search_columns"), {
        column_name: request.column_name,
        fields: request.fields
      }, null, options);
    })();
  }
  connection_cost_estimate(callback, connection_name, body, fields, options) {
    var _this273 = this;
    return _asyncToGenerator(function* () {
      connection_name = (0, _sdkRtl.encodeParam)(connection_name);
      return _this273.authStream(callback, 'POST', "/connections/".concat(connection_name, "/cost_estimate"), {
        fields
      }, body, options);
    })();
  }
  lock_all(callback, project_id, fields, options) {
    var _this274 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this274.authStream(callback, 'POST', "/projects/".concat(project_id, "/manifest/lock_all"), {
        fields
      }, null, options);
    })();
  }
  all_git_branches(callback, project_id, options) {
    var _this275 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this275.authStream(callback, 'GET', "/projects/".concat(project_id, "/git_branches"), null, null, options);
    })();
  }
  git_branch(callback, project_id, options) {
    var _this276 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this276.authStream(callback, 'GET', "/projects/".concat(project_id, "/git_branch"), null, null, options);
    })();
  }
  update_git_branch(callback, project_id, body, options) {
    var _this277 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this277.authStream(callback, 'PUT', "/projects/".concat(project_id, "/git_branch"), null, body, options);
    })();
  }
  create_git_branch(callback, project_id, body, options) {
    var _this278 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this278.authStream(callback, 'POST', "/projects/".concat(project_id, "/git_branch"), null, body, options);
    })();
  }
  find_git_branch(callback, project_id, branch_name, options) {
    var _this279 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      branch_name = (0, _sdkRtl.encodeParam)(branch_name);
      return _this279.authStream(callback, 'GET', "/projects/".concat(project_id, "/git_branch/").concat(branch_name), null, null, options);
    })();
  }
  delete_git_branch(callback, project_id, branch_name, options) {
    var _this280 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      branch_name = (0, _sdkRtl.encodeParam)(branch_name);
      return _this280.authStream(callback, 'DELETE', "/projects/".concat(project_id, "/git_branch/").concat(branch_name), null, null, options);
    })();
  }
  deploy_ref_to_production(callback, request, options) {
    var _this281 = this;
    return _asyncToGenerator(function* () {
      request.project_id = (0, _sdkRtl.encodeParam)(request.project_id);
      return _this281.authStream(callback, 'POST', "/projects/".concat(request.project_id, "/deploy_ref_to_production"), {
        branch: request.branch,
        ref: request.ref
      }, null, options);
    })();
  }
  deploy_to_production(callback, project_id, options) {
    var _this282 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this282.authStream(callback, 'POST', "/projects/".concat(project_id, "/deploy_to_production"), null, null, options);
    })();
  }
  reset_project_to_production(callback, project_id, options) {
    var _this283 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this283.authStream(callback, 'POST', "/projects/".concat(project_id, "/reset_to_production"), null, null, options);
    })();
  }
  reset_project_to_remote(callback, project_id, options) {
    var _this284 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this284.authStream(callback, 'POST', "/projects/".concat(project_id, "/reset_to_remote"), null, null, options);
    })();
  }
  all_projects(callback, fields, options) {
    var _this285 = this;
    return _asyncToGenerator(function* () {
      return _this285.authStream(callback, 'GET', '/projects', {
        fields
      }, null, options);
    })();
  }
  create_project(callback, body, options) {
    var _this286 = this;
    return _asyncToGenerator(function* () {
      return _this286.authStream(callback, 'POST', '/projects', null, body, options);
    })();
  }
  project(callback, project_id, fields, options) {
    var _this287 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this287.authStream(callback, 'GET', "/projects/".concat(project_id), {
        fields
      }, null, options);
    })();
  }
  update_project(callback, project_id, body, fields, options) {
    var _this288 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this288.authStream(callback, 'PATCH', "/projects/".concat(project_id), {
        fields
      }, body, options);
    })();
  }
  manifest(callback, project_id, options) {
    var _this289 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this289.authStream(callback, 'GET', "/projects/".concat(project_id, "/manifest"), null, null, options);
    })();
  }
  git_deploy_key(callback, project_id, options) {
    var _this290 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this290.authStream(callback, 'GET', "/projects/".concat(project_id, "/git/deploy_key"), null, null, options);
    })();
  }
  create_git_deploy_key(callback, project_id, options) {
    var _this291 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this291.authStream(callback, 'POST', "/projects/".concat(project_id, "/git/deploy_key"), null, null, options);
    })();
  }
  project_validation_results(callback, project_id, fields, options) {
    var _this292 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this292.authStream(callback, 'GET', "/projects/".concat(project_id, "/validate"), {
        fields
      }, null, options);
    })();
  }
  validate_project(callback, project_id, fields, options) {
    var _this293 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this293.authStream(callback, 'POST', "/projects/".concat(project_id, "/validate"), {
        fields
      }, null, options);
    })();
  }
  project_workspace(callback, project_id, fields, options) {
    var _this294 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this294.authStream(callback, 'GET', "/projects/".concat(project_id, "/current_workspace"), {
        fields
      }, null, options);
    })();
  }
  all_project_files(callback, project_id, fields, options) {
    var _this295 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this295.authStream(callback, 'GET', "/projects/".concat(project_id, "/files"), {
        fields
      }, null, options);
    })();
  }
  project_file(callback, project_id, file_id, fields, options) {
    var _this296 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this296.authStream(callback, 'GET', "/projects/".concat(project_id, "/files/file"), {
        file_id,
        fields
      }, null, options);
    })();
  }
  all_git_connection_tests(callback, project_id, remote_url, options) {
    var _this297 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this297.authStream(callback, 'GET', "/projects/".concat(project_id, "/git_connection_tests"), {
        remote_url
      }, null, options);
    })();
  }
  run_git_connection_test(callback, request, options) {
    var _this298 = this;
    return _asyncToGenerator(function* () {
      request.project_id = (0, _sdkRtl.encodeParam)(request.project_id);
      request.test_id = (0, _sdkRtl.encodeParam)(request.test_id);
      return _this298.authStream(callback, 'GET', "/projects/".concat(request.project_id, "/git_connection_tests/").concat(request.test_id), {
        remote_url: request.remote_url,
        use_production: request.use_production
      }, null, options);
    })();
  }
  all_lookml_tests(callback, project_id, file_id, options) {
    var _this299 = this;
    return _asyncToGenerator(function* () {
      project_id = (0, _sdkRtl.encodeParam)(project_id);
      return _this299.authStream(callback, 'GET', "/projects/".concat(project_id, "/lookml_tests"), {
        file_id
      }, null, options);
    })();
  }
  run_lookml_test(callback, request, options) {
    var _this300 = this;
    return _asyncToGenerator(function* () {
      request.project_id = (0, _sdkRtl.encodeParam)(request.project_id);
      return _this300.authStream(callback, 'GET', "/projects/".concat(request.project_id, "/lookml_tests/run"), {
        file_id: request.file_id,
        test: request.test,
        model: request.model
      }, null, options);
    })();
  }
  tag_ref(callback, request, options) {
    var _this301 = this;
    return _asyncToGenerator(function* () {
      request.project_id = (0, _sdkRtl.encodeParam)(request.project_id);
      return _this301.authStream(callback, 'POST', "/projects/".concat(request.project_id, "/tag"), {
        commit_sha: request.commit_sha,
        tag_name: request.tag_name,
        tag_message: request.tag_message
      }, request.body, options);
    })();
  }
  update_repository_credential(callback, root_project_id, credential_id, body, options) {
    var _this302 = this;
    return _asyncToGenerator(function* () {
      root_project_id = (0, _sdkRtl.encodeParam)(root_project_id);
      credential_id = (0, _sdkRtl.encodeParam)(credential_id);
      return _this302.authStream(callback, 'PUT', "/projects/".concat(root_project_id, "/credential/").concat(credential_id), null, body, options);
    })();
  }
  delete_repository_credential(callback, root_project_id, credential_id, options) {
    var _this303 = this;
    return _asyncToGenerator(function* () {
      root_project_id = (0, _sdkRtl.encodeParam)(root_project_id);
      credential_id = (0, _sdkRtl.encodeParam)(credential_id);
      return _this303.authStream(callback, 'DELETE', "/projects/".concat(root_project_id, "/credential/").concat(credential_id), null, null, options);
    })();
  }
  get_all_repository_credentials(callback, root_project_id, options) {
    var _this304 = this;
    return _asyncToGenerator(function* () {
      root_project_id = (0, _sdkRtl.encodeParam)(root_project_id);
      return _this304.authStream(callback, 'GET', "/projects/".concat(root_project_id, "/credentials"), null, null, options);
    })();
  }
  create_query_task(callback, request, options) {
    var _this305 = this;
    return _asyncToGenerator(function* () {
      return _this305.authStream(callback, 'POST', '/query_tasks', {
        limit: request.limit,
        apply_formatting: request.apply_formatting,
        apply_vis: request.apply_vis,
        cache: request.cache,
        generate_drill_links: request.generate_drill_links,
        force_production: request.force_production,
        cache_only: request.cache_only,
        path_prefix: request.path_prefix,
        rebuild_pdts: request.rebuild_pdts,
        server_table_calcs: request.server_table_calcs,
        fields: request.fields
      }, request.body, options);
    })();
  }
  query_task_multi_results(callback, query_task_ids, options) {
    var _this306 = this;
    return _asyncToGenerator(function* () {
      return _this306.authStream(callback, 'GET', '/query_tasks/multi_results', {
        query_task_ids
      }, null, options);
    })();
  }
  query_task(callback, query_task_id, fields, options) {
    var _this307 = this;
    return _asyncToGenerator(function* () {
      query_task_id = (0, _sdkRtl.encodeParam)(query_task_id);
      return _this307.authStream(callback, 'GET', "/query_tasks/".concat(query_task_id), {
        fields
      }, null, options);
    })();
  }
  query_task_results(callback, query_task_id, options) {
    var _this308 = this;
    return _asyncToGenerator(function* () {
      query_task_id = (0, _sdkRtl.encodeParam)(query_task_id);
      return _this308.authStream(callback, 'GET', "/query_tasks/".concat(query_task_id, "/results"), null, null, options);
    })();
  }
  query(callback, query_id, fields, options) {
    var _this309 = this;
    return _asyncToGenerator(function* () {
      query_id = (0, _sdkRtl.encodeParam)(query_id);
      return _this309.authStream(callback, 'GET', "/queries/".concat(query_id), {
        fields
      }, null, options);
    })();
  }
  query_for_slug(callback, slug, fields, options) {
    var _this310 = this;
    return _asyncToGenerator(function* () {
      slug = (0, _sdkRtl.encodeParam)(slug);
      return _this310.authStream(callback, 'GET', "/queries/slug/".concat(slug), {
        fields
      }, null, options);
    })();
  }
  create_query(callback, body, fields, options) {
    var _this311 = this;
    return _asyncToGenerator(function* () {
      return _this311.authStream(callback, 'POST', '/queries', {
        fields
      }, body, options);
    })();
  }
  run_query(callback, request, options) {
    var _this312 = this;
    return _asyncToGenerator(function* () {
      request.query_id = (0, _sdkRtl.encodeParam)(request.query_id);
      request.result_format = (0, _sdkRtl.encodeParam)(request.result_format);
      return _this312.authStream(callback, 'GET', "/queries/".concat(request.query_id, "/run/").concat(request.result_format), {
        limit: request.limit,
        apply_formatting: request.apply_formatting,
        apply_vis: request.apply_vis,
        cache: request.cache,
        image_width: request.image_width,
        image_height: request.image_height,
        generate_drill_links: request.generate_drill_links,
        force_production: request.force_production,
        cache_only: request.cache_only,
        path_prefix: request.path_prefix,
        rebuild_pdts: request.rebuild_pdts,
        server_table_calcs: request.server_table_calcs,
        source: request.source
      }, null, options);
    })();
  }
  run_inline_query(callback, request, options) {
    var _this313 = this;
    return _asyncToGenerator(function* () {
      request.result_format = (0, _sdkRtl.encodeParam)(request.result_format);
      return _this313.authStream(callback, 'POST', "/queries/run/".concat(request.result_format), {
        limit: request.limit,
        apply_formatting: request.apply_formatting,
        apply_vis: request.apply_vis,
        cache: request.cache,
        image_width: request.image_width,
        image_height: request.image_height,
        generate_drill_links: request.generate_drill_links,
        force_production: request.force_production,
        cache_only: request.cache_only,
        path_prefix: request.path_prefix,
        rebuild_pdts: request.rebuild_pdts,
        server_table_calcs: request.server_table_calcs
      }, request.body, options);
    })();
  }
  run_url_encoded_query(callback, model_name, view_name, result_format, options) {
    var _this314 = this;
    return _asyncToGenerator(function* () {
      model_name = (0, _sdkRtl.encodeParam)(model_name);
      view_name = (0, _sdkRtl.encodeParam)(view_name);
      result_format = (0, _sdkRtl.encodeParam)(result_format);
      return _this314.authStream(callback, 'GET', "/queries/models/".concat(model_name, "/views/").concat(view_name, "/run/").concat(result_format), null, null, options);
    })();
  }
  merge_query(callback, merge_query_id, fields, options) {
    var _this315 = this;
    return _asyncToGenerator(function* () {
      merge_query_id = (0, _sdkRtl.encodeParam)(merge_query_id);
      return _this315.authStream(callback, 'GET', "/merge_queries/".concat(merge_query_id), {
        fields
      }, null, options);
    })();
  }
  create_merge_query(callback, body, fields, options) {
    var _this316 = this;
    return _asyncToGenerator(function* () {
      return _this316.authStream(callback, 'POST', '/merge_queries', {
        fields
      }, body, options);
    })();
  }
  all_running_queries(callback, options) {
    var _this317 = this;
    return _asyncToGenerator(function* () {
      return _this317.authStream(callback, 'GET', '/running_queries', null, null, options);
    })();
  }
  kill_query(callback, query_task_id, options) {
    var _this318 = this;
    return _asyncToGenerator(function* () {
      query_task_id = (0, _sdkRtl.encodeParam)(query_task_id);
      return _this318.authStream(callback, 'DELETE', "/running_queries/".concat(query_task_id), null, null, options);
    })();
  }
  create_sql_query(callback, body, options) {
    var _this319 = this;
    return _asyncToGenerator(function* () {
      return _this319.authStream(callback, 'POST', '/sql_queries', null, body, options);
    })();
  }
  sql_query(callback, slug, options) {
    var _this320 = this;
    return _asyncToGenerator(function* () {
      slug = (0, _sdkRtl.encodeParam)(slug);
      return _this320.authStream(callback, 'GET', "/sql_queries/".concat(slug), null, null, options);
    })();
  }
  run_sql_query(callback, slug, result_format, download, options) {
    var _this321 = this;
    return _asyncToGenerator(function* () {
      slug = (0, _sdkRtl.encodeParam)(slug);
      result_format = (0, _sdkRtl.encodeParam)(result_format);
      return _this321.authStream(callback, 'POST', "/sql_queries/".concat(slug, "/run/").concat(result_format), {
        download
      }, null, options);
    })();
  }
  create_look_render_task(callback, look_id, result_format, width, height, fields, options) {
    var _this322 = this;
    return _asyncToGenerator(function* () {
      look_id = (0, _sdkRtl.encodeParam)(look_id);
      result_format = (0, _sdkRtl.encodeParam)(result_format);
      return _this322.authStream(callback, 'POST', "/render_tasks/looks/".concat(look_id, "/").concat(result_format), {
        width,
        height,
        fields
      }, null, options);
    })();
  }
  create_query_render_task(callback, query_id, result_format, width, height, fields, options) {
    var _this323 = this;
    return _asyncToGenerator(function* () {
      query_id = (0, _sdkRtl.encodeParam)(query_id);
      result_format = (0, _sdkRtl.encodeParam)(result_format);
      return _this323.authStream(callback, 'POST', "/render_tasks/queries/".concat(query_id, "/").concat(result_format), {
        width,
        height,
        fields
      }, null, options);
    })();
  }
  create_dashboard_render_task(callback, request, options) {
    var _this324 = this;
    return _asyncToGenerator(function* () {
      request.dashboard_id = (0, _sdkRtl.encodeParam)(request.dashboard_id);
      request.result_format = (0, _sdkRtl.encodeParam)(request.result_format);
      return _this324.authStream(callback, 'POST', "/render_tasks/dashboards/".concat(request.dashboard_id, "/").concat(request.result_format), {
        width: request.width,
        height: request.height,
        fields: request.fields,
        pdf_paper_size: request.pdf_paper_size,
        pdf_landscape: request.pdf_landscape,
        long_tables: request.long_tables,
        theme: request.theme
      }, request.body, options);
    })();
  }
  render_task(callback, render_task_id, fields, options) {
    var _this325 = this;
    return _asyncToGenerator(function* () {
      render_task_id = (0, _sdkRtl.encodeParam)(render_task_id);
      return _this325.authStream(callback, 'GET', "/render_tasks/".concat(render_task_id), {
        fields
      }, null, options);
    })();
  }
  render_task_results(callback, render_task_id, options) {
    var _this326 = this;
    return _asyncToGenerator(function* () {
      render_task_id = (0, _sdkRtl.encodeParam)(render_task_id);
      return _this326.authStream(callback, 'GET', "/render_tasks/".concat(render_task_id, "/results"), null, null, options);
    })();
  }
  create_dashboard_element_render_task(callback, dashboard_element_id, result_format, width, height, fields, options) {
    var _this327 = this;
    return _asyncToGenerator(function* () {
      dashboard_element_id = (0, _sdkRtl.encodeParam)(dashboard_element_id);
      result_format = (0, _sdkRtl.encodeParam)(result_format);
      return _this327.authStream(callback, 'POST', "/render_tasks/dashboard_elements/".concat(dashboard_element_id, "/").concat(result_format), {
        width,
        height,
        fields
      }, null, options);
    })();
  }
  search_model_sets(callback, request, options) {
    var _this328 = this;
    return _asyncToGenerator(function* () {
      return _this328.authStream(callback, 'GET', '/model_sets/search', {
        fields: request.fields,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        id: request.id,
        name: request.name,
        all_access: request.all_access,
        built_in: request.built_in,
        filter_or: request.filter_or
      }, null, options);
    })();
  }
  model_set(callback, model_set_id, fields, options) {
    var _this329 = this;
    return _asyncToGenerator(function* () {
      model_set_id = (0, _sdkRtl.encodeParam)(model_set_id);
      return _this329.authStream(callback, 'GET', "/model_sets/".concat(model_set_id), {
        fields
      }, null, options);
    })();
  }
  update_model_set(callback, model_set_id, body, options) {
    var _this330 = this;
    return _asyncToGenerator(function* () {
      model_set_id = (0, _sdkRtl.encodeParam)(model_set_id);
      return _this330.authStream(callback, 'PATCH', "/model_sets/".concat(model_set_id), null, body, options);
    })();
  }
  delete_model_set(callback, model_set_id, options) {
    var _this331 = this;
    return _asyncToGenerator(function* () {
      model_set_id = (0, _sdkRtl.encodeParam)(model_set_id);
      return _this331.authStream(callback, 'DELETE', "/model_sets/".concat(model_set_id), null, null, options);
    })();
  }
  all_model_sets(callback, fields, options) {
    var _this332 = this;
    return _asyncToGenerator(function* () {
      return _this332.authStream(callback, 'GET', '/model_sets', {
        fields
      }, null, options);
    })();
  }
  create_model_set(callback, body, options) {
    var _this333 = this;
    return _asyncToGenerator(function* () {
      return _this333.authStream(callback, 'POST', '/model_sets', null, body, options);
    })();
  }
  all_permissions(callback, options) {
    var _this334 = this;
    return _asyncToGenerator(function* () {
      return _this334.authStream(callback, 'GET', '/permissions', null, null, options);
    })();
  }
  search_permission_sets(callback, request, options) {
    var _this335 = this;
    return _asyncToGenerator(function* () {
      return _this335.authStream(callback, 'GET', '/permission_sets/search', {
        fields: request.fields,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        id: request.id,
        name: request.name,
        all_access: request.all_access,
        built_in: request.built_in,
        filter_or: request.filter_or
      }, null, options);
    })();
  }
  permission_set(callback, permission_set_id, fields, options) {
    var _this336 = this;
    return _asyncToGenerator(function* () {
      permission_set_id = (0, _sdkRtl.encodeParam)(permission_set_id);
      return _this336.authStream(callback, 'GET', "/permission_sets/".concat(permission_set_id), {
        fields
      }, null, options);
    })();
  }
  update_permission_set(callback, permission_set_id, body, options) {
    var _this337 = this;
    return _asyncToGenerator(function* () {
      permission_set_id = (0, _sdkRtl.encodeParam)(permission_set_id);
      return _this337.authStream(callback, 'PATCH', "/permission_sets/".concat(permission_set_id), null, body, options);
    })();
  }
  delete_permission_set(callback, permission_set_id, options) {
    var _this338 = this;
    return _asyncToGenerator(function* () {
      permission_set_id = (0, _sdkRtl.encodeParam)(permission_set_id);
      return _this338.authStream(callback, 'DELETE', "/permission_sets/".concat(permission_set_id), null, null, options);
    })();
  }
  all_permission_sets(callback, fields, options) {
    var _this339 = this;
    return _asyncToGenerator(function* () {
      return _this339.authStream(callback, 'GET', '/permission_sets', {
        fields
      }, null, options);
    })();
  }
  create_permission_set(callback, body, options) {
    var _this340 = this;
    return _asyncToGenerator(function* () {
      return _this340.authStream(callback, 'POST', '/permission_sets', null, body, options);
    })();
  }
  all_roles(callback, request, options) {
    var _this341 = this;
    return _asyncToGenerator(function* () {
      return _this341.authStream(callback, 'GET', '/roles', {
        fields: request.fields,
        ids: request.ids
      }, null, options);
    })();
  }
  create_role(callback, body, options) {
    var _this342 = this;
    return _asyncToGenerator(function* () {
      return _this342.authStream(callback, 'POST', '/roles', null, body, options);
    })();
  }
  search_roles(callback, request, options) {
    var _this343 = this;
    return _asyncToGenerator(function* () {
      return _this343.authStream(callback, 'GET', '/roles/search', {
        fields: request.fields,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        id: request.id,
        name: request.name,
        built_in: request.built_in,
        filter_or: request.filter_or
      }, null, options);
    })();
  }
  search_roles_with_user_count(callback, request, options) {
    var _this344 = this;
    return _asyncToGenerator(function* () {
      return _this344.authStream(callback, 'GET', '/roles/search/with_user_count', {
        fields: request.fields,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        id: request.id,
        name: request.name,
        built_in: request.built_in,
        filter_or: request.filter_or
      }, null, options);
    })();
  }
  role(callback, role_id, options) {
    var _this345 = this;
    return _asyncToGenerator(function* () {
      role_id = (0, _sdkRtl.encodeParam)(role_id);
      return _this345.authStream(callback, 'GET', "/roles/".concat(role_id), null, null, options);
    })();
  }
  update_role(callback, role_id, body, options) {
    var _this346 = this;
    return _asyncToGenerator(function* () {
      role_id = (0, _sdkRtl.encodeParam)(role_id);
      return _this346.authStream(callback, 'PATCH', "/roles/".concat(role_id), null, body, options);
    })();
  }
  delete_role(callback, role_id, options) {
    var _this347 = this;
    return _asyncToGenerator(function* () {
      role_id = (0, _sdkRtl.encodeParam)(role_id);
      return _this347.authStream(callback, 'DELETE', "/roles/".concat(role_id), null, null, options);
    })();
  }
  role_groups(callback, role_id, fields, options) {
    var _this348 = this;
    return _asyncToGenerator(function* () {
      role_id = (0, _sdkRtl.encodeParam)(role_id);
      return _this348.authStream(callback, 'GET', "/roles/".concat(role_id, "/groups"), {
        fields
      }, null, options);
    })();
  }
  set_role_groups(callback, role_id, body, options) {
    var _this349 = this;
    return _asyncToGenerator(function* () {
      role_id = (0, _sdkRtl.encodeParam)(role_id);
      return _this349.authStream(callback, 'PUT', "/roles/".concat(role_id, "/groups"), null, body, options);
    })();
  }
  role_users(callback, request, options) {
    var _this350 = this;
    return _asyncToGenerator(function* () {
      request.role_id = (0, _sdkRtl.encodeParam)(request.role_id);
      return _this350.authStream(callback, 'GET', "/roles/".concat(request.role_id, "/users"), {
        fields: request.fields,
        direct_association_only: request.direct_association_only
      }, null, options);
    })();
  }
  set_role_users(callback, role_id, body, options) {
    var _this351 = this;
    return _asyncToGenerator(function* () {
      role_id = (0, _sdkRtl.encodeParam)(role_id);
      return _this351.authStream(callback, 'PUT', "/roles/".concat(role_id, "/users"), null, body, options);
    })();
  }
  scheduled_plans_for_space(callback, space_id, fields, options) {
    var _this352 = this;
    return _asyncToGenerator(function* () {
      space_id = (0, _sdkRtl.encodeParam)(space_id);
      return _this352.authStream(callback, 'GET', "/scheduled_plans/space/".concat(space_id), {
        fields
      }, null, options);
    })();
  }
  scheduled_plan(callback, scheduled_plan_id, fields, options) {
    var _this353 = this;
    return _asyncToGenerator(function* () {
      scheduled_plan_id = (0, _sdkRtl.encodeParam)(scheduled_plan_id);
      return _this353.authStream(callback, 'GET', "/scheduled_plans/".concat(scheduled_plan_id), {
        fields
      }, null, options);
    })();
  }
  update_scheduled_plan(callback, scheduled_plan_id, body, options) {
    var _this354 = this;
    return _asyncToGenerator(function* () {
      scheduled_plan_id = (0, _sdkRtl.encodeParam)(scheduled_plan_id);
      return _this354.authStream(callback, 'PATCH', "/scheduled_plans/".concat(scheduled_plan_id), null, body, options);
    })();
  }
  delete_scheduled_plan(callback, scheduled_plan_id, options) {
    var _this355 = this;
    return _asyncToGenerator(function* () {
      scheduled_plan_id = (0, _sdkRtl.encodeParam)(scheduled_plan_id);
      return _this355.authStream(callback, 'DELETE', "/scheduled_plans/".concat(scheduled_plan_id), null, null, options);
    })();
  }
  all_scheduled_plans(callback, request, options) {
    var _this356 = this;
    return _asyncToGenerator(function* () {
      return _this356.authStream(callback, 'GET', '/scheduled_plans', {
        user_id: request.user_id,
        fields: request.fields,
        all_users: request.all_users
      }, null, options);
    })();
  }
  create_scheduled_plan(callback, body, options) {
    var _this357 = this;
    return _asyncToGenerator(function* () {
      return _this357.authStream(callback, 'POST', '/scheduled_plans', null, body, options);
    })();
  }
  scheduled_plan_run_once(callback, body, options) {
    var _this358 = this;
    return _asyncToGenerator(function* () {
      return _this358.authStream(callback, 'POST', '/scheduled_plans/run_once', null, body, options);
    })();
  }
  scheduled_plans_for_look(callback, request, options) {
    var _this359 = this;
    return _asyncToGenerator(function* () {
      request.look_id = (0, _sdkRtl.encodeParam)(request.look_id);
      return _this359.authStream(callback, 'GET', "/scheduled_plans/look/".concat(request.look_id), {
        user_id: request.user_id,
        fields: request.fields,
        all_users: request.all_users
      }, null, options);
    })();
  }
  scheduled_plans_for_dashboard(callback, request, options) {
    var _this360 = this;
    return _asyncToGenerator(function* () {
      request.dashboard_id = (0, _sdkRtl.encodeParam)(request.dashboard_id);
      return _this360.authStream(callback, 'GET', "/scheduled_plans/dashboard/".concat(request.dashboard_id), {
        user_id: request.user_id,
        all_users: request.all_users,
        fields: request.fields
      }, null, options);
    })();
  }
  scheduled_plans_for_lookml_dashboard(callback, request, options) {
    var _this361 = this;
    return _asyncToGenerator(function* () {
      request.lookml_dashboard_id = (0, _sdkRtl.encodeParam)(request.lookml_dashboard_id);
      return _this361.authStream(callback, 'GET', "/scheduled_plans/lookml_dashboard/".concat(request.lookml_dashboard_id), {
        user_id: request.user_id,
        fields: request.fields,
        all_users: request.all_users
      }, null, options);
    })();
  }
  scheduled_plan_run_once_by_id(callback, scheduled_plan_id, body, options) {
    var _this362 = this;
    return _asyncToGenerator(function* () {
      scheduled_plan_id = (0, _sdkRtl.encodeParam)(scheduled_plan_id);
      return _this362.authStream(callback, 'POST', "/scheduled_plans/".concat(scheduled_plan_id, "/run_once"), null, body, options);
    })();
  }
  session(callback, options) {
    var _this363 = this;
    return _asyncToGenerator(function* () {
      return _this363.authStream(callback, 'GET', '/session', null, null, options);
    })();
  }
  update_session(callback, body, options) {
    var _this364 = this;
    return _asyncToGenerator(function* () {
      return _this364.authStream(callback, 'PATCH', '/session', null, body, options);
    })();
  }
  sql_interface_metadata(callback, avatica_request, options) {
    var _this365 = this;
    return _asyncToGenerator(function* () {
      return _this365.authStream(callback, 'GET', '/sql_interface_queries/metadata', {
        avatica_request
      }, null, options);
    })();
  }
  run_sql_interface_query(callback, query_id, result_format, options) {
    var _this366 = this;
    return _asyncToGenerator(function* () {
      result_format = (0, _sdkRtl.encodeParam)(result_format);
      return _this366.authStream(callback, 'GET', "/sql_interface_queries/".concat(query_id, "/run/").concat(result_format), null, null, options);
    })();
  }
  create_sql_interface_query(callback, body, options) {
    var _this367 = this;
    return _asyncToGenerator(function* () {
      return _this367.authStream(callback, 'POST', '/sql_interface_queries', null, body, options);
    })();
  }
  all_themes(callback, fields, options) {
    var _this368 = this;
    return _asyncToGenerator(function* () {
      return _this368.authStream(callback, 'GET', '/themes', {
        fields
      }, null, options);
    })();
  }
  create_theme(callback, body, options) {
    var _this369 = this;
    return _asyncToGenerator(function* () {
      return _this369.authStream(callback, 'POST', '/themes', null, body, options);
    })();
  }
  search_themes(callback, request, options) {
    var _this370 = this;
    return _asyncToGenerator(function* () {
      return _this370.authStream(callback, 'GET', '/themes/search', {
        id: request.id,
        name: request.name,
        begin_at: request.begin_at,
        end_at: request.end_at,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        fields: request.fields,
        filter_or: request.filter_or
      }, null, options);
    })();
  }
  default_theme(callback, ts, options) {
    var _this371 = this;
    return _asyncToGenerator(function* () {
      return _this371.authStream(callback, 'GET', '/themes/default', {
        ts
      }, null, options);
    })();
  }
  set_default_theme(callback, name, options) {
    var _this372 = this;
    return _asyncToGenerator(function* () {
      return _this372.authStream(callback, 'PUT', '/themes/default', {
        name
      }, null, options);
    })();
  }
  active_themes(callback, request, options) {
    var _this373 = this;
    return _asyncToGenerator(function* () {
      return _this373.authStream(callback, 'GET', '/themes/active', {
        name: request.name,
        ts: request.ts,
        fields: request.fields
      }, null, options);
    })();
  }
  theme_or_default(callback, name, ts, options) {
    var _this374 = this;
    return _asyncToGenerator(function* () {
      return _this374.authStream(callback, 'GET', '/themes/theme_or_default', {
        name,
        ts
      }, null, options);
    })();
  }
  validate_theme(callback, body, options) {
    var _this375 = this;
    return _asyncToGenerator(function* () {
      return _this375.authStream(callback, 'POST', '/themes/validate', null, body, options);
    })();
  }
  theme(callback, theme_id, fields, options) {
    var _this376 = this;
    return _asyncToGenerator(function* () {
      theme_id = (0, _sdkRtl.encodeParam)(theme_id);
      return _this376.authStream(callback, 'GET', "/themes/".concat(theme_id), {
        fields
      }, null, options);
    })();
  }
  update_theme(callback, theme_id, body, options) {
    var _this377 = this;
    return _asyncToGenerator(function* () {
      theme_id = (0, _sdkRtl.encodeParam)(theme_id);
      return _this377.authStream(callback, 'PATCH', "/themes/".concat(theme_id), null, body, options);
    })();
  }
  delete_theme(callback, theme_id, options) {
    var _this378 = this;
    return _asyncToGenerator(function* () {
      theme_id = (0, _sdkRtl.encodeParam)(theme_id);
      return _this378.authStream(callback, 'DELETE', "/themes/".concat(theme_id), null, null, options);
    })();
  }
  search_credentials_email(callback, request, options) {
    var _this379 = this;
    return _asyncToGenerator(function* () {
      return _this379.authStream(callback, 'GET', '/credentials_email/search', {
        fields: request.fields,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        id: request.id,
        email: request.email,
        emails: request.emails,
        filter_or: request.filter_or
      }, null, options);
    })();
  }
  me(callback, fields, options) {
    var _this380 = this;
    return _asyncToGenerator(function* () {
      return _this380.authStream(callback, 'GET', '/user', {
        fields
      }, null, options);
    })();
  }
  all_users(callback, request, options) {
    var _this381 = this;
    return _asyncToGenerator(function* () {
      return _this381.authStream(callback, 'GET', '/users', {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        ids: request.ids
      }, null, options);
    })();
  }
  create_user(callback, body, fields, options) {
    var _this382 = this;
    return _asyncToGenerator(function* () {
      return _this382.authStream(callback, 'POST', '/users', {
        fields
      }, body, options);
    })();
  }
  search_users(callback, request, options) {
    var _this383 = this;
    return _asyncToGenerator(function* () {
      return _this383.authStream(callback, 'GET', '/users/search', {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        id: request.id,
        first_name: request.first_name,
        last_name: request.last_name,
        verified_looker_employee: request.verified_looker_employee,
        embed_user: request.embed_user,
        email: request.email,
        is_disabled: request.is_disabled,
        filter_or: request.filter_or,
        content_metadata_id: request.content_metadata_id,
        group_id: request.group_id
      }, null, options);
    })();
  }
  search_users_names(callback, request, options) {
    var _this384 = this;
    return _asyncToGenerator(function* () {
      request.pattern = (0, _sdkRtl.encodeParam)(request.pattern);
      return _this384.authStream(callback, 'GET', "/users/search/names/".concat(request.pattern), {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts,
        id: request.id,
        first_name: request.first_name,
        last_name: request.last_name,
        verified_looker_employee: request.verified_looker_employee,
        email: request.email,
        is_disabled: request.is_disabled
      }, null, options);
    })();
  }
  user(callback, user_id, fields, options) {
    var _this385 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this385.authStream(callback, 'GET', "/users/".concat(user_id), {
        fields
      }, null, options);
    })();
  }
  update_user(callback, user_id, body, fields, options) {
    var _this386 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this386.authStream(callback, 'PATCH', "/users/".concat(user_id), {
        fields
      }, body, options);
    })();
  }
  delete_user(callback, user_id, options) {
    var _this387 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this387.authStream(callback, 'DELETE', "/users/".concat(user_id), null, null, options);
    })();
  }
  user_for_credential(callback, credential_type, credential_id, fields, options) {
    var _this388 = this;
    return _asyncToGenerator(function* () {
      credential_type = (0, _sdkRtl.encodeParam)(credential_type);
      credential_id = (0, _sdkRtl.encodeParam)(credential_id);
      return _this388.authStream(callback, 'GET', "/users/credential/".concat(credential_type, "/").concat(credential_id), {
        fields
      }, null, options);
    })();
  }
  user_credentials_email(callback, user_id, fields, options) {
    var _this389 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this389.authStream(callback, 'GET', "/users/".concat(user_id, "/credentials_email"), {
        fields
      }, null, options);
    })();
  }
  create_user_credentials_email(callback, user_id, body, fields, options) {
    var _this390 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this390.authStream(callback, 'POST', "/users/".concat(user_id, "/credentials_email"), {
        fields
      }, body, options);
    })();
  }
  update_user_credentials_email(callback, user_id, body, fields, options) {
    var _this391 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this391.authStream(callback, 'PATCH', "/users/".concat(user_id, "/credentials_email"), {
        fields
      }, body, options);
    })();
  }
  delete_user_credentials_email(callback, user_id, options) {
    var _this392 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this392.authStream(callback, 'DELETE', "/users/".concat(user_id, "/credentials_email"), null, null, options);
    })();
  }
  user_credentials_totp(callback, user_id, fields, options) {
    var _this393 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this393.authStream(callback, 'GET', "/users/".concat(user_id, "/credentials_totp"), {
        fields
      }, null, options);
    })();
  }
  create_user_credentials_totp(callback, user_id, body, fields, options) {
    var _this394 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this394.authStream(callback, 'POST', "/users/".concat(user_id, "/credentials_totp"), {
        fields
      }, body, options);
    })();
  }
  delete_user_credentials_totp(callback, user_id, options) {
    var _this395 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this395.authStream(callback, 'DELETE', "/users/".concat(user_id, "/credentials_totp"), null, null, options);
    })();
  }
  user_credentials_ldap(callback, user_id, fields, options) {
    var _this396 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this396.authStream(callback, 'GET', "/users/".concat(user_id, "/credentials_ldap"), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_ldap(callback, user_id, options) {
    var _this397 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this397.authStream(callback, 'DELETE', "/users/".concat(user_id, "/credentials_ldap"), null, null, options);
    })();
  }
  user_credentials_google(callback, user_id, fields, options) {
    var _this398 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this398.authStream(callback, 'GET', "/users/".concat(user_id, "/credentials_google"), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_google(callback, user_id, options) {
    var _this399 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this399.authStream(callback, 'DELETE', "/users/".concat(user_id, "/credentials_google"), null, null, options);
    })();
  }
  user_credentials_saml(callback, user_id, fields, options) {
    var _this400 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this400.authStream(callback, 'GET', "/users/".concat(user_id, "/credentials_saml"), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_saml(callback, user_id, options) {
    var _this401 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this401.authStream(callback, 'DELETE', "/users/".concat(user_id, "/credentials_saml"), null, null, options);
    })();
  }
  user_credentials_oidc(callback, user_id, fields, options) {
    var _this402 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this402.authStream(callback, 'GET', "/users/".concat(user_id, "/credentials_oidc"), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_oidc(callback, user_id, options) {
    var _this403 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this403.authStream(callback, 'DELETE', "/users/".concat(user_id, "/credentials_oidc"), null, null, options);
    })();
  }
  user_credentials_api3(callback, user_id, credentials_api3_id, fields, options) {
    var _this404 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      credentials_api3_id = (0, _sdkRtl.encodeParam)(credentials_api3_id);
      return _this404.authStream(callback, 'GET', "/users/".concat(user_id, "/credentials_api3/").concat(credentials_api3_id), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_api3(callback, user_id, credentials_api3_id, options) {
    var _this405 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      credentials_api3_id = (0, _sdkRtl.encodeParam)(credentials_api3_id);
      return _this405.authStream(callback, 'DELETE', "/users/".concat(user_id, "/credentials_api3/").concat(credentials_api3_id), null, null, options);
    })();
  }
  all_user_credentials_api3s(callback, user_id, fields, options) {
    var _this406 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this406.authStream(callback, 'GET', "/users/".concat(user_id, "/credentials_api3"), {
        fields
      }, null, options);
    })();
  }
  create_user_credentials_api3(callback, user_id, fields, options) {
    var _this407 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this407.authStream(callback, 'POST', "/users/".concat(user_id, "/credentials_api3"), {
        fields
      }, null, options);
    })();
  }
  user_credentials_embed(callback, user_id, credentials_embed_id, fields, options) {
    var _this408 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      credentials_embed_id = (0, _sdkRtl.encodeParam)(credentials_embed_id);
      return _this408.authStream(callback, 'GET', "/users/".concat(user_id, "/credentials_embed/").concat(credentials_embed_id), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_embed(callback, user_id, credentials_embed_id, options) {
    var _this409 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      credentials_embed_id = (0, _sdkRtl.encodeParam)(credentials_embed_id);
      return _this409.authStream(callback, 'DELETE', "/users/".concat(user_id, "/credentials_embed/").concat(credentials_embed_id), null, null, options);
    })();
  }
  all_user_credentials_embeds(callback, user_id, fields, options) {
    var _this410 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this410.authStream(callback, 'GET', "/users/".concat(user_id, "/credentials_embed"), {
        fields
      }, null, options);
    })();
  }
  user_credentials_looker_openid(callback, user_id, fields, options) {
    var _this411 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this411.authStream(callback, 'GET', "/users/".concat(user_id, "/credentials_looker_openid"), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_looker_openid(callback, user_id, options) {
    var _this412 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this412.authStream(callback, 'DELETE', "/users/".concat(user_id, "/credentials_looker_openid"), null, null, options);
    })();
  }
  user_session(callback, user_id, session_id, fields, options) {
    var _this413 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      session_id = (0, _sdkRtl.encodeParam)(session_id);
      return _this413.authStream(callback, 'GET', "/users/".concat(user_id, "/sessions/").concat(session_id), {
        fields
      }, null, options);
    })();
  }
  delete_user_session(callback, user_id, session_id, options) {
    var _this414 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      session_id = (0, _sdkRtl.encodeParam)(session_id);
      return _this414.authStream(callback, 'DELETE', "/users/".concat(user_id, "/sessions/").concat(session_id), null, null, options);
    })();
  }
  all_user_sessions(callback, user_id, fields, options) {
    var _this415 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this415.authStream(callback, 'GET', "/users/".concat(user_id, "/sessions"), {
        fields
      }, null, options);
    })();
  }
  create_user_credentials_email_password_reset(callback, request, options) {
    var _this416 = this;
    return _asyncToGenerator(function* () {
      request.user_id = (0, _sdkRtl.encodeParam)(request.user_id);
      return _this416.authStream(callback, 'POST', "/users/".concat(request.user_id, "/credentials_email/password_reset"), {
        expires: request.expires,
        fields: request.fields
      }, null, options);
    })();
  }
  user_roles(callback, request, options) {
    var _this417 = this;
    return _asyncToGenerator(function* () {
      request.user_id = (0, _sdkRtl.encodeParam)(request.user_id);
      return _this417.authStream(callback, 'GET', "/users/".concat(request.user_id, "/roles"), {
        fields: request.fields,
        direct_association_only: request.direct_association_only
      }, null, options);
    })();
  }
  set_user_roles(callback, user_id, body, fields, options) {
    var _this418 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this418.authStream(callback, 'PUT', "/users/".concat(user_id, "/roles"), {
        fields
      }, body, options);
    })();
  }
  user_attribute_user_values(callback, request, options) {
    var _this419 = this;
    return _asyncToGenerator(function* () {
      request.user_id = (0, _sdkRtl.encodeParam)(request.user_id);
      return _this419.authStream(callback, 'GET', "/users/".concat(request.user_id, "/attribute_values"), {
        fields: request.fields,
        user_attribute_ids: request.user_attribute_ids,
        all_values: request.all_values,
        include_unset: request.include_unset
      }, null, options);
    })();
  }
  set_user_attribute_user_value(callback, user_id, user_attribute_id, body, options) {
    var _this420 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
      return _this420.authStream(callback, 'PATCH', "/users/".concat(user_id, "/attribute_values/").concat(user_attribute_id), null, body, options);
    })();
  }
  delete_user_attribute_user_value(callback, user_id, user_attribute_id, options) {
    var _this421 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
      return _this421.authStream(callback, 'DELETE', "/users/".concat(user_id, "/attribute_values/").concat(user_attribute_id), null, null, options);
    })();
  }
  send_user_credentials_email_password_reset(callback, user_id, fields, options) {
    var _this422 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this422.authStream(callback, 'POST', "/users/".concat(user_id, "/credentials_email/send_password_reset"), {
        fields
      }, null, options);
    })();
  }
  wipeout_user_emails(callback, user_id, body, fields, options) {
    var _this423 = this;
    return _asyncToGenerator(function* () {
      user_id = (0, _sdkRtl.encodeParam)(user_id);
      return _this423.authStream(callback, 'POST', "/users/".concat(user_id, "/update_emails"), {
        fields
      }, body, options);
    })();
  }
  create_embed_user(callback, body, options) {
    var _this424 = this;
    return _asyncToGenerator(function* () {
      return _this424.authStream(callback, 'POST', '/users/embed_user', null, body, options);
    })();
  }
  all_user_attributes(callback, request, options) {
    var _this425 = this;
    return _asyncToGenerator(function* () {
      return _this425.authStream(callback, 'GET', '/user_attributes', {
        fields: request.fields,
        sorts: request.sorts
      }, null, options);
    })();
  }
  create_user_attribute(callback, body, fields, options) {
    var _this426 = this;
    return _asyncToGenerator(function* () {
      return _this426.authStream(callback, 'POST', '/user_attributes', {
        fields
      }, body, options);
    })();
  }
  user_attribute(callback, user_attribute_id, fields, options) {
    var _this427 = this;
    return _asyncToGenerator(function* () {
      user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
      return _this427.authStream(callback, 'GET', "/user_attributes/".concat(user_attribute_id), {
        fields
      }, null, options);
    })();
  }
  update_user_attribute(callback, user_attribute_id, body, fields, options) {
    var _this428 = this;
    return _asyncToGenerator(function* () {
      user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
      return _this428.authStream(callback, 'PATCH', "/user_attributes/".concat(user_attribute_id), {
        fields
      }, body, options);
    })();
  }
  delete_user_attribute(callback, user_attribute_id, options) {
    var _this429 = this;
    return _asyncToGenerator(function* () {
      user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
      return _this429.authStream(callback, 'DELETE', "/user_attributes/".concat(user_attribute_id), null, null, options);
    })();
  }
  all_user_attribute_group_values(callback, user_attribute_id, fields, options) {
    var _this430 = this;
    return _asyncToGenerator(function* () {
      user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
      return _this430.authStream(callback, 'GET', "/user_attributes/".concat(user_attribute_id, "/group_values"), {
        fields
      }, null, options);
    })();
  }
  set_user_attribute_group_values(callback, user_attribute_id, body, options) {
    var _this431 = this;
    return _asyncToGenerator(function* () {
      user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
      return _this431.authStream(callback, 'POST', "/user_attributes/".concat(user_attribute_id, "/group_values"), null, body, options);
    })();
  }
  all_workspaces(callback, options) {
    var _this432 = this;
    return _asyncToGenerator(function* () {
      return _this432.authStream(callback, 'GET', '/workspaces', null, null, options);
    })();
  }
  workspace(callback, workspace_id, options) {
    var _this433 = this;
    return _asyncToGenerator(function* () {
      workspace_id = (0, _sdkRtl.encodeParam)(workspace_id);
      return _this433.authStream(callback, 'GET', "/workspaces/".concat(workspace_id), null, null, options);
    })();
  }
}
exports.Looker40SDKStream = Looker40SDKStream;
_defineProperty(Looker40SDKStream, "ApiVersion", '4.0');
//# sourceMappingURL=streams.js.map