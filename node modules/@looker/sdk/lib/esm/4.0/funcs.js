function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import { encodeParam, functionalSdk } from '@looker/sdk-rtl';
import { sdkVersion } from '../constants';
export var functionalSdk40 = authSession => {
  return functionalSdk(authSession, '4.0', sdkVersion);
};
export var follow_alert = function () {
  var _ref = _asyncToGenerator(function* (sdk, alert_id, options) {
    alert_id = encodeParam(alert_id);
    return sdk.post("/alerts/".concat(alert_id, "/follow"), null, null, options);
  });
  return function follow_alert(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
export var unfollow_alert = function () {
  var _ref2 = _asyncToGenerator(function* (sdk, alert_id, options) {
    alert_id = encodeParam(alert_id);
    return sdk.delete("/alerts/".concat(alert_id, "/follow"), null, null, options);
  });
  return function unfollow_alert(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
export var search_alerts = function () {
  var _ref3 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/alerts/search', {
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
  });
  return function search_alerts(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
export var get_alert = function () {
  var _ref4 = _asyncToGenerator(function* (sdk, alert_id, options) {
    alert_id = encodeParam(alert_id);
    return sdk.get("/alerts/".concat(alert_id), null, null, options);
  });
  return function get_alert(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
export var update_alert = function () {
  var _ref5 = _asyncToGenerator(function* (sdk, alert_id, body, options) {
    alert_id = encodeParam(alert_id);
    return sdk.put("/alerts/".concat(alert_id), null, body, options);
  });
  return function update_alert(_x13, _x14, _x15, _x16) {
    return _ref5.apply(this, arguments);
  };
}();
export var update_alert_field = function () {
  var _ref6 = _asyncToGenerator(function* (sdk, alert_id, body, options) {
    alert_id = encodeParam(alert_id);
    return sdk.patch("/alerts/".concat(alert_id), null, body, options);
  });
  return function update_alert_field(_x17, _x18, _x19, _x20) {
    return _ref6.apply(this, arguments);
  };
}();
export var delete_alert = function () {
  var _ref7 = _asyncToGenerator(function* (sdk, alert_id, options) {
    alert_id = encodeParam(alert_id);
    return sdk.delete("/alerts/".concat(alert_id), null, null, options);
  });
  return function delete_alert(_x21, _x22, _x23) {
    return _ref7.apply(this, arguments);
  };
}();
export var create_alert = function () {
  var _ref8 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/alerts', null, body, options);
  });
  return function create_alert(_x24, _x25, _x26) {
    return _ref8.apply(this, arguments);
  };
}();
export var enqueue_alert = function () {
  var _ref9 = _asyncToGenerator(function* (sdk, alert_id, force, options) {
    alert_id = encodeParam(alert_id);
    return sdk.post("/alerts/".concat(alert_id, "/enqueue"), {
      force
    }, null, options);
  });
  return function enqueue_alert(_x27, _x28, _x29, _x30) {
    return _ref9.apply(this, arguments);
  };
}();
export var alert_notifications = function () {
  var _ref10 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/alert_notifications', {
      limit: request.limit,
      offset: request.offset
    }, null, options);
  });
  return function alert_notifications(_x31, _x32, _x33) {
    return _ref10.apply(this, arguments);
  };
}();
export var read_alert_notification = function () {
  var _ref11 = _asyncToGenerator(function* (sdk, alert_notification_id, options) {
    alert_notification_id = encodeParam(alert_notification_id);
    return sdk.patch("/alert_notifications/".concat(alert_notification_id), null, null, options);
  });
  return function read_alert_notification(_x34, _x35, _x36) {
    return _ref11.apply(this, arguments);
  };
}();
export var login = function () {
  var _ref12 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.post('/login', {
      client_id: request.client_id,
      client_secret: request.client_secret
    }, null, options);
  });
  return function login(_x37, _x38, _x39) {
    return _ref12.apply(this, arguments);
  };
}();
export var login_user = function () {
  var _ref13 = _asyncToGenerator(function* (sdk, user_id, associative, options) {
    user_id = encodeParam(user_id);
    return sdk.post("/login/".concat(user_id), {
      associative
    }, null, options);
  });
  return function login_user(_x40, _x41, _x42, _x43) {
    return _ref13.apply(this, arguments);
  };
}();
export var logout = function () {
  var _ref14 = _asyncToGenerator(function* (sdk, options) {
    return sdk.delete('/logout', null, null, options);
  });
  return function logout(_x44, _x45) {
    return _ref14.apply(this, arguments);
  };
}();
export var artifact_usage = function () {
  var _ref15 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/artifact/usage', {
      fields
    }, null, options);
  });
  return function artifact_usage(_x46, _x47, _x48) {
    return _ref15.apply(this, arguments);
  };
}();
export var artifact_namespaces = function () {
  var _ref16 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/artifact/namespaces', {
      fields: request.fields,
      limit: request.limit,
      offset: request.offset
    }, null, options);
  });
  return function artifact_namespaces(_x49, _x50, _x51) {
    return _ref16.apply(this, arguments);
  };
}();
export var artifact_value = function () {
  var _ref17 = _asyncToGenerator(function* (sdk, namespace, key, options) {
    namespace = encodeParam(namespace);
    return sdk.get("/artifact/".concat(namespace, "/value"), {
      key
    }, null, options);
  });
  return function artifact_value(_x52, _x53, _x54, _x55) {
    return _ref17.apply(this, arguments);
  };
}();
export var purge_artifacts = function () {
  var _ref18 = _asyncToGenerator(function* (sdk, namespace, options) {
    namespace = encodeParam(namespace);
    return sdk.delete("/artifact/".concat(namespace, "/purge"), null, null, options);
  });
  return function purge_artifacts(_x56, _x57, _x58) {
    return _ref18.apply(this, arguments);
  };
}();
export var search_artifacts = function () {
  var _ref19 = _asyncToGenerator(function* (sdk, request, options) {
    request.namespace = encodeParam(request.namespace);
    return sdk.get("/artifact/".concat(request.namespace, "/search"), {
      fields: request.fields,
      key: request.key,
      user_ids: request.user_ids,
      min_size: request.min_size,
      max_size: request.max_size,
      limit: request.limit,
      offset: request.offset
    }, null, options);
  });
  return function search_artifacts(_x59, _x60, _x61) {
    return _ref19.apply(this, arguments);
  };
}();
export var artifact = function () {
  var _ref20 = _asyncToGenerator(function* (sdk, request, options) {
    request.namespace = encodeParam(request.namespace);
    return sdk.get("/artifact/".concat(request.namespace), {
      key: request.key,
      fields: request.fields,
      limit: request.limit,
      offset: request.offset
    }, null, options);
  });
  return function artifact(_x62, _x63, _x64) {
    return _ref20.apply(this, arguments);
  };
}();
export var delete_artifact = function () {
  var _ref21 = _asyncToGenerator(function* (sdk, namespace, key, options) {
    namespace = encodeParam(namespace);
    return sdk.delete("/artifact/".concat(namespace), {
      key
    }, null, options);
  });
  return function delete_artifact(_x65, _x66, _x67, _x68) {
    return _ref21.apply(this, arguments);
  };
}();
export var update_artifacts = function () {
  var _ref22 = _asyncToGenerator(function* (sdk, namespace, body, fields, options) {
    namespace = encodeParam(namespace);
    return sdk.put("/artifacts/".concat(namespace), {
      fields
    }, body, options);
  });
  return function update_artifacts(_x69, _x70, _x71, _x72, _x73) {
    return _ref22.apply(this, arguments);
  };
}();
export var create_embed_secret = function () {
  var _ref23 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/embed_config/secrets', null, body, options);
  });
  return function create_embed_secret(_x74, _x75, _x76) {
    return _ref23.apply(this, arguments);
  };
}();
export var delete_embed_secret = function () {
  var _ref24 = _asyncToGenerator(function* (sdk, embed_secret_id, options) {
    embed_secret_id = encodeParam(embed_secret_id);
    return sdk.delete("/embed_config/secrets/".concat(embed_secret_id), null, null, options);
  });
  return function delete_embed_secret(_x77, _x78, _x79) {
    return _ref24.apply(this, arguments);
  };
}();
export var create_sso_embed_url = function () {
  var _ref25 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/embed/sso_url', null, body, options);
  });
  return function create_sso_embed_url(_x80, _x81, _x82) {
    return _ref25.apply(this, arguments);
  };
}();
export var create_embed_url_as_me = function () {
  var _ref26 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/embed/token_url/me', null, body, options);
  });
  return function create_embed_url_as_me(_x83, _x84, _x85) {
    return _ref26.apply(this, arguments);
  };
}();
export var validate_embed_url = function () {
  var _ref27 = _asyncToGenerator(function* (sdk, url, options) {
    return sdk.get('/embed/sso/validate', {
      url
    }, null, options);
  });
  return function validate_embed_url(_x86, _x87, _x88) {
    return _ref27.apply(this, arguments);
  };
}();
export var acquire_embed_cookieless_session = function () {
  var _ref28 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/embed/cookieless_session/acquire', null, body, options);
  });
  return function acquire_embed_cookieless_session(_x89, _x90, _x91) {
    return _ref28.apply(this, arguments);
  };
}();
export var delete_embed_cookieless_session = function () {
  var _ref29 = _asyncToGenerator(function* (sdk, session_reference_token, options) {
    session_reference_token = encodeParam(session_reference_token);
    return sdk.delete("/embed/cookieless_session/".concat(session_reference_token), null, null, options);
  });
  return function delete_embed_cookieless_session(_x92, _x93, _x94) {
    return _ref29.apply(this, arguments);
  };
}();
export var generate_tokens_for_cookieless_session = function () {
  var _ref30 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/embed/cookieless_session/generate_tokens', null, body, options);
  });
  return function generate_tokens_for_cookieless_session(_x95, _x96, _x97) {
    return _ref30.apply(this, arguments);
  };
}();
export var ldap_config = function () {
  var _ref31 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/ldap_config', null, null, options);
  });
  return function ldap_config(_x98, _x99) {
    return _ref31.apply(this, arguments);
  };
}();
export var update_ldap_config = function () {
  var _ref32 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/ldap_config', null, body, options);
  });
  return function update_ldap_config(_x100, _x101, _x102) {
    return _ref32.apply(this, arguments);
  };
}();
export var test_ldap_config_connection = function () {
  var _ref33 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/ldap_config/test_connection', null, body, options);
  });
  return function test_ldap_config_connection(_x103, _x104, _x105) {
    return _ref33.apply(this, arguments);
  };
}();
export var test_ldap_config_auth = function () {
  var _ref34 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/ldap_config/test_auth', null, body, options);
  });
  return function test_ldap_config_auth(_x106, _x107, _x108) {
    return _ref34.apply(this, arguments);
  };
}();
export var test_ldap_config_user_info = function () {
  var _ref35 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/ldap_config/test_user_info', null, body, options);
  });
  return function test_ldap_config_user_info(_x109, _x110, _x111) {
    return _ref35.apply(this, arguments);
  };
}();
export var test_ldap_config_user_auth = function () {
  var _ref36 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/ldap_config/test_user_auth', null, body, options);
  });
  return function test_ldap_config_user_auth(_x112, _x113, _x114) {
    return _ref36.apply(this, arguments);
  };
}();
export var register_mobile_device = function () {
  var _ref37 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/mobile/device', null, body, options);
  });
  return function register_mobile_device(_x115, _x116, _x117) {
    return _ref37.apply(this, arguments);
  };
}();
export var update_mobile_device_registration = function () {
  var _ref38 = _asyncToGenerator(function* (sdk, device_id, options) {
    device_id = encodeParam(device_id);
    return sdk.patch("/mobile/device/".concat(device_id), null, null, options);
  });
  return function update_mobile_device_registration(_x118, _x119, _x120) {
    return _ref38.apply(this, arguments);
  };
}();
export var deregister_mobile_device = function () {
  var _ref39 = _asyncToGenerator(function* (sdk, device_id, options) {
    device_id = encodeParam(device_id);
    return sdk.delete("/mobile/device/".concat(device_id), null, null, options);
  });
  return function deregister_mobile_device(_x121, _x122, _x123) {
    return _ref39.apply(this, arguments);
  };
}();
export var all_oauth_client_apps = function () {
  var _ref40 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/oauth_client_apps', {
      fields
    }, null, options);
  });
  return function all_oauth_client_apps(_x124, _x125, _x126) {
    return _ref40.apply(this, arguments);
  };
}();
export var oauth_client_app = function () {
  var _ref41 = _asyncToGenerator(function* (sdk, client_guid, fields, options) {
    client_guid = encodeParam(client_guid);
    return sdk.get("/oauth_client_apps/".concat(client_guid), {
      fields
    }, null, options);
  });
  return function oauth_client_app(_x127, _x128, _x129, _x130) {
    return _ref41.apply(this, arguments);
  };
}();
export var register_oauth_client_app = function () {
  var _ref42 = _asyncToGenerator(function* (sdk, client_guid, body, fields, options) {
    client_guid = encodeParam(client_guid);
    return sdk.post("/oauth_client_apps/".concat(client_guid), {
      fields
    }, body, options);
  });
  return function register_oauth_client_app(_x131, _x132, _x133, _x134, _x135) {
    return _ref42.apply(this, arguments);
  };
}();
export var update_oauth_client_app = function () {
  var _ref43 = _asyncToGenerator(function* (sdk, client_guid, body, fields, options) {
    client_guid = encodeParam(client_guid);
    return sdk.patch("/oauth_client_apps/".concat(client_guid), {
      fields
    }, body, options);
  });
  return function update_oauth_client_app(_x136, _x137, _x138, _x139, _x140) {
    return _ref43.apply(this, arguments);
  };
}();
export var delete_oauth_client_app = function () {
  var _ref44 = _asyncToGenerator(function* (sdk, client_guid, options) {
    client_guid = encodeParam(client_guid);
    return sdk.delete("/oauth_client_apps/".concat(client_guid), null, null, options);
  });
  return function delete_oauth_client_app(_x141, _x142, _x143) {
    return _ref44.apply(this, arguments);
  };
}();
export var invalidate_tokens = function () {
  var _ref45 = _asyncToGenerator(function* (sdk, client_guid, options) {
    client_guid = encodeParam(client_guid);
    return sdk.delete("/oauth_client_apps/".concat(client_guid, "/tokens"), null, null, options);
  });
  return function invalidate_tokens(_x144, _x145, _x146) {
    return _ref45.apply(this, arguments);
  };
}();
export var activate_app_user = function () {
  var _ref46 = _asyncToGenerator(function* (sdk, client_guid, user_id, fields, options) {
    client_guid = encodeParam(client_guid);
    user_id = encodeParam(user_id);
    return sdk.post("/oauth_client_apps/".concat(client_guid, "/users/").concat(user_id), {
      fields
    }, null, options);
  });
  return function activate_app_user(_x147, _x148, _x149, _x150, _x151) {
    return _ref46.apply(this, arguments);
  };
}();
export var deactivate_app_user = function () {
  var _ref47 = _asyncToGenerator(function* (sdk, client_guid, user_id, fields, options) {
    client_guid = encodeParam(client_guid);
    user_id = encodeParam(user_id);
    return sdk.delete("/oauth_client_apps/".concat(client_guid, "/users/").concat(user_id), {
      fields
    }, null, options);
  });
  return function deactivate_app_user(_x152, _x153, _x154, _x155, _x156) {
    return _ref47.apply(this, arguments);
  };
}();
export var oidc_config = function () {
  var _ref48 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/oidc_config', null, null, options);
  });
  return function oidc_config(_x157, _x158) {
    return _ref48.apply(this, arguments);
  };
}();
export var update_oidc_config = function () {
  var _ref49 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/oidc_config', null, body, options);
  });
  return function update_oidc_config(_x159, _x160, _x161) {
    return _ref49.apply(this, arguments);
  };
}();
export var oidc_test_config = function () {
  var _ref50 = _asyncToGenerator(function* (sdk, test_slug, options) {
    test_slug = encodeParam(test_slug);
    return sdk.get("/oidc_test_configs/".concat(test_slug), null, null, options);
  });
  return function oidc_test_config(_x162, _x163, _x164) {
    return _ref50.apply(this, arguments);
  };
}();
export var delete_oidc_test_config = function () {
  var _ref51 = _asyncToGenerator(function* (sdk, test_slug, options) {
    test_slug = encodeParam(test_slug);
    return sdk.delete("/oidc_test_configs/".concat(test_slug), null, null, options);
  });
  return function delete_oidc_test_config(_x165, _x166, _x167) {
    return _ref51.apply(this, arguments);
  };
}();
export var create_oidc_test_config = function () {
  var _ref52 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/oidc_test_configs', null, body, options);
  });
  return function create_oidc_test_config(_x168, _x169, _x170) {
    return _ref52.apply(this, arguments);
  };
}();
export var password_config = function () {
  var _ref53 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/password_config', null, null, options);
  });
  return function password_config(_x171, _x172) {
    return _ref53.apply(this, arguments);
  };
}();
export var update_password_config = function () {
  var _ref54 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/password_config', null, body, options);
  });
  return function update_password_config(_x173, _x174, _x175) {
    return _ref54.apply(this, arguments);
  };
}();
export var force_password_reset_at_next_login_for_all_users = function () {
  var _ref55 = _asyncToGenerator(function* (sdk, options) {
    return sdk.put('/password_config/force_password_reset_at_next_login_for_all_users', null, null, options);
  });
  return function force_password_reset_at_next_login_for_all_users(_x176, _x177) {
    return _ref55.apply(this, arguments);
  };
}();
export var saml_config = function () {
  var _ref56 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/saml_config', null, null, options);
  });
  return function saml_config(_x178, _x179) {
    return _ref56.apply(this, arguments);
  };
}();
export var update_saml_config = function () {
  var _ref57 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/saml_config', null, body, options);
  });
  return function update_saml_config(_x180, _x181, _x182) {
    return _ref57.apply(this, arguments);
  };
}();
export var saml_test_config = function () {
  var _ref58 = _asyncToGenerator(function* (sdk, test_slug, options) {
    test_slug = encodeParam(test_slug);
    return sdk.get("/saml_test_configs/".concat(test_slug), null, null, options);
  });
  return function saml_test_config(_x183, _x184, _x185) {
    return _ref58.apply(this, arguments);
  };
}();
export var delete_saml_test_config = function () {
  var _ref59 = _asyncToGenerator(function* (sdk, test_slug, options) {
    test_slug = encodeParam(test_slug);
    return sdk.delete("/saml_test_configs/".concat(test_slug), null, null, options);
  });
  return function delete_saml_test_config(_x186, _x187, _x188) {
    return _ref59.apply(this, arguments);
  };
}();
export var create_saml_test_config = function () {
  var _ref60 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/saml_test_configs', null, body, options);
  });
  return function create_saml_test_config(_x189, _x190, _x191) {
    return _ref60.apply(this, arguments);
  };
}();
export var parse_saml_idp_metadata = function () {
  var _ref61 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/parse_saml_idp_metadata', null, body, options);
  });
  return function parse_saml_idp_metadata(_x192, _x193, _x194) {
    return _ref61.apply(this, arguments);
  };
}();
export var fetch_and_parse_saml_idp_metadata = function () {
  var _ref62 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/fetch_and_parse_saml_idp_metadata', null, body, options);
  });
  return function fetch_and_parse_saml_idp_metadata(_x195, _x196, _x197) {
    return _ref62.apply(this, arguments);
  };
}();
export var session_config = function () {
  var _ref63 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/session_config', null, null, options);
  });
  return function session_config(_x198, _x199) {
    return _ref63.apply(this, arguments);
  };
}();
export var update_session_config = function () {
  var _ref64 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/session_config', null, body, options);
  });
  return function update_session_config(_x200, _x201, _x202) {
    return _ref64.apply(this, arguments);
  };
}();
export var get_support_access_allowlist_entries = function () {
  var _ref65 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/support_access/allowlist', {
      fields
    }, null, options);
  });
  return function get_support_access_allowlist_entries(_x203, _x204, _x205) {
    return _ref65.apply(this, arguments);
  };
}();
export var add_support_access_allowlist_entries = function () {
  var _ref66 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/support_access/allowlist', null, body, options);
  });
  return function add_support_access_allowlist_entries(_x206, _x207, _x208) {
    return _ref66.apply(this, arguments);
  };
}();
export var delete_support_access_allowlist_entry = function () {
  var _ref67 = _asyncToGenerator(function* (sdk, entry_id, options) {
    entry_id = encodeParam(entry_id);
    return sdk.delete("/support_access/allowlist/".concat(entry_id), null, null, options);
  });
  return function delete_support_access_allowlist_entry(_x209, _x210, _x211) {
    return _ref67.apply(this, arguments);
  };
}();
export var enable_support_access = function () {
  var _ref68 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/support_access/enable', null, body, options);
  });
  return function enable_support_access(_x212, _x213, _x214) {
    return _ref68.apply(this, arguments);
  };
}();
export var disable_support_access = function () {
  var _ref69 = _asyncToGenerator(function* (sdk, options) {
    return sdk.put('/support_access/disable', null, null, options);
  });
  return function disable_support_access(_x215, _x216) {
    return _ref69.apply(this, arguments);
  };
}();
export var support_access_status = function () {
  var _ref70 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/support_access/status', null, null, options);
  });
  return function support_access_status(_x217, _x218) {
    return _ref70.apply(this, arguments);
  };
}();
export var all_user_login_lockouts = function () {
  var _ref71 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/user_login_lockouts', {
      fields
    }, null, options);
  });
  return function all_user_login_lockouts(_x219, _x220, _x221) {
    return _ref71.apply(this, arguments);
  };
}();
export var search_user_login_lockouts = function () {
  var _ref72 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/user_login_lockouts/search', {
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
  });
  return function search_user_login_lockouts(_x222, _x223, _x224) {
    return _ref72.apply(this, arguments);
  };
}();
export var delete_user_login_lockout = function () {
  var _ref73 = _asyncToGenerator(function* (sdk, key, options) {
    key = encodeParam(key);
    return sdk.delete("/user_login_lockout/".concat(key), null, null, options);
  });
  return function delete_user_login_lockout(_x225, _x226, _x227) {
    return _ref73.apply(this, arguments);
  };
}();
export var all_boards = function () {
  var _ref74 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/boards', {
      fields
    }, null, options);
  });
  return function all_boards(_x228, _x229, _x230) {
    return _ref74.apply(this, arguments);
  };
}();
export var create_board = function () {
  var _ref75 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/boards', {
      fields
    }, body, options);
  });
  return function create_board(_x231, _x232, _x233, _x234) {
    return _ref75.apply(this, arguments);
  };
}();
export var search_boards = function () {
  var _ref76 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/boards/search', {
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
  });
  return function search_boards(_x235, _x236, _x237) {
    return _ref76.apply(this, arguments);
  };
}();
export var board = function () {
  var _ref77 = _asyncToGenerator(function* (sdk, board_id, fields, options) {
    board_id = encodeParam(board_id);
    return sdk.get("/boards/".concat(board_id), {
      fields
    }, null, options);
  });
  return function board(_x238, _x239, _x240, _x241) {
    return _ref77.apply(this, arguments);
  };
}();
export var update_board = function () {
  var _ref78 = _asyncToGenerator(function* (sdk, board_id, body, fields, options) {
    board_id = encodeParam(board_id);
    return sdk.patch("/boards/".concat(board_id), {
      fields
    }, body, options);
  });
  return function update_board(_x242, _x243, _x244, _x245, _x246) {
    return _ref78.apply(this, arguments);
  };
}();
export var delete_board = function () {
  var _ref79 = _asyncToGenerator(function* (sdk, board_id, options) {
    board_id = encodeParam(board_id);
    return sdk.delete("/boards/".concat(board_id), null, null, options);
  });
  return function delete_board(_x247, _x248, _x249) {
    return _ref79.apply(this, arguments);
  };
}();
export var all_board_items = function () {
  var _ref80 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/board_items', {
      fields: request.fields,
      sorts: request.sorts,
      board_section_id: request.board_section_id
    }, null, options);
  });
  return function all_board_items(_x250, _x251, _x252) {
    return _ref80.apply(this, arguments);
  };
}();
export var create_board_item = function () {
  var _ref81 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/board_items', {
      fields
    }, body, options);
  });
  return function create_board_item(_x253, _x254, _x255, _x256) {
    return _ref81.apply(this, arguments);
  };
}();
export var board_item = function () {
  var _ref82 = _asyncToGenerator(function* (sdk, board_item_id, fields, options) {
    board_item_id = encodeParam(board_item_id);
    return sdk.get("/board_items/".concat(board_item_id), {
      fields
    }, null, options);
  });
  return function board_item(_x257, _x258, _x259, _x260) {
    return _ref82.apply(this, arguments);
  };
}();
export var update_board_item = function () {
  var _ref83 = _asyncToGenerator(function* (sdk, board_item_id, body, fields, options) {
    board_item_id = encodeParam(board_item_id);
    return sdk.patch("/board_items/".concat(board_item_id), {
      fields
    }, body, options);
  });
  return function update_board_item(_x261, _x262, _x263, _x264, _x265) {
    return _ref83.apply(this, arguments);
  };
}();
export var delete_board_item = function () {
  var _ref84 = _asyncToGenerator(function* (sdk, board_item_id, options) {
    board_item_id = encodeParam(board_item_id);
    return sdk.delete("/board_items/".concat(board_item_id), null, null, options);
  });
  return function delete_board_item(_x266, _x267, _x268) {
    return _ref84.apply(this, arguments);
  };
}();
export var all_board_sections = function () {
  var _ref85 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/board_sections', {
      fields: request.fields,
      sorts: request.sorts
    }, null, options);
  });
  return function all_board_sections(_x269, _x270, _x271) {
    return _ref85.apply(this, arguments);
  };
}();
export var create_board_section = function () {
  var _ref86 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/board_sections', {
      fields
    }, body, options);
  });
  return function create_board_section(_x272, _x273, _x274, _x275) {
    return _ref86.apply(this, arguments);
  };
}();
export var board_section = function () {
  var _ref87 = _asyncToGenerator(function* (sdk, board_section_id, fields, options) {
    board_section_id = encodeParam(board_section_id);
    return sdk.get("/board_sections/".concat(board_section_id), {
      fields
    }, null, options);
  });
  return function board_section(_x276, _x277, _x278, _x279) {
    return _ref87.apply(this, arguments);
  };
}();
export var update_board_section = function () {
  var _ref88 = _asyncToGenerator(function* (sdk, board_section_id, body, fields, options) {
    board_section_id = encodeParam(board_section_id);
    return sdk.patch("/board_sections/".concat(board_section_id), {
      fields
    }, body, options);
  });
  return function update_board_section(_x280, _x281, _x282, _x283, _x284) {
    return _ref88.apply(this, arguments);
  };
}();
export var delete_board_section = function () {
  var _ref89 = _asyncToGenerator(function* (sdk, board_section_id, options) {
    board_section_id = encodeParam(board_section_id);
    return sdk.delete("/board_sections/".concat(board_section_id), null, null, options);
  });
  return function delete_board_section(_x285, _x286, _x287) {
    return _ref89.apply(this, arguments);
  };
}();
export var all_color_collections = function () {
  var _ref90 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/color_collections', {
      fields
    }, null, options);
  });
  return function all_color_collections(_x288, _x289, _x290) {
    return _ref90.apply(this, arguments);
  };
}();
export var create_color_collection = function () {
  var _ref91 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/color_collections', null, body, options);
  });
  return function create_color_collection(_x291, _x292, _x293) {
    return _ref91.apply(this, arguments);
  };
}();
export var color_collections_custom = function () {
  var _ref92 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/color_collections/custom', {
      fields
    }, null, options);
  });
  return function color_collections_custom(_x294, _x295, _x296) {
    return _ref92.apply(this, arguments);
  };
}();
export var color_collections_standard = function () {
  var _ref93 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/color_collections/standard', {
      fields
    }, null, options);
  });
  return function color_collections_standard(_x297, _x298, _x299) {
    return _ref93.apply(this, arguments);
  };
}();
export var default_color_collection = function () {
  var _ref94 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/color_collections/default', null, null, options);
  });
  return function default_color_collection(_x300, _x301) {
    return _ref94.apply(this, arguments);
  };
}();
export var set_default_color_collection = function () {
  var _ref95 = _asyncToGenerator(function* (sdk, collection_id, options) {
    return sdk.put('/color_collections/default', {
      collection_id
    }, null, options);
  });
  return function set_default_color_collection(_x302, _x303, _x304) {
    return _ref95.apply(this, arguments);
  };
}();
export var color_collection = function () {
  var _ref96 = _asyncToGenerator(function* (sdk, collection_id, fields, options) {
    collection_id = encodeParam(collection_id);
    return sdk.get("/color_collections/".concat(collection_id), {
      fields
    }, null, options);
  });
  return function color_collection(_x305, _x306, _x307, _x308) {
    return _ref96.apply(this, arguments);
  };
}();
export var update_color_collection = function () {
  var _ref97 = _asyncToGenerator(function* (sdk, collection_id, body, options) {
    collection_id = encodeParam(collection_id);
    return sdk.patch("/color_collections/".concat(collection_id), null, body, options);
  });
  return function update_color_collection(_x309, _x310, _x311, _x312) {
    return _ref97.apply(this, arguments);
  };
}();
export var delete_color_collection = function () {
  var _ref98 = _asyncToGenerator(function* (sdk, collection_id, options) {
    collection_id = encodeParam(collection_id);
    return sdk.delete("/color_collections/".concat(collection_id), null, null, options);
  });
  return function delete_color_collection(_x313, _x314, _x315) {
    return _ref98.apply(this, arguments);
  };
}();
export var cloud_storage_configuration = function () {
  var _ref99 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/cloud_storage', null, null, options);
  });
  return function cloud_storage_configuration(_x316, _x317) {
    return _ref99.apply(this, arguments);
  };
}();
export var update_cloud_storage_configuration = function () {
  var _ref100 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/cloud_storage', null, body, options);
  });
  return function update_cloud_storage_configuration(_x318, _x319, _x320) {
    return _ref100.apply(this, arguments);
  };
}();
export var custom_welcome_email = function () {
  var _ref101 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/custom_welcome_email', null, null, options);
  });
  return function custom_welcome_email(_x321, _x322) {
    return _ref101.apply(this, arguments);
  };
}();
export var update_custom_welcome_email = function () {
  var _ref102 = _asyncToGenerator(function* (sdk, body, send_test_welcome_email, options) {
    return sdk.patch('/custom_welcome_email', {
      send_test_welcome_email
    }, body, options);
  });
  return function update_custom_welcome_email(_x323, _x324, _x325, _x326) {
    return _ref102.apply(this, arguments);
  };
}();
export var update_custom_welcome_email_test = function () {
  var _ref103 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/custom_welcome_email_test', null, body, options);
  });
  return function update_custom_welcome_email_test(_x327, _x328, _x329) {
    return _ref103.apply(this, arguments);
  };
}();
export var digest_emails_enabled = function () {
  var _ref104 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/digest_emails_enabled', null, null, options);
  });
  return function digest_emails_enabled(_x330, _x331) {
    return _ref104.apply(this, arguments);
  };
}();
export var update_digest_emails_enabled = function () {
  var _ref105 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/digest_emails_enabled', null, body, options);
  });
  return function update_digest_emails_enabled(_x332, _x333, _x334) {
    return _ref105.apply(this, arguments);
  };
}();
export var create_digest_email_send = function () {
  var _ref106 = _asyncToGenerator(function* (sdk, options) {
    return sdk.post('/digest_email_send', null, null, options);
  });
  return function create_digest_email_send(_x335, _x336) {
    return _ref106.apply(this, arguments);
  };
}();
export var public_egress_ip_addresses = function () {
  var _ref107 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/public_egress_ip_addresses', null, null, options);
  });
  return function public_egress_ip_addresses(_x337, _x338) {
    return _ref107.apply(this, arguments);
  };
}();
export var internal_help_resources_content = function () {
  var _ref108 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/internal_help_resources_content', null, null, options);
  });
  return function internal_help_resources_content(_x339, _x340) {
    return _ref108.apply(this, arguments);
  };
}();
export var update_internal_help_resources_content = function () {
  var _ref109 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/internal_help_resources_content', null, body, options);
  });
  return function update_internal_help_resources_content(_x341, _x342, _x343) {
    return _ref109.apply(this, arguments);
  };
}();
export var internal_help_resources = function () {
  var _ref110 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/internal_help_resources_enabled', null, null, options);
  });
  return function internal_help_resources(_x344, _x345) {
    return _ref110.apply(this, arguments);
  };
}();
export var update_internal_help_resources = function () {
  var _ref111 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/internal_help_resources', null, body, options);
  });
  return function update_internal_help_resources(_x346, _x347, _x348) {
    return _ref111.apply(this, arguments);
  };
}();
export var all_legacy_features = function () {
  var _ref112 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/legacy_features', null, null, options);
  });
  return function all_legacy_features(_x349, _x350) {
    return _ref112.apply(this, arguments);
  };
}();
export var legacy_feature = function () {
  var _ref113 = _asyncToGenerator(function* (sdk, legacy_feature_id, options) {
    legacy_feature_id = encodeParam(legacy_feature_id);
    return sdk.get("/legacy_features/".concat(legacy_feature_id), null, null, options);
  });
  return function legacy_feature(_x351, _x352, _x353) {
    return _ref113.apply(this, arguments);
  };
}();
export var update_legacy_feature = function () {
  var _ref114 = _asyncToGenerator(function* (sdk, legacy_feature_id, body, options) {
    legacy_feature_id = encodeParam(legacy_feature_id);
    return sdk.patch("/legacy_features/".concat(legacy_feature_id), null, body, options);
  });
  return function update_legacy_feature(_x354, _x355, _x356, _x357) {
    return _ref114.apply(this, arguments);
  };
}();
export var all_locales = function () {
  var _ref115 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/locales', null, null, options);
  });
  return function all_locales(_x358, _x359) {
    return _ref115.apply(this, arguments);
  };
}();
export var mobile_settings = function () {
  var _ref116 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/mobile/settings', null, null, options);
  });
  return function mobile_settings(_x360, _x361) {
    return _ref116.apply(this, arguments);
  };
}();
export var get_setting = function () {
  var _ref117 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/setting', {
      fields
    }, null, options);
  });
  return function get_setting(_x362, _x363, _x364) {
    return _ref117.apply(this, arguments);
  };
}();
export var set_setting = function () {
  var _ref118 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.patch('/setting', {
      fields
    }, body, options);
  });
  return function set_setting(_x365, _x366, _x367, _x368) {
    return _ref118.apply(this, arguments);
  };
}();
export var set_smtp_settings = function () {
  var _ref119 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/smtp_settings', null, body, options);
  });
  return function set_smtp_settings(_x369, _x370, _x371) {
    return _ref119.apply(this, arguments);
  };
}();
export var smtp_status = function () {
  var _ref120 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/smtp_status', {
      fields
    }, null, options);
  });
  return function smtp_status(_x372, _x373, _x374) {
    return _ref120.apply(this, arguments);
  };
}();
export var all_timezones = function () {
  var _ref121 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/timezones', null, null, options);
  });
  return function all_timezones(_x375, _x376) {
    return _ref121.apply(this, arguments);
  };
}();
export var versions = function () {
  var _ref122 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/versions', {
      fields
    }, null, options);
  });
  return function versions(_x377, _x378, _x379) {
    return _ref122.apply(this, arguments);
  };
}();
export var api_spec = function () {
  var _ref123 = _asyncToGenerator(function* (sdk, api_version, specification, options) {
    api_version = encodeParam(api_version);
    specification = encodeParam(specification);
    return sdk.get("/api_spec/".concat(api_version, "/").concat(specification), null, null, options);
  });
  return function api_spec(_x380, _x381, _x382, _x383) {
    return _ref123.apply(this, arguments);
  };
}();
export var whitelabel_configuration = function () {
  var _ref124 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/whitelabel_configuration', {
      fields
    }, null, options);
  });
  return function whitelabel_configuration(_x384, _x385, _x386) {
    return _ref124.apply(this, arguments);
  };
}();
export var update_whitelabel_configuration = function () {
  var _ref125 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/whitelabel_configuration', null, body, options);
  });
  return function update_whitelabel_configuration(_x387, _x388, _x389) {
    return _ref125.apply(this, arguments);
  };
}();
export var all_connections = function () {
  var _ref126 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/connections', {
      fields
    }, null, options);
  });
  return function all_connections(_x390, _x391, _x392) {
    return _ref126.apply(this, arguments);
  };
}();
export var create_connection = function () {
  var _ref127 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/connections', null, body, options);
  });
  return function create_connection(_x393, _x394, _x395) {
    return _ref127.apply(this, arguments);
  };
}();
export var connection = function () {
  var _ref128 = _asyncToGenerator(function* (sdk, connection_name, fields, options) {
    connection_name = encodeParam(connection_name);
    return sdk.get("/connections/".concat(connection_name), {
      fields
    }, null, options);
  });
  return function connection(_x396, _x397, _x398, _x399) {
    return _ref128.apply(this, arguments);
  };
}();
export var update_connection = function () {
  var _ref129 = _asyncToGenerator(function* (sdk, connection_name, body, options) {
    connection_name = encodeParam(connection_name);
    return sdk.patch("/connections/".concat(connection_name), null, body, options);
  });
  return function update_connection(_x400, _x401, _x402, _x403) {
    return _ref129.apply(this, arguments);
  };
}();
export var delete_connection = function () {
  var _ref130 = _asyncToGenerator(function* (sdk, connection_name, options) {
    connection_name = encodeParam(connection_name);
    return sdk.delete("/connections/".concat(connection_name), null, null, options);
  });
  return function delete_connection(_x404, _x405, _x406) {
    return _ref130.apply(this, arguments);
  };
}();
export var delete_connection_override = function () {
  var _ref131 = _asyncToGenerator(function* (sdk, connection_name, override_context, options) {
    connection_name = encodeParam(connection_name);
    override_context = encodeParam(override_context);
    return sdk.delete("/connections/".concat(connection_name, "/connection_override/").concat(override_context), null, null, options);
  });
  return function delete_connection_override(_x407, _x408, _x409, _x410) {
    return _ref131.apply(this, arguments);
  };
}();
export var test_connection = function () {
  var _ref132 = _asyncToGenerator(function* (sdk, connection_name, tests, options) {
    connection_name = encodeParam(connection_name);
    return sdk.put("/connections/".concat(connection_name, "/test"), {
      tests
    }, null, options);
  });
  return function test_connection(_x411, _x412, _x413, _x414) {
    return _ref132.apply(this, arguments);
  };
}();
export var test_connection_config = function () {
  var _ref133 = _asyncToGenerator(function* (sdk, body, tests, options) {
    return sdk.put('/connections/test', {
      tests
    }, body, options);
  });
  return function test_connection_config(_x415, _x416, _x417, _x418) {
    return _ref133.apply(this, arguments);
  };
}();
export var all_dialect_infos = function () {
  var _ref134 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/dialect_info', {
      fields
    }, null, options);
  });
  return function all_dialect_infos(_x419, _x420, _x421) {
    return _ref134.apply(this, arguments);
  };
}();
export var all_external_oauth_applications = function () {
  var _ref135 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/external_oauth_applications', {
      name: request.name,
      client_id: request.client_id
    }, null, options);
  });
  return function all_external_oauth_applications(_x422, _x423, _x424) {
    return _ref135.apply(this, arguments);
  };
}();
export var create_external_oauth_application = function () {
  var _ref136 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/external_oauth_applications', null, body, options);
  });
  return function create_external_oauth_application(_x425, _x426, _x427) {
    return _ref136.apply(this, arguments);
  };
}();
export var create_oauth_application_user_state = function () {
  var _ref137 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/external_oauth_applications/user_state', null, body, options);
  });
  return function create_oauth_application_user_state(_x428, _x429, _x430) {
    return _ref137.apply(this, arguments);
  };
}();
export var all_ssh_servers = function () {
  var _ref138 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/ssh_servers', {
      fields
    }, null, options);
  });
  return function all_ssh_servers(_x431, _x432, _x433) {
    return _ref138.apply(this, arguments);
  };
}();
export var create_ssh_server = function () {
  var _ref139 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/ssh_servers', null, body, options);
  });
  return function create_ssh_server(_x434, _x435, _x436) {
    return _ref139.apply(this, arguments);
  };
}();
export var ssh_server = function () {
  var _ref140 = _asyncToGenerator(function* (sdk, ssh_server_id, options) {
    ssh_server_id = encodeParam(ssh_server_id);
    return sdk.get("/ssh_server/".concat(ssh_server_id), null, null, options);
  });
  return function ssh_server(_x437, _x438, _x439) {
    return _ref140.apply(this, arguments);
  };
}();
export var update_ssh_server = function () {
  var _ref141 = _asyncToGenerator(function* (sdk, ssh_server_id, body, options) {
    ssh_server_id = encodeParam(ssh_server_id);
    return sdk.patch("/ssh_server/".concat(ssh_server_id), null, body, options);
  });
  return function update_ssh_server(_x440, _x441, _x442, _x443) {
    return _ref141.apply(this, arguments);
  };
}();
export var delete_ssh_server = function () {
  var _ref142 = _asyncToGenerator(function* (sdk, ssh_server_id, options) {
    ssh_server_id = encodeParam(ssh_server_id);
    return sdk.delete("/ssh_server/".concat(ssh_server_id), null, null, options);
  });
  return function delete_ssh_server(_x444, _x445, _x446) {
    return _ref142.apply(this, arguments);
  };
}();
export var test_ssh_server = function () {
  var _ref143 = _asyncToGenerator(function* (sdk, ssh_server_id, options) {
    ssh_server_id = encodeParam(ssh_server_id);
    return sdk.get("/ssh_server/".concat(ssh_server_id, "/test"), null, null, options);
  });
  return function test_ssh_server(_x447, _x448, _x449) {
    return _ref143.apply(this, arguments);
  };
}();
export var all_ssh_tunnels = function () {
  var _ref144 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/ssh_tunnels', {
      fields
    }, null, options);
  });
  return function all_ssh_tunnels(_x450, _x451, _x452) {
    return _ref144.apply(this, arguments);
  };
}();
export var create_ssh_tunnel = function () {
  var _ref145 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/ssh_tunnels', null, body, options);
  });
  return function create_ssh_tunnel(_x453, _x454, _x455) {
    return _ref145.apply(this, arguments);
  };
}();
export var ssh_tunnel = function () {
  var _ref146 = _asyncToGenerator(function* (sdk, ssh_tunnel_id, options) {
    ssh_tunnel_id = encodeParam(ssh_tunnel_id);
    return sdk.get("/ssh_tunnel/".concat(ssh_tunnel_id), null, null, options);
  });
  return function ssh_tunnel(_x456, _x457, _x458) {
    return _ref146.apply(this, arguments);
  };
}();
export var update_ssh_tunnel = function () {
  var _ref147 = _asyncToGenerator(function* (sdk, ssh_tunnel_id, body, options) {
    ssh_tunnel_id = encodeParam(ssh_tunnel_id);
    return sdk.patch("/ssh_tunnel/".concat(ssh_tunnel_id), null, body, options);
  });
  return function update_ssh_tunnel(_x459, _x460, _x461, _x462) {
    return _ref147.apply(this, arguments);
  };
}();
export var delete_ssh_tunnel = function () {
  var _ref148 = _asyncToGenerator(function* (sdk, ssh_tunnel_id, options) {
    ssh_tunnel_id = encodeParam(ssh_tunnel_id);
    return sdk.delete("/ssh_tunnel/".concat(ssh_tunnel_id), null, null, options);
  });
  return function delete_ssh_tunnel(_x463, _x464, _x465) {
    return _ref148.apply(this, arguments);
  };
}();
export var test_ssh_tunnel = function () {
  var _ref149 = _asyncToGenerator(function* (sdk, ssh_tunnel_id, options) {
    ssh_tunnel_id = encodeParam(ssh_tunnel_id);
    return sdk.get("/ssh_tunnel/".concat(ssh_tunnel_id, "/test"), null, null, options);
  });
  return function test_ssh_tunnel(_x466, _x467, _x468) {
    return _ref149.apply(this, arguments);
  };
}();
export var ssh_public_key = function () {
  var _ref150 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/ssh_public_key', null, null, options);
  });
  return function ssh_public_key(_x469, _x470) {
    return _ref150.apply(this, arguments);
  };
}();
export var search_content_favorites = function () {
  var _ref151 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/content_favorite/search', {
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
  });
  return function search_content_favorites(_x471, _x472, _x473) {
    return _ref151.apply(this, arguments);
  };
}();
export var content_favorite = function () {
  var _ref152 = _asyncToGenerator(function* (sdk, content_favorite_id, fields, options) {
    content_favorite_id = encodeParam(content_favorite_id);
    return sdk.get("/content_favorite/".concat(content_favorite_id), {
      fields
    }, null, options);
  });
  return function content_favorite(_x474, _x475, _x476, _x477) {
    return _ref152.apply(this, arguments);
  };
}();
export var delete_content_favorite = function () {
  var _ref153 = _asyncToGenerator(function* (sdk, content_favorite_id, options) {
    content_favorite_id = encodeParam(content_favorite_id);
    return sdk.delete("/content_favorite/".concat(content_favorite_id), null, null, options);
  });
  return function delete_content_favorite(_x478, _x479, _x480) {
    return _ref153.apply(this, arguments);
  };
}();
export var create_content_favorite = function () {
  var _ref154 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/content_favorite', null, body, options);
  });
  return function create_content_favorite(_x481, _x482, _x483) {
    return _ref154.apply(this, arguments);
  };
}();
export var all_content_metadatas = function () {
  var _ref155 = _asyncToGenerator(function* (sdk, parent_id, fields, options) {
    return sdk.get('/content_metadata', {
      parent_id,
      fields
    }, null, options);
  });
  return function all_content_metadatas(_x484, _x485, _x486, _x487) {
    return _ref155.apply(this, arguments);
  };
}();
export var content_metadata = function () {
  var _ref156 = _asyncToGenerator(function* (sdk, content_metadata_id, fields, options) {
    content_metadata_id = encodeParam(content_metadata_id);
    return sdk.get("/content_metadata/".concat(content_metadata_id), {
      fields
    }, null, options);
  });
  return function content_metadata(_x488, _x489, _x490, _x491) {
    return _ref156.apply(this, arguments);
  };
}();
export var update_content_metadata = function () {
  var _ref157 = _asyncToGenerator(function* (sdk, content_metadata_id, body, options) {
    content_metadata_id = encodeParam(content_metadata_id);
    return sdk.patch("/content_metadata/".concat(content_metadata_id), null, body, options);
  });
  return function update_content_metadata(_x492, _x493, _x494, _x495) {
    return _ref157.apply(this, arguments);
  };
}();
export var all_content_metadata_accesses = function () {
  var _ref158 = _asyncToGenerator(function* (sdk, content_metadata_id, fields, options) {
    return sdk.get('/content_metadata_access', {
      content_metadata_id,
      fields
    }, null, options);
  });
  return function all_content_metadata_accesses(_x496, _x497, _x498, _x499) {
    return _ref158.apply(this, arguments);
  };
}();
export var create_content_metadata_access = function () {
  var _ref159 = _asyncToGenerator(function* (sdk, body, send_boards_notification_email, options) {
    return sdk.post('/content_metadata_access', {
      send_boards_notification_email
    }, body, options);
  });
  return function create_content_metadata_access(_x500, _x501, _x502, _x503) {
    return _ref159.apply(this, arguments);
  };
}();
export var update_content_metadata_access = function () {
  var _ref160 = _asyncToGenerator(function* (sdk, content_metadata_access_id, body, options) {
    content_metadata_access_id = encodeParam(content_metadata_access_id);
    return sdk.put("/content_metadata_access/".concat(content_metadata_access_id), null, body, options);
  });
  return function update_content_metadata_access(_x504, _x505, _x506, _x507) {
    return _ref160.apply(this, arguments);
  };
}();
export var delete_content_metadata_access = function () {
  var _ref161 = _asyncToGenerator(function* (sdk, content_metadata_access_id, options) {
    content_metadata_access_id = encodeParam(content_metadata_access_id);
    return sdk.delete("/content_metadata_access/".concat(content_metadata_access_id), null, null, options);
  });
  return function delete_content_metadata_access(_x508, _x509, _x510) {
    return _ref161.apply(this, arguments);
  };
}();
export var search_content = function () {
  var _ref162 = _asyncToGenerator(function* (sdk, request, options) {
    request.terms = encodeParam(request.terms);
    return sdk.get("/content/".concat(request.terms), {
      fields: request.fields,
      types: request.types,
      limit: request.limit,
      offset: request.offset,
      page: request.page,
      per_page: request.per_page
    }, null, options);
  });
  return function search_content(_x511, _x512, _x513) {
    return _ref162.apply(this, arguments);
  };
}();
export var content_thumbnail = function () {
  var _ref163 = _asyncToGenerator(function* (sdk, request, options) {
    request.type = encodeParam(request.type);
    request.resource_id = encodeParam(request.resource_id);
    return sdk.get("/content_thumbnail/".concat(request.type, "/").concat(request.resource_id), {
      reload: request.reload,
      theme: request.theme,
      format: request.format,
      width: request.width,
      height: request.height
    }, null, options);
  });
  return function content_thumbnail(_x514, _x515, _x516) {
    return _ref163.apply(this, arguments);
  };
}();
export var content_validation = function () {
  var _ref164 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/content_validation', {
      fields
    }, null, options);
  });
  return function content_validation(_x517, _x518, _x519) {
    return _ref164.apply(this, arguments);
  };
}();
export var search_content_views = function () {
  var _ref165 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/content_view/search', {
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
  });
  return function search_content_views(_x520, _x521, _x522) {
    return _ref165.apply(this, arguments);
  };
}();
export var vector_thumbnail = function () {
  var _ref166 = _asyncToGenerator(function* (sdk, type, resource_id, reload, options) {
    type = encodeParam(type);
    resource_id = encodeParam(resource_id);
    return sdk.get("/vector_thumbnail/".concat(type, "/").concat(resource_id), {
      reload
    }, null, options);
  });
  return function vector_thumbnail(_x523, _x524, _x525, _x526, _x527) {
    return _ref166.apply(this, arguments);
  };
}();
export var all_dashboards = function () {
  var _ref167 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/dashboards', {
      fields
    }, null, options);
  });
  return function all_dashboards(_x528, _x529, _x530) {
    return _ref167.apply(this, arguments);
  };
}();
export var create_dashboard = function () {
  var _ref168 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/dashboards', null, body, options);
  });
  return function create_dashboard(_x531, _x532, _x533) {
    return _ref168.apply(this, arguments);
  };
}();
export var search_dashboards = function () {
  var _ref169 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/dashboards/search', {
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
  });
  return function search_dashboards(_x534, _x535, _x536) {
    return _ref169.apply(this, arguments);
  };
}();
export var import_lookml_dashboard = function () {
  var _ref170 = _asyncToGenerator(function* (sdk, lookml_dashboard_id, space_id, body, raw_locale, options) {
    lookml_dashboard_id = encodeParam(lookml_dashboard_id);
    space_id = encodeParam(space_id);
    return sdk.post("/dashboards/".concat(lookml_dashboard_id, "/import/").concat(space_id), {
      raw_locale
    }, body, options);
  });
  return function import_lookml_dashboard(_x537, _x538, _x539, _x540, _x541, _x542) {
    return _ref170.apply(this, arguments);
  };
}();
export var sync_lookml_dashboard = function () {
  var _ref171 = _asyncToGenerator(function* (sdk, lookml_dashboard_id, body, raw_locale, options) {
    lookml_dashboard_id = encodeParam(lookml_dashboard_id);
    return sdk.patch("/dashboards/".concat(lookml_dashboard_id, "/sync"), {
      raw_locale
    }, body, options);
  });
  return function sync_lookml_dashboard(_x543, _x544, _x545, _x546, _x547) {
    return _ref171.apply(this, arguments);
  };
}();
export var dashboard = function () {
  var _ref172 = _asyncToGenerator(function* (sdk, dashboard_id, fields, options) {
    dashboard_id = encodeParam(dashboard_id);
    return sdk.get("/dashboards/".concat(dashboard_id), {
      fields
    }, null, options);
  });
  return function dashboard(_x548, _x549, _x550, _x551) {
    return _ref172.apply(this, arguments);
  };
}();
export var update_dashboard = function () {
  var _ref173 = _asyncToGenerator(function* (sdk, dashboard_id, body, options) {
    dashboard_id = encodeParam(dashboard_id);
    return sdk.patch("/dashboards/".concat(dashboard_id), null, body, options);
  });
  return function update_dashboard(_x552, _x553, _x554, _x555) {
    return _ref173.apply(this, arguments);
  };
}();
export var delete_dashboard = function () {
  var _ref174 = _asyncToGenerator(function* (sdk, dashboard_id, options) {
    dashboard_id = encodeParam(dashboard_id);
    return sdk.delete("/dashboards/".concat(dashboard_id), null, null, options);
  });
  return function delete_dashboard(_x556, _x557, _x558) {
    return _ref174.apply(this, arguments);
  };
}();
export var dashboard_aggregate_table_lookml = function () {
  var _ref175 = _asyncToGenerator(function* (sdk, dashboard_id, options) {
    dashboard_id = encodeParam(dashboard_id);
    return sdk.get("/dashboards/aggregate_table_lookml/".concat(dashboard_id), null, null, options);
  });
  return function dashboard_aggregate_table_lookml(_x559, _x560, _x561) {
    return _ref175.apply(this, arguments);
  };
}();
export var dashboard_lookml = function () {
  var _ref176 = _asyncToGenerator(function* (sdk, dashboard_id, options) {
    dashboard_id = encodeParam(dashboard_id);
    return sdk.get("/dashboards/lookml/".concat(dashboard_id), null, null, options);
  });
  return function dashboard_lookml(_x562, _x563, _x564) {
    return _ref176.apply(this, arguments);
  };
}();
export var move_dashboard = function () {
  var _ref177 = _asyncToGenerator(function* (sdk, dashboard_id, folder_id, options) {
    dashboard_id = encodeParam(dashboard_id);
    return sdk.patch("/dashboards/".concat(dashboard_id, "/move"), {
      folder_id
    }, null, options);
  });
  return function move_dashboard(_x565, _x566, _x567, _x568) {
    return _ref177.apply(this, arguments);
  };
}();
export var import_dashboard_from_lookml = function () {
  var _ref178 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/dashboards/lookml', null, body, options);
  });
  return function import_dashboard_from_lookml(_x569, _x570, _x571) {
    return _ref178.apply(this, arguments);
  };
}();
export var create_dashboard_from_lookml = function () {
  var _ref179 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/dashboards/from_lookml', null, body, options);
  });
  return function create_dashboard_from_lookml(_x572, _x573, _x574) {
    return _ref179.apply(this, arguments);
  };
}();
export var copy_dashboard = function () {
  var _ref180 = _asyncToGenerator(function* (sdk, dashboard_id, folder_id, options) {
    dashboard_id = encodeParam(dashboard_id);
    return sdk.post("/dashboards/".concat(dashboard_id, "/copy"), {
      folder_id
    }, null, options);
  });
  return function copy_dashboard(_x575, _x576, _x577, _x578) {
    return _ref180.apply(this, arguments);
  };
}();
export var search_dashboard_elements = function () {
  var _ref181 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/dashboard_elements/search', {
      dashboard_id: request.dashboard_id,
      look_id: request.look_id,
      title: request.title,
      deleted: request.deleted,
      fields: request.fields,
      filter_or: request.filter_or,
      sorts: request.sorts
    }, null, options);
  });
  return function search_dashboard_elements(_x579, _x580, _x581) {
    return _ref181.apply(this, arguments);
  };
}();
export var dashboard_element = function () {
  var _ref182 = _asyncToGenerator(function* (sdk, dashboard_element_id, fields, options) {
    dashboard_element_id = encodeParam(dashboard_element_id);
    return sdk.get("/dashboard_elements/".concat(dashboard_element_id), {
      fields
    }, null, options);
  });
  return function dashboard_element(_x582, _x583, _x584, _x585) {
    return _ref182.apply(this, arguments);
  };
}();
export var update_dashboard_element = function () {
  var _ref183 = _asyncToGenerator(function* (sdk, dashboard_element_id, body, fields, options) {
    dashboard_element_id = encodeParam(dashboard_element_id);
    return sdk.patch("/dashboard_elements/".concat(dashboard_element_id), {
      fields
    }, body, options);
  });
  return function update_dashboard_element(_x586, _x587, _x588, _x589, _x590) {
    return _ref183.apply(this, arguments);
  };
}();
export var delete_dashboard_element = function () {
  var _ref184 = _asyncToGenerator(function* (sdk, dashboard_element_id, options) {
    dashboard_element_id = encodeParam(dashboard_element_id);
    return sdk.delete("/dashboard_elements/".concat(dashboard_element_id), null, null, options);
  });
  return function delete_dashboard_element(_x591, _x592, _x593) {
    return _ref184.apply(this, arguments);
  };
}();
export var dashboard_dashboard_elements = function () {
  var _ref185 = _asyncToGenerator(function* (sdk, dashboard_id, fields, options) {
    dashboard_id = encodeParam(dashboard_id);
    return sdk.get("/dashboards/".concat(dashboard_id, "/dashboard_elements"), {
      fields
    }, null, options);
  });
  return function dashboard_dashboard_elements(_x594, _x595, _x596, _x597) {
    return _ref185.apply(this, arguments);
  };
}();
export var create_dashboard_element = function () {
  var _ref186 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.post('/dashboard_elements', {
      fields: request.fields,
      apply_filters: request.apply_filters
    }, request.body, options);
  });
  return function create_dashboard_element(_x598, _x599, _x600) {
    return _ref186.apply(this, arguments);
  };
}();
export var dashboard_filter = function () {
  var _ref187 = _asyncToGenerator(function* (sdk, dashboard_filter_id, fields, options) {
    dashboard_filter_id = encodeParam(dashboard_filter_id);
    return sdk.get("/dashboard_filters/".concat(dashboard_filter_id), {
      fields
    }, null, options);
  });
  return function dashboard_filter(_x601, _x602, _x603, _x604) {
    return _ref187.apply(this, arguments);
  };
}();
export var update_dashboard_filter = function () {
  var _ref188 = _asyncToGenerator(function* (sdk, dashboard_filter_id, body, fields, options) {
    dashboard_filter_id = encodeParam(dashboard_filter_id);
    return sdk.patch("/dashboard_filters/".concat(dashboard_filter_id), {
      fields
    }, body, options);
  });
  return function update_dashboard_filter(_x605, _x606, _x607, _x608, _x609) {
    return _ref188.apply(this, arguments);
  };
}();
export var delete_dashboard_filter = function () {
  var _ref189 = _asyncToGenerator(function* (sdk, dashboard_filter_id, options) {
    dashboard_filter_id = encodeParam(dashboard_filter_id);
    return sdk.delete("/dashboard_filters/".concat(dashboard_filter_id), null, null, options);
  });
  return function delete_dashboard_filter(_x610, _x611, _x612) {
    return _ref189.apply(this, arguments);
  };
}();
export var dashboard_dashboard_filters = function () {
  var _ref190 = _asyncToGenerator(function* (sdk, dashboard_id, fields, options) {
    dashboard_id = encodeParam(dashboard_id);
    return sdk.get("/dashboards/".concat(dashboard_id, "/dashboard_filters"), {
      fields
    }, null, options);
  });
  return function dashboard_dashboard_filters(_x613, _x614, _x615, _x616) {
    return _ref190.apply(this, arguments);
  };
}();
export var create_dashboard_filter = function () {
  var _ref191 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/dashboard_filters', {
      fields
    }, body, options);
  });
  return function create_dashboard_filter(_x617, _x618, _x619, _x620) {
    return _ref191.apply(this, arguments);
  };
}();
export var dashboard_layout_component = function () {
  var _ref192 = _asyncToGenerator(function* (sdk, dashboard_layout_component_id, fields, options) {
    dashboard_layout_component_id = encodeParam(dashboard_layout_component_id);
    return sdk.get("/dashboard_layout_components/".concat(dashboard_layout_component_id), {
      fields
    }, null, options);
  });
  return function dashboard_layout_component(_x621, _x622, _x623, _x624) {
    return _ref192.apply(this, arguments);
  };
}();
export var update_dashboard_layout_component = function () {
  var _ref193 = _asyncToGenerator(function* (sdk, dashboard_layout_component_id, body, fields, options) {
    dashboard_layout_component_id = encodeParam(dashboard_layout_component_id);
    return sdk.patch("/dashboard_layout_components/".concat(dashboard_layout_component_id), {
      fields
    }, body, options);
  });
  return function update_dashboard_layout_component(_x625, _x626, _x627, _x628, _x629) {
    return _ref193.apply(this, arguments);
  };
}();
export var dashboard_layout_dashboard_layout_components = function () {
  var _ref194 = _asyncToGenerator(function* (sdk, dashboard_layout_id, fields, options) {
    dashboard_layout_id = encodeParam(dashboard_layout_id);
    return sdk.get("/dashboard_layouts/".concat(dashboard_layout_id, "/dashboard_layout_components"), {
      fields
    }, null, options);
  });
  return function dashboard_layout_dashboard_layout_components(_x630, _x631, _x632, _x633) {
    return _ref194.apply(this, arguments);
  };
}();
export var dashboard_layout = function () {
  var _ref195 = _asyncToGenerator(function* (sdk, dashboard_layout_id, fields, options) {
    dashboard_layout_id = encodeParam(dashboard_layout_id);
    return sdk.get("/dashboard_layouts/".concat(dashboard_layout_id), {
      fields
    }, null, options);
  });
  return function dashboard_layout(_x634, _x635, _x636, _x637) {
    return _ref195.apply(this, arguments);
  };
}();
export var update_dashboard_layout = function () {
  var _ref196 = _asyncToGenerator(function* (sdk, dashboard_layout_id, body, fields, options) {
    dashboard_layout_id = encodeParam(dashboard_layout_id);
    return sdk.patch("/dashboard_layouts/".concat(dashboard_layout_id), {
      fields
    }, body, options);
  });
  return function update_dashboard_layout(_x638, _x639, _x640, _x641, _x642) {
    return _ref196.apply(this, arguments);
  };
}();
export var delete_dashboard_layout = function () {
  var _ref197 = _asyncToGenerator(function* (sdk, dashboard_layout_id, options) {
    dashboard_layout_id = encodeParam(dashboard_layout_id);
    return sdk.delete("/dashboard_layouts/".concat(dashboard_layout_id), null, null, options);
  });
  return function delete_dashboard_layout(_x643, _x644, _x645) {
    return _ref197.apply(this, arguments);
  };
}();
export var dashboard_dashboard_layouts = function () {
  var _ref198 = _asyncToGenerator(function* (sdk, dashboard_id, fields, options) {
    dashboard_id = encodeParam(dashboard_id);
    return sdk.get("/dashboards/".concat(dashboard_id, "/dashboard_layouts"), {
      fields
    }, null, options);
  });
  return function dashboard_dashboard_layouts(_x646, _x647, _x648, _x649) {
    return _ref198.apply(this, arguments);
  };
}();
export var create_dashboard_layout = function () {
  var _ref199 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/dashboard_layouts', {
      fields
    }, body, options);
  });
  return function create_dashboard_layout(_x650, _x651, _x652, _x653) {
    return _ref199.apply(this, arguments);
  };
}();
export var perform_data_action = function () {
  var _ref200 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/data_actions', null, body, options);
  });
  return function perform_data_action(_x654, _x655, _x656) {
    return _ref200.apply(this, arguments);
  };
}();
export var fetch_remote_data_action_form = function () {
  var _ref201 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/data_actions/form', null, body, options);
  });
  return function fetch_remote_data_action_form(_x657, _x658, _x659) {
    return _ref201.apply(this, arguments);
  };
}();
export var all_datagroups = function () {
  var _ref202 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/datagroups', null, null, options);
  });
  return function all_datagroups(_x660, _x661) {
    return _ref202.apply(this, arguments);
  };
}();
export var datagroup = function () {
  var _ref203 = _asyncToGenerator(function* (sdk, datagroup_id, options) {
    datagroup_id = encodeParam(datagroup_id);
    return sdk.get("/datagroups/".concat(datagroup_id), null, null, options);
  });
  return function datagroup(_x662, _x663, _x664) {
    return _ref203.apply(this, arguments);
  };
}();
export var update_datagroup = function () {
  var _ref204 = _asyncToGenerator(function* (sdk, datagroup_id, body, options) {
    datagroup_id = encodeParam(datagroup_id);
    return sdk.patch("/datagroups/".concat(datagroup_id), null, body, options);
  });
  return function update_datagroup(_x665, _x666, _x667, _x668) {
    return _ref204.apply(this, arguments);
  };
}();
export var graph_derived_tables_for_model = function () {
  var _ref205 = _asyncToGenerator(function* (sdk, request, options) {
    request.model = encodeParam(request.model);
    return sdk.get("/derived_table/graph/model/".concat(request.model), {
      format: request.format,
      color: request.color
    }, null, options);
  });
  return function graph_derived_tables_for_model(_x669, _x670, _x671) {
    return _ref205.apply(this, arguments);
  };
}();
export var graph_derived_tables_for_view = function () {
  var _ref206 = _asyncToGenerator(function* (sdk, request, options) {
    request.view = encodeParam(request.view);
    return sdk.get("/derived_table/graph/view/".concat(request.view), {
      models: request.models,
      workspace: request.workspace
    }, null, options);
  });
  return function graph_derived_tables_for_view(_x672, _x673, _x674) {
    return _ref206.apply(this, arguments);
  };
}();
export var start_pdt_build = function () {
  var _ref207 = _asyncToGenerator(function* (sdk, request, options) {
    request.model_name = encodeParam(request.model_name);
    request.view_name = encodeParam(request.view_name);
    return sdk.get("/derived_table/".concat(request.model_name, "/").concat(request.view_name, "/start"), {
      force_rebuild: request.force_rebuild,
      force_full_incremental: request.force_full_incremental,
      workspace: request.workspace,
      source: request.source
    }, null, options);
  });
  return function start_pdt_build(_x675, _x676, _x677) {
    return _ref207.apply(this, arguments);
  };
}();
export var check_pdt_build = function () {
  var _ref208 = _asyncToGenerator(function* (sdk, materialization_id, options) {
    materialization_id = encodeParam(materialization_id);
    return sdk.get("/derived_table/".concat(materialization_id, "/status"), null, null, options);
  });
  return function check_pdt_build(_x678, _x679, _x680) {
    return _ref208.apply(this, arguments);
  };
}();
export var stop_pdt_build = function () {
  var _ref209 = _asyncToGenerator(function* (sdk, materialization_id, source, options) {
    materialization_id = encodeParam(materialization_id);
    return sdk.get("/derived_table/".concat(materialization_id, "/stop"), {
      source
    }, null, options);
  });
  return function stop_pdt_build(_x681, _x682, _x683, _x684) {
    return _ref209.apply(this, arguments);
  };
}();
export var search_folders = function () {
  var _ref210 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/folders/search', {
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
  });
  return function search_folders(_x685, _x686, _x687) {
    return _ref210.apply(this, arguments);
  };
}();
export var folder = function () {
  var _ref211 = _asyncToGenerator(function* (sdk, folder_id, fields, options) {
    folder_id = encodeParam(folder_id);
    return sdk.get("/folders/".concat(folder_id), {
      fields
    }, null, options);
  });
  return function folder(_x688, _x689, _x690, _x691) {
    return _ref211.apply(this, arguments);
  };
}();
export var update_folder = function () {
  var _ref212 = _asyncToGenerator(function* (sdk, folder_id, body, options) {
    folder_id = encodeParam(folder_id);
    return sdk.patch("/folders/".concat(folder_id), null, body, options);
  });
  return function update_folder(_x692, _x693, _x694, _x695) {
    return _ref212.apply(this, arguments);
  };
}();
export var delete_folder = function () {
  var _ref213 = _asyncToGenerator(function* (sdk, folder_id, options) {
    folder_id = encodeParam(folder_id);
    return sdk.delete("/folders/".concat(folder_id), null, null, options);
  });
  return function delete_folder(_x696, _x697, _x698) {
    return _ref213.apply(this, arguments);
  };
}();
export var all_folders = function () {
  var _ref214 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/folders', {
      fields
    }, null, options);
  });
  return function all_folders(_x699, _x700, _x701) {
    return _ref214.apply(this, arguments);
  };
}();
export var create_folder = function () {
  var _ref215 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/folders', null, body, options);
  });
  return function create_folder(_x702, _x703, _x704) {
    return _ref215.apply(this, arguments);
  };
}();
export var folder_children = function () {
  var _ref216 = _asyncToGenerator(function* (sdk, request, options) {
    request.folder_id = encodeParam(request.folder_id);
    return sdk.get("/folders/".concat(request.folder_id, "/children"), {
      fields: request.fields,
      page: request.page,
      per_page: request.per_page,
      limit: request.limit,
      offset: request.offset,
      sorts: request.sorts
    }, null, options);
  });
  return function folder_children(_x705, _x706, _x707) {
    return _ref216.apply(this, arguments);
  };
}();
export var folder_children_search = function () {
  var _ref217 = _asyncToGenerator(function* (sdk, request, options) {
    request.folder_id = encodeParam(request.folder_id);
    return sdk.get("/folders/".concat(request.folder_id, "/children/search"), {
      fields: request.fields,
      sorts: request.sorts,
      name: request.name
    }, null, options);
  });
  return function folder_children_search(_x708, _x709, _x710) {
    return _ref217.apply(this, arguments);
  };
}();
export var folder_parent = function () {
  var _ref218 = _asyncToGenerator(function* (sdk, folder_id, fields, options) {
    folder_id = encodeParam(folder_id);
    return sdk.get("/folders/".concat(folder_id, "/parent"), {
      fields
    }, null, options);
  });
  return function folder_parent(_x711, _x712, _x713, _x714) {
    return _ref218.apply(this, arguments);
  };
}();
export var folder_ancestors = function () {
  var _ref219 = _asyncToGenerator(function* (sdk, folder_id, fields, options) {
    folder_id = encodeParam(folder_id);
    return sdk.get("/folders/".concat(folder_id, "/ancestors"), {
      fields
    }, null, options);
  });
  return function folder_ancestors(_x715, _x716, _x717, _x718) {
    return _ref219.apply(this, arguments);
  };
}();
export var folder_looks = function () {
  var _ref220 = _asyncToGenerator(function* (sdk, folder_id, fields, options) {
    folder_id = encodeParam(folder_id);
    return sdk.get("/folders/".concat(folder_id, "/looks"), {
      fields
    }, null, options);
  });
  return function folder_looks(_x719, _x720, _x721, _x722) {
    return _ref220.apply(this, arguments);
  };
}();
export var folder_dashboards = function () {
  var _ref221 = _asyncToGenerator(function* (sdk, folder_id, fields, options) {
    folder_id = encodeParam(folder_id);
    return sdk.get("/folders/".concat(folder_id, "/dashboards"), {
      fields
    }, null, options);
  });
  return function folder_dashboards(_x723, _x724, _x725, _x726) {
    return _ref221.apply(this, arguments);
  };
}();
export var all_groups = function () {
  var _ref222 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/groups', {
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
  });
  return function all_groups(_x727, _x728, _x729) {
    return _ref222.apply(this, arguments);
  };
}();
export var create_group = function () {
  var _ref223 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/groups', {
      fields
    }, body, options);
  });
  return function create_group(_x730, _x731, _x732, _x733) {
    return _ref223.apply(this, arguments);
  };
}();
export var search_groups = function () {
  var _ref224 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/groups/search', {
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
  });
  return function search_groups(_x734, _x735, _x736) {
    return _ref224.apply(this, arguments);
  };
}();
export var search_groups_with_roles = function () {
  var _ref225 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/groups/search/with_roles', {
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
  });
  return function search_groups_with_roles(_x737, _x738, _x739) {
    return _ref225.apply(this, arguments);
  };
}();
export var search_groups_with_hierarchy = function () {
  var _ref226 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/groups/search/with_hierarchy', {
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
  });
  return function search_groups_with_hierarchy(_x740, _x741, _x742) {
    return _ref226.apply(this, arguments);
  };
}();
export var group = function () {
  var _ref227 = _asyncToGenerator(function* (sdk, group_id, fields, options) {
    group_id = encodeParam(group_id);
    return sdk.get("/groups/".concat(group_id), {
      fields
    }, null, options);
  });
  return function group(_x743, _x744, _x745, _x746) {
    return _ref227.apply(this, arguments);
  };
}();
export var update_group = function () {
  var _ref228 = _asyncToGenerator(function* (sdk, group_id, body, fields, options) {
    group_id = encodeParam(group_id);
    return sdk.patch("/groups/".concat(group_id), {
      fields
    }, body, options);
  });
  return function update_group(_x747, _x748, _x749, _x750, _x751) {
    return _ref228.apply(this, arguments);
  };
}();
export var delete_group = function () {
  var _ref229 = _asyncToGenerator(function* (sdk, group_id, options) {
    group_id = encodeParam(group_id);
    return sdk.delete("/groups/".concat(group_id), null, null, options);
  });
  return function delete_group(_x752, _x753, _x754) {
    return _ref229.apply(this, arguments);
  };
}();
export var all_group_groups = function () {
  var _ref230 = _asyncToGenerator(function* (sdk, group_id, fields, options) {
    group_id = encodeParam(group_id);
    return sdk.get("/groups/".concat(group_id, "/groups"), {
      fields
    }, null, options);
  });
  return function all_group_groups(_x755, _x756, _x757, _x758) {
    return _ref230.apply(this, arguments);
  };
}();
export var add_group_group = function () {
  var _ref231 = _asyncToGenerator(function* (sdk, group_id, body, options) {
    group_id = encodeParam(group_id);
    return sdk.post("/groups/".concat(group_id, "/groups"), null, body, options);
  });
  return function add_group_group(_x759, _x760, _x761, _x762) {
    return _ref231.apply(this, arguments);
  };
}();
export var all_group_users = function () {
  var _ref232 = _asyncToGenerator(function* (sdk, request, options) {
    request.group_id = encodeParam(request.group_id);
    return sdk.get("/groups/".concat(request.group_id, "/users"), {
      fields: request.fields,
      page: request.page,
      per_page: request.per_page,
      limit: request.limit,
      offset: request.offset,
      sorts: request.sorts
    }, null, options);
  });
  return function all_group_users(_x763, _x764, _x765) {
    return _ref232.apply(this, arguments);
  };
}();
export var add_group_user = function () {
  var _ref233 = _asyncToGenerator(function* (sdk, group_id, body, options) {
    group_id = encodeParam(group_id);
    return sdk.post("/groups/".concat(group_id, "/users"), null, body, options);
  });
  return function add_group_user(_x766, _x767, _x768, _x769) {
    return _ref233.apply(this, arguments);
  };
}();
export var delete_group_user = function () {
  var _ref234 = _asyncToGenerator(function* (sdk, group_id, user_id, options) {
    group_id = encodeParam(group_id);
    user_id = encodeParam(user_id);
    return sdk.delete("/groups/".concat(group_id, "/users/").concat(user_id), null, null, options);
  });
  return function delete_group_user(_x770, _x771, _x772, _x773) {
    return _ref234.apply(this, arguments);
  };
}();
export var delete_group_from_group = function () {
  var _ref235 = _asyncToGenerator(function* (sdk, group_id, deleting_group_id, options) {
    group_id = encodeParam(group_id);
    deleting_group_id = encodeParam(deleting_group_id);
    return sdk.delete("/groups/".concat(group_id, "/groups/").concat(deleting_group_id), null, null, options);
  });
  return function delete_group_from_group(_x774, _x775, _x776, _x777) {
    return _ref235.apply(this, arguments);
  };
}();
export var update_user_attribute_group_value = function () {
  var _ref236 = _asyncToGenerator(function* (sdk, group_id, user_attribute_id, body, options) {
    group_id = encodeParam(group_id);
    user_attribute_id = encodeParam(user_attribute_id);
    return sdk.patch("/groups/".concat(group_id, "/attribute_values/").concat(user_attribute_id), null, body, options);
  });
  return function update_user_attribute_group_value(_x778, _x779, _x780, _x781, _x782) {
    return _ref236.apply(this, arguments);
  };
}();
export var delete_user_attribute_group_value = function () {
  var _ref237 = _asyncToGenerator(function* (sdk, group_id, user_attribute_id, options) {
    group_id = encodeParam(group_id);
    user_attribute_id = encodeParam(user_attribute_id);
    return sdk.delete("/groups/".concat(group_id, "/attribute_values/").concat(user_attribute_id), null, null, options);
  });
  return function delete_user_attribute_group_value(_x783, _x784, _x785, _x786) {
    return _ref237.apply(this, arguments);
  };
}();
export var all_primary_homepage_sections = function () {
  var _ref238 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/primary_homepage_sections', {
      fields
    }, null, options);
  });
  return function all_primary_homepage_sections(_x787, _x788, _x789) {
    return _ref238.apply(this, arguments);
  };
}();
export var all_integration_hubs = function () {
  var _ref239 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/integration_hubs', {
      fields
    }, null, options);
  });
  return function all_integration_hubs(_x790, _x791, _x792) {
    return _ref239.apply(this, arguments);
  };
}();
export var create_integration_hub = function () {
  var _ref240 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/integration_hubs', {
      fields
    }, body, options);
  });
  return function create_integration_hub(_x793, _x794, _x795, _x796) {
    return _ref240.apply(this, arguments);
  };
}();
export var integration_hub = function () {
  var _ref241 = _asyncToGenerator(function* (sdk, integration_hub_id, fields, options) {
    integration_hub_id = encodeParam(integration_hub_id);
    return sdk.get("/integration_hubs/".concat(integration_hub_id), {
      fields
    }, null, options);
  });
  return function integration_hub(_x797, _x798, _x799, _x800) {
    return _ref241.apply(this, arguments);
  };
}();
export var update_integration_hub = function () {
  var _ref242 = _asyncToGenerator(function* (sdk, integration_hub_id, body, fields, options) {
    integration_hub_id = encodeParam(integration_hub_id);
    return sdk.patch("/integration_hubs/".concat(integration_hub_id), {
      fields
    }, body, options);
  });
  return function update_integration_hub(_x801, _x802, _x803, _x804, _x805) {
    return _ref242.apply(this, arguments);
  };
}();
export var delete_integration_hub = function () {
  var _ref243 = _asyncToGenerator(function* (sdk, integration_hub_id, options) {
    integration_hub_id = encodeParam(integration_hub_id);
    return sdk.delete("/integration_hubs/".concat(integration_hub_id), null, null, options);
  });
  return function delete_integration_hub(_x806, _x807, _x808) {
    return _ref243.apply(this, arguments);
  };
}();
export var accept_integration_hub_legal_agreement = function () {
  var _ref244 = _asyncToGenerator(function* (sdk, integration_hub_id, options) {
    integration_hub_id = encodeParam(integration_hub_id);
    return sdk.post("/integration_hubs/".concat(integration_hub_id, "/accept_legal_agreement"), null, null, options);
  });
  return function accept_integration_hub_legal_agreement(_x809, _x810, _x811) {
    return _ref244.apply(this, arguments);
  };
}();
export var all_integrations = function () {
  var _ref245 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/integrations', {
      fields: request.fields,
      integration_hub_id: request.integration_hub_id
    }, null, options);
  });
  return function all_integrations(_x812, _x813, _x814) {
    return _ref245.apply(this, arguments);
  };
}();
export var integration = function () {
  var _ref246 = _asyncToGenerator(function* (sdk, integration_id, fields, options) {
    integration_id = encodeParam(integration_id);
    return sdk.get("/integrations/".concat(integration_id), {
      fields
    }, null, options);
  });
  return function integration(_x815, _x816, _x817, _x818) {
    return _ref246.apply(this, arguments);
  };
}();
export var update_integration = function () {
  var _ref247 = _asyncToGenerator(function* (sdk, integration_id, body, fields, options) {
    integration_id = encodeParam(integration_id);
    return sdk.patch("/integrations/".concat(integration_id), {
      fields
    }, body, options);
  });
  return function update_integration(_x819, _x820, _x821, _x822, _x823) {
    return _ref247.apply(this, arguments);
  };
}();
export var fetch_integration_form = function () {
  var _ref248 = _asyncToGenerator(function* (sdk, integration_id, body, options) {
    integration_id = encodeParam(integration_id);
    return sdk.post("/integrations/".concat(integration_id, "/form"), null, body, options);
  });
  return function fetch_integration_form(_x824, _x825, _x826, _x827) {
    return _ref248.apply(this, arguments);
  };
}();
export var test_integration = function () {
  var _ref249 = _asyncToGenerator(function* (sdk, integration_id, options) {
    integration_id = encodeParam(integration_id);
    return sdk.post("/integrations/".concat(integration_id, "/test"), null, null, options);
  });
  return function test_integration(_x828, _x829, _x830) {
    return _ref249.apply(this, arguments);
  };
}();
export var all_looks = function () {
  var _ref250 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/looks', {
      fields
    }, null, options);
  });
  return function all_looks(_x831, _x832, _x833) {
    return _ref250.apply(this, arguments);
  };
}();
export var create_look = function () {
  var _ref251 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/looks', {
      fields
    }, body, options);
  });
  return function create_look(_x834, _x835, _x836, _x837) {
    return _ref251.apply(this, arguments);
  };
}();
export var search_looks = function () {
  var _ref252 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/looks/search', {
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
  });
  return function search_looks(_x838, _x839, _x840) {
    return _ref252.apply(this, arguments);
  };
}();
export var look = function () {
  var _ref253 = _asyncToGenerator(function* (sdk, look_id, fields, options) {
    look_id = encodeParam(look_id);
    return sdk.get("/looks/".concat(look_id), {
      fields
    }, null, options);
  });
  return function look(_x841, _x842, _x843, _x844) {
    return _ref253.apply(this, arguments);
  };
}();
export var update_look = function () {
  var _ref254 = _asyncToGenerator(function* (sdk, look_id, body, fields, options) {
    look_id = encodeParam(look_id);
    return sdk.patch("/looks/".concat(look_id), {
      fields
    }, body, options);
  });
  return function update_look(_x845, _x846, _x847, _x848, _x849) {
    return _ref254.apply(this, arguments);
  };
}();
export var delete_look = function () {
  var _ref255 = _asyncToGenerator(function* (sdk, look_id, options) {
    look_id = encodeParam(look_id);
    return sdk.delete("/looks/".concat(look_id), null, null, options);
  });
  return function delete_look(_x850, _x851, _x852) {
    return _ref255.apply(this, arguments);
  };
}();
export var run_look = function () {
  var _ref256 = _asyncToGenerator(function* (sdk, request, options) {
    request.look_id = encodeParam(request.look_id);
    request.result_format = encodeParam(request.result_format);
    return sdk.get("/looks/".concat(request.look_id, "/run/").concat(request.result_format), {
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
  });
  return function run_look(_x853, _x854, _x855) {
    return _ref256.apply(this, arguments);
  };
}();
export var copy_look = function () {
  var _ref257 = _asyncToGenerator(function* (sdk, look_id, folder_id, options) {
    look_id = encodeParam(look_id);
    return sdk.post("/looks/".concat(look_id, "/copy"), {
      folder_id
    }, null, options);
  });
  return function copy_look(_x856, _x857, _x858, _x859) {
    return _ref257.apply(this, arguments);
  };
}();
export var move_look = function () {
  var _ref258 = _asyncToGenerator(function* (sdk, look_id, folder_id, options) {
    look_id = encodeParam(look_id);
    return sdk.patch("/looks/".concat(look_id, "/move"), {
      folder_id
    }, null, options);
  });
  return function move_look(_x860, _x861, _x862, _x863) {
    return _ref258.apply(this, arguments);
  };
}();
export var all_lookml_models = function () {
  var _ref259 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/lookml_models', {
      fields: request.fields,
      limit: request.limit,
      offset: request.offset
    }, null, options);
  });
  return function all_lookml_models(_x864, _x865, _x866) {
    return _ref259.apply(this, arguments);
  };
}();
export var create_lookml_model = function () {
  var _ref260 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/lookml_models', null, body, options);
  });
  return function create_lookml_model(_x867, _x868, _x869) {
    return _ref260.apply(this, arguments);
  };
}();
export var lookml_model = function () {
  var _ref261 = _asyncToGenerator(function* (sdk, lookml_model_name, fields, options) {
    lookml_model_name = encodeParam(lookml_model_name);
    return sdk.get("/lookml_models/".concat(lookml_model_name), {
      fields
    }, null, options);
  });
  return function lookml_model(_x870, _x871, _x872, _x873) {
    return _ref261.apply(this, arguments);
  };
}();
export var update_lookml_model = function () {
  var _ref262 = _asyncToGenerator(function* (sdk, lookml_model_name, body, options) {
    lookml_model_name = encodeParam(lookml_model_name);
    return sdk.patch("/lookml_models/".concat(lookml_model_name), null, body, options);
  });
  return function update_lookml_model(_x874, _x875, _x876, _x877) {
    return _ref262.apply(this, arguments);
  };
}();
export var delete_lookml_model = function () {
  var _ref263 = _asyncToGenerator(function* (sdk, lookml_model_name, options) {
    lookml_model_name = encodeParam(lookml_model_name);
    return sdk.delete("/lookml_models/".concat(lookml_model_name), null, null, options);
  });
  return function delete_lookml_model(_x878, _x879, _x880) {
    return _ref263.apply(this, arguments);
  };
}();
export var lookml_model_explore = function () {
  var _ref264 = _asyncToGenerator(function* (sdk, lookml_model_name, explore_name, fields, options) {
    lookml_model_name = encodeParam(lookml_model_name);
    explore_name = encodeParam(explore_name);
    return sdk.get("/lookml_models/".concat(lookml_model_name, "/explores/").concat(explore_name), {
      fields
    }, null, options);
  });
  return function lookml_model_explore(_x881, _x882, _x883, _x884, _x885) {
    return _ref264.apply(this, arguments);
  };
}();
export var model_fieldname_suggestions = function () {
  var _ref265 = _asyncToGenerator(function* (sdk, request, options) {
    request.model_name = encodeParam(request.model_name);
    request.view_name = encodeParam(request.view_name);
    request.field_name = encodeParam(request.field_name);
    return sdk.get("/models/".concat(request.model_name, "/views/").concat(request.view_name, "/fields/").concat(request.field_name, "/suggestions"), {
      term: request.term,
      filters: request.filters
    }, null, options);
  });
  return function model_fieldname_suggestions(_x886, _x887, _x888) {
    return _ref265.apply(this, arguments);
  };
}();
export var get_model = function () {
  var _ref266 = _asyncToGenerator(function* (sdk, model_name, options) {
    model_name = encodeParam(model_name);
    return sdk.get("/models/".concat(model_name), null, null, options);
  });
  return function get_model(_x889, _x890, _x891) {
    return _ref266.apply(this, arguments);
  };
}();
export var connection_databases = function () {
  var _ref267 = _asyncToGenerator(function* (sdk, connection_name, options) {
    connection_name = encodeParam(connection_name);
    return sdk.get("/connections/".concat(connection_name, "/databases"), null, null, options);
  });
  return function connection_databases(_x892, _x893, _x894) {
    return _ref267.apply(this, arguments);
  };
}();
export var connection_features = function () {
  var _ref268 = _asyncToGenerator(function* (sdk, connection_name, fields, options) {
    connection_name = encodeParam(connection_name);
    return sdk.get("/connections/".concat(connection_name, "/features"), {
      fields
    }, null, options);
  });
  return function connection_features(_x895, _x896, _x897, _x898) {
    return _ref268.apply(this, arguments);
  };
}();
export var connection_schemas = function () {
  var _ref269 = _asyncToGenerator(function* (sdk, request, options) {
    request.connection_name = encodeParam(request.connection_name);
    return sdk.get("/connections/".concat(request.connection_name, "/schemas"), {
      database: request.database,
      cache: request.cache,
      fields: request.fields
    }, null, options);
  });
  return function connection_schemas(_x899, _x900, _x901) {
    return _ref269.apply(this, arguments);
  };
}();
export var connection_tables = function () {
  var _ref270 = _asyncToGenerator(function* (sdk, request, options) {
    request.connection_name = encodeParam(request.connection_name);
    return sdk.get("/connections/".concat(request.connection_name, "/tables"), {
      database: request.database,
      schema_name: request.schema_name,
      cache: request.cache,
      fields: request.fields,
      table_filter: request.table_filter,
      table_limit: request.table_limit
    }, null, options);
  });
  return function connection_tables(_x902, _x903, _x904) {
    return _ref270.apply(this, arguments);
  };
}();
export var connection_columns = function () {
  var _ref271 = _asyncToGenerator(function* (sdk, request, options) {
    request.connection_name = encodeParam(request.connection_name);
    return sdk.get("/connections/".concat(request.connection_name, "/columns"), {
      database: request.database,
      schema_name: request.schema_name,
      cache: request.cache,
      table_limit: request.table_limit,
      table_names: request.table_names,
      fields: request.fields
    }, null, options);
  });
  return function connection_columns(_x905, _x906, _x907) {
    return _ref271.apply(this, arguments);
  };
}();
export var connection_search_columns = function () {
  var _ref272 = _asyncToGenerator(function* (sdk, request, options) {
    request.connection_name = encodeParam(request.connection_name);
    return sdk.get("/connections/".concat(request.connection_name, "/search_columns"), {
      column_name: request.column_name,
      fields: request.fields
    }, null, options);
  });
  return function connection_search_columns(_x908, _x909, _x910) {
    return _ref272.apply(this, arguments);
  };
}();
export var connection_cost_estimate = function () {
  var _ref273 = _asyncToGenerator(function* (sdk, connection_name, body, fields, options) {
    connection_name = encodeParam(connection_name);
    return sdk.post("/connections/".concat(connection_name, "/cost_estimate"), {
      fields
    }, body, options);
  });
  return function connection_cost_estimate(_x911, _x912, _x913, _x914, _x915) {
    return _ref273.apply(this, arguments);
  };
}();
export var lock_all = function () {
  var _ref274 = _asyncToGenerator(function* (sdk, project_id, fields, options) {
    project_id = encodeParam(project_id);
    return sdk.post("/projects/".concat(project_id, "/manifest/lock_all"), {
      fields
    }, null, options);
  });
  return function lock_all(_x916, _x917, _x918, _x919) {
    return _ref274.apply(this, arguments);
  };
}();
export var all_git_branches = function () {
  var _ref275 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = encodeParam(project_id);
    return sdk.get("/projects/".concat(project_id, "/git_branches"), null, null, options);
  });
  return function all_git_branches(_x920, _x921, _x922) {
    return _ref275.apply(this, arguments);
  };
}();
export var git_branch = function () {
  var _ref276 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = encodeParam(project_id);
    return sdk.get("/projects/".concat(project_id, "/git_branch"), null, null, options);
  });
  return function git_branch(_x923, _x924, _x925) {
    return _ref276.apply(this, arguments);
  };
}();
export var update_git_branch = function () {
  var _ref277 = _asyncToGenerator(function* (sdk, project_id, body, options) {
    project_id = encodeParam(project_id);
    return sdk.put("/projects/".concat(project_id, "/git_branch"), null, body, options);
  });
  return function update_git_branch(_x926, _x927, _x928, _x929) {
    return _ref277.apply(this, arguments);
  };
}();
export var create_git_branch = function () {
  var _ref278 = _asyncToGenerator(function* (sdk, project_id, body, options) {
    project_id = encodeParam(project_id);
    return sdk.post("/projects/".concat(project_id, "/git_branch"), null, body, options);
  });
  return function create_git_branch(_x930, _x931, _x932, _x933) {
    return _ref278.apply(this, arguments);
  };
}();
export var find_git_branch = function () {
  var _ref279 = _asyncToGenerator(function* (sdk, project_id, branch_name, options) {
    project_id = encodeParam(project_id);
    branch_name = encodeParam(branch_name);
    return sdk.get("/projects/".concat(project_id, "/git_branch/").concat(branch_name), null, null, options);
  });
  return function find_git_branch(_x934, _x935, _x936, _x937) {
    return _ref279.apply(this, arguments);
  };
}();
export var delete_git_branch = function () {
  var _ref280 = _asyncToGenerator(function* (sdk, project_id, branch_name, options) {
    project_id = encodeParam(project_id);
    branch_name = encodeParam(branch_name);
    return sdk.delete("/projects/".concat(project_id, "/git_branch/").concat(branch_name), null, null, options);
  });
  return function delete_git_branch(_x938, _x939, _x940, _x941) {
    return _ref280.apply(this, arguments);
  };
}();
export var deploy_ref_to_production = function () {
  var _ref281 = _asyncToGenerator(function* (sdk, request, options) {
    request.project_id = encodeParam(request.project_id);
    return sdk.post("/projects/".concat(request.project_id, "/deploy_ref_to_production"), {
      branch: request.branch,
      ref: request.ref
    }, null, options);
  });
  return function deploy_ref_to_production(_x942, _x943, _x944) {
    return _ref281.apply(this, arguments);
  };
}();
export var deploy_to_production = function () {
  var _ref282 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = encodeParam(project_id);
    return sdk.post("/projects/".concat(project_id, "/deploy_to_production"), null, null, options);
  });
  return function deploy_to_production(_x945, _x946, _x947) {
    return _ref282.apply(this, arguments);
  };
}();
export var reset_project_to_production = function () {
  var _ref283 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = encodeParam(project_id);
    return sdk.post("/projects/".concat(project_id, "/reset_to_production"), null, null, options);
  });
  return function reset_project_to_production(_x948, _x949, _x950) {
    return _ref283.apply(this, arguments);
  };
}();
export var reset_project_to_remote = function () {
  var _ref284 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = encodeParam(project_id);
    return sdk.post("/projects/".concat(project_id, "/reset_to_remote"), null, null, options);
  });
  return function reset_project_to_remote(_x951, _x952, _x953) {
    return _ref284.apply(this, arguments);
  };
}();
export var all_projects = function () {
  var _ref285 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/projects', {
      fields
    }, null, options);
  });
  return function all_projects(_x954, _x955, _x956) {
    return _ref285.apply(this, arguments);
  };
}();
export var create_project = function () {
  var _ref286 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/projects', null, body, options);
  });
  return function create_project(_x957, _x958, _x959) {
    return _ref286.apply(this, arguments);
  };
}();
export var project = function () {
  var _ref287 = _asyncToGenerator(function* (sdk, project_id, fields, options) {
    project_id = encodeParam(project_id);
    return sdk.get("/projects/".concat(project_id), {
      fields
    }, null, options);
  });
  return function project(_x960, _x961, _x962, _x963) {
    return _ref287.apply(this, arguments);
  };
}();
export var update_project = function () {
  var _ref288 = _asyncToGenerator(function* (sdk, project_id, body, fields, options) {
    project_id = encodeParam(project_id);
    return sdk.patch("/projects/".concat(project_id), {
      fields
    }, body, options);
  });
  return function update_project(_x964, _x965, _x966, _x967, _x968) {
    return _ref288.apply(this, arguments);
  };
}();
export var manifest = function () {
  var _ref289 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = encodeParam(project_id);
    return sdk.get("/projects/".concat(project_id, "/manifest"), null, null, options);
  });
  return function manifest(_x969, _x970, _x971) {
    return _ref289.apply(this, arguments);
  };
}();
export var git_deploy_key = function () {
  var _ref290 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = encodeParam(project_id);
    return sdk.get("/projects/".concat(project_id, "/git/deploy_key"), null, null, options);
  });
  return function git_deploy_key(_x972, _x973, _x974) {
    return _ref290.apply(this, arguments);
  };
}();
export var create_git_deploy_key = function () {
  var _ref291 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = encodeParam(project_id);
    return sdk.post("/projects/".concat(project_id, "/git/deploy_key"), null, null, options);
  });
  return function create_git_deploy_key(_x975, _x976, _x977) {
    return _ref291.apply(this, arguments);
  };
}();
export var project_validation_results = function () {
  var _ref292 = _asyncToGenerator(function* (sdk, project_id, fields, options) {
    project_id = encodeParam(project_id);
    return sdk.get("/projects/".concat(project_id, "/validate"), {
      fields
    }, null, options);
  });
  return function project_validation_results(_x978, _x979, _x980, _x981) {
    return _ref292.apply(this, arguments);
  };
}();
export var validate_project = function () {
  var _ref293 = _asyncToGenerator(function* (sdk, project_id, fields, options) {
    project_id = encodeParam(project_id);
    return sdk.post("/projects/".concat(project_id, "/validate"), {
      fields
    }, null, options);
  });
  return function validate_project(_x982, _x983, _x984, _x985) {
    return _ref293.apply(this, arguments);
  };
}();
export var project_workspace = function () {
  var _ref294 = _asyncToGenerator(function* (sdk, project_id, fields, options) {
    project_id = encodeParam(project_id);
    return sdk.get("/projects/".concat(project_id, "/current_workspace"), {
      fields
    }, null, options);
  });
  return function project_workspace(_x986, _x987, _x988, _x989) {
    return _ref294.apply(this, arguments);
  };
}();
export var all_project_files = function () {
  var _ref295 = _asyncToGenerator(function* (sdk, project_id, fields, options) {
    project_id = encodeParam(project_id);
    return sdk.get("/projects/".concat(project_id, "/files"), {
      fields
    }, null, options);
  });
  return function all_project_files(_x990, _x991, _x992, _x993) {
    return _ref295.apply(this, arguments);
  };
}();
export var project_file = function () {
  var _ref296 = _asyncToGenerator(function* (sdk, project_id, file_id, fields, options) {
    project_id = encodeParam(project_id);
    return sdk.get("/projects/".concat(project_id, "/files/file"), {
      file_id,
      fields
    }, null, options);
  });
  return function project_file(_x994, _x995, _x996, _x997, _x998) {
    return _ref296.apply(this, arguments);
  };
}();
export var all_git_connection_tests = function () {
  var _ref297 = _asyncToGenerator(function* (sdk, project_id, remote_url, options) {
    project_id = encodeParam(project_id);
    return sdk.get("/projects/".concat(project_id, "/git_connection_tests"), {
      remote_url
    }, null, options);
  });
  return function all_git_connection_tests(_x999, _x1000, _x1001, _x1002) {
    return _ref297.apply(this, arguments);
  };
}();
export var run_git_connection_test = function () {
  var _ref298 = _asyncToGenerator(function* (sdk, request, options) {
    request.project_id = encodeParam(request.project_id);
    request.test_id = encodeParam(request.test_id);
    return sdk.get("/projects/".concat(request.project_id, "/git_connection_tests/").concat(request.test_id), {
      remote_url: request.remote_url,
      use_production: request.use_production
    }, null, options);
  });
  return function run_git_connection_test(_x1003, _x1004, _x1005) {
    return _ref298.apply(this, arguments);
  };
}();
export var all_lookml_tests = function () {
  var _ref299 = _asyncToGenerator(function* (sdk, project_id, file_id, options) {
    project_id = encodeParam(project_id);
    return sdk.get("/projects/".concat(project_id, "/lookml_tests"), {
      file_id
    }, null, options);
  });
  return function all_lookml_tests(_x1006, _x1007, _x1008, _x1009) {
    return _ref299.apply(this, arguments);
  };
}();
export var run_lookml_test = function () {
  var _ref300 = _asyncToGenerator(function* (sdk, request, options) {
    request.project_id = encodeParam(request.project_id);
    return sdk.get("/projects/".concat(request.project_id, "/lookml_tests/run"), {
      file_id: request.file_id,
      test: request.test,
      model: request.model
    }, null, options);
  });
  return function run_lookml_test(_x1010, _x1011, _x1012) {
    return _ref300.apply(this, arguments);
  };
}();
export var tag_ref = function () {
  var _ref301 = _asyncToGenerator(function* (sdk, request, options) {
    request.project_id = encodeParam(request.project_id);
    return sdk.post("/projects/".concat(request.project_id, "/tag"), {
      commit_sha: request.commit_sha,
      tag_name: request.tag_name,
      tag_message: request.tag_message
    }, request.body, options);
  });
  return function tag_ref(_x1013, _x1014, _x1015) {
    return _ref301.apply(this, arguments);
  };
}();
export var update_repository_credential = function () {
  var _ref302 = _asyncToGenerator(function* (sdk, root_project_id, credential_id, body, options) {
    root_project_id = encodeParam(root_project_id);
    credential_id = encodeParam(credential_id);
    return sdk.put("/projects/".concat(root_project_id, "/credential/").concat(credential_id), null, body, options);
  });
  return function update_repository_credential(_x1016, _x1017, _x1018, _x1019, _x1020) {
    return _ref302.apply(this, arguments);
  };
}();
export var delete_repository_credential = function () {
  var _ref303 = _asyncToGenerator(function* (sdk, root_project_id, credential_id, options) {
    root_project_id = encodeParam(root_project_id);
    credential_id = encodeParam(credential_id);
    return sdk.delete("/projects/".concat(root_project_id, "/credential/").concat(credential_id), null, null, options);
  });
  return function delete_repository_credential(_x1021, _x1022, _x1023, _x1024) {
    return _ref303.apply(this, arguments);
  };
}();
export var get_all_repository_credentials = function () {
  var _ref304 = _asyncToGenerator(function* (sdk, root_project_id, options) {
    root_project_id = encodeParam(root_project_id);
    return sdk.get("/projects/".concat(root_project_id, "/credentials"), null, null, options);
  });
  return function get_all_repository_credentials(_x1025, _x1026, _x1027) {
    return _ref304.apply(this, arguments);
  };
}();
export var create_query_task = function () {
  var _ref305 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.post('/query_tasks', {
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
  });
  return function create_query_task(_x1028, _x1029, _x1030) {
    return _ref305.apply(this, arguments);
  };
}();
export var query_task_multi_results = function () {
  var _ref306 = _asyncToGenerator(function* (sdk, query_task_ids, options) {
    return sdk.get('/query_tasks/multi_results', {
      query_task_ids
    }, null, options);
  });
  return function query_task_multi_results(_x1031, _x1032, _x1033) {
    return _ref306.apply(this, arguments);
  };
}();
export var query_task = function () {
  var _ref307 = _asyncToGenerator(function* (sdk, query_task_id, fields, options) {
    query_task_id = encodeParam(query_task_id);
    return sdk.get("/query_tasks/".concat(query_task_id), {
      fields
    }, null, options);
  });
  return function query_task(_x1034, _x1035, _x1036, _x1037) {
    return _ref307.apply(this, arguments);
  };
}();
export var query_task_results = function () {
  var _ref308 = _asyncToGenerator(function* (sdk, query_task_id, options) {
    query_task_id = encodeParam(query_task_id);
    return sdk.get("/query_tasks/".concat(query_task_id, "/results"), null, null, options);
  });
  return function query_task_results(_x1038, _x1039, _x1040) {
    return _ref308.apply(this, arguments);
  };
}();
export var query = function () {
  var _ref309 = _asyncToGenerator(function* (sdk, query_id, fields, options) {
    query_id = encodeParam(query_id);
    return sdk.get("/queries/".concat(query_id), {
      fields
    }, null, options);
  });
  return function query(_x1041, _x1042, _x1043, _x1044) {
    return _ref309.apply(this, arguments);
  };
}();
export var query_for_slug = function () {
  var _ref310 = _asyncToGenerator(function* (sdk, slug, fields, options) {
    slug = encodeParam(slug);
    return sdk.get("/queries/slug/".concat(slug), {
      fields
    }, null, options);
  });
  return function query_for_slug(_x1045, _x1046, _x1047, _x1048) {
    return _ref310.apply(this, arguments);
  };
}();
export var create_query = function () {
  var _ref311 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/queries', {
      fields
    }, body, options);
  });
  return function create_query(_x1049, _x1050, _x1051, _x1052) {
    return _ref311.apply(this, arguments);
  };
}();
export var run_query = function () {
  var _ref312 = _asyncToGenerator(function* (sdk, request, options) {
    request.query_id = encodeParam(request.query_id);
    request.result_format = encodeParam(request.result_format);
    return sdk.get("/queries/".concat(request.query_id, "/run/").concat(request.result_format), {
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
  });
  return function run_query(_x1053, _x1054, _x1055) {
    return _ref312.apply(this, arguments);
  };
}();
export var run_inline_query = function () {
  var _ref313 = _asyncToGenerator(function* (sdk, request, options) {
    request.result_format = encodeParam(request.result_format);
    return sdk.post("/queries/run/".concat(request.result_format), {
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
  });
  return function run_inline_query(_x1056, _x1057, _x1058) {
    return _ref313.apply(this, arguments);
  };
}();
export var run_url_encoded_query = function () {
  var _ref314 = _asyncToGenerator(function* (sdk, model_name, view_name, result_format, options) {
    model_name = encodeParam(model_name);
    view_name = encodeParam(view_name);
    result_format = encodeParam(result_format);
    return sdk.get("/queries/models/".concat(model_name, "/views/").concat(view_name, "/run/").concat(result_format), null, null, options);
  });
  return function run_url_encoded_query(_x1059, _x1060, _x1061, _x1062, _x1063) {
    return _ref314.apply(this, arguments);
  };
}();
export var merge_query = function () {
  var _ref315 = _asyncToGenerator(function* (sdk, merge_query_id, fields, options) {
    merge_query_id = encodeParam(merge_query_id);
    return sdk.get("/merge_queries/".concat(merge_query_id), {
      fields
    }, null, options);
  });
  return function merge_query(_x1064, _x1065, _x1066, _x1067) {
    return _ref315.apply(this, arguments);
  };
}();
export var create_merge_query = function () {
  var _ref316 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/merge_queries', {
      fields
    }, body, options);
  });
  return function create_merge_query(_x1068, _x1069, _x1070, _x1071) {
    return _ref316.apply(this, arguments);
  };
}();
export var all_running_queries = function () {
  var _ref317 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/running_queries', null, null, options);
  });
  return function all_running_queries(_x1072, _x1073) {
    return _ref317.apply(this, arguments);
  };
}();
export var kill_query = function () {
  var _ref318 = _asyncToGenerator(function* (sdk, query_task_id, options) {
    query_task_id = encodeParam(query_task_id);
    return sdk.delete("/running_queries/".concat(query_task_id), null, null, options);
  });
  return function kill_query(_x1074, _x1075, _x1076) {
    return _ref318.apply(this, arguments);
  };
}();
export var create_sql_query = function () {
  var _ref319 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/sql_queries', null, body, options);
  });
  return function create_sql_query(_x1077, _x1078, _x1079) {
    return _ref319.apply(this, arguments);
  };
}();
export var sql_query = function () {
  var _ref320 = _asyncToGenerator(function* (sdk, slug, options) {
    slug = encodeParam(slug);
    return sdk.get("/sql_queries/".concat(slug), null, null, options);
  });
  return function sql_query(_x1080, _x1081, _x1082) {
    return _ref320.apply(this, arguments);
  };
}();
export var run_sql_query = function () {
  var _ref321 = _asyncToGenerator(function* (sdk, slug, result_format, download, options) {
    slug = encodeParam(slug);
    result_format = encodeParam(result_format);
    return sdk.post("/sql_queries/".concat(slug, "/run/").concat(result_format), {
      download
    }, null, options);
  });
  return function run_sql_query(_x1083, _x1084, _x1085, _x1086, _x1087) {
    return _ref321.apply(this, arguments);
  };
}();
export var create_look_render_task = function () {
  var _ref322 = _asyncToGenerator(function* (sdk, look_id, result_format, width, height, fields, options) {
    look_id = encodeParam(look_id);
    result_format = encodeParam(result_format);
    return sdk.post("/render_tasks/looks/".concat(look_id, "/").concat(result_format), {
      width,
      height,
      fields
    }, null, options);
  });
  return function create_look_render_task(_x1088, _x1089, _x1090, _x1091, _x1092, _x1093, _x1094) {
    return _ref322.apply(this, arguments);
  };
}();
export var create_query_render_task = function () {
  var _ref323 = _asyncToGenerator(function* (sdk, query_id, result_format, width, height, fields, options) {
    query_id = encodeParam(query_id);
    result_format = encodeParam(result_format);
    return sdk.post("/render_tasks/queries/".concat(query_id, "/").concat(result_format), {
      width,
      height,
      fields
    }, null, options);
  });
  return function create_query_render_task(_x1095, _x1096, _x1097, _x1098, _x1099, _x1100, _x1101) {
    return _ref323.apply(this, arguments);
  };
}();
export var create_dashboard_render_task = function () {
  var _ref324 = _asyncToGenerator(function* (sdk, request, options) {
    request.dashboard_id = encodeParam(request.dashboard_id);
    request.result_format = encodeParam(request.result_format);
    return sdk.post("/render_tasks/dashboards/".concat(request.dashboard_id, "/").concat(request.result_format), {
      width: request.width,
      height: request.height,
      fields: request.fields,
      pdf_paper_size: request.pdf_paper_size,
      pdf_landscape: request.pdf_landscape,
      long_tables: request.long_tables,
      theme: request.theme
    }, request.body, options);
  });
  return function create_dashboard_render_task(_x1102, _x1103, _x1104) {
    return _ref324.apply(this, arguments);
  };
}();
export var render_task = function () {
  var _ref325 = _asyncToGenerator(function* (sdk, render_task_id, fields, options) {
    render_task_id = encodeParam(render_task_id);
    return sdk.get("/render_tasks/".concat(render_task_id), {
      fields
    }, null, options);
  });
  return function render_task(_x1105, _x1106, _x1107, _x1108) {
    return _ref325.apply(this, arguments);
  };
}();
export var render_task_results = function () {
  var _ref326 = _asyncToGenerator(function* (sdk, render_task_id, options) {
    render_task_id = encodeParam(render_task_id);
    return sdk.get("/render_tasks/".concat(render_task_id, "/results"), null, null, options);
  });
  return function render_task_results(_x1109, _x1110, _x1111) {
    return _ref326.apply(this, arguments);
  };
}();
export var create_dashboard_element_render_task = function () {
  var _ref327 = _asyncToGenerator(function* (sdk, dashboard_element_id, result_format, width, height, fields, options) {
    dashboard_element_id = encodeParam(dashboard_element_id);
    result_format = encodeParam(result_format);
    return sdk.post("/render_tasks/dashboard_elements/".concat(dashboard_element_id, "/").concat(result_format), {
      width,
      height,
      fields
    }, null, options);
  });
  return function create_dashboard_element_render_task(_x1112, _x1113, _x1114, _x1115, _x1116, _x1117, _x1118) {
    return _ref327.apply(this, arguments);
  };
}();
export var search_model_sets = function () {
  var _ref328 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/model_sets/search', {
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
  });
  return function search_model_sets(_x1119, _x1120, _x1121) {
    return _ref328.apply(this, arguments);
  };
}();
export var model_set = function () {
  var _ref329 = _asyncToGenerator(function* (sdk, model_set_id, fields, options) {
    model_set_id = encodeParam(model_set_id);
    return sdk.get("/model_sets/".concat(model_set_id), {
      fields
    }, null, options);
  });
  return function model_set(_x1122, _x1123, _x1124, _x1125) {
    return _ref329.apply(this, arguments);
  };
}();
export var update_model_set = function () {
  var _ref330 = _asyncToGenerator(function* (sdk, model_set_id, body, options) {
    model_set_id = encodeParam(model_set_id);
    return sdk.patch("/model_sets/".concat(model_set_id), null, body, options);
  });
  return function update_model_set(_x1126, _x1127, _x1128, _x1129) {
    return _ref330.apply(this, arguments);
  };
}();
export var delete_model_set = function () {
  var _ref331 = _asyncToGenerator(function* (sdk, model_set_id, options) {
    model_set_id = encodeParam(model_set_id);
    return sdk.delete("/model_sets/".concat(model_set_id), null, null, options);
  });
  return function delete_model_set(_x1130, _x1131, _x1132) {
    return _ref331.apply(this, arguments);
  };
}();
export var all_model_sets = function () {
  var _ref332 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/model_sets', {
      fields
    }, null, options);
  });
  return function all_model_sets(_x1133, _x1134, _x1135) {
    return _ref332.apply(this, arguments);
  };
}();
export var create_model_set = function () {
  var _ref333 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/model_sets', null, body, options);
  });
  return function create_model_set(_x1136, _x1137, _x1138) {
    return _ref333.apply(this, arguments);
  };
}();
export var all_permissions = function () {
  var _ref334 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/permissions', null, null, options);
  });
  return function all_permissions(_x1139, _x1140) {
    return _ref334.apply(this, arguments);
  };
}();
export var search_permission_sets = function () {
  var _ref335 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/permission_sets/search', {
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
  });
  return function search_permission_sets(_x1141, _x1142, _x1143) {
    return _ref335.apply(this, arguments);
  };
}();
export var permission_set = function () {
  var _ref336 = _asyncToGenerator(function* (sdk, permission_set_id, fields, options) {
    permission_set_id = encodeParam(permission_set_id);
    return sdk.get("/permission_sets/".concat(permission_set_id), {
      fields
    }, null, options);
  });
  return function permission_set(_x1144, _x1145, _x1146, _x1147) {
    return _ref336.apply(this, arguments);
  };
}();
export var update_permission_set = function () {
  var _ref337 = _asyncToGenerator(function* (sdk, permission_set_id, body, options) {
    permission_set_id = encodeParam(permission_set_id);
    return sdk.patch("/permission_sets/".concat(permission_set_id), null, body, options);
  });
  return function update_permission_set(_x1148, _x1149, _x1150, _x1151) {
    return _ref337.apply(this, arguments);
  };
}();
export var delete_permission_set = function () {
  var _ref338 = _asyncToGenerator(function* (sdk, permission_set_id, options) {
    permission_set_id = encodeParam(permission_set_id);
    return sdk.delete("/permission_sets/".concat(permission_set_id), null, null, options);
  });
  return function delete_permission_set(_x1152, _x1153, _x1154) {
    return _ref338.apply(this, arguments);
  };
}();
export var all_permission_sets = function () {
  var _ref339 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/permission_sets', {
      fields
    }, null, options);
  });
  return function all_permission_sets(_x1155, _x1156, _x1157) {
    return _ref339.apply(this, arguments);
  };
}();
export var create_permission_set = function () {
  var _ref340 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/permission_sets', null, body, options);
  });
  return function create_permission_set(_x1158, _x1159, _x1160) {
    return _ref340.apply(this, arguments);
  };
}();
export var all_roles = function () {
  var _ref341 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/roles', {
      fields: request.fields,
      ids: request.ids
    }, null, options);
  });
  return function all_roles(_x1161, _x1162, _x1163) {
    return _ref341.apply(this, arguments);
  };
}();
export var create_role = function () {
  var _ref342 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/roles', null, body, options);
  });
  return function create_role(_x1164, _x1165, _x1166) {
    return _ref342.apply(this, arguments);
  };
}();
export var search_roles = function () {
  var _ref343 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/roles/search', {
      fields: request.fields,
      limit: request.limit,
      offset: request.offset,
      sorts: request.sorts,
      id: request.id,
      name: request.name,
      built_in: request.built_in,
      filter_or: request.filter_or
    }, null, options);
  });
  return function search_roles(_x1167, _x1168, _x1169) {
    return _ref343.apply(this, arguments);
  };
}();
export var search_roles_with_user_count = function () {
  var _ref344 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/roles/search/with_user_count', {
      fields: request.fields,
      limit: request.limit,
      offset: request.offset,
      sorts: request.sorts,
      id: request.id,
      name: request.name,
      built_in: request.built_in,
      filter_or: request.filter_or
    }, null, options);
  });
  return function search_roles_with_user_count(_x1170, _x1171, _x1172) {
    return _ref344.apply(this, arguments);
  };
}();
export var role = function () {
  var _ref345 = _asyncToGenerator(function* (sdk, role_id, options) {
    role_id = encodeParam(role_id);
    return sdk.get("/roles/".concat(role_id), null, null, options);
  });
  return function role(_x1173, _x1174, _x1175) {
    return _ref345.apply(this, arguments);
  };
}();
export var update_role = function () {
  var _ref346 = _asyncToGenerator(function* (sdk, role_id, body, options) {
    role_id = encodeParam(role_id);
    return sdk.patch("/roles/".concat(role_id), null, body, options);
  });
  return function update_role(_x1176, _x1177, _x1178, _x1179) {
    return _ref346.apply(this, arguments);
  };
}();
export var delete_role = function () {
  var _ref347 = _asyncToGenerator(function* (sdk, role_id, options) {
    role_id = encodeParam(role_id);
    return sdk.delete("/roles/".concat(role_id), null, null, options);
  });
  return function delete_role(_x1180, _x1181, _x1182) {
    return _ref347.apply(this, arguments);
  };
}();
export var role_groups = function () {
  var _ref348 = _asyncToGenerator(function* (sdk, role_id, fields, options) {
    role_id = encodeParam(role_id);
    return sdk.get("/roles/".concat(role_id, "/groups"), {
      fields
    }, null, options);
  });
  return function role_groups(_x1183, _x1184, _x1185, _x1186) {
    return _ref348.apply(this, arguments);
  };
}();
export var set_role_groups = function () {
  var _ref349 = _asyncToGenerator(function* (sdk, role_id, body, options) {
    role_id = encodeParam(role_id);
    return sdk.put("/roles/".concat(role_id, "/groups"), null, body, options);
  });
  return function set_role_groups(_x1187, _x1188, _x1189, _x1190) {
    return _ref349.apply(this, arguments);
  };
}();
export var role_users = function () {
  var _ref350 = _asyncToGenerator(function* (sdk, request, options) {
    request.role_id = encodeParam(request.role_id);
    return sdk.get("/roles/".concat(request.role_id, "/users"), {
      fields: request.fields,
      direct_association_only: request.direct_association_only
    }, null, options);
  });
  return function role_users(_x1191, _x1192, _x1193) {
    return _ref350.apply(this, arguments);
  };
}();
export var set_role_users = function () {
  var _ref351 = _asyncToGenerator(function* (sdk, role_id, body, options) {
    role_id = encodeParam(role_id);
    return sdk.put("/roles/".concat(role_id, "/users"), null, body, options);
  });
  return function set_role_users(_x1194, _x1195, _x1196, _x1197) {
    return _ref351.apply(this, arguments);
  };
}();
export var scheduled_plans_for_space = function () {
  var _ref352 = _asyncToGenerator(function* (sdk, space_id, fields, options) {
    space_id = encodeParam(space_id);
    return sdk.get("/scheduled_plans/space/".concat(space_id), {
      fields
    }, null, options);
  });
  return function scheduled_plans_for_space(_x1198, _x1199, _x1200, _x1201) {
    return _ref352.apply(this, arguments);
  };
}();
export var scheduled_plan = function () {
  var _ref353 = _asyncToGenerator(function* (sdk, scheduled_plan_id, fields, options) {
    scheduled_plan_id = encodeParam(scheduled_plan_id);
    return sdk.get("/scheduled_plans/".concat(scheduled_plan_id), {
      fields
    }, null, options);
  });
  return function scheduled_plan(_x1202, _x1203, _x1204, _x1205) {
    return _ref353.apply(this, arguments);
  };
}();
export var update_scheduled_plan = function () {
  var _ref354 = _asyncToGenerator(function* (sdk, scheduled_plan_id, body, options) {
    scheduled_plan_id = encodeParam(scheduled_plan_id);
    return sdk.patch("/scheduled_plans/".concat(scheduled_plan_id), null, body, options);
  });
  return function update_scheduled_plan(_x1206, _x1207, _x1208, _x1209) {
    return _ref354.apply(this, arguments);
  };
}();
export var delete_scheduled_plan = function () {
  var _ref355 = _asyncToGenerator(function* (sdk, scheduled_plan_id, options) {
    scheduled_plan_id = encodeParam(scheduled_plan_id);
    return sdk.delete("/scheduled_plans/".concat(scheduled_plan_id), null, null, options);
  });
  return function delete_scheduled_plan(_x1210, _x1211, _x1212) {
    return _ref355.apply(this, arguments);
  };
}();
export var all_scheduled_plans = function () {
  var _ref356 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/scheduled_plans', {
      user_id: request.user_id,
      fields: request.fields,
      all_users: request.all_users
    }, null, options);
  });
  return function all_scheduled_plans(_x1213, _x1214, _x1215) {
    return _ref356.apply(this, arguments);
  };
}();
export var create_scheduled_plan = function () {
  var _ref357 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/scheduled_plans', null, body, options);
  });
  return function create_scheduled_plan(_x1216, _x1217, _x1218) {
    return _ref357.apply(this, arguments);
  };
}();
export var scheduled_plan_run_once = function () {
  var _ref358 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/scheduled_plans/run_once', null, body, options);
  });
  return function scheduled_plan_run_once(_x1219, _x1220, _x1221) {
    return _ref358.apply(this, arguments);
  };
}();
export var scheduled_plans_for_look = function () {
  var _ref359 = _asyncToGenerator(function* (sdk, request, options) {
    request.look_id = encodeParam(request.look_id);
    return sdk.get("/scheduled_plans/look/".concat(request.look_id), {
      user_id: request.user_id,
      fields: request.fields,
      all_users: request.all_users
    }, null, options);
  });
  return function scheduled_plans_for_look(_x1222, _x1223, _x1224) {
    return _ref359.apply(this, arguments);
  };
}();
export var scheduled_plans_for_dashboard = function () {
  var _ref360 = _asyncToGenerator(function* (sdk, request, options) {
    request.dashboard_id = encodeParam(request.dashboard_id);
    return sdk.get("/scheduled_plans/dashboard/".concat(request.dashboard_id), {
      user_id: request.user_id,
      all_users: request.all_users,
      fields: request.fields
    }, null, options);
  });
  return function scheduled_plans_for_dashboard(_x1225, _x1226, _x1227) {
    return _ref360.apply(this, arguments);
  };
}();
export var scheduled_plans_for_lookml_dashboard = function () {
  var _ref361 = _asyncToGenerator(function* (sdk, request, options) {
    request.lookml_dashboard_id = encodeParam(request.lookml_dashboard_id);
    return sdk.get("/scheduled_plans/lookml_dashboard/".concat(request.lookml_dashboard_id), {
      user_id: request.user_id,
      fields: request.fields,
      all_users: request.all_users
    }, null, options);
  });
  return function scheduled_plans_for_lookml_dashboard(_x1228, _x1229, _x1230) {
    return _ref361.apply(this, arguments);
  };
}();
export var scheduled_plan_run_once_by_id = function () {
  var _ref362 = _asyncToGenerator(function* (sdk, scheduled_plan_id, body, options) {
    scheduled_plan_id = encodeParam(scheduled_plan_id);
    return sdk.post("/scheduled_plans/".concat(scheduled_plan_id, "/run_once"), null, body, options);
  });
  return function scheduled_plan_run_once_by_id(_x1231, _x1232, _x1233, _x1234) {
    return _ref362.apply(this, arguments);
  };
}();
export var session = function () {
  var _ref363 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/session', null, null, options);
  });
  return function session(_x1235, _x1236) {
    return _ref363.apply(this, arguments);
  };
}();
export var update_session = function () {
  var _ref364 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/session', null, body, options);
  });
  return function update_session(_x1237, _x1238, _x1239) {
    return _ref364.apply(this, arguments);
  };
}();
export var sql_interface_metadata = function () {
  var _ref365 = _asyncToGenerator(function* (sdk, avatica_request, options) {
    return sdk.get('/sql_interface_queries/metadata', {
      avatica_request
    }, null, options);
  });
  return function sql_interface_metadata(_x1240, _x1241, _x1242) {
    return _ref365.apply(this, arguments);
  };
}();
export var run_sql_interface_query = function () {
  var _ref366 = _asyncToGenerator(function* (sdk, query_id, result_format, options) {
    result_format = encodeParam(result_format);
    return sdk.get("/sql_interface_queries/".concat(query_id, "/run/").concat(result_format), null, null, options);
  });
  return function run_sql_interface_query(_x1243, _x1244, _x1245, _x1246) {
    return _ref366.apply(this, arguments);
  };
}();
export var create_sql_interface_query = function () {
  var _ref367 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/sql_interface_queries', null, body, options);
  });
  return function create_sql_interface_query(_x1247, _x1248, _x1249) {
    return _ref367.apply(this, arguments);
  };
}();
export var all_themes = function () {
  var _ref368 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/themes', {
      fields
    }, null, options);
  });
  return function all_themes(_x1250, _x1251, _x1252) {
    return _ref368.apply(this, arguments);
  };
}();
export var create_theme = function () {
  var _ref369 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/themes', null, body, options);
  });
  return function create_theme(_x1253, _x1254, _x1255) {
    return _ref369.apply(this, arguments);
  };
}();
export var search_themes = function () {
  var _ref370 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/themes/search', {
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
  });
  return function search_themes(_x1256, _x1257, _x1258) {
    return _ref370.apply(this, arguments);
  };
}();
export var default_theme = function () {
  var _ref371 = _asyncToGenerator(function* (sdk, ts, options) {
    return sdk.get('/themes/default', {
      ts
    }, null, options);
  });
  return function default_theme(_x1259, _x1260, _x1261) {
    return _ref371.apply(this, arguments);
  };
}();
export var set_default_theme = function () {
  var _ref372 = _asyncToGenerator(function* (sdk, name, options) {
    return sdk.put('/themes/default', {
      name
    }, null, options);
  });
  return function set_default_theme(_x1262, _x1263, _x1264) {
    return _ref372.apply(this, arguments);
  };
}();
export var active_themes = function () {
  var _ref373 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/themes/active', {
      name: request.name,
      ts: request.ts,
      fields: request.fields
    }, null, options);
  });
  return function active_themes(_x1265, _x1266, _x1267) {
    return _ref373.apply(this, arguments);
  };
}();
export var theme_or_default = function () {
  var _ref374 = _asyncToGenerator(function* (sdk, name, ts, options) {
    return sdk.get('/themes/theme_or_default', {
      name,
      ts
    }, null, options);
  });
  return function theme_or_default(_x1268, _x1269, _x1270, _x1271) {
    return _ref374.apply(this, arguments);
  };
}();
export var validate_theme = function () {
  var _ref375 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/themes/validate', null, body, options);
  });
  return function validate_theme(_x1272, _x1273, _x1274) {
    return _ref375.apply(this, arguments);
  };
}();
export var theme = function () {
  var _ref376 = _asyncToGenerator(function* (sdk, theme_id, fields, options) {
    theme_id = encodeParam(theme_id);
    return sdk.get("/themes/".concat(theme_id), {
      fields
    }, null, options);
  });
  return function theme(_x1275, _x1276, _x1277, _x1278) {
    return _ref376.apply(this, arguments);
  };
}();
export var update_theme = function () {
  var _ref377 = _asyncToGenerator(function* (sdk, theme_id, body, options) {
    theme_id = encodeParam(theme_id);
    return sdk.patch("/themes/".concat(theme_id), null, body, options);
  });
  return function update_theme(_x1279, _x1280, _x1281, _x1282) {
    return _ref377.apply(this, arguments);
  };
}();
export var delete_theme = function () {
  var _ref378 = _asyncToGenerator(function* (sdk, theme_id, options) {
    theme_id = encodeParam(theme_id);
    return sdk.delete("/themes/".concat(theme_id), null, null, options);
  });
  return function delete_theme(_x1283, _x1284, _x1285) {
    return _ref378.apply(this, arguments);
  };
}();
export var search_credentials_email = function () {
  var _ref379 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/credentials_email/search', {
      fields: request.fields,
      limit: request.limit,
      offset: request.offset,
      sorts: request.sorts,
      id: request.id,
      email: request.email,
      emails: request.emails,
      filter_or: request.filter_or
    }, null, options);
  });
  return function search_credentials_email(_x1286, _x1287, _x1288) {
    return _ref379.apply(this, arguments);
  };
}();
export var me = function () {
  var _ref380 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/user', {
      fields
    }, null, options);
  });
  return function me(_x1289, _x1290, _x1291) {
    return _ref380.apply(this, arguments);
  };
}();
export var all_users = function () {
  var _ref381 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/users', {
      fields: request.fields,
      page: request.page,
      per_page: request.per_page,
      limit: request.limit,
      offset: request.offset,
      sorts: request.sorts,
      ids: request.ids
    }, null, options);
  });
  return function all_users(_x1292, _x1293, _x1294) {
    return _ref381.apply(this, arguments);
  };
}();
export var create_user = function () {
  var _ref382 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/users', {
      fields
    }, body, options);
  });
  return function create_user(_x1295, _x1296, _x1297, _x1298) {
    return _ref382.apply(this, arguments);
  };
}();
export var search_users = function () {
  var _ref383 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/users/search', {
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
  });
  return function search_users(_x1299, _x1300, _x1301) {
    return _ref383.apply(this, arguments);
  };
}();
export var search_users_names = function () {
  var _ref384 = _asyncToGenerator(function* (sdk, request, options) {
    request.pattern = encodeParam(request.pattern);
    return sdk.get("/users/search/names/".concat(request.pattern), {
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
  });
  return function search_users_names(_x1302, _x1303, _x1304) {
    return _ref384.apply(this, arguments);
  };
}();
export var user = function () {
  var _ref385 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.get("/users/".concat(user_id), {
      fields
    }, null, options);
  });
  return function user(_x1305, _x1306, _x1307, _x1308) {
    return _ref385.apply(this, arguments);
  };
}();
export var update_user = function () {
  var _ref386 = _asyncToGenerator(function* (sdk, user_id, body, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.patch("/users/".concat(user_id), {
      fields
    }, body, options);
  });
  return function update_user(_x1309, _x1310, _x1311, _x1312, _x1313) {
    return _ref386.apply(this, arguments);
  };
}();
export var delete_user = function () {
  var _ref387 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = encodeParam(user_id);
    return sdk.delete("/users/".concat(user_id), null, null, options);
  });
  return function delete_user(_x1314, _x1315, _x1316) {
    return _ref387.apply(this, arguments);
  };
}();
export var user_for_credential = function () {
  var _ref388 = _asyncToGenerator(function* (sdk, credential_type, credential_id, fields, options) {
    credential_type = encodeParam(credential_type);
    credential_id = encodeParam(credential_id);
    return sdk.get("/users/credential/".concat(credential_type, "/").concat(credential_id), {
      fields
    }, null, options);
  });
  return function user_for_credential(_x1317, _x1318, _x1319, _x1320, _x1321) {
    return _ref388.apply(this, arguments);
  };
}();
export var user_credentials_email = function () {
  var _ref389 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_email"), {
      fields
    }, null, options);
  });
  return function user_credentials_email(_x1322, _x1323, _x1324, _x1325) {
    return _ref389.apply(this, arguments);
  };
}();
export var create_user_credentials_email = function () {
  var _ref390 = _asyncToGenerator(function* (sdk, user_id, body, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.post("/users/".concat(user_id, "/credentials_email"), {
      fields
    }, body, options);
  });
  return function create_user_credentials_email(_x1326, _x1327, _x1328, _x1329, _x1330) {
    return _ref390.apply(this, arguments);
  };
}();
export var update_user_credentials_email = function () {
  var _ref391 = _asyncToGenerator(function* (sdk, user_id, body, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.patch("/users/".concat(user_id, "/credentials_email"), {
      fields
    }, body, options);
  });
  return function update_user_credentials_email(_x1331, _x1332, _x1333, _x1334, _x1335) {
    return _ref391.apply(this, arguments);
  };
}();
export var delete_user_credentials_email = function () {
  var _ref392 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = encodeParam(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_email"), null, null, options);
  });
  return function delete_user_credentials_email(_x1336, _x1337, _x1338) {
    return _ref392.apply(this, arguments);
  };
}();
export var user_credentials_totp = function () {
  var _ref393 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_totp"), {
      fields
    }, null, options);
  });
  return function user_credentials_totp(_x1339, _x1340, _x1341, _x1342) {
    return _ref393.apply(this, arguments);
  };
}();
export var create_user_credentials_totp = function () {
  var _ref394 = _asyncToGenerator(function* (sdk, user_id, body, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.post("/users/".concat(user_id, "/credentials_totp"), {
      fields
    }, body, options);
  });
  return function create_user_credentials_totp(_x1343, _x1344, _x1345, _x1346, _x1347) {
    return _ref394.apply(this, arguments);
  };
}();
export var delete_user_credentials_totp = function () {
  var _ref395 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = encodeParam(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_totp"), null, null, options);
  });
  return function delete_user_credentials_totp(_x1348, _x1349, _x1350) {
    return _ref395.apply(this, arguments);
  };
}();
export var user_credentials_ldap = function () {
  var _ref396 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_ldap"), {
      fields
    }, null, options);
  });
  return function user_credentials_ldap(_x1351, _x1352, _x1353, _x1354) {
    return _ref396.apply(this, arguments);
  };
}();
export var delete_user_credentials_ldap = function () {
  var _ref397 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = encodeParam(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_ldap"), null, null, options);
  });
  return function delete_user_credentials_ldap(_x1355, _x1356, _x1357) {
    return _ref397.apply(this, arguments);
  };
}();
export var user_credentials_google = function () {
  var _ref398 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_google"), {
      fields
    }, null, options);
  });
  return function user_credentials_google(_x1358, _x1359, _x1360, _x1361) {
    return _ref398.apply(this, arguments);
  };
}();
export var delete_user_credentials_google = function () {
  var _ref399 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = encodeParam(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_google"), null, null, options);
  });
  return function delete_user_credentials_google(_x1362, _x1363, _x1364) {
    return _ref399.apply(this, arguments);
  };
}();
export var user_credentials_saml = function () {
  var _ref400 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_saml"), {
      fields
    }, null, options);
  });
  return function user_credentials_saml(_x1365, _x1366, _x1367, _x1368) {
    return _ref400.apply(this, arguments);
  };
}();
export var delete_user_credentials_saml = function () {
  var _ref401 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = encodeParam(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_saml"), null, null, options);
  });
  return function delete_user_credentials_saml(_x1369, _x1370, _x1371) {
    return _ref401.apply(this, arguments);
  };
}();
export var user_credentials_oidc = function () {
  var _ref402 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_oidc"), {
      fields
    }, null, options);
  });
  return function user_credentials_oidc(_x1372, _x1373, _x1374, _x1375) {
    return _ref402.apply(this, arguments);
  };
}();
export var delete_user_credentials_oidc = function () {
  var _ref403 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = encodeParam(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_oidc"), null, null, options);
  });
  return function delete_user_credentials_oidc(_x1376, _x1377, _x1378) {
    return _ref403.apply(this, arguments);
  };
}();
export var user_credentials_api3 = function () {
  var _ref404 = _asyncToGenerator(function* (sdk, user_id, credentials_api3_id, fields, options) {
    user_id = encodeParam(user_id);
    credentials_api3_id = encodeParam(credentials_api3_id);
    return sdk.get("/users/".concat(user_id, "/credentials_api3/").concat(credentials_api3_id), {
      fields
    }, null, options);
  });
  return function user_credentials_api3(_x1379, _x1380, _x1381, _x1382, _x1383) {
    return _ref404.apply(this, arguments);
  };
}();
export var delete_user_credentials_api3 = function () {
  var _ref405 = _asyncToGenerator(function* (sdk, user_id, credentials_api3_id, options) {
    user_id = encodeParam(user_id);
    credentials_api3_id = encodeParam(credentials_api3_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_api3/").concat(credentials_api3_id), null, null, options);
  });
  return function delete_user_credentials_api3(_x1384, _x1385, _x1386, _x1387) {
    return _ref405.apply(this, arguments);
  };
}();
export var all_user_credentials_api3s = function () {
  var _ref406 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_api3"), {
      fields
    }, null, options);
  });
  return function all_user_credentials_api3s(_x1388, _x1389, _x1390, _x1391) {
    return _ref406.apply(this, arguments);
  };
}();
export var create_user_credentials_api3 = function () {
  var _ref407 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.post("/users/".concat(user_id, "/credentials_api3"), {
      fields
    }, null, options);
  });
  return function create_user_credentials_api3(_x1392, _x1393, _x1394, _x1395) {
    return _ref407.apply(this, arguments);
  };
}();
export var user_credentials_embed = function () {
  var _ref408 = _asyncToGenerator(function* (sdk, user_id, credentials_embed_id, fields, options) {
    user_id = encodeParam(user_id);
    credentials_embed_id = encodeParam(credentials_embed_id);
    return sdk.get("/users/".concat(user_id, "/credentials_embed/").concat(credentials_embed_id), {
      fields
    }, null, options);
  });
  return function user_credentials_embed(_x1396, _x1397, _x1398, _x1399, _x1400) {
    return _ref408.apply(this, arguments);
  };
}();
export var delete_user_credentials_embed = function () {
  var _ref409 = _asyncToGenerator(function* (sdk, user_id, credentials_embed_id, options) {
    user_id = encodeParam(user_id);
    credentials_embed_id = encodeParam(credentials_embed_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_embed/").concat(credentials_embed_id), null, null, options);
  });
  return function delete_user_credentials_embed(_x1401, _x1402, _x1403, _x1404) {
    return _ref409.apply(this, arguments);
  };
}();
export var all_user_credentials_embeds = function () {
  var _ref410 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_embed"), {
      fields
    }, null, options);
  });
  return function all_user_credentials_embeds(_x1405, _x1406, _x1407, _x1408) {
    return _ref410.apply(this, arguments);
  };
}();
export var user_credentials_looker_openid = function () {
  var _ref411 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_looker_openid"), {
      fields
    }, null, options);
  });
  return function user_credentials_looker_openid(_x1409, _x1410, _x1411, _x1412) {
    return _ref411.apply(this, arguments);
  };
}();
export var delete_user_credentials_looker_openid = function () {
  var _ref412 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = encodeParam(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_looker_openid"), null, null, options);
  });
  return function delete_user_credentials_looker_openid(_x1413, _x1414, _x1415) {
    return _ref412.apply(this, arguments);
  };
}();
export var user_session = function () {
  var _ref413 = _asyncToGenerator(function* (sdk, user_id, session_id, fields, options) {
    user_id = encodeParam(user_id);
    session_id = encodeParam(session_id);
    return sdk.get("/users/".concat(user_id, "/sessions/").concat(session_id), {
      fields
    }, null, options);
  });
  return function user_session(_x1416, _x1417, _x1418, _x1419, _x1420) {
    return _ref413.apply(this, arguments);
  };
}();
export var delete_user_session = function () {
  var _ref414 = _asyncToGenerator(function* (sdk, user_id, session_id, options) {
    user_id = encodeParam(user_id);
    session_id = encodeParam(session_id);
    return sdk.delete("/users/".concat(user_id, "/sessions/").concat(session_id), null, null, options);
  });
  return function delete_user_session(_x1421, _x1422, _x1423, _x1424) {
    return _ref414.apply(this, arguments);
  };
}();
export var all_user_sessions = function () {
  var _ref415 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.get("/users/".concat(user_id, "/sessions"), {
      fields
    }, null, options);
  });
  return function all_user_sessions(_x1425, _x1426, _x1427, _x1428) {
    return _ref415.apply(this, arguments);
  };
}();
export var create_user_credentials_email_password_reset = function () {
  var _ref416 = _asyncToGenerator(function* (sdk, request, options) {
    request.user_id = encodeParam(request.user_id);
    return sdk.post("/users/".concat(request.user_id, "/credentials_email/password_reset"), {
      expires: request.expires,
      fields: request.fields
    }, null, options);
  });
  return function create_user_credentials_email_password_reset(_x1429, _x1430, _x1431) {
    return _ref416.apply(this, arguments);
  };
}();
export var user_roles = function () {
  var _ref417 = _asyncToGenerator(function* (sdk, request, options) {
    request.user_id = encodeParam(request.user_id);
    return sdk.get("/users/".concat(request.user_id, "/roles"), {
      fields: request.fields,
      direct_association_only: request.direct_association_only
    }, null, options);
  });
  return function user_roles(_x1432, _x1433, _x1434) {
    return _ref417.apply(this, arguments);
  };
}();
export var set_user_roles = function () {
  var _ref418 = _asyncToGenerator(function* (sdk, user_id, body, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.put("/users/".concat(user_id, "/roles"), {
      fields
    }, body, options);
  });
  return function set_user_roles(_x1435, _x1436, _x1437, _x1438, _x1439) {
    return _ref418.apply(this, arguments);
  };
}();
export var user_attribute_user_values = function () {
  var _ref419 = _asyncToGenerator(function* (sdk, request, options) {
    request.user_id = encodeParam(request.user_id);
    return sdk.get("/users/".concat(request.user_id, "/attribute_values"), {
      fields: request.fields,
      user_attribute_ids: request.user_attribute_ids,
      all_values: request.all_values,
      include_unset: request.include_unset
    }, null, options);
  });
  return function user_attribute_user_values(_x1440, _x1441, _x1442) {
    return _ref419.apply(this, arguments);
  };
}();
export var set_user_attribute_user_value = function () {
  var _ref420 = _asyncToGenerator(function* (sdk, user_id, user_attribute_id, body, options) {
    user_id = encodeParam(user_id);
    user_attribute_id = encodeParam(user_attribute_id);
    return sdk.patch("/users/".concat(user_id, "/attribute_values/").concat(user_attribute_id), null, body, options);
  });
  return function set_user_attribute_user_value(_x1443, _x1444, _x1445, _x1446, _x1447) {
    return _ref420.apply(this, arguments);
  };
}();
export var delete_user_attribute_user_value = function () {
  var _ref421 = _asyncToGenerator(function* (sdk, user_id, user_attribute_id, options) {
    user_id = encodeParam(user_id);
    user_attribute_id = encodeParam(user_attribute_id);
    return sdk.delete("/users/".concat(user_id, "/attribute_values/").concat(user_attribute_id), null, null, options);
  });
  return function delete_user_attribute_user_value(_x1448, _x1449, _x1450, _x1451) {
    return _ref421.apply(this, arguments);
  };
}();
export var send_user_credentials_email_password_reset = function () {
  var _ref422 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.post("/users/".concat(user_id, "/credentials_email/send_password_reset"), {
      fields
    }, null, options);
  });
  return function send_user_credentials_email_password_reset(_x1452, _x1453, _x1454, _x1455) {
    return _ref422.apply(this, arguments);
  };
}();
export var wipeout_user_emails = function () {
  var _ref423 = _asyncToGenerator(function* (sdk, user_id, body, fields, options) {
    user_id = encodeParam(user_id);
    return sdk.post("/users/".concat(user_id, "/update_emails"), {
      fields
    }, body, options);
  });
  return function wipeout_user_emails(_x1456, _x1457, _x1458, _x1459, _x1460) {
    return _ref423.apply(this, arguments);
  };
}();
export var create_embed_user = function () {
  var _ref424 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/users/embed_user', null, body, options);
  });
  return function create_embed_user(_x1461, _x1462, _x1463) {
    return _ref424.apply(this, arguments);
  };
}();
export var all_user_attributes = function () {
  var _ref425 = _asyncToGenerator(function* (sdk, request, options) {
    return sdk.get('/user_attributes', {
      fields: request.fields,
      sorts: request.sorts
    }, null, options);
  });
  return function all_user_attributes(_x1464, _x1465, _x1466) {
    return _ref425.apply(this, arguments);
  };
}();
export var create_user_attribute = function () {
  var _ref426 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/user_attributes', {
      fields
    }, body, options);
  });
  return function create_user_attribute(_x1467, _x1468, _x1469, _x1470) {
    return _ref426.apply(this, arguments);
  };
}();
export var user_attribute = function () {
  var _ref427 = _asyncToGenerator(function* (sdk, user_attribute_id, fields, options) {
    user_attribute_id = encodeParam(user_attribute_id);
    return sdk.get("/user_attributes/".concat(user_attribute_id), {
      fields
    }, null, options);
  });
  return function user_attribute(_x1471, _x1472, _x1473, _x1474) {
    return _ref427.apply(this, arguments);
  };
}();
export var update_user_attribute = function () {
  var _ref428 = _asyncToGenerator(function* (sdk, user_attribute_id, body, fields, options) {
    user_attribute_id = encodeParam(user_attribute_id);
    return sdk.patch("/user_attributes/".concat(user_attribute_id), {
      fields
    }, body, options);
  });
  return function update_user_attribute(_x1475, _x1476, _x1477, _x1478, _x1479) {
    return _ref428.apply(this, arguments);
  };
}();
export var delete_user_attribute = function () {
  var _ref429 = _asyncToGenerator(function* (sdk, user_attribute_id, options) {
    user_attribute_id = encodeParam(user_attribute_id);
    return sdk.delete("/user_attributes/".concat(user_attribute_id), null, null, options);
  });
  return function delete_user_attribute(_x1480, _x1481, _x1482) {
    return _ref429.apply(this, arguments);
  };
}();
export var all_user_attribute_group_values = function () {
  var _ref430 = _asyncToGenerator(function* (sdk, user_attribute_id, fields, options) {
    user_attribute_id = encodeParam(user_attribute_id);
    return sdk.get("/user_attributes/".concat(user_attribute_id, "/group_values"), {
      fields
    }, null, options);
  });
  return function all_user_attribute_group_values(_x1483, _x1484, _x1485, _x1486) {
    return _ref430.apply(this, arguments);
  };
}();
export var set_user_attribute_group_values = function () {
  var _ref431 = _asyncToGenerator(function* (sdk, user_attribute_id, body, options) {
    user_attribute_id = encodeParam(user_attribute_id);
    return sdk.post("/user_attributes/".concat(user_attribute_id, "/group_values"), null, body, options);
  });
  return function set_user_attribute_group_values(_x1487, _x1488, _x1489, _x1490) {
    return _ref431.apply(this, arguments);
  };
}();
export var all_workspaces = function () {
  var _ref432 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/workspaces', null, null, options);
  });
  return function all_workspaces(_x1491, _x1492) {
    return _ref432.apply(this, arguments);
  };
}();
export var workspace = function () {
  var _ref433 = _asyncToGenerator(function* (sdk, workspace_id, options) {
    workspace_id = encodeParam(workspace_id);
    return sdk.get("/workspaces/".concat(workspace_id), null, null, options);
  });
  return function workspace(_x1493, _x1494, _x1495) {
    return _ref433.apply(this, arguments);
  };
}();
//# sourceMappingURL=funcs.js.map