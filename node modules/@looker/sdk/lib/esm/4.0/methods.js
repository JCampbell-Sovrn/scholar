function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { APIMethods, encodeParam } from '@looker/sdk-rtl';
import { sdkVersion } from '../constants';
export class Looker40SDK extends APIMethods {
  constructor(authSession) {
    super(authSession, sdkVersion);
    this.apiVersion = Looker40SDK.ApiVersion;
    this.apiPath = authSession.settings.base_url === '' ? '' : authSession.settings.base_url + '/api/' + this.apiVersion;
  }
  follow_alert(alert_id, options) {
    var _this = this;
    return _asyncToGenerator(function* () {
      alert_id = encodeParam(alert_id);
      return _this.post("/alerts/".concat(alert_id, "/follow"), null, null, options);
    })();
  }
  unfollow_alert(alert_id, options) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      alert_id = encodeParam(alert_id);
      return _this2.delete("/alerts/".concat(alert_id, "/follow"), null, null, options);
    })();
  }
  search_alerts(request, options) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      return _this3.get('/alerts/search', {
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
  get_alert(alert_id, options) {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      alert_id = encodeParam(alert_id);
      return _this4.get("/alerts/".concat(alert_id), null, null, options);
    })();
  }
  update_alert(alert_id, body, options) {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      alert_id = encodeParam(alert_id);
      return _this5.put("/alerts/".concat(alert_id), null, body, options);
    })();
  }
  update_alert_field(alert_id, body, options) {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      alert_id = encodeParam(alert_id);
      return _this6.patch("/alerts/".concat(alert_id), null, body, options);
    })();
  }
  delete_alert(alert_id, options) {
    var _this7 = this;
    return _asyncToGenerator(function* () {
      alert_id = encodeParam(alert_id);
      return _this7.delete("/alerts/".concat(alert_id), null, null, options);
    })();
  }
  create_alert(body, options) {
    var _this8 = this;
    return _asyncToGenerator(function* () {
      return _this8.post('/alerts', null, body, options);
    })();
  }
  enqueue_alert(alert_id, force, options) {
    var _this9 = this;
    return _asyncToGenerator(function* () {
      alert_id = encodeParam(alert_id);
      return _this9.post("/alerts/".concat(alert_id, "/enqueue"), {
        force
      }, null, options);
    })();
  }
  alert_notifications(request, options) {
    var _this10 = this;
    return _asyncToGenerator(function* () {
      return _this10.get('/alert_notifications', {
        limit: request.limit,
        offset: request.offset
      }, null, options);
    })();
  }
  read_alert_notification(alert_notification_id, options) {
    var _this11 = this;
    return _asyncToGenerator(function* () {
      alert_notification_id = encodeParam(alert_notification_id);
      return _this11.patch("/alert_notifications/".concat(alert_notification_id), null, null, options);
    })();
  }
  login(request, options) {
    var _this12 = this;
    return _asyncToGenerator(function* () {
      return _this12.post('/login', {
        client_id: request.client_id,
        client_secret: request.client_secret
      }, null, options);
    })();
  }
  login_user(user_id, associative, options) {
    var _this13 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this13.post("/login/".concat(user_id), {
        associative
      }, null, options);
    })();
  }
  logout(options) {
    var _this14 = this;
    return _asyncToGenerator(function* () {
      return _this14.delete('/logout', null, null, options);
    })();
  }
  artifact_usage(fields, options) {
    var _this15 = this;
    return _asyncToGenerator(function* () {
      return _this15.get('/artifact/usage', {
        fields
      }, null, options);
    })();
  }
  artifact_namespaces(request, options) {
    var _this16 = this;
    return _asyncToGenerator(function* () {
      return _this16.get('/artifact/namespaces', {
        fields: request.fields,
        limit: request.limit,
        offset: request.offset
      }, null, options);
    })();
  }
  artifact_value(namespace, key, options) {
    var _this17 = this;
    return _asyncToGenerator(function* () {
      namespace = encodeParam(namespace);
      return _this17.get("/artifact/".concat(namespace, "/value"), {
        key
      }, null, options);
    })();
  }
  purge_artifacts(namespace, options) {
    var _this18 = this;
    return _asyncToGenerator(function* () {
      namespace = encodeParam(namespace);
      return _this18.delete("/artifact/".concat(namespace, "/purge"), null, null, options);
    })();
  }
  search_artifacts(request, options) {
    var _this19 = this;
    return _asyncToGenerator(function* () {
      request.namespace = encodeParam(request.namespace);
      return _this19.get("/artifact/".concat(request.namespace, "/search"), {
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
  artifact(request, options) {
    var _this20 = this;
    return _asyncToGenerator(function* () {
      request.namespace = encodeParam(request.namespace);
      return _this20.get("/artifact/".concat(request.namespace), {
        key: request.key,
        fields: request.fields,
        limit: request.limit,
        offset: request.offset
      }, null, options);
    })();
  }
  delete_artifact(namespace, key, options) {
    var _this21 = this;
    return _asyncToGenerator(function* () {
      namespace = encodeParam(namespace);
      return _this21.delete("/artifact/".concat(namespace), {
        key
      }, null, options);
    })();
  }
  update_artifacts(namespace, body, fields, options) {
    var _this22 = this;
    return _asyncToGenerator(function* () {
      namespace = encodeParam(namespace);
      return _this22.put("/artifacts/".concat(namespace), {
        fields
      }, body, options);
    })();
  }
  create_embed_secret(body, options) {
    var _this23 = this;
    return _asyncToGenerator(function* () {
      return _this23.post('/embed_config/secrets', null, body, options);
    })();
  }
  delete_embed_secret(embed_secret_id, options) {
    var _this24 = this;
    return _asyncToGenerator(function* () {
      embed_secret_id = encodeParam(embed_secret_id);
      return _this24.delete("/embed_config/secrets/".concat(embed_secret_id), null, null, options);
    })();
  }
  create_sso_embed_url(body, options) {
    var _this25 = this;
    return _asyncToGenerator(function* () {
      return _this25.post('/embed/sso_url', null, body, options);
    })();
  }
  create_embed_url_as_me(body, options) {
    var _this26 = this;
    return _asyncToGenerator(function* () {
      return _this26.post('/embed/token_url/me', null, body, options);
    })();
  }
  validate_embed_url(url, options) {
    var _this27 = this;
    return _asyncToGenerator(function* () {
      return _this27.get('/embed/sso/validate', {
        url
      }, null, options);
    })();
  }
  acquire_embed_cookieless_session(body, options) {
    var _this28 = this;
    return _asyncToGenerator(function* () {
      return _this28.post('/embed/cookieless_session/acquire', null, body, options);
    })();
  }
  delete_embed_cookieless_session(session_reference_token, options) {
    var _this29 = this;
    return _asyncToGenerator(function* () {
      session_reference_token = encodeParam(session_reference_token);
      return _this29.delete("/embed/cookieless_session/".concat(session_reference_token), null, null, options);
    })();
  }
  generate_tokens_for_cookieless_session(body, options) {
    var _this30 = this;
    return _asyncToGenerator(function* () {
      return _this30.put('/embed/cookieless_session/generate_tokens', null, body, options);
    })();
  }
  ldap_config(options) {
    var _this31 = this;
    return _asyncToGenerator(function* () {
      return _this31.get('/ldap_config', null, null, options);
    })();
  }
  update_ldap_config(body, options) {
    var _this32 = this;
    return _asyncToGenerator(function* () {
      return _this32.patch('/ldap_config', null, body, options);
    })();
  }
  test_ldap_config_connection(body, options) {
    var _this33 = this;
    return _asyncToGenerator(function* () {
      return _this33.put('/ldap_config/test_connection', null, body, options);
    })();
  }
  test_ldap_config_auth(body, options) {
    var _this34 = this;
    return _asyncToGenerator(function* () {
      return _this34.put('/ldap_config/test_auth', null, body, options);
    })();
  }
  test_ldap_config_user_info(body, options) {
    var _this35 = this;
    return _asyncToGenerator(function* () {
      return _this35.put('/ldap_config/test_user_info', null, body, options);
    })();
  }
  test_ldap_config_user_auth(body, options) {
    var _this36 = this;
    return _asyncToGenerator(function* () {
      return _this36.put('/ldap_config/test_user_auth', null, body, options);
    })();
  }
  register_mobile_device(body, options) {
    var _this37 = this;
    return _asyncToGenerator(function* () {
      return _this37.post('/mobile/device', null, body, options);
    })();
  }
  update_mobile_device_registration(device_id, options) {
    var _this38 = this;
    return _asyncToGenerator(function* () {
      device_id = encodeParam(device_id);
      return _this38.patch("/mobile/device/".concat(device_id), null, null, options);
    })();
  }
  deregister_mobile_device(device_id, options) {
    var _this39 = this;
    return _asyncToGenerator(function* () {
      device_id = encodeParam(device_id);
      return _this39.delete("/mobile/device/".concat(device_id), null, null, options);
    })();
  }
  all_oauth_client_apps(fields, options) {
    var _this40 = this;
    return _asyncToGenerator(function* () {
      return _this40.get('/oauth_client_apps', {
        fields
      }, null, options);
    })();
  }
  oauth_client_app(client_guid, fields, options) {
    var _this41 = this;
    return _asyncToGenerator(function* () {
      client_guid = encodeParam(client_guid);
      return _this41.get("/oauth_client_apps/".concat(client_guid), {
        fields
      }, null, options);
    })();
  }
  register_oauth_client_app(client_guid, body, fields, options) {
    var _this42 = this;
    return _asyncToGenerator(function* () {
      client_guid = encodeParam(client_guid);
      return _this42.post("/oauth_client_apps/".concat(client_guid), {
        fields
      }, body, options);
    })();
  }
  update_oauth_client_app(client_guid, body, fields, options) {
    var _this43 = this;
    return _asyncToGenerator(function* () {
      client_guid = encodeParam(client_guid);
      return _this43.patch("/oauth_client_apps/".concat(client_guid), {
        fields
      }, body, options);
    })();
  }
  delete_oauth_client_app(client_guid, options) {
    var _this44 = this;
    return _asyncToGenerator(function* () {
      client_guid = encodeParam(client_guid);
      return _this44.delete("/oauth_client_apps/".concat(client_guid), null, null, options);
    })();
  }
  invalidate_tokens(client_guid, options) {
    var _this45 = this;
    return _asyncToGenerator(function* () {
      client_guid = encodeParam(client_guid);
      return _this45.delete("/oauth_client_apps/".concat(client_guid, "/tokens"), null, null, options);
    })();
  }
  activate_app_user(client_guid, user_id, fields, options) {
    var _this46 = this;
    return _asyncToGenerator(function* () {
      client_guid = encodeParam(client_guid);
      user_id = encodeParam(user_id);
      return _this46.post("/oauth_client_apps/".concat(client_guid, "/users/").concat(user_id), {
        fields
      }, null, options);
    })();
  }
  deactivate_app_user(client_guid, user_id, fields, options) {
    var _this47 = this;
    return _asyncToGenerator(function* () {
      client_guid = encodeParam(client_guid);
      user_id = encodeParam(user_id);
      return _this47.delete("/oauth_client_apps/".concat(client_guid, "/users/").concat(user_id), {
        fields
      }, null, options);
    })();
  }
  oidc_config(options) {
    var _this48 = this;
    return _asyncToGenerator(function* () {
      return _this48.get('/oidc_config', null, null, options);
    })();
  }
  update_oidc_config(body, options) {
    var _this49 = this;
    return _asyncToGenerator(function* () {
      return _this49.patch('/oidc_config', null, body, options);
    })();
  }
  oidc_test_config(test_slug, options) {
    var _this50 = this;
    return _asyncToGenerator(function* () {
      test_slug = encodeParam(test_slug);
      return _this50.get("/oidc_test_configs/".concat(test_slug), null, null, options);
    })();
  }
  delete_oidc_test_config(test_slug, options) {
    var _this51 = this;
    return _asyncToGenerator(function* () {
      test_slug = encodeParam(test_slug);
      return _this51.delete("/oidc_test_configs/".concat(test_slug), null, null, options);
    })();
  }
  create_oidc_test_config(body, options) {
    var _this52 = this;
    return _asyncToGenerator(function* () {
      return _this52.post('/oidc_test_configs', null, body, options);
    })();
  }
  password_config(options) {
    var _this53 = this;
    return _asyncToGenerator(function* () {
      return _this53.get('/password_config', null, null, options);
    })();
  }
  update_password_config(body, options) {
    var _this54 = this;
    return _asyncToGenerator(function* () {
      return _this54.patch('/password_config', null, body, options);
    })();
  }
  force_password_reset_at_next_login_for_all_users(options) {
    var _this55 = this;
    return _asyncToGenerator(function* () {
      return _this55.put('/password_config/force_password_reset_at_next_login_for_all_users', null, null, options);
    })();
  }
  saml_config(options) {
    var _this56 = this;
    return _asyncToGenerator(function* () {
      return _this56.get('/saml_config', null, null, options);
    })();
  }
  update_saml_config(body, options) {
    var _this57 = this;
    return _asyncToGenerator(function* () {
      return _this57.patch('/saml_config', null, body, options);
    })();
  }
  saml_test_config(test_slug, options) {
    var _this58 = this;
    return _asyncToGenerator(function* () {
      test_slug = encodeParam(test_slug);
      return _this58.get("/saml_test_configs/".concat(test_slug), null, null, options);
    })();
  }
  delete_saml_test_config(test_slug, options) {
    var _this59 = this;
    return _asyncToGenerator(function* () {
      test_slug = encodeParam(test_slug);
      return _this59.delete("/saml_test_configs/".concat(test_slug), null, null, options);
    })();
  }
  create_saml_test_config(body, options) {
    var _this60 = this;
    return _asyncToGenerator(function* () {
      return _this60.post('/saml_test_configs', null, body, options);
    })();
  }
  parse_saml_idp_metadata(body, options) {
    var _this61 = this;
    return _asyncToGenerator(function* () {
      return _this61.post('/parse_saml_idp_metadata', null, body, options);
    })();
  }
  fetch_and_parse_saml_idp_metadata(body, options) {
    var _this62 = this;
    return _asyncToGenerator(function* () {
      return _this62.post('/fetch_and_parse_saml_idp_metadata', null, body, options);
    })();
  }
  session_config(options) {
    var _this63 = this;
    return _asyncToGenerator(function* () {
      return _this63.get('/session_config', null, null, options);
    })();
  }
  update_session_config(body, options) {
    var _this64 = this;
    return _asyncToGenerator(function* () {
      return _this64.patch('/session_config', null, body, options);
    })();
  }
  get_support_access_allowlist_entries(fields, options) {
    var _this65 = this;
    return _asyncToGenerator(function* () {
      return _this65.get('/support_access/allowlist', {
        fields
      }, null, options);
    })();
  }
  add_support_access_allowlist_entries(body, options) {
    var _this66 = this;
    return _asyncToGenerator(function* () {
      return _this66.post('/support_access/allowlist', null, body, options);
    })();
  }
  delete_support_access_allowlist_entry(entry_id, options) {
    var _this67 = this;
    return _asyncToGenerator(function* () {
      entry_id = encodeParam(entry_id);
      return _this67.delete("/support_access/allowlist/".concat(entry_id), null, null, options);
    })();
  }
  enable_support_access(body, options) {
    var _this68 = this;
    return _asyncToGenerator(function* () {
      return _this68.put('/support_access/enable', null, body, options);
    })();
  }
  disable_support_access(options) {
    var _this69 = this;
    return _asyncToGenerator(function* () {
      return _this69.put('/support_access/disable', null, null, options);
    })();
  }
  support_access_status(options) {
    var _this70 = this;
    return _asyncToGenerator(function* () {
      return _this70.get('/support_access/status', null, null, options);
    })();
  }
  all_user_login_lockouts(fields, options) {
    var _this71 = this;
    return _asyncToGenerator(function* () {
      return _this71.get('/user_login_lockouts', {
        fields
      }, null, options);
    })();
  }
  search_user_login_lockouts(request, options) {
    var _this72 = this;
    return _asyncToGenerator(function* () {
      return _this72.get('/user_login_lockouts/search', {
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
  delete_user_login_lockout(key, options) {
    var _this73 = this;
    return _asyncToGenerator(function* () {
      key = encodeParam(key);
      return _this73.delete("/user_login_lockout/".concat(key), null, null, options);
    })();
  }
  all_boards(fields, options) {
    var _this74 = this;
    return _asyncToGenerator(function* () {
      return _this74.get('/boards', {
        fields
      }, null, options);
    })();
  }
  create_board(body, fields, options) {
    var _this75 = this;
    return _asyncToGenerator(function* () {
      return _this75.post('/boards', {
        fields
      }, body, options);
    })();
  }
  search_boards(request, options) {
    var _this76 = this;
    return _asyncToGenerator(function* () {
      return _this76.get('/boards/search', {
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
  board(board_id, fields, options) {
    var _this77 = this;
    return _asyncToGenerator(function* () {
      board_id = encodeParam(board_id);
      return _this77.get("/boards/".concat(board_id), {
        fields
      }, null, options);
    })();
  }
  update_board(board_id, body, fields, options) {
    var _this78 = this;
    return _asyncToGenerator(function* () {
      board_id = encodeParam(board_id);
      return _this78.patch("/boards/".concat(board_id), {
        fields
      }, body, options);
    })();
  }
  delete_board(board_id, options) {
    var _this79 = this;
    return _asyncToGenerator(function* () {
      board_id = encodeParam(board_id);
      return _this79.delete("/boards/".concat(board_id), null, null, options);
    })();
  }
  all_board_items(request, options) {
    var _this80 = this;
    return _asyncToGenerator(function* () {
      return _this80.get('/board_items', {
        fields: request.fields,
        sorts: request.sorts,
        board_section_id: request.board_section_id
      }, null, options);
    })();
  }
  create_board_item(body, fields, options) {
    var _this81 = this;
    return _asyncToGenerator(function* () {
      return _this81.post('/board_items', {
        fields
      }, body, options);
    })();
  }
  board_item(board_item_id, fields, options) {
    var _this82 = this;
    return _asyncToGenerator(function* () {
      board_item_id = encodeParam(board_item_id);
      return _this82.get("/board_items/".concat(board_item_id), {
        fields
      }, null, options);
    })();
  }
  update_board_item(board_item_id, body, fields, options) {
    var _this83 = this;
    return _asyncToGenerator(function* () {
      board_item_id = encodeParam(board_item_id);
      return _this83.patch("/board_items/".concat(board_item_id), {
        fields
      }, body, options);
    })();
  }
  delete_board_item(board_item_id, options) {
    var _this84 = this;
    return _asyncToGenerator(function* () {
      board_item_id = encodeParam(board_item_id);
      return _this84.delete("/board_items/".concat(board_item_id), null, null, options);
    })();
  }
  all_board_sections(request, options) {
    var _this85 = this;
    return _asyncToGenerator(function* () {
      return _this85.get('/board_sections', {
        fields: request.fields,
        sorts: request.sorts
      }, null, options);
    })();
  }
  create_board_section(body, fields, options) {
    var _this86 = this;
    return _asyncToGenerator(function* () {
      return _this86.post('/board_sections', {
        fields
      }, body, options);
    })();
  }
  board_section(board_section_id, fields, options) {
    var _this87 = this;
    return _asyncToGenerator(function* () {
      board_section_id = encodeParam(board_section_id);
      return _this87.get("/board_sections/".concat(board_section_id), {
        fields
      }, null, options);
    })();
  }
  update_board_section(board_section_id, body, fields, options) {
    var _this88 = this;
    return _asyncToGenerator(function* () {
      board_section_id = encodeParam(board_section_id);
      return _this88.patch("/board_sections/".concat(board_section_id), {
        fields
      }, body, options);
    })();
  }
  delete_board_section(board_section_id, options) {
    var _this89 = this;
    return _asyncToGenerator(function* () {
      board_section_id = encodeParam(board_section_id);
      return _this89.delete("/board_sections/".concat(board_section_id), null, null, options);
    })();
  }
  all_color_collections(fields, options) {
    var _this90 = this;
    return _asyncToGenerator(function* () {
      return _this90.get('/color_collections', {
        fields
      }, null, options);
    })();
  }
  create_color_collection(body, options) {
    var _this91 = this;
    return _asyncToGenerator(function* () {
      return _this91.post('/color_collections', null, body, options);
    })();
  }
  color_collections_custom(fields, options) {
    var _this92 = this;
    return _asyncToGenerator(function* () {
      return _this92.get('/color_collections/custom', {
        fields
      }, null, options);
    })();
  }
  color_collections_standard(fields, options) {
    var _this93 = this;
    return _asyncToGenerator(function* () {
      return _this93.get('/color_collections/standard', {
        fields
      }, null, options);
    })();
  }
  default_color_collection(options) {
    var _this94 = this;
    return _asyncToGenerator(function* () {
      return _this94.get('/color_collections/default', null, null, options);
    })();
  }
  set_default_color_collection(collection_id, options) {
    var _this95 = this;
    return _asyncToGenerator(function* () {
      return _this95.put('/color_collections/default', {
        collection_id
      }, null, options);
    })();
  }
  color_collection(collection_id, fields, options) {
    var _this96 = this;
    return _asyncToGenerator(function* () {
      collection_id = encodeParam(collection_id);
      return _this96.get("/color_collections/".concat(collection_id), {
        fields
      }, null, options);
    })();
  }
  update_color_collection(collection_id, body, options) {
    var _this97 = this;
    return _asyncToGenerator(function* () {
      collection_id = encodeParam(collection_id);
      return _this97.patch("/color_collections/".concat(collection_id), null, body, options);
    })();
  }
  delete_color_collection(collection_id, options) {
    var _this98 = this;
    return _asyncToGenerator(function* () {
      collection_id = encodeParam(collection_id);
      return _this98.delete("/color_collections/".concat(collection_id), null, null, options);
    })();
  }
  cloud_storage_configuration(options) {
    var _this99 = this;
    return _asyncToGenerator(function* () {
      return _this99.get('/cloud_storage', null, null, options);
    })();
  }
  update_cloud_storage_configuration(body, options) {
    var _this100 = this;
    return _asyncToGenerator(function* () {
      return _this100.patch('/cloud_storage', null, body, options);
    })();
  }
  custom_welcome_email(options) {
    var _this101 = this;
    return _asyncToGenerator(function* () {
      return _this101.get('/custom_welcome_email', null, null, options);
    })();
  }
  update_custom_welcome_email(body, send_test_welcome_email, options) {
    var _this102 = this;
    return _asyncToGenerator(function* () {
      return _this102.patch('/custom_welcome_email', {
        send_test_welcome_email
      }, body, options);
    })();
  }
  update_custom_welcome_email_test(body, options) {
    var _this103 = this;
    return _asyncToGenerator(function* () {
      return _this103.put('/custom_welcome_email_test', null, body, options);
    })();
  }
  digest_emails_enabled(options) {
    var _this104 = this;
    return _asyncToGenerator(function* () {
      return _this104.get('/digest_emails_enabled', null, null, options);
    })();
  }
  update_digest_emails_enabled(body, options) {
    var _this105 = this;
    return _asyncToGenerator(function* () {
      return _this105.patch('/digest_emails_enabled', null, body, options);
    })();
  }
  create_digest_email_send(options) {
    var _this106 = this;
    return _asyncToGenerator(function* () {
      return _this106.post('/digest_email_send', null, null, options);
    })();
  }
  public_egress_ip_addresses(options) {
    var _this107 = this;
    return _asyncToGenerator(function* () {
      return _this107.get('/public_egress_ip_addresses', null, null, options);
    })();
  }
  internal_help_resources_content(options) {
    var _this108 = this;
    return _asyncToGenerator(function* () {
      return _this108.get('/internal_help_resources_content', null, null, options);
    })();
  }
  update_internal_help_resources_content(body, options) {
    var _this109 = this;
    return _asyncToGenerator(function* () {
      return _this109.patch('/internal_help_resources_content', null, body, options);
    })();
  }
  internal_help_resources(options) {
    var _this110 = this;
    return _asyncToGenerator(function* () {
      return _this110.get('/internal_help_resources_enabled', null, null, options);
    })();
  }
  update_internal_help_resources(body, options) {
    var _this111 = this;
    return _asyncToGenerator(function* () {
      return _this111.patch('/internal_help_resources', null, body, options);
    })();
  }
  all_legacy_features(options) {
    var _this112 = this;
    return _asyncToGenerator(function* () {
      return _this112.get('/legacy_features', null, null, options);
    })();
  }
  legacy_feature(legacy_feature_id, options) {
    var _this113 = this;
    return _asyncToGenerator(function* () {
      legacy_feature_id = encodeParam(legacy_feature_id);
      return _this113.get("/legacy_features/".concat(legacy_feature_id), null, null, options);
    })();
  }
  update_legacy_feature(legacy_feature_id, body, options) {
    var _this114 = this;
    return _asyncToGenerator(function* () {
      legacy_feature_id = encodeParam(legacy_feature_id);
      return _this114.patch("/legacy_features/".concat(legacy_feature_id), null, body, options);
    })();
  }
  all_locales(options) {
    var _this115 = this;
    return _asyncToGenerator(function* () {
      return _this115.get('/locales', null, null, options);
    })();
  }
  mobile_settings(options) {
    var _this116 = this;
    return _asyncToGenerator(function* () {
      return _this116.get('/mobile/settings', null, null, options);
    })();
  }
  get_setting(fields, options) {
    var _this117 = this;
    return _asyncToGenerator(function* () {
      return _this117.get('/setting', {
        fields
      }, null, options);
    })();
  }
  set_setting(body, fields, options) {
    var _this118 = this;
    return _asyncToGenerator(function* () {
      return _this118.patch('/setting', {
        fields
      }, body, options);
    })();
  }
  set_smtp_settings(body, options) {
    var _this119 = this;
    return _asyncToGenerator(function* () {
      return _this119.post('/smtp_settings', null, body, options);
    })();
  }
  smtp_status(fields, options) {
    var _this120 = this;
    return _asyncToGenerator(function* () {
      return _this120.get('/smtp_status', {
        fields
      }, null, options);
    })();
  }
  all_timezones(options) {
    var _this121 = this;
    return _asyncToGenerator(function* () {
      return _this121.get('/timezones', null, null, options);
    })();
  }
  versions(fields, options) {
    var _this122 = this;
    return _asyncToGenerator(function* () {
      return _this122.get('/versions', {
        fields
      }, null, options);
    })();
  }
  api_spec(api_version, specification, options) {
    var _this123 = this;
    return _asyncToGenerator(function* () {
      api_version = encodeParam(api_version);
      specification = encodeParam(specification);
      return _this123.get("/api_spec/".concat(api_version, "/").concat(specification), null, null, options);
    })();
  }
  whitelabel_configuration(fields, options) {
    var _this124 = this;
    return _asyncToGenerator(function* () {
      return _this124.get('/whitelabel_configuration', {
        fields
      }, null, options);
    })();
  }
  update_whitelabel_configuration(body, options) {
    var _this125 = this;
    return _asyncToGenerator(function* () {
      return _this125.put('/whitelabel_configuration', null, body, options);
    })();
  }
  all_connections(fields, options) {
    var _this126 = this;
    return _asyncToGenerator(function* () {
      return _this126.get('/connections', {
        fields
      }, null, options);
    })();
  }
  create_connection(body, options) {
    var _this127 = this;
    return _asyncToGenerator(function* () {
      return _this127.post('/connections', null, body, options);
    })();
  }
  connection(connection_name, fields, options) {
    var _this128 = this;
    return _asyncToGenerator(function* () {
      connection_name = encodeParam(connection_name);
      return _this128.get("/connections/".concat(connection_name), {
        fields
      }, null, options);
    })();
  }
  update_connection(connection_name, body, options) {
    var _this129 = this;
    return _asyncToGenerator(function* () {
      connection_name = encodeParam(connection_name);
      return _this129.patch("/connections/".concat(connection_name), null, body, options);
    })();
  }
  delete_connection(connection_name, options) {
    var _this130 = this;
    return _asyncToGenerator(function* () {
      connection_name = encodeParam(connection_name);
      return _this130.delete("/connections/".concat(connection_name), null, null, options);
    })();
  }
  delete_connection_override(connection_name, override_context, options) {
    var _this131 = this;
    return _asyncToGenerator(function* () {
      connection_name = encodeParam(connection_name);
      override_context = encodeParam(override_context);
      return _this131.delete("/connections/".concat(connection_name, "/connection_override/").concat(override_context), null, null, options);
    })();
  }
  test_connection(connection_name, tests, options) {
    var _this132 = this;
    return _asyncToGenerator(function* () {
      connection_name = encodeParam(connection_name);
      return _this132.put("/connections/".concat(connection_name, "/test"), {
        tests
      }, null, options);
    })();
  }
  test_connection_config(body, tests, options) {
    var _this133 = this;
    return _asyncToGenerator(function* () {
      return _this133.put('/connections/test', {
        tests
      }, body, options);
    })();
  }
  all_dialect_infos(fields, options) {
    var _this134 = this;
    return _asyncToGenerator(function* () {
      return _this134.get('/dialect_info', {
        fields
      }, null, options);
    })();
  }
  all_external_oauth_applications(request, options) {
    var _this135 = this;
    return _asyncToGenerator(function* () {
      return _this135.get('/external_oauth_applications', {
        name: request.name,
        client_id: request.client_id
      }, null, options);
    })();
  }
  create_external_oauth_application(body, options) {
    var _this136 = this;
    return _asyncToGenerator(function* () {
      return _this136.post('/external_oauth_applications', null, body, options);
    })();
  }
  create_oauth_application_user_state(body, options) {
    var _this137 = this;
    return _asyncToGenerator(function* () {
      return _this137.post('/external_oauth_applications/user_state', null, body, options);
    })();
  }
  all_ssh_servers(fields, options) {
    var _this138 = this;
    return _asyncToGenerator(function* () {
      return _this138.get('/ssh_servers', {
        fields
      }, null, options);
    })();
  }
  create_ssh_server(body, options) {
    var _this139 = this;
    return _asyncToGenerator(function* () {
      return _this139.post('/ssh_servers', null, body, options);
    })();
  }
  ssh_server(ssh_server_id, options) {
    var _this140 = this;
    return _asyncToGenerator(function* () {
      ssh_server_id = encodeParam(ssh_server_id);
      return _this140.get("/ssh_server/".concat(ssh_server_id), null, null, options);
    })();
  }
  update_ssh_server(ssh_server_id, body, options) {
    var _this141 = this;
    return _asyncToGenerator(function* () {
      ssh_server_id = encodeParam(ssh_server_id);
      return _this141.patch("/ssh_server/".concat(ssh_server_id), null, body, options);
    })();
  }
  delete_ssh_server(ssh_server_id, options) {
    var _this142 = this;
    return _asyncToGenerator(function* () {
      ssh_server_id = encodeParam(ssh_server_id);
      return _this142.delete("/ssh_server/".concat(ssh_server_id), null, null, options);
    })();
  }
  test_ssh_server(ssh_server_id, options) {
    var _this143 = this;
    return _asyncToGenerator(function* () {
      ssh_server_id = encodeParam(ssh_server_id);
      return _this143.get("/ssh_server/".concat(ssh_server_id, "/test"), null, null, options);
    })();
  }
  all_ssh_tunnels(fields, options) {
    var _this144 = this;
    return _asyncToGenerator(function* () {
      return _this144.get('/ssh_tunnels', {
        fields
      }, null, options);
    })();
  }
  create_ssh_tunnel(body, options) {
    var _this145 = this;
    return _asyncToGenerator(function* () {
      return _this145.post('/ssh_tunnels', null, body, options);
    })();
  }
  ssh_tunnel(ssh_tunnel_id, options) {
    var _this146 = this;
    return _asyncToGenerator(function* () {
      ssh_tunnel_id = encodeParam(ssh_tunnel_id);
      return _this146.get("/ssh_tunnel/".concat(ssh_tunnel_id), null, null, options);
    })();
  }
  update_ssh_tunnel(ssh_tunnel_id, body, options) {
    var _this147 = this;
    return _asyncToGenerator(function* () {
      ssh_tunnel_id = encodeParam(ssh_tunnel_id);
      return _this147.patch("/ssh_tunnel/".concat(ssh_tunnel_id), null, body, options);
    })();
  }
  delete_ssh_tunnel(ssh_tunnel_id, options) {
    var _this148 = this;
    return _asyncToGenerator(function* () {
      ssh_tunnel_id = encodeParam(ssh_tunnel_id);
      return _this148.delete("/ssh_tunnel/".concat(ssh_tunnel_id), null, null, options);
    })();
  }
  test_ssh_tunnel(ssh_tunnel_id, options) {
    var _this149 = this;
    return _asyncToGenerator(function* () {
      ssh_tunnel_id = encodeParam(ssh_tunnel_id);
      return _this149.get("/ssh_tunnel/".concat(ssh_tunnel_id, "/test"), null, null, options);
    })();
  }
  ssh_public_key(options) {
    var _this150 = this;
    return _asyncToGenerator(function* () {
      return _this150.get('/ssh_public_key', null, null, options);
    })();
  }
  search_content_favorites(request, options) {
    var _this151 = this;
    return _asyncToGenerator(function* () {
      return _this151.get('/content_favorite/search', {
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
  content_favorite(content_favorite_id, fields, options) {
    var _this152 = this;
    return _asyncToGenerator(function* () {
      content_favorite_id = encodeParam(content_favorite_id);
      return _this152.get("/content_favorite/".concat(content_favorite_id), {
        fields
      }, null, options);
    })();
  }
  delete_content_favorite(content_favorite_id, options) {
    var _this153 = this;
    return _asyncToGenerator(function* () {
      content_favorite_id = encodeParam(content_favorite_id);
      return _this153.delete("/content_favorite/".concat(content_favorite_id), null, null, options);
    })();
  }
  create_content_favorite(body, options) {
    var _this154 = this;
    return _asyncToGenerator(function* () {
      return _this154.post('/content_favorite', null, body, options);
    })();
  }
  all_content_metadatas(parent_id, fields, options) {
    var _this155 = this;
    return _asyncToGenerator(function* () {
      return _this155.get('/content_metadata', {
        parent_id,
        fields
      }, null, options);
    })();
  }
  content_metadata(content_metadata_id, fields, options) {
    var _this156 = this;
    return _asyncToGenerator(function* () {
      content_metadata_id = encodeParam(content_metadata_id);
      return _this156.get("/content_metadata/".concat(content_metadata_id), {
        fields
      }, null, options);
    })();
  }
  update_content_metadata(content_metadata_id, body, options) {
    var _this157 = this;
    return _asyncToGenerator(function* () {
      content_metadata_id = encodeParam(content_metadata_id);
      return _this157.patch("/content_metadata/".concat(content_metadata_id), null, body, options);
    })();
  }
  all_content_metadata_accesses(content_metadata_id, fields, options) {
    var _this158 = this;
    return _asyncToGenerator(function* () {
      return _this158.get('/content_metadata_access', {
        content_metadata_id,
        fields
      }, null, options);
    })();
  }
  create_content_metadata_access(body, send_boards_notification_email, options) {
    var _this159 = this;
    return _asyncToGenerator(function* () {
      return _this159.post('/content_metadata_access', {
        send_boards_notification_email
      }, body, options);
    })();
  }
  update_content_metadata_access(content_metadata_access_id, body, options) {
    var _this160 = this;
    return _asyncToGenerator(function* () {
      content_metadata_access_id = encodeParam(content_metadata_access_id);
      return _this160.put("/content_metadata_access/".concat(content_metadata_access_id), null, body, options);
    })();
  }
  delete_content_metadata_access(content_metadata_access_id, options) {
    var _this161 = this;
    return _asyncToGenerator(function* () {
      content_metadata_access_id = encodeParam(content_metadata_access_id);
      return _this161.delete("/content_metadata_access/".concat(content_metadata_access_id), null, null, options);
    })();
  }
  search_content(request, options) {
    var _this162 = this;
    return _asyncToGenerator(function* () {
      request.terms = encodeParam(request.terms);
      return _this162.get("/content/".concat(request.terms), {
        fields: request.fields,
        types: request.types,
        limit: request.limit,
        offset: request.offset,
        page: request.page,
        per_page: request.per_page
      }, null, options);
    })();
  }
  content_thumbnail(request, options) {
    var _this163 = this;
    return _asyncToGenerator(function* () {
      request.type = encodeParam(request.type);
      request.resource_id = encodeParam(request.resource_id);
      return _this163.get("/content_thumbnail/".concat(request.type, "/").concat(request.resource_id), {
        reload: request.reload,
        theme: request.theme,
        format: request.format,
        width: request.width,
        height: request.height
      }, null, options);
    })();
  }
  content_validation(fields, options) {
    var _this164 = this;
    return _asyncToGenerator(function* () {
      return _this164.get('/content_validation', {
        fields
      }, null, options);
    })();
  }
  search_content_views(request, options) {
    var _this165 = this;
    return _asyncToGenerator(function* () {
      return _this165.get('/content_view/search', {
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
  vector_thumbnail(type, resource_id, reload, options) {
    var _this166 = this;
    return _asyncToGenerator(function* () {
      type = encodeParam(type);
      resource_id = encodeParam(resource_id);
      return _this166.get("/vector_thumbnail/".concat(type, "/").concat(resource_id), {
        reload
      }, null, options);
    })();
  }
  all_dashboards(fields, options) {
    var _this167 = this;
    return _asyncToGenerator(function* () {
      return _this167.get('/dashboards', {
        fields
      }, null, options);
    })();
  }
  create_dashboard(body, options) {
    var _this168 = this;
    return _asyncToGenerator(function* () {
      return _this168.post('/dashboards', null, body, options);
    })();
  }
  search_dashboards(request, options) {
    var _this169 = this;
    return _asyncToGenerator(function* () {
      return _this169.get('/dashboards/search', {
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
  import_lookml_dashboard(lookml_dashboard_id, space_id, body, raw_locale, options) {
    var _this170 = this;
    return _asyncToGenerator(function* () {
      lookml_dashboard_id = encodeParam(lookml_dashboard_id);
      space_id = encodeParam(space_id);
      return _this170.post("/dashboards/".concat(lookml_dashboard_id, "/import/").concat(space_id), {
        raw_locale
      }, body, options);
    })();
  }
  sync_lookml_dashboard(lookml_dashboard_id, body, raw_locale, options) {
    var _this171 = this;
    return _asyncToGenerator(function* () {
      lookml_dashboard_id = encodeParam(lookml_dashboard_id);
      return _this171.patch("/dashboards/".concat(lookml_dashboard_id, "/sync"), {
        raw_locale
      }, body, options);
    })();
  }
  dashboard(dashboard_id, fields, options) {
    var _this172 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = encodeParam(dashboard_id);
      return _this172.get("/dashboards/".concat(dashboard_id), {
        fields
      }, null, options);
    })();
  }
  update_dashboard(dashboard_id, body, options) {
    var _this173 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = encodeParam(dashboard_id);
      return _this173.patch("/dashboards/".concat(dashboard_id), null, body, options);
    })();
  }
  delete_dashboard(dashboard_id, options) {
    var _this174 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = encodeParam(dashboard_id);
      return _this174.delete("/dashboards/".concat(dashboard_id), null, null, options);
    })();
  }
  dashboard_aggregate_table_lookml(dashboard_id, options) {
    var _this175 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = encodeParam(dashboard_id);
      return _this175.get("/dashboards/aggregate_table_lookml/".concat(dashboard_id), null, null, options);
    })();
  }
  dashboard_lookml(dashboard_id, options) {
    var _this176 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = encodeParam(dashboard_id);
      return _this176.get("/dashboards/lookml/".concat(dashboard_id), null, null, options);
    })();
  }
  move_dashboard(dashboard_id, folder_id, options) {
    var _this177 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = encodeParam(dashboard_id);
      return _this177.patch("/dashboards/".concat(dashboard_id, "/move"), {
        folder_id
      }, null, options);
    })();
  }
  import_dashboard_from_lookml(body, options) {
    var _this178 = this;
    return _asyncToGenerator(function* () {
      return _this178.post('/dashboards/lookml', null, body, options);
    })();
  }
  create_dashboard_from_lookml(body, options) {
    var _this179 = this;
    return _asyncToGenerator(function* () {
      return _this179.post('/dashboards/from_lookml', null, body, options);
    })();
  }
  copy_dashboard(dashboard_id, folder_id, options) {
    var _this180 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = encodeParam(dashboard_id);
      return _this180.post("/dashboards/".concat(dashboard_id, "/copy"), {
        folder_id
      }, null, options);
    })();
  }
  search_dashboard_elements(request, options) {
    var _this181 = this;
    return _asyncToGenerator(function* () {
      return _this181.get('/dashboard_elements/search', {
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
  dashboard_element(dashboard_element_id, fields, options) {
    var _this182 = this;
    return _asyncToGenerator(function* () {
      dashboard_element_id = encodeParam(dashboard_element_id);
      return _this182.get("/dashboard_elements/".concat(dashboard_element_id), {
        fields
      }, null, options);
    })();
  }
  update_dashboard_element(dashboard_element_id, body, fields, options) {
    var _this183 = this;
    return _asyncToGenerator(function* () {
      dashboard_element_id = encodeParam(dashboard_element_id);
      return _this183.patch("/dashboard_elements/".concat(dashboard_element_id), {
        fields
      }, body, options);
    })();
  }
  delete_dashboard_element(dashboard_element_id, options) {
    var _this184 = this;
    return _asyncToGenerator(function* () {
      dashboard_element_id = encodeParam(dashboard_element_id);
      return _this184.delete("/dashboard_elements/".concat(dashboard_element_id), null, null, options);
    })();
  }
  dashboard_dashboard_elements(dashboard_id, fields, options) {
    var _this185 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = encodeParam(dashboard_id);
      return _this185.get("/dashboards/".concat(dashboard_id, "/dashboard_elements"), {
        fields
      }, null, options);
    })();
  }
  create_dashboard_element(request, options) {
    var _this186 = this;
    return _asyncToGenerator(function* () {
      return _this186.post('/dashboard_elements', {
        fields: request.fields,
        apply_filters: request.apply_filters
      }, request.body, options);
    })();
  }
  dashboard_filter(dashboard_filter_id, fields, options) {
    var _this187 = this;
    return _asyncToGenerator(function* () {
      dashboard_filter_id = encodeParam(dashboard_filter_id);
      return _this187.get("/dashboard_filters/".concat(dashboard_filter_id), {
        fields
      }, null, options);
    })();
  }
  update_dashboard_filter(dashboard_filter_id, body, fields, options) {
    var _this188 = this;
    return _asyncToGenerator(function* () {
      dashboard_filter_id = encodeParam(dashboard_filter_id);
      return _this188.patch("/dashboard_filters/".concat(dashboard_filter_id), {
        fields
      }, body, options);
    })();
  }
  delete_dashboard_filter(dashboard_filter_id, options) {
    var _this189 = this;
    return _asyncToGenerator(function* () {
      dashboard_filter_id = encodeParam(dashboard_filter_id);
      return _this189.delete("/dashboard_filters/".concat(dashboard_filter_id), null, null, options);
    })();
  }
  dashboard_dashboard_filters(dashboard_id, fields, options) {
    var _this190 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = encodeParam(dashboard_id);
      return _this190.get("/dashboards/".concat(dashboard_id, "/dashboard_filters"), {
        fields
      }, null, options);
    })();
  }
  create_dashboard_filter(body, fields, options) {
    var _this191 = this;
    return _asyncToGenerator(function* () {
      return _this191.post('/dashboard_filters', {
        fields
      }, body, options);
    })();
  }
  dashboard_layout_component(dashboard_layout_component_id, fields, options) {
    var _this192 = this;
    return _asyncToGenerator(function* () {
      dashboard_layout_component_id = encodeParam(dashboard_layout_component_id);
      return _this192.get("/dashboard_layout_components/".concat(dashboard_layout_component_id), {
        fields
      }, null, options);
    })();
  }
  update_dashboard_layout_component(dashboard_layout_component_id, body, fields, options) {
    var _this193 = this;
    return _asyncToGenerator(function* () {
      dashboard_layout_component_id = encodeParam(dashboard_layout_component_id);
      return _this193.patch("/dashboard_layout_components/".concat(dashboard_layout_component_id), {
        fields
      }, body, options);
    })();
  }
  dashboard_layout_dashboard_layout_components(dashboard_layout_id, fields, options) {
    var _this194 = this;
    return _asyncToGenerator(function* () {
      dashboard_layout_id = encodeParam(dashboard_layout_id);
      return _this194.get("/dashboard_layouts/".concat(dashboard_layout_id, "/dashboard_layout_components"), {
        fields
      }, null, options);
    })();
  }
  dashboard_layout(dashboard_layout_id, fields, options) {
    var _this195 = this;
    return _asyncToGenerator(function* () {
      dashboard_layout_id = encodeParam(dashboard_layout_id);
      return _this195.get("/dashboard_layouts/".concat(dashboard_layout_id), {
        fields
      }, null, options);
    })();
  }
  update_dashboard_layout(dashboard_layout_id, body, fields, options) {
    var _this196 = this;
    return _asyncToGenerator(function* () {
      dashboard_layout_id = encodeParam(dashboard_layout_id);
      return _this196.patch("/dashboard_layouts/".concat(dashboard_layout_id), {
        fields
      }, body, options);
    })();
  }
  delete_dashboard_layout(dashboard_layout_id, options) {
    var _this197 = this;
    return _asyncToGenerator(function* () {
      dashboard_layout_id = encodeParam(dashboard_layout_id);
      return _this197.delete("/dashboard_layouts/".concat(dashboard_layout_id), null, null, options);
    })();
  }
  dashboard_dashboard_layouts(dashboard_id, fields, options) {
    var _this198 = this;
    return _asyncToGenerator(function* () {
      dashboard_id = encodeParam(dashboard_id);
      return _this198.get("/dashboards/".concat(dashboard_id, "/dashboard_layouts"), {
        fields
      }, null, options);
    })();
  }
  create_dashboard_layout(body, fields, options) {
    var _this199 = this;
    return _asyncToGenerator(function* () {
      return _this199.post('/dashboard_layouts', {
        fields
      }, body, options);
    })();
  }
  perform_data_action(body, options) {
    var _this200 = this;
    return _asyncToGenerator(function* () {
      return _this200.post('/data_actions', null, body, options);
    })();
  }
  fetch_remote_data_action_form(body, options) {
    var _this201 = this;
    return _asyncToGenerator(function* () {
      return _this201.post('/data_actions/form', null, body, options);
    })();
  }
  all_datagroups(options) {
    var _this202 = this;
    return _asyncToGenerator(function* () {
      return _this202.get('/datagroups', null, null, options);
    })();
  }
  datagroup(datagroup_id, options) {
    var _this203 = this;
    return _asyncToGenerator(function* () {
      datagroup_id = encodeParam(datagroup_id);
      return _this203.get("/datagroups/".concat(datagroup_id), null, null, options);
    })();
  }
  update_datagroup(datagroup_id, body, options) {
    var _this204 = this;
    return _asyncToGenerator(function* () {
      datagroup_id = encodeParam(datagroup_id);
      return _this204.patch("/datagroups/".concat(datagroup_id), null, body, options);
    })();
  }
  graph_derived_tables_for_model(request, options) {
    var _this205 = this;
    return _asyncToGenerator(function* () {
      request.model = encodeParam(request.model);
      return _this205.get("/derived_table/graph/model/".concat(request.model), {
        format: request.format,
        color: request.color
      }, null, options);
    })();
  }
  graph_derived_tables_for_view(request, options) {
    var _this206 = this;
    return _asyncToGenerator(function* () {
      request.view = encodeParam(request.view);
      return _this206.get("/derived_table/graph/view/".concat(request.view), {
        models: request.models,
        workspace: request.workspace
      }, null, options);
    })();
  }
  start_pdt_build(request, options) {
    var _this207 = this;
    return _asyncToGenerator(function* () {
      request.model_name = encodeParam(request.model_name);
      request.view_name = encodeParam(request.view_name);
      return _this207.get("/derived_table/".concat(request.model_name, "/").concat(request.view_name, "/start"), {
        force_rebuild: request.force_rebuild,
        force_full_incremental: request.force_full_incremental,
        workspace: request.workspace,
        source: request.source
      }, null, options);
    })();
  }
  check_pdt_build(materialization_id, options) {
    var _this208 = this;
    return _asyncToGenerator(function* () {
      materialization_id = encodeParam(materialization_id);
      return _this208.get("/derived_table/".concat(materialization_id, "/status"), null, null, options);
    })();
  }
  stop_pdt_build(materialization_id, source, options) {
    var _this209 = this;
    return _asyncToGenerator(function* () {
      materialization_id = encodeParam(materialization_id);
      return _this209.get("/derived_table/".concat(materialization_id, "/stop"), {
        source
      }, null, options);
    })();
  }
  search_folders(request, options) {
    var _this210 = this;
    return _asyncToGenerator(function* () {
      return _this210.get('/folders/search', {
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
  folder(folder_id, fields, options) {
    var _this211 = this;
    return _asyncToGenerator(function* () {
      folder_id = encodeParam(folder_id);
      return _this211.get("/folders/".concat(folder_id), {
        fields
      }, null, options);
    })();
  }
  update_folder(folder_id, body, options) {
    var _this212 = this;
    return _asyncToGenerator(function* () {
      folder_id = encodeParam(folder_id);
      return _this212.patch("/folders/".concat(folder_id), null, body, options);
    })();
  }
  delete_folder(folder_id, options) {
    var _this213 = this;
    return _asyncToGenerator(function* () {
      folder_id = encodeParam(folder_id);
      return _this213.delete("/folders/".concat(folder_id), null, null, options);
    })();
  }
  all_folders(fields, options) {
    var _this214 = this;
    return _asyncToGenerator(function* () {
      return _this214.get('/folders', {
        fields
      }, null, options);
    })();
  }
  create_folder(body, options) {
    var _this215 = this;
    return _asyncToGenerator(function* () {
      return _this215.post('/folders', null, body, options);
    })();
  }
  folder_children(request, options) {
    var _this216 = this;
    return _asyncToGenerator(function* () {
      request.folder_id = encodeParam(request.folder_id);
      return _this216.get("/folders/".concat(request.folder_id, "/children"), {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts
      }, null, options);
    })();
  }
  folder_children_search(request, options) {
    var _this217 = this;
    return _asyncToGenerator(function* () {
      request.folder_id = encodeParam(request.folder_id);
      return _this217.get("/folders/".concat(request.folder_id, "/children/search"), {
        fields: request.fields,
        sorts: request.sorts,
        name: request.name
      }, null, options);
    })();
  }
  folder_parent(folder_id, fields, options) {
    var _this218 = this;
    return _asyncToGenerator(function* () {
      folder_id = encodeParam(folder_id);
      return _this218.get("/folders/".concat(folder_id, "/parent"), {
        fields
      }, null, options);
    })();
  }
  folder_ancestors(folder_id, fields, options) {
    var _this219 = this;
    return _asyncToGenerator(function* () {
      folder_id = encodeParam(folder_id);
      return _this219.get("/folders/".concat(folder_id, "/ancestors"), {
        fields
      }, null, options);
    })();
  }
  folder_looks(folder_id, fields, options) {
    var _this220 = this;
    return _asyncToGenerator(function* () {
      folder_id = encodeParam(folder_id);
      return _this220.get("/folders/".concat(folder_id, "/looks"), {
        fields
      }, null, options);
    })();
  }
  folder_dashboards(folder_id, fields, options) {
    var _this221 = this;
    return _asyncToGenerator(function* () {
      folder_id = encodeParam(folder_id);
      return _this221.get("/folders/".concat(folder_id, "/dashboards"), {
        fields
      }, null, options);
    })();
  }
  all_groups(request, options) {
    var _this222 = this;
    return _asyncToGenerator(function* () {
      return _this222.get('/groups', {
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
  create_group(body, fields, options) {
    var _this223 = this;
    return _asyncToGenerator(function* () {
      return _this223.post('/groups', {
        fields
      }, body, options);
    })();
  }
  search_groups(request, options) {
    var _this224 = this;
    return _asyncToGenerator(function* () {
      return _this224.get('/groups/search', {
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
  search_groups_with_roles(request, options) {
    var _this225 = this;
    return _asyncToGenerator(function* () {
      return _this225.get('/groups/search/with_roles', {
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
  search_groups_with_hierarchy(request, options) {
    var _this226 = this;
    return _asyncToGenerator(function* () {
      return _this226.get('/groups/search/with_hierarchy', {
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
  group(group_id, fields, options) {
    var _this227 = this;
    return _asyncToGenerator(function* () {
      group_id = encodeParam(group_id);
      return _this227.get("/groups/".concat(group_id), {
        fields
      }, null, options);
    })();
  }
  update_group(group_id, body, fields, options) {
    var _this228 = this;
    return _asyncToGenerator(function* () {
      group_id = encodeParam(group_id);
      return _this228.patch("/groups/".concat(group_id), {
        fields
      }, body, options);
    })();
  }
  delete_group(group_id, options) {
    var _this229 = this;
    return _asyncToGenerator(function* () {
      group_id = encodeParam(group_id);
      return _this229.delete("/groups/".concat(group_id), null, null, options);
    })();
  }
  all_group_groups(group_id, fields, options) {
    var _this230 = this;
    return _asyncToGenerator(function* () {
      group_id = encodeParam(group_id);
      return _this230.get("/groups/".concat(group_id, "/groups"), {
        fields
      }, null, options);
    })();
  }
  add_group_group(group_id, body, options) {
    var _this231 = this;
    return _asyncToGenerator(function* () {
      group_id = encodeParam(group_id);
      return _this231.post("/groups/".concat(group_id, "/groups"), null, body, options);
    })();
  }
  all_group_users(request, options) {
    var _this232 = this;
    return _asyncToGenerator(function* () {
      request.group_id = encodeParam(request.group_id);
      return _this232.get("/groups/".concat(request.group_id, "/users"), {
        fields: request.fields,
        page: request.page,
        per_page: request.per_page,
        limit: request.limit,
        offset: request.offset,
        sorts: request.sorts
      }, null, options);
    })();
  }
  add_group_user(group_id, body, options) {
    var _this233 = this;
    return _asyncToGenerator(function* () {
      group_id = encodeParam(group_id);
      return _this233.post("/groups/".concat(group_id, "/users"), null, body, options);
    })();
  }
  delete_group_user(group_id, user_id, options) {
    var _this234 = this;
    return _asyncToGenerator(function* () {
      group_id = encodeParam(group_id);
      user_id = encodeParam(user_id);
      return _this234.delete("/groups/".concat(group_id, "/users/").concat(user_id), null, null, options);
    })();
  }
  delete_group_from_group(group_id, deleting_group_id, options) {
    var _this235 = this;
    return _asyncToGenerator(function* () {
      group_id = encodeParam(group_id);
      deleting_group_id = encodeParam(deleting_group_id);
      return _this235.delete("/groups/".concat(group_id, "/groups/").concat(deleting_group_id), null, null, options);
    })();
  }
  update_user_attribute_group_value(group_id, user_attribute_id, body, options) {
    var _this236 = this;
    return _asyncToGenerator(function* () {
      group_id = encodeParam(group_id);
      user_attribute_id = encodeParam(user_attribute_id);
      return _this236.patch("/groups/".concat(group_id, "/attribute_values/").concat(user_attribute_id), null, body, options);
    })();
  }
  delete_user_attribute_group_value(group_id, user_attribute_id, options) {
    var _this237 = this;
    return _asyncToGenerator(function* () {
      group_id = encodeParam(group_id);
      user_attribute_id = encodeParam(user_attribute_id);
      return _this237.delete("/groups/".concat(group_id, "/attribute_values/").concat(user_attribute_id), null, null, options);
    })();
  }
  all_primary_homepage_sections(fields, options) {
    var _this238 = this;
    return _asyncToGenerator(function* () {
      return _this238.get('/primary_homepage_sections', {
        fields
      }, null, options);
    })();
  }
  all_integration_hubs(fields, options) {
    var _this239 = this;
    return _asyncToGenerator(function* () {
      return _this239.get('/integration_hubs', {
        fields
      }, null, options);
    })();
  }
  create_integration_hub(body, fields, options) {
    var _this240 = this;
    return _asyncToGenerator(function* () {
      return _this240.post('/integration_hubs', {
        fields
      }, body, options);
    })();
  }
  integration_hub(integration_hub_id, fields, options) {
    var _this241 = this;
    return _asyncToGenerator(function* () {
      integration_hub_id = encodeParam(integration_hub_id);
      return _this241.get("/integration_hubs/".concat(integration_hub_id), {
        fields
      }, null, options);
    })();
  }
  update_integration_hub(integration_hub_id, body, fields, options) {
    var _this242 = this;
    return _asyncToGenerator(function* () {
      integration_hub_id = encodeParam(integration_hub_id);
      return _this242.patch("/integration_hubs/".concat(integration_hub_id), {
        fields
      }, body, options);
    })();
  }
  delete_integration_hub(integration_hub_id, options) {
    var _this243 = this;
    return _asyncToGenerator(function* () {
      integration_hub_id = encodeParam(integration_hub_id);
      return _this243.delete("/integration_hubs/".concat(integration_hub_id), null, null, options);
    })();
  }
  accept_integration_hub_legal_agreement(integration_hub_id, options) {
    var _this244 = this;
    return _asyncToGenerator(function* () {
      integration_hub_id = encodeParam(integration_hub_id);
      return _this244.post("/integration_hubs/".concat(integration_hub_id, "/accept_legal_agreement"), null, null, options);
    })();
  }
  all_integrations(request, options) {
    var _this245 = this;
    return _asyncToGenerator(function* () {
      return _this245.get('/integrations', {
        fields: request.fields,
        integration_hub_id: request.integration_hub_id
      }, null, options);
    })();
  }
  integration(integration_id, fields, options) {
    var _this246 = this;
    return _asyncToGenerator(function* () {
      integration_id = encodeParam(integration_id);
      return _this246.get("/integrations/".concat(integration_id), {
        fields
      }, null, options);
    })();
  }
  update_integration(integration_id, body, fields, options) {
    var _this247 = this;
    return _asyncToGenerator(function* () {
      integration_id = encodeParam(integration_id);
      return _this247.patch("/integrations/".concat(integration_id), {
        fields
      }, body, options);
    })();
  }
  fetch_integration_form(integration_id, body, options) {
    var _this248 = this;
    return _asyncToGenerator(function* () {
      integration_id = encodeParam(integration_id);
      return _this248.post("/integrations/".concat(integration_id, "/form"), null, body, options);
    })();
  }
  test_integration(integration_id, options) {
    var _this249 = this;
    return _asyncToGenerator(function* () {
      integration_id = encodeParam(integration_id);
      return _this249.post("/integrations/".concat(integration_id, "/test"), null, null, options);
    })();
  }
  all_looks(fields, options) {
    var _this250 = this;
    return _asyncToGenerator(function* () {
      return _this250.get('/looks', {
        fields
      }, null, options);
    })();
  }
  create_look(body, fields, options) {
    var _this251 = this;
    return _asyncToGenerator(function* () {
      return _this251.post('/looks', {
        fields
      }, body, options);
    })();
  }
  search_looks(request, options) {
    var _this252 = this;
    return _asyncToGenerator(function* () {
      return _this252.get('/looks/search', {
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
  look(look_id, fields, options) {
    var _this253 = this;
    return _asyncToGenerator(function* () {
      look_id = encodeParam(look_id);
      return _this253.get("/looks/".concat(look_id), {
        fields
      }, null, options);
    })();
  }
  update_look(look_id, body, fields, options) {
    var _this254 = this;
    return _asyncToGenerator(function* () {
      look_id = encodeParam(look_id);
      return _this254.patch("/looks/".concat(look_id), {
        fields
      }, body, options);
    })();
  }
  delete_look(look_id, options) {
    var _this255 = this;
    return _asyncToGenerator(function* () {
      look_id = encodeParam(look_id);
      return _this255.delete("/looks/".concat(look_id), null, null, options);
    })();
  }
  run_look(request, options) {
    var _this256 = this;
    return _asyncToGenerator(function* () {
      request.look_id = encodeParam(request.look_id);
      request.result_format = encodeParam(request.result_format);
      return _this256.get("/looks/".concat(request.look_id, "/run/").concat(request.result_format), {
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
  copy_look(look_id, folder_id, options) {
    var _this257 = this;
    return _asyncToGenerator(function* () {
      look_id = encodeParam(look_id);
      return _this257.post("/looks/".concat(look_id, "/copy"), {
        folder_id
      }, null, options);
    })();
  }
  move_look(look_id, folder_id, options) {
    var _this258 = this;
    return _asyncToGenerator(function* () {
      look_id = encodeParam(look_id);
      return _this258.patch("/looks/".concat(look_id, "/move"), {
        folder_id
      }, null, options);
    })();
  }
  all_lookml_models(request, options) {
    var _this259 = this;
    return _asyncToGenerator(function* () {
      return _this259.get('/lookml_models', {
        fields: request.fields,
        limit: request.limit,
        offset: request.offset
      }, null, options);
    })();
  }
  create_lookml_model(body, options) {
    var _this260 = this;
    return _asyncToGenerator(function* () {
      return _this260.post('/lookml_models', null, body, options);
    })();
  }
  lookml_model(lookml_model_name, fields, options) {
    var _this261 = this;
    return _asyncToGenerator(function* () {
      lookml_model_name = encodeParam(lookml_model_name);
      return _this261.get("/lookml_models/".concat(lookml_model_name), {
        fields
      }, null, options);
    })();
  }
  update_lookml_model(lookml_model_name, body, options) {
    var _this262 = this;
    return _asyncToGenerator(function* () {
      lookml_model_name = encodeParam(lookml_model_name);
      return _this262.patch("/lookml_models/".concat(lookml_model_name), null, body, options);
    })();
  }
  delete_lookml_model(lookml_model_name, options) {
    var _this263 = this;
    return _asyncToGenerator(function* () {
      lookml_model_name = encodeParam(lookml_model_name);
      return _this263.delete("/lookml_models/".concat(lookml_model_name), null, null, options);
    })();
  }
  lookml_model_explore(lookml_model_name, explore_name, fields, options) {
    var _this264 = this;
    return _asyncToGenerator(function* () {
      lookml_model_name = encodeParam(lookml_model_name);
      explore_name = encodeParam(explore_name);
      return _this264.get("/lookml_models/".concat(lookml_model_name, "/explores/").concat(explore_name), {
        fields
      }, null, options);
    })();
  }
  model_fieldname_suggestions(request, options) {
    var _this265 = this;
    return _asyncToGenerator(function* () {
      request.model_name = encodeParam(request.model_name);
      request.view_name = encodeParam(request.view_name);
      request.field_name = encodeParam(request.field_name);
      return _this265.get("/models/".concat(request.model_name, "/views/").concat(request.view_name, "/fields/").concat(request.field_name, "/suggestions"), {
        term: request.term,
        filters: request.filters
      }, null, options);
    })();
  }
  get_model(model_name, options) {
    var _this266 = this;
    return _asyncToGenerator(function* () {
      model_name = encodeParam(model_name);
      return _this266.get("/models/".concat(model_name), null, null, options);
    })();
  }
  connection_databases(connection_name, options) {
    var _this267 = this;
    return _asyncToGenerator(function* () {
      connection_name = encodeParam(connection_name);
      return _this267.get("/connections/".concat(connection_name, "/databases"), null, null, options);
    })();
  }
  connection_features(connection_name, fields, options) {
    var _this268 = this;
    return _asyncToGenerator(function* () {
      connection_name = encodeParam(connection_name);
      return _this268.get("/connections/".concat(connection_name, "/features"), {
        fields
      }, null, options);
    })();
  }
  connection_schemas(request, options) {
    var _this269 = this;
    return _asyncToGenerator(function* () {
      request.connection_name = encodeParam(request.connection_name);
      return _this269.get("/connections/".concat(request.connection_name, "/schemas"), {
        database: request.database,
        cache: request.cache,
        fields: request.fields
      }, null, options);
    })();
  }
  connection_tables(request, options) {
    var _this270 = this;
    return _asyncToGenerator(function* () {
      request.connection_name = encodeParam(request.connection_name);
      return _this270.get("/connections/".concat(request.connection_name, "/tables"), {
        database: request.database,
        schema_name: request.schema_name,
        cache: request.cache,
        fields: request.fields,
        table_filter: request.table_filter,
        table_limit: request.table_limit
      }, null, options);
    })();
  }
  connection_columns(request, options) {
    var _this271 = this;
    return _asyncToGenerator(function* () {
      request.connection_name = encodeParam(request.connection_name);
      return _this271.get("/connections/".concat(request.connection_name, "/columns"), {
        database: request.database,
        schema_name: request.schema_name,
        cache: request.cache,
        table_limit: request.table_limit,
        table_names: request.table_names,
        fields: request.fields
      }, null, options);
    })();
  }
  connection_search_columns(request, options) {
    var _this272 = this;
    return _asyncToGenerator(function* () {
      request.connection_name = encodeParam(request.connection_name);
      return _this272.get("/connections/".concat(request.connection_name, "/search_columns"), {
        column_name: request.column_name,
        fields: request.fields
      }, null, options);
    })();
  }
  connection_cost_estimate(connection_name, body, fields, options) {
    var _this273 = this;
    return _asyncToGenerator(function* () {
      connection_name = encodeParam(connection_name);
      return _this273.post("/connections/".concat(connection_name, "/cost_estimate"), {
        fields
      }, body, options);
    })();
  }
  lock_all(project_id, fields, options) {
    var _this274 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this274.post("/projects/".concat(project_id, "/manifest/lock_all"), {
        fields
      }, null, options);
    })();
  }
  all_git_branches(project_id, options) {
    var _this275 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this275.get("/projects/".concat(project_id, "/git_branches"), null, null, options);
    })();
  }
  git_branch(project_id, options) {
    var _this276 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this276.get("/projects/".concat(project_id, "/git_branch"), null, null, options);
    })();
  }
  update_git_branch(project_id, body, options) {
    var _this277 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this277.put("/projects/".concat(project_id, "/git_branch"), null, body, options);
    })();
  }
  create_git_branch(project_id, body, options) {
    var _this278 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this278.post("/projects/".concat(project_id, "/git_branch"), null, body, options);
    })();
  }
  find_git_branch(project_id, branch_name, options) {
    var _this279 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      branch_name = encodeParam(branch_name);
      return _this279.get("/projects/".concat(project_id, "/git_branch/").concat(branch_name), null, null, options);
    })();
  }
  delete_git_branch(project_id, branch_name, options) {
    var _this280 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      branch_name = encodeParam(branch_name);
      return _this280.delete("/projects/".concat(project_id, "/git_branch/").concat(branch_name), null, null, options);
    })();
  }
  deploy_ref_to_production(request, options) {
    var _this281 = this;
    return _asyncToGenerator(function* () {
      request.project_id = encodeParam(request.project_id);
      return _this281.post("/projects/".concat(request.project_id, "/deploy_ref_to_production"), {
        branch: request.branch,
        ref: request.ref
      }, null, options);
    })();
  }
  deploy_to_production(project_id, options) {
    var _this282 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this282.post("/projects/".concat(project_id, "/deploy_to_production"), null, null, options);
    })();
  }
  reset_project_to_production(project_id, options) {
    var _this283 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this283.post("/projects/".concat(project_id, "/reset_to_production"), null, null, options);
    })();
  }
  reset_project_to_remote(project_id, options) {
    var _this284 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this284.post("/projects/".concat(project_id, "/reset_to_remote"), null, null, options);
    })();
  }
  all_projects(fields, options) {
    var _this285 = this;
    return _asyncToGenerator(function* () {
      return _this285.get('/projects', {
        fields
      }, null, options);
    })();
  }
  create_project(body, options) {
    var _this286 = this;
    return _asyncToGenerator(function* () {
      return _this286.post('/projects', null, body, options);
    })();
  }
  project(project_id, fields, options) {
    var _this287 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this287.get("/projects/".concat(project_id), {
        fields
      }, null, options);
    })();
  }
  update_project(project_id, body, fields, options) {
    var _this288 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this288.patch("/projects/".concat(project_id), {
        fields
      }, body, options);
    })();
  }
  manifest(project_id, options) {
    var _this289 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this289.get("/projects/".concat(project_id, "/manifest"), null, null, options);
    })();
  }
  git_deploy_key(project_id, options) {
    var _this290 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this290.get("/projects/".concat(project_id, "/git/deploy_key"), null, null, options);
    })();
  }
  create_git_deploy_key(project_id, options) {
    var _this291 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this291.post("/projects/".concat(project_id, "/git/deploy_key"), null, null, options);
    })();
  }
  project_validation_results(project_id, fields, options) {
    var _this292 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this292.get("/projects/".concat(project_id, "/validate"), {
        fields
      }, null, options);
    })();
  }
  validate_project(project_id, fields, options) {
    var _this293 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this293.post("/projects/".concat(project_id, "/validate"), {
        fields
      }, null, options);
    })();
  }
  project_workspace(project_id, fields, options) {
    var _this294 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this294.get("/projects/".concat(project_id, "/current_workspace"), {
        fields
      }, null, options);
    })();
  }
  all_project_files(project_id, fields, options) {
    var _this295 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this295.get("/projects/".concat(project_id, "/files"), {
        fields
      }, null, options);
    })();
  }
  project_file(project_id, file_id, fields, options) {
    var _this296 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this296.get("/projects/".concat(project_id, "/files/file"), {
        file_id,
        fields
      }, null, options);
    })();
  }
  all_git_connection_tests(project_id, remote_url, options) {
    var _this297 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this297.get("/projects/".concat(project_id, "/git_connection_tests"), {
        remote_url
      }, null, options);
    })();
  }
  run_git_connection_test(request, options) {
    var _this298 = this;
    return _asyncToGenerator(function* () {
      request.project_id = encodeParam(request.project_id);
      request.test_id = encodeParam(request.test_id);
      return _this298.get("/projects/".concat(request.project_id, "/git_connection_tests/").concat(request.test_id), {
        remote_url: request.remote_url,
        use_production: request.use_production
      }, null, options);
    })();
  }
  all_lookml_tests(project_id, file_id, options) {
    var _this299 = this;
    return _asyncToGenerator(function* () {
      project_id = encodeParam(project_id);
      return _this299.get("/projects/".concat(project_id, "/lookml_tests"), {
        file_id
      }, null, options);
    })();
  }
  run_lookml_test(request, options) {
    var _this300 = this;
    return _asyncToGenerator(function* () {
      request.project_id = encodeParam(request.project_id);
      return _this300.get("/projects/".concat(request.project_id, "/lookml_tests/run"), {
        file_id: request.file_id,
        test: request.test,
        model: request.model
      }, null, options);
    })();
  }
  tag_ref(request, options) {
    var _this301 = this;
    return _asyncToGenerator(function* () {
      request.project_id = encodeParam(request.project_id);
      return _this301.post("/projects/".concat(request.project_id, "/tag"), {
        commit_sha: request.commit_sha,
        tag_name: request.tag_name,
        tag_message: request.tag_message
      }, request.body, options);
    })();
  }
  update_repository_credential(root_project_id, credential_id, body, options) {
    var _this302 = this;
    return _asyncToGenerator(function* () {
      root_project_id = encodeParam(root_project_id);
      credential_id = encodeParam(credential_id);
      return _this302.put("/projects/".concat(root_project_id, "/credential/").concat(credential_id), null, body, options);
    })();
  }
  delete_repository_credential(root_project_id, credential_id, options) {
    var _this303 = this;
    return _asyncToGenerator(function* () {
      root_project_id = encodeParam(root_project_id);
      credential_id = encodeParam(credential_id);
      return _this303.delete("/projects/".concat(root_project_id, "/credential/").concat(credential_id), null, null, options);
    })();
  }
  get_all_repository_credentials(root_project_id, options) {
    var _this304 = this;
    return _asyncToGenerator(function* () {
      root_project_id = encodeParam(root_project_id);
      return _this304.get("/projects/".concat(root_project_id, "/credentials"), null, null, options);
    })();
  }
  create_query_task(request, options) {
    var _this305 = this;
    return _asyncToGenerator(function* () {
      return _this305.post('/query_tasks', {
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
  query_task_multi_results(query_task_ids, options) {
    var _this306 = this;
    return _asyncToGenerator(function* () {
      return _this306.get('/query_tasks/multi_results', {
        query_task_ids
      }, null, options);
    })();
  }
  query_task(query_task_id, fields, options) {
    var _this307 = this;
    return _asyncToGenerator(function* () {
      query_task_id = encodeParam(query_task_id);
      return _this307.get("/query_tasks/".concat(query_task_id), {
        fields
      }, null, options);
    })();
  }
  query_task_results(query_task_id, options) {
    var _this308 = this;
    return _asyncToGenerator(function* () {
      query_task_id = encodeParam(query_task_id);
      return _this308.get("/query_tasks/".concat(query_task_id, "/results"), null, null, options);
    })();
  }
  query(query_id, fields, options) {
    var _this309 = this;
    return _asyncToGenerator(function* () {
      query_id = encodeParam(query_id);
      return _this309.get("/queries/".concat(query_id), {
        fields
      }, null, options);
    })();
  }
  query_for_slug(slug, fields, options) {
    var _this310 = this;
    return _asyncToGenerator(function* () {
      slug = encodeParam(slug);
      return _this310.get("/queries/slug/".concat(slug), {
        fields
      }, null, options);
    })();
  }
  create_query(body, fields, options) {
    var _this311 = this;
    return _asyncToGenerator(function* () {
      return _this311.post('/queries', {
        fields
      }, body, options);
    })();
  }
  run_query(request, options) {
    var _this312 = this;
    return _asyncToGenerator(function* () {
      request.query_id = encodeParam(request.query_id);
      request.result_format = encodeParam(request.result_format);
      return _this312.get("/queries/".concat(request.query_id, "/run/").concat(request.result_format), {
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
  run_inline_query(request, options) {
    var _this313 = this;
    return _asyncToGenerator(function* () {
      request.result_format = encodeParam(request.result_format);
      return _this313.post("/queries/run/".concat(request.result_format), {
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
  run_url_encoded_query(model_name, view_name, result_format, options) {
    var _this314 = this;
    return _asyncToGenerator(function* () {
      model_name = encodeParam(model_name);
      view_name = encodeParam(view_name);
      result_format = encodeParam(result_format);
      return _this314.get("/queries/models/".concat(model_name, "/views/").concat(view_name, "/run/").concat(result_format), null, null, options);
    })();
  }
  merge_query(merge_query_id, fields, options) {
    var _this315 = this;
    return _asyncToGenerator(function* () {
      merge_query_id = encodeParam(merge_query_id);
      return _this315.get("/merge_queries/".concat(merge_query_id), {
        fields
      }, null, options);
    })();
  }
  create_merge_query(body, fields, options) {
    var _this316 = this;
    return _asyncToGenerator(function* () {
      return _this316.post('/merge_queries', {
        fields
      }, body, options);
    })();
  }
  all_running_queries(options) {
    var _this317 = this;
    return _asyncToGenerator(function* () {
      return _this317.get('/running_queries', null, null, options);
    })();
  }
  kill_query(query_task_id, options) {
    var _this318 = this;
    return _asyncToGenerator(function* () {
      query_task_id = encodeParam(query_task_id);
      return _this318.delete("/running_queries/".concat(query_task_id), null, null, options);
    })();
  }
  create_sql_query(body, options) {
    var _this319 = this;
    return _asyncToGenerator(function* () {
      return _this319.post('/sql_queries', null, body, options);
    })();
  }
  sql_query(slug, options) {
    var _this320 = this;
    return _asyncToGenerator(function* () {
      slug = encodeParam(slug);
      return _this320.get("/sql_queries/".concat(slug), null, null, options);
    })();
  }
  run_sql_query(slug, result_format, download, options) {
    var _this321 = this;
    return _asyncToGenerator(function* () {
      slug = encodeParam(slug);
      result_format = encodeParam(result_format);
      return _this321.post("/sql_queries/".concat(slug, "/run/").concat(result_format), {
        download
      }, null, options);
    })();
  }
  create_look_render_task(look_id, result_format, width, height, fields, options) {
    var _this322 = this;
    return _asyncToGenerator(function* () {
      look_id = encodeParam(look_id);
      result_format = encodeParam(result_format);
      return _this322.post("/render_tasks/looks/".concat(look_id, "/").concat(result_format), {
        width,
        height,
        fields
      }, null, options);
    })();
  }
  create_query_render_task(query_id, result_format, width, height, fields, options) {
    var _this323 = this;
    return _asyncToGenerator(function* () {
      query_id = encodeParam(query_id);
      result_format = encodeParam(result_format);
      return _this323.post("/render_tasks/queries/".concat(query_id, "/").concat(result_format), {
        width,
        height,
        fields
      }, null, options);
    })();
  }
  create_dashboard_render_task(request, options) {
    var _this324 = this;
    return _asyncToGenerator(function* () {
      request.dashboard_id = encodeParam(request.dashboard_id);
      request.result_format = encodeParam(request.result_format);
      return _this324.post("/render_tasks/dashboards/".concat(request.dashboard_id, "/").concat(request.result_format), {
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
  render_task(render_task_id, fields, options) {
    var _this325 = this;
    return _asyncToGenerator(function* () {
      render_task_id = encodeParam(render_task_id);
      return _this325.get("/render_tasks/".concat(render_task_id), {
        fields
      }, null, options);
    })();
  }
  render_task_results(render_task_id, options) {
    var _this326 = this;
    return _asyncToGenerator(function* () {
      render_task_id = encodeParam(render_task_id);
      return _this326.get("/render_tasks/".concat(render_task_id, "/results"), null, null, options);
    })();
  }
  create_dashboard_element_render_task(dashboard_element_id, result_format, width, height, fields, options) {
    var _this327 = this;
    return _asyncToGenerator(function* () {
      dashboard_element_id = encodeParam(dashboard_element_id);
      result_format = encodeParam(result_format);
      return _this327.post("/render_tasks/dashboard_elements/".concat(dashboard_element_id, "/").concat(result_format), {
        width,
        height,
        fields
      }, null, options);
    })();
  }
  search_model_sets(request, options) {
    var _this328 = this;
    return _asyncToGenerator(function* () {
      return _this328.get('/model_sets/search', {
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
  model_set(model_set_id, fields, options) {
    var _this329 = this;
    return _asyncToGenerator(function* () {
      model_set_id = encodeParam(model_set_id);
      return _this329.get("/model_sets/".concat(model_set_id), {
        fields
      }, null, options);
    })();
  }
  update_model_set(model_set_id, body, options) {
    var _this330 = this;
    return _asyncToGenerator(function* () {
      model_set_id = encodeParam(model_set_id);
      return _this330.patch("/model_sets/".concat(model_set_id), null, body, options);
    })();
  }
  delete_model_set(model_set_id, options) {
    var _this331 = this;
    return _asyncToGenerator(function* () {
      model_set_id = encodeParam(model_set_id);
      return _this331.delete("/model_sets/".concat(model_set_id), null, null, options);
    })();
  }
  all_model_sets(fields, options) {
    var _this332 = this;
    return _asyncToGenerator(function* () {
      return _this332.get('/model_sets', {
        fields
      }, null, options);
    })();
  }
  create_model_set(body, options) {
    var _this333 = this;
    return _asyncToGenerator(function* () {
      return _this333.post('/model_sets', null, body, options);
    })();
  }
  all_permissions(options) {
    var _this334 = this;
    return _asyncToGenerator(function* () {
      return _this334.get('/permissions', null, null, options);
    })();
  }
  search_permission_sets(request, options) {
    var _this335 = this;
    return _asyncToGenerator(function* () {
      return _this335.get('/permission_sets/search', {
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
  permission_set(permission_set_id, fields, options) {
    var _this336 = this;
    return _asyncToGenerator(function* () {
      permission_set_id = encodeParam(permission_set_id);
      return _this336.get("/permission_sets/".concat(permission_set_id), {
        fields
      }, null, options);
    })();
  }
  update_permission_set(permission_set_id, body, options) {
    var _this337 = this;
    return _asyncToGenerator(function* () {
      permission_set_id = encodeParam(permission_set_id);
      return _this337.patch("/permission_sets/".concat(permission_set_id), null, body, options);
    })();
  }
  delete_permission_set(permission_set_id, options) {
    var _this338 = this;
    return _asyncToGenerator(function* () {
      permission_set_id = encodeParam(permission_set_id);
      return _this338.delete("/permission_sets/".concat(permission_set_id), null, null, options);
    })();
  }
  all_permission_sets(fields, options) {
    var _this339 = this;
    return _asyncToGenerator(function* () {
      return _this339.get('/permission_sets', {
        fields
      }, null, options);
    })();
  }
  create_permission_set(body, options) {
    var _this340 = this;
    return _asyncToGenerator(function* () {
      return _this340.post('/permission_sets', null, body, options);
    })();
  }
  all_roles(request, options) {
    var _this341 = this;
    return _asyncToGenerator(function* () {
      return _this341.get('/roles', {
        fields: request.fields,
        ids: request.ids
      }, null, options);
    })();
  }
  create_role(body, options) {
    var _this342 = this;
    return _asyncToGenerator(function* () {
      return _this342.post('/roles', null, body, options);
    })();
  }
  search_roles(request, options) {
    var _this343 = this;
    return _asyncToGenerator(function* () {
      return _this343.get('/roles/search', {
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
  search_roles_with_user_count(request, options) {
    var _this344 = this;
    return _asyncToGenerator(function* () {
      return _this344.get('/roles/search/with_user_count', {
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
  role(role_id, options) {
    var _this345 = this;
    return _asyncToGenerator(function* () {
      role_id = encodeParam(role_id);
      return _this345.get("/roles/".concat(role_id), null, null, options);
    })();
  }
  update_role(role_id, body, options) {
    var _this346 = this;
    return _asyncToGenerator(function* () {
      role_id = encodeParam(role_id);
      return _this346.patch("/roles/".concat(role_id), null, body, options);
    })();
  }
  delete_role(role_id, options) {
    var _this347 = this;
    return _asyncToGenerator(function* () {
      role_id = encodeParam(role_id);
      return _this347.delete("/roles/".concat(role_id), null, null, options);
    })();
  }
  role_groups(role_id, fields, options) {
    var _this348 = this;
    return _asyncToGenerator(function* () {
      role_id = encodeParam(role_id);
      return _this348.get("/roles/".concat(role_id, "/groups"), {
        fields
      }, null, options);
    })();
  }
  set_role_groups(role_id, body, options) {
    var _this349 = this;
    return _asyncToGenerator(function* () {
      role_id = encodeParam(role_id);
      return _this349.put("/roles/".concat(role_id, "/groups"), null, body, options);
    })();
  }
  role_users(request, options) {
    var _this350 = this;
    return _asyncToGenerator(function* () {
      request.role_id = encodeParam(request.role_id);
      return _this350.get("/roles/".concat(request.role_id, "/users"), {
        fields: request.fields,
        direct_association_only: request.direct_association_only
      }, null, options);
    })();
  }
  set_role_users(role_id, body, options) {
    var _this351 = this;
    return _asyncToGenerator(function* () {
      role_id = encodeParam(role_id);
      return _this351.put("/roles/".concat(role_id, "/users"), null, body, options);
    })();
  }
  scheduled_plans_for_space(space_id, fields, options) {
    var _this352 = this;
    return _asyncToGenerator(function* () {
      space_id = encodeParam(space_id);
      return _this352.get("/scheduled_plans/space/".concat(space_id), {
        fields
      }, null, options);
    })();
  }
  scheduled_plan(scheduled_plan_id, fields, options) {
    var _this353 = this;
    return _asyncToGenerator(function* () {
      scheduled_plan_id = encodeParam(scheduled_plan_id);
      return _this353.get("/scheduled_plans/".concat(scheduled_plan_id), {
        fields
      }, null, options);
    })();
  }
  update_scheduled_plan(scheduled_plan_id, body, options) {
    var _this354 = this;
    return _asyncToGenerator(function* () {
      scheduled_plan_id = encodeParam(scheduled_plan_id);
      return _this354.patch("/scheduled_plans/".concat(scheduled_plan_id), null, body, options);
    })();
  }
  delete_scheduled_plan(scheduled_plan_id, options) {
    var _this355 = this;
    return _asyncToGenerator(function* () {
      scheduled_plan_id = encodeParam(scheduled_plan_id);
      return _this355.delete("/scheduled_plans/".concat(scheduled_plan_id), null, null, options);
    })();
  }
  all_scheduled_plans(request, options) {
    var _this356 = this;
    return _asyncToGenerator(function* () {
      return _this356.get('/scheduled_plans', {
        user_id: request.user_id,
        fields: request.fields,
        all_users: request.all_users
      }, null, options);
    })();
  }
  create_scheduled_plan(body, options) {
    var _this357 = this;
    return _asyncToGenerator(function* () {
      return _this357.post('/scheduled_plans', null, body, options);
    })();
  }
  scheduled_plan_run_once(body, options) {
    var _this358 = this;
    return _asyncToGenerator(function* () {
      return _this358.post('/scheduled_plans/run_once', null, body, options);
    })();
  }
  scheduled_plans_for_look(request, options) {
    var _this359 = this;
    return _asyncToGenerator(function* () {
      request.look_id = encodeParam(request.look_id);
      return _this359.get("/scheduled_plans/look/".concat(request.look_id), {
        user_id: request.user_id,
        fields: request.fields,
        all_users: request.all_users
      }, null, options);
    })();
  }
  scheduled_plans_for_dashboard(request, options) {
    var _this360 = this;
    return _asyncToGenerator(function* () {
      request.dashboard_id = encodeParam(request.dashboard_id);
      return _this360.get("/scheduled_plans/dashboard/".concat(request.dashboard_id), {
        user_id: request.user_id,
        all_users: request.all_users,
        fields: request.fields
      }, null, options);
    })();
  }
  scheduled_plans_for_lookml_dashboard(request, options) {
    var _this361 = this;
    return _asyncToGenerator(function* () {
      request.lookml_dashboard_id = encodeParam(request.lookml_dashboard_id);
      return _this361.get("/scheduled_plans/lookml_dashboard/".concat(request.lookml_dashboard_id), {
        user_id: request.user_id,
        fields: request.fields,
        all_users: request.all_users
      }, null, options);
    })();
  }
  scheduled_plan_run_once_by_id(scheduled_plan_id, body, options) {
    var _this362 = this;
    return _asyncToGenerator(function* () {
      scheduled_plan_id = encodeParam(scheduled_plan_id);
      return _this362.post("/scheduled_plans/".concat(scheduled_plan_id, "/run_once"), null, body, options);
    })();
  }
  session(options) {
    var _this363 = this;
    return _asyncToGenerator(function* () {
      return _this363.get('/session', null, null, options);
    })();
  }
  update_session(body, options) {
    var _this364 = this;
    return _asyncToGenerator(function* () {
      return _this364.patch('/session', null, body, options);
    })();
  }
  sql_interface_metadata(avatica_request, options) {
    var _this365 = this;
    return _asyncToGenerator(function* () {
      return _this365.get('/sql_interface_queries/metadata', {
        avatica_request
      }, null, options);
    })();
  }
  run_sql_interface_query(query_id, result_format, options) {
    var _this366 = this;
    return _asyncToGenerator(function* () {
      result_format = encodeParam(result_format);
      return _this366.get("/sql_interface_queries/".concat(query_id, "/run/").concat(result_format), null, null, options);
    })();
  }
  create_sql_interface_query(body, options) {
    var _this367 = this;
    return _asyncToGenerator(function* () {
      return _this367.post('/sql_interface_queries', null, body, options);
    })();
  }
  all_themes(fields, options) {
    var _this368 = this;
    return _asyncToGenerator(function* () {
      return _this368.get('/themes', {
        fields
      }, null, options);
    })();
  }
  create_theme(body, options) {
    var _this369 = this;
    return _asyncToGenerator(function* () {
      return _this369.post('/themes', null, body, options);
    })();
  }
  search_themes(request, options) {
    var _this370 = this;
    return _asyncToGenerator(function* () {
      return _this370.get('/themes/search', {
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
  default_theme(ts, options) {
    var _this371 = this;
    return _asyncToGenerator(function* () {
      return _this371.get('/themes/default', {
        ts
      }, null, options);
    })();
  }
  set_default_theme(name, options) {
    var _this372 = this;
    return _asyncToGenerator(function* () {
      return _this372.put('/themes/default', {
        name
      }, null, options);
    })();
  }
  active_themes(request, options) {
    var _this373 = this;
    return _asyncToGenerator(function* () {
      return _this373.get('/themes/active', {
        name: request.name,
        ts: request.ts,
        fields: request.fields
      }, null, options);
    })();
  }
  theme_or_default(name, ts, options) {
    var _this374 = this;
    return _asyncToGenerator(function* () {
      return _this374.get('/themes/theme_or_default', {
        name,
        ts
      }, null, options);
    })();
  }
  validate_theme(body, options) {
    var _this375 = this;
    return _asyncToGenerator(function* () {
      return _this375.post('/themes/validate', null, body, options);
    })();
  }
  theme(theme_id, fields, options) {
    var _this376 = this;
    return _asyncToGenerator(function* () {
      theme_id = encodeParam(theme_id);
      return _this376.get("/themes/".concat(theme_id), {
        fields
      }, null, options);
    })();
  }
  update_theme(theme_id, body, options) {
    var _this377 = this;
    return _asyncToGenerator(function* () {
      theme_id = encodeParam(theme_id);
      return _this377.patch("/themes/".concat(theme_id), null, body, options);
    })();
  }
  delete_theme(theme_id, options) {
    var _this378 = this;
    return _asyncToGenerator(function* () {
      theme_id = encodeParam(theme_id);
      return _this378.delete("/themes/".concat(theme_id), null, null, options);
    })();
  }
  search_credentials_email(request, options) {
    var _this379 = this;
    return _asyncToGenerator(function* () {
      return _this379.get('/credentials_email/search', {
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
  me(fields, options) {
    var _this380 = this;
    return _asyncToGenerator(function* () {
      return _this380.get('/user', {
        fields
      }, null, options);
    })();
  }
  all_users(request, options) {
    var _this381 = this;
    return _asyncToGenerator(function* () {
      return _this381.get('/users', {
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
  create_user(body, fields, options) {
    var _this382 = this;
    return _asyncToGenerator(function* () {
      return _this382.post('/users', {
        fields
      }, body, options);
    })();
  }
  search_users(request, options) {
    var _this383 = this;
    return _asyncToGenerator(function* () {
      return _this383.get('/users/search', {
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
  search_users_names(request, options) {
    var _this384 = this;
    return _asyncToGenerator(function* () {
      request.pattern = encodeParam(request.pattern);
      return _this384.get("/users/search/names/".concat(request.pattern), {
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
  user(user_id, fields, options) {
    var _this385 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this385.get("/users/".concat(user_id), {
        fields
      }, null, options);
    })();
  }
  update_user(user_id, body, fields, options) {
    var _this386 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this386.patch("/users/".concat(user_id), {
        fields
      }, body, options);
    })();
  }
  delete_user(user_id, options) {
    var _this387 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this387.delete("/users/".concat(user_id), null, null, options);
    })();
  }
  user_for_credential(credential_type, credential_id, fields, options) {
    var _this388 = this;
    return _asyncToGenerator(function* () {
      credential_type = encodeParam(credential_type);
      credential_id = encodeParam(credential_id);
      return _this388.get("/users/credential/".concat(credential_type, "/").concat(credential_id), {
        fields
      }, null, options);
    })();
  }
  user_credentials_email(user_id, fields, options) {
    var _this389 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this389.get("/users/".concat(user_id, "/credentials_email"), {
        fields
      }, null, options);
    })();
  }
  create_user_credentials_email(user_id, body, fields, options) {
    var _this390 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this390.post("/users/".concat(user_id, "/credentials_email"), {
        fields
      }, body, options);
    })();
  }
  update_user_credentials_email(user_id, body, fields, options) {
    var _this391 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this391.patch("/users/".concat(user_id, "/credentials_email"), {
        fields
      }, body, options);
    })();
  }
  delete_user_credentials_email(user_id, options) {
    var _this392 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this392.delete("/users/".concat(user_id, "/credentials_email"), null, null, options);
    })();
  }
  user_credentials_totp(user_id, fields, options) {
    var _this393 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this393.get("/users/".concat(user_id, "/credentials_totp"), {
        fields
      }, null, options);
    })();
  }
  create_user_credentials_totp(user_id, body, fields, options) {
    var _this394 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this394.post("/users/".concat(user_id, "/credentials_totp"), {
        fields
      }, body, options);
    })();
  }
  delete_user_credentials_totp(user_id, options) {
    var _this395 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this395.delete("/users/".concat(user_id, "/credentials_totp"), null, null, options);
    })();
  }
  user_credentials_ldap(user_id, fields, options) {
    var _this396 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this396.get("/users/".concat(user_id, "/credentials_ldap"), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_ldap(user_id, options) {
    var _this397 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this397.delete("/users/".concat(user_id, "/credentials_ldap"), null, null, options);
    })();
  }
  user_credentials_google(user_id, fields, options) {
    var _this398 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this398.get("/users/".concat(user_id, "/credentials_google"), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_google(user_id, options) {
    var _this399 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this399.delete("/users/".concat(user_id, "/credentials_google"), null, null, options);
    })();
  }
  user_credentials_saml(user_id, fields, options) {
    var _this400 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this400.get("/users/".concat(user_id, "/credentials_saml"), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_saml(user_id, options) {
    var _this401 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this401.delete("/users/".concat(user_id, "/credentials_saml"), null, null, options);
    })();
  }
  user_credentials_oidc(user_id, fields, options) {
    var _this402 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this402.get("/users/".concat(user_id, "/credentials_oidc"), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_oidc(user_id, options) {
    var _this403 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this403.delete("/users/".concat(user_id, "/credentials_oidc"), null, null, options);
    })();
  }
  user_credentials_api3(user_id, credentials_api3_id, fields, options) {
    var _this404 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      credentials_api3_id = encodeParam(credentials_api3_id);
      return _this404.get("/users/".concat(user_id, "/credentials_api3/").concat(credentials_api3_id), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_api3(user_id, credentials_api3_id, options) {
    var _this405 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      credentials_api3_id = encodeParam(credentials_api3_id);
      return _this405.delete("/users/".concat(user_id, "/credentials_api3/").concat(credentials_api3_id), null, null, options);
    })();
  }
  all_user_credentials_api3s(user_id, fields, options) {
    var _this406 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this406.get("/users/".concat(user_id, "/credentials_api3"), {
        fields
      }, null, options);
    })();
  }
  create_user_credentials_api3(user_id, fields, options) {
    var _this407 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this407.post("/users/".concat(user_id, "/credentials_api3"), {
        fields
      }, null, options);
    })();
  }
  user_credentials_embed(user_id, credentials_embed_id, fields, options) {
    var _this408 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      credentials_embed_id = encodeParam(credentials_embed_id);
      return _this408.get("/users/".concat(user_id, "/credentials_embed/").concat(credentials_embed_id), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_embed(user_id, credentials_embed_id, options) {
    var _this409 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      credentials_embed_id = encodeParam(credentials_embed_id);
      return _this409.delete("/users/".concat(user_id, "/credentials_embed/").concat(credentials_embed_id), null, null, options);
    })();
  }
  all_user_credentials_embeds(user_id, fields, options) {
    var _this410 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this410.get("/users/".concat(user_id, "/credentials_embed"), {
        fields
      }, null, options);
    })();
  }
  user_credentials_looker_openid(user_id, fields, options) {
    var _this411 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this411.get("/users/".concat(user_id, "/credentials_looker_openid"), {
        fields
      }, null, options);
    })();
  }
  delete_user_credentials_looker_openid(user_id, options) {
    var _this412 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this412.delete("/users/".concat(user_id, "/credentials_looker_openid"), null, null, options);
    })();
  }
  user_session(user_id, session_id, fields, options) {
    var _this413 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      session_id = encodeParam(session_id);
      return _this413.get("/users/".concat(user_id, "/sessions/").concat(session_id), {
        fields
      }, null, options);
    })();
  }
  delete_user_session(user_id, session_id, options) {
    var _this414 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      session_id = encodeParam(session_id);
      return _this414.delete("/users/".concat(user_id, "/sessions/").concat(session_id), null, null, options);
    })();
  }
  all_user_sessions(user_id, fields, options) {
    var _this415 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this415.get("/users/".concat(user_id, "/sessions"), {
        fields
      }, null, options);
    })();
  }
  create_user_credentials_email_password_reset(request, options) {
    var _this416 = this;
    return _asyncToGenerator(function* () {
      request.user_id = encodeParam(request.user_id);
      return _this416.post("/users/".concat(request.user_id, "/credentials_email/password_reset"), {
        expires: request.expires,
        fields: request.fields
      }, null, options);
    })();
  }
  user_roles(request, options) {
    var _this417 = this;
    return _asyncToGenerator(function* () {
      request.user_id = encodeParam(request.user_id);
      return _this417.get("/users/".concat(request.user_id, "/roles"), {
        fields: request.fields,
        direct_association_only: request.direct_association_only
      }, null, options);
    })();
  }
  set_user_roles(user_id, body, fields, options) {
    var _this418 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this418.put("/users/".concat(user_id, "/roles"), {
        fields
      }, body, options);
    })();
  }
  user_attribute_user_values(request, options) {
    var _this419 = this;
    return _asyncToGenerator(function* () {
      request.user_id = encodeParam(request.user_id);
      return _this419.get("/users/".concat(request.user_id, "/attribute_values"), {
        fields: request.fields,
        user_attribute_ids: request.user_attribute_ids,
        all_values: request.all_values,
        include_unset: request.include_unset
      }, null, options);
    })();
  }
  set_user_attribute_user_value(user_id, user_attribute_id, body, options) {
    var _this420 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      user_attribute_id = encodeParam(user_attribute_id);
      return _this420.patch("/users/".concat(user_id, "/attribute_values/").concat(user_attribute_id), null, body, options);
    })();
  }
  delete_user_attribute_user_value(user_id, user_attribute_id, options) {
    var _this421 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      user_attribute_id = encodeParam(user_attribute_id);
      return _this421.delete("/users/".concat(user_id, "/attribute_values/").concat(user_attribute_id), null, null, options);
    })();
  }
  send_user_credentials_email_password_reset(user_id, fields, options) {
    var _this422 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this422.post("/users/".concat(user_id, "/credentials_email/send_password_reset"), {
        fields
      }, null, options);
    })();
  }
  wipeout_user_emails(user_id, body, fields, options) {
    var _this423 = this;
    return _asyncToGenerator(function* () {
      user_id = encodeParam(user_id);
      return _this423.post("/users/".concat(user_id, "/update_emails"), {
        fields
      }, body, options);
    })();
  }
  create_embed_user(body, options) {
    var _this424 = this;
    return _asyncToGenerator(function* () {
      return _this424.post('/users/embed_user', null, body, options);
    })();
  }
  all_user_attributes(request, options) {
    var _this425 = this;
    return _asyncToGenerator(function* () {
      return _this425.get('/user_attributes', {
        fields: request.fields,
        sorts: request.sorts
      }, null, options);
    })();
  }
  create_user_attribute(body, fields, options) {
    var _this426 = this;
    return _asyncToGenerator(function* () {
      return _this426.post('/user_attributes', {
        fields
      }, body, options);
    })();
  }
  user_attribute(user_attribute_id, fields, options) {
    var _this427 = this;
    return _asyncToGenerator(function* () {
      user_attribute_id = encodeParam(user_attribute_id);
      return _this427.get("/user_attributes/".concat(user_attribute_id), {
        fields
      }, null, options);
    })();
  }
  update_user_attribute(user_attribute_id, body, fields, options) {
    var _this428 = this;
    return _asyncToGenerator(function* () {
      user_attribute_id = encodeParam(user_attribute_id);
      return _this428.patch("/user_attributes/".concat(user_attribute_id), {
        fields
      }, body, options);
    })();
  }
  delete_user_attribute(user_attribute_id, options) {
    var _this429 = this;
    return _asyncToGenerator(function* () {
      user_attribute_id = encodeParam(user_attribute_id);
      return _this429.delete("/user_attributes/".concat(user_attribute_id), null, null, options);
    })();
  }
  all_user_attribute_group_values(user_attribute_id, fields, options) {
    var _this430 = this;
    return _asyncToGenerator(function* () {
      user_attribute_id = encodeParam(user_attribute_id);
      return _this430.get("/user_attributes/".concat(user_attribute_id, "/group_values"), {
        fields
      }, null, options);
    })();
  }
  set_user_attribute_group_values(user_attribute_id, body, options) {
    var _this431 = this;
    return _asyncToGenerator(function* () {
      user_attribute_id = encodeParam(user_attribute_id);
      return _this431.post("/user_attributes/".concat(user_attribute_id, "/group_values"), null, body, options);
    })();
  }
  all_workspaces(options) {
    var _this432 = this;
    return _asyncToGenerator(function* () {
      return _this432.get('/workspaces', null, null, options);
    })();
  }
  workspace(workspace_id, options) {
    var _this433 = this;
    return _asyncToGenerator(function* () {
      workspace_id = encodeParam(workspace_id);
      return _this433.get("/workspaces/".concat(workspace_id), null, null, options);
    })();
  }
}
_defineProperty(Looker40SDK, "ApiVersion", '4.0');
//# sourceMappingURL=methods.js.map