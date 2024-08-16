"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create_embed_user = exports.create_embed_url_as_me = exports.create_embed_secret = exports.create_digest_email_send = exports.create_dashboard_render_task = exports.create_dashboard_layout = exports.create_dashboard_from_lookml = exports.create_dashboard_filter = exports.create_dashboard_element_render_task = exports.create_dashboard_element = exports.create_dashboard = exports.create_content_metadata_access = exports.create_content_favorite = exports.create_connection = exports.create_color_collection = exports.create_board_section = exports.create_board_item = exports.create_board = exports.create_alert = exports.copy_look = exports.copy_dashboard = exports.content_validation = exports.content_thumbnail = exports.content_metadata = exports.content_favorite = exports.connection_tables = exports.connection_search_columns = exports.connection_schemas = exports.connection_features = exports.connection_databases = exports.connection_cost_estimate = exports.connection_columns = exports.connection = exports.color_collections_standard = exports.color_collections_custom = exports.color_collection = exports.cloud_storage_configuration = exports.check_pdt_build = exports.board_section = exports.board_item = exports.board = exports.artifact_value = exports.artifact_usage = exports.artifact_namespaces = exports.artifact = exports.api_spec = exports.all_workspaces = exports.all_users = exports.all_user_sessions = exports.all_user_login_lockouts = exports.all_user_credentials_embeds = exports.all_user_credentials_api3s = exports.all_user_attributes = exports.all_user_attribute_group_values = exports.all_timezones = exports.all_themes = exports.all_ssh_tunnels = exports.all_ssh_servers = exports.all_scheduled_plans = exports.all_running_queries = exports.all_roles = exports.all_projects = exports.all_project_files = exports.all_primary_homepage_sections = exports.all_permissions = exports.all_permission_sets = exports.all_oauth_client_apps = exports.all_model_sets = exports.all_looks = exports.all_lookml_tests = exports.all_lookml_models = exports.all_locales = exports.all_legacy_features = exports.all_integrations = exports.all_integration_hubs = exports.all_groups = exports.all_group_users = exports.all_group_groups = exports.all_git_connection_tests = exports.all_git_branches = exports.all_folders = exports.all_external_oauth_applications = exports.all_dialect_infos = exports.all_datagroups = exports.all_dashboards = exports.all_content_metadatas = exports.all_content_metadata_accesses = exports.all_connections = exports.all_color_collections = exports.all_boards = exports.all_board_sections = exports.all_board_items = exports.alert_notifications = exports.add_support_access_allowlist_entries = exports.add_group_user = exports.add_group_group = exports.active_themes = exports.activate_app_user = exports.acquire_embed_cookieless_session = exports.accept_integration_hub_legal_agreement = void 0;
exports.delete_user_session = exports.delete_user_login_lockout = exports.delete_user_credentials_totp = exports.delete_user_credentials_saml = exports.delete_user_credentials_oidc = exports.delete_user_credentials_looker_openid = exports.delete_user_credentials_ldap = exports.delete_user_credentials_google = exports.delete_user_credentials_embed = exports.delete_user_credentials_email = exports.delete_user_credentials_api3 = exports.delete_user_attribute_user_value = exports.delete_user_attribute_group_value = exports.delete_user_attribute = exports.delete_user = exports.delete_theme = exports.delete_support_access_allowlist_entry = exports.delete_ssh_tunnel = exports.delete_ssh_server = exports.delete_scheduled_plan = exports.delete_saml_test_config = exports.delete_role = exports.delete_repository_credential = exports.delete_permission_set = exports.delete_oidc_test_config = exports.delete_oauth_client_app = exports.delete_model_set = exports.delete_lookml_model = exports.delete_look = exports.delete_integration_hub = exports.delete_group_user = exports.delete_group_from_group = exports.delete_group = exports.delete_git_branch = exports.delete_folder = exports.delete_embed_secret = exports.delete_embed_cookieless_session = exports.delete_dashboard_layout = exports.delete_dashboard_filter = exports.delete_dashboard_element = exports.delete_dashboard = exports.delete_content_metadata_access = exports.delete_content_favorite = exports.delete_connection_override = exports.delete_connection = exports.delete_color_collection = exports.delete_board_section = exports.delete_board_item = exports.delete_board = exports.delete_artifact = exports.delete_alert = exports.default_theme = exports.default_color_collection = exports.deactivate_app_user = exports.datagroup = exports.dashboard_lookml = exports.dashboard_layout_dashboard_layout_components = exports.dashboard_layout_component = exports.dashboard_layout = exports.dashboard_filter = exports.dashboard_element = exports.dashboard_dashboard_layouts = exports.dashboard_dashboard_filters = exports.dashboard_dashboard_elements = exports.dashboard_aggregate_table_lookml = exports.dashboard = exports.custom_welcome_email = exports.create_user_credentials_totp = exports.create_user_credentials_email_password_reset = exports.create_user_credentials_email = exports.create_user_credentials_api3 = exports.create_user_attribute = exports.create_user = exports.create_theme = exports.create_sso_embed_url = exports.create_ssh_tunnel = exports.create_ssh_server = exports.create_sql_query = exports.create_sql_interface_query = exports.create_scheduled_plan = exports.create_saml_test_config = exports.create_role = exports.create_query_task = exports.create_query_render_task = exports.create_query = exports.create_project = exports.create_permission_set = exports.create_oidc_test_config = exports.create_oauth_application_user_state = exports.create_model_set = exports.create_merge_query = exports.create_lookml_model = exports.create_look_render_task = exports.create_look = exports.create_integration_hub = exports.create_group = exports.create_git_deploy_key = exports.create_git_branch = exports.create_folder = exports.create_external_oauth_application = void 0;
exports.scheduled_plans_for_look = exports.scheduled_plans_for_dashboard = exports.scheduled_plan_run_once_by_id = exports.scheduled_plan_run_once = exports.scheduled_plan = exports.saml_test_config = exports.saml_config = exports.run_url_encoded_query = exports.run_sql_query = exports.run_sql_interface_query = exports.run_query = exports.run_lookml_test = exports.run_look = exports.run_inline_query = exports.run_git_connection_test = exports.role_users = exports.role_groups = exports.role = exports.reset_project_to_remote = exports.reset_project_to_production = exports.render_task_results = exports.render_task = exports.register_oauth_client_app = exports.register_mobile_device = exports.read_alert_notification = exports.query_task_results = exports.query_task_multi_results = exports.query_task = exports.query_for_slug = exports.query = exports.purge_artifacts = exports.public_egress_ip_addresses = exports.project_workspace = exports.project_validation_results = exports.project_file = exports.project = exports.permission_set = exports.perform_data_action = exports.password_config = exports.parse_saml_idp_metadata = exports.oidc_test_config = exports.oidc_config = exports.oauth_client_app = exports.move_look = exports.move_dashboard = exports.model_set = exports.model_fieldname_suggestions = exports.mobile_settings = exports.merge_query = exports.me = exports.manifest = exports.lookml_model_explore = exports.lookml_model = exports.look = exports.logout = exports.login_user = exports.login = exports.lock_all = exports.legacy_feature = exports.ldap_config = exports.kill_query = exports.invalidate_tokens = exports.internal_help_resources_content = exports.internal_help_resources = exports.integration_hub = exports.integration = exports.import_lookml_dashboard = exports.import_dashboard_from_lookml = exports.group = exports.graph_derived_tables_for_view = exports.graph_derived_tables_for_model = exports.git_deploy_key = exports.git_branch = exports.get_support_access_allowlist_entries = exports.get_setting = exports.get_model = exports.get_all_repository_credentials = exports.get_alert = exports.generate_tokens_for_cookieless_session = exports.functionalSdk40 = exports.force_password_reset_at_next_login_for_all_users = exports.follow_alert = exports.folder_parent = exports.folder_looks = exports.folder_dashboards = exports.folder_children_search = exports.folder_children = exports.folder_ancestors = exports.folder = exports.find_git_branch = exports.fetch_remote_data_action_form = exports.fetch_integration_form = exports.fetch_and_parse_saml_idp_metadata = exports.enqueue_alert = exports.enable_support_access = exports.disable_support_access = exports.digest_emails_enabled = exports.deregister_mobile_device = exports.deploy_to_production = exports.deploy_ref_to_production = void 0;
exports.update_saml_config = exports.update_role = exports.update_repository_credential = exports.update_project = exports.update_permission_set = exports.update_password_config = exports.update_oidc_config = exports.update_oauth_client_app = exports.update_model_set = exports.update_mobile_device_registration = exports.update_lookml_model = exports.update_look = exports.update_legacy_feature = exports.update_ldap_config = exports.update_internal_help_resources_content = exports.update_internal_help_resources = exports.update_integration_hub = exports.update_integration = exports.update_group = exports.update_git_branch = exports.update_folder = exports.update_digest_emails_enabled = exports.update_datagroup = exports.update_dashboard_layout_component = exports.update_dashboard_layout = exports.update_dashboard_filter = exports.update_dashboard_element = exports.update_dashboard = exports.update_custom_welcome_email_test = exports.update_custom_welcome_email = exports.update_content_metadata_access = exports.update_content_metadata = exports.update_connection = exports.update_color_collection = exports.update_cloud_storage_configuration = exports.update_board_section = exports.update_board_item = exports.update_board = exports.update_artifacts = exports.update_alert_field = exports.update_alert = exports.unfollow_alert = exports.theme_or_default = exports.theme = exports.test_ssh_tunnel = exports.test_ssh_server = exports.test_ldap_config_user_info = exports.test_ldap_config_user_auth = exports.test_ldap_config_connection = exports.test_ldap_config_auth = exports.test_integration = exports.test_connection_config = exports.test_connection = exports.tag_ref = exports.sync_lookml_dashboard = exports.support_access_status = exports.stop_pdt_build = exports.start_pdt_build = exports.ssh_tunnel = exports.ssh_server = exports.ssh_public_key = exports.sql_query = exports.sql_interface_metadata = exports.smtp_status = exports.set_user_roles = exports.set_user_attribute_user_value = exports.set_user_attribute_group_values = exports.set_smtp_settings = exports.set_setting = exports.set_role_users = exports.set_role_groups = exports.set_default_theme = exports.set_default_color_collection = exports.session_config = exports.session = exports.send_user_credentials_email_password_reset = exports.search_users_names = exports.search_users = exports.search_user_login_lockouts = exports.search_themes = exports.search_roles_with_user_count = exports.search_roles = exports.search_permission_sets = exports.search_model_sets = exports.search_looks = exports.search_groups_with_roles = exports.search_groups_with_hierarchy = exports.search_groups = exports.search_folders = exports.search_dashboards = exports.search_dashboard_elements = exports.search_credentials_email = exports.search_content_views = exports.search_content_favorites = exports.search_content = exports.search_boards = exports.search_artifacts = exports.search_alerts = exports.scheduled_plans_for_space = exports.scheduled_plans_for_lookml_dashboard = void 0;
exports.workspace = exports.wipeout_user_emails = exports.whitelabel_configuration = exports.versions = exports.vector_thumbnail = exports.validate_theme = exports.validate_project = exports.validate_embed_url = exports.user_session = exports.user_roles = exports.user_for_credential = exports.user_credentials_totp = exports.user_credentials_saml = exports.user_credentials_oidc = exports.user_credentials_looker_openid = exports.user_credentials_ldap = exports.user_credentials_google = exports.user_credentials_embed = exports.user_credentials_email = exports.user_credentials_api3 = exports.user_attribute_user_values = exports.user_attribute = exports.user = exports.update_whitelabel_configuration = exports.update_user_credentials_email = exports.update_user_attribute_group_value = exports.update_user_attribute = exports.update_user = exports.update_theme = exports.update_ssh_tunnel = exports.update_ssh_server = exports.update_session_config = exports.update_session = exports.update_scheduled_plan = void 0;
var _sdkRtl = require("@looker/sdk-rtl");
var _constants = require("../constants");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var functionalSdk40 = authSession => {
  return (0, _sdkRtl.functionalSdk)(authSession, '4.0', _constants.sdkVersion);
};
exports.functionalSdk40 = functionalSdk40;
var follow_alert = function () {
  var _ref = _asyncToGenerator(function* (sdk, alert_id, options) {
    alert_id = (0, _sdkRtl.encodeParam)(alert_id);
    return sdk.post("/alerts/".concat(alert_id, "/follow"), null, null, options);
  });
  return function follow_alert(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.follow_alert = follow_alert;
var unfollow_alert = function () {
  var _ref2 = _asyncToGenerator(function* (sdk, alert_id, options) {
    alert_id = (0, _sdkRtl.encodeParam)(alert_id);
    return sdk.delete("/alerts/".concat(alert_id, "/follow"), null, null, options);
  });
  return function unfollow_alert(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.unfollow_alert = unfollow_alert;
var search_alerts = function () {
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
exports.search_alerts = search_alerts;
var get_alert = function () {
  var _ref4 = _asyncToGenerator(function* (sdk, alert_id, options) {
    alert_id = (0, _sdkRtl.encodeParam)(alert_id);
    return sdk.get("/alerts/".concat(alert_id), null, null, options);
  });
  return function get_alert(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
exports.get_alert = get_alert;
var update_alert = function () {
  var _ref5 = _asyncToGenerator(function* (sdk, alert_id, body, options) {
    alert_id = (0, _sdkRtl.encodeParam)(alert_id);
    return sdk.put("/alerts/".concat(alert_id), null, body, options);
  });
  return function update_alert(_x13, _x14, _x15, _x16) {
    return _ref5.apply(this, arguments);
  };
}();
exports.update_alert = update_alert;
var update_alert_field = function () {
  var _ref6 = _asyncToGenerator(function* (sdk, alert_id, body, options) {
    alert_id = (0, _sdkRtl.encodeParam)(alert_id);
    return sdk.patch("/alerts/".concat(alert_id), null, body, options);
  });
  return function update_alert_field(_x17, _x18, _x19, _x20) {
    return _ref6.apply(this, arguments);
  };
}();
exports.update_alert_field = update_alert_field;
var delete_alert = function () {
  var _ref7 = _asyncToGenerator(function* (sdk, alert_id, options) {
    alert_id = (0, _sdkRtl.encodeParam)(alert_id);
    return sdk.delete("/alerts/".concat(alert_id), null, null, options);
  });
  return function delete_alert(_x21, _x22, _x23) {
    return _ref7.apply(this, arguments);
  };
}();
exports.delete_alert = delete_alert;
var create_alert = function () {
  var _ref8 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/alerts', null, body, options);
  });
  return function create_alert(_x24, _x25, _x26) {
    return _ref8.apply(this, arguments);
  };
}();
exports.create_alert = create_alert;
var enqueue_alert = function () {
  var _ref9 = _asyncToGenerator(function* (sdk, alert_id, force, options) {
    alert_id = (0, _sdkRtl.encodeParam)(alert_id);
    return sdk.post("/alerts/".concat(alert_id, "/enqueue"), {
      force
    }, null, options);
  });
  return function enqueue_alert(_x27, _x28, _x29, _x30) {
    return _ref9.apply(this, arguments);
  };
}();
exports.enqueue_alert = enqueue_alert;
var alert_notifications = function () {
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
exports.alert_notifications = alert_notifications;
var read_alert_notification = function () {
  var _ref11 = _asyncToGenerator(function* (sdk, alert_notification_id, options) {
    alert_notification_id = (0, _sdkRtl.encodeParam)(alert_notification_id);
    return sdk.patch("/alert_notifications/".concat(alert_notification_id), null, null, options);
  });
  return function read_alert_notification(_x34, _x35, _x36) {
    return _ref11.apply(this, arguments);
  };
}();
exports.read_alert_notification = read_alert_notification;
var login = function () {
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
exports.login = login;
var login_user = function () {
  var _ref13 = _asyncToGenerator(function* (sdk, user_id, associative, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.post("/login/".concat(user_id), {
      associative
    }, null, options);
  });
  return function login_user(_x40, _x41, _x42, _x43) {
    return _ref13.apply(this, arguments);
  };
}();
exports.login_user = login_user;
var logout = function () {
  var _ref14 = _asyncToGenerator(function* (sdk, options) {
    return sdk.delete('/logout', null, null, options);
  });
  return function logout(_x44, _x45) {
    return _ref14.apply(this, arguments);
  };
}();
exports.logout = logout;
var artifact_usage = function () {
  var _ref15 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/artifact/usage', {
      fields
    }, null, options);
  });
  return function artifact_usage(_x46, _x47, _x48) {
    return _ref15.apply(this, arguments);
  };
}();
exports.artifact_usage = artifact_usage;
var artifact_namespaces = function () {
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
exports.artifact_namespaces = artifact_namespaces;
var artifact_value = function () {
  var _ref17 = _asyncToGenerator(function* (sdk, namespace, key, options) {
    namespace = (0, _sdkRtl.encodeParam)(namespace);
    return sdk.get("/artifact/".concat(namespace, "/value"), {
      key
    }, null, options);
  });
  return function artifact_value(_x52, _x53, _x54, _x55) {
    return _ref17.apply(this, arguments);
  };
}();
exports.artifact_value = artifact_value;
var purge_artifacts = function () {
  var _ref18 = _asyncToGenerator(function* (sdk, namespace, options) {
    namespace = (0, _sdkRtl.encodeParam)(namespace);
    return sdk.delete("/artifact/".concat(namespace, "/purge"), null, null, options);
  });
  return function purge_artifacts(_x56, _x57, _x58) {
    return _ref18.apply(this, arguments);
  };
}();
exports.purge_artifacts = purge_artifacts;
var search_artifacts = function () {
  var _ref19 = _asyncToGenerator(function* (sdk, request, options) {
    request.namespace = (0, _sdkRtl.encodeParam)(request.namespace);
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
exports.search_artifacts = search_artifacts;
var artifact = function () {
  var _ref20 = _asyncToGenerator(function* (sdk, request, options) {
    request.namespace = (0, _sdkRtl.encodeParam)(request.namespace);
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
exports.artifact = artifact;
var delete_artifact = function () {
  var _ref21 = _asyncToGenerator(function* (sdk, namespace, key, options) {
    namespace = (0, _sdkRtl.encodeParam)(namespace);
    return sdk.delete("/artifact/".concat(namespace), {
      key
    }, null, options);
  });
  return function delete_artifact(_x65, _x66, _x67, _x68) {
    return _ref21.apply(this, arguments);
  };
}();
exports.delete_artifact = delete_artifact;
var update_artifacts = function () {
  var _ref22 = _asyncToGenerator(function* (sdk, namespace, body, fields, options) {
    namespace = (0, _sdkRtl.encodeParam)(namespace);
    return sdk.put("/artifacts/".concat(namespace), {
      fields
    }, body, options);
  });
  return function update_artifacts(_x69, _x70, _x71, _x72, _x73) {
    return _ref22.apply(this, arguments);
  };
}();
exports.update_artifacts = update_artifacts;
var create_embed_secret = function () {
  var _ref23 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/embed_config/secrets', null, body, options);
  });
  return function create_embed_secret(_x74, _x75, _x76) {
    return _ref23.apply(this, arguments);
  };
}();
exports.create_embed_secret = create_embed_secret;
var delete_embed_secret = function () {
  var _ref24 = _asyncToGenerator(function* (sdk, embed_secret_id, options) {
    embed_secret_id = (0, _sdkRtl.encodeParam)(embed_secret_id);
    return sdk.delete("/embed_config/secrets/".concat(embed_secret_id), null, null, options);
  });
  return function delete_embed_secret(_x77, _x78, _x79) {
    return _ref24.apply(this, arguments);
  };
}();
exports.delete_embed_secret = delete_embed_secret;
var create_sso_embed_url = function () {
  var _ref25 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/embed/sso_url', null, body, options);
  });
  return function create_sso_embed_url(_x80, _x81, _x82) {
    return _ref25.apply(this, arguments);
  };
}();
exports.create_sso_embed_url = create_sso_embed_url;
var create_embed_url_as_me = function () {
  var _ref26 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/embed/token_url/me', null, body, options);
  });
  return function create_embed_url_as_me(_x83, _x84, _x85) {
    return _ref26.apply(this, arguments);
  };
}();
exports.create_embed_url_as_me = create_embed_url_as_me;
var validate_embed_url = function () {
  var _ref27 = _asyncToGenerator(function* (sdk, url, options) {
    return sdk.get('/embed/sso/validate', {
      url
    }, null, options);
  });
  return function validate_embed_url(_x86, _x87, _x88) {
    return _ref27.apply(this, arguments);
  };
}();
exports.validate_embed_url = validate_embed_url;
var acquire_embed_cookieless_session = function () {
  var _ref28 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/embed/cookieless_session/acquire', null, body, options);
  });
  return function acquire_embed_cookieless_session(_x89, _x90, _x91) {
    return _ref28.apply(this, arguments);
  };
}();
exports.acquire_embed_cookieless_session = acquire_embed_cookieless_session;
var delete_embed_cookieless_session = function () {
  var _ref29 = _asyncToGenerator(function* (sdk, session_reference_token, options) {
    session_reference_token = (0, _sdkRtl.encodeParam)(session_reference_token);
    return sdk.delete("/embed/cookieless_session/".concat(session_reference_token), null, null, options);
  });
  return function delete_embed_cookieless_session(_x92, _x93, _x94) {
    return _ref29.apply(this, arguments);
  };
}();
exports.delete_embed_cookieless_session = delete_embed_cookieless_session;
var generate_tokens_for_cookieless_session = function () {
  var _ref30 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/embed/cookieless_session/generate_tokens', null, body, options);
  });
  return function generate_tokens_for_cookieless_session(_x95, _x96, _x97) {
    return _ref30.apply(this, arguments);
  };
}();
exports.generate_tokens_for_cookieless_session = generate_tokens_for_cookieless_session;
var ldap_config = function () {
  var _ref31 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/ldap_config', null, null, options);
  });
  return function ldap_config(_x98, _x99) {
    return _ref31.apply(this, arguments);
  };
}();
exports.ldap_config = ldap_config;
var update_ldap_config = function () {
  var _ref32 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/ldap_config', null, body, options);
  });
  return function update_ldap_config(_x100, _x101, _x102) {
    return _ref32.apply(this, arguments);
  };
}();
exports.update_ldap_config = update_ldap_config;
var test_ldap_config_connection = function () {
  var _ref33 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/ldap_config/test_connection', null, body, options);
  });
  return function test_ldap_config_connection(_x103, _x104, _x105) {
    return _ref33.apply(this, arguments);
  };
}();
exports.test_ldap_config_connection = test_ldap_config_connection;
var test_ldap_config_auth = function () {
  var _ref34 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/ldap_config/test_auth', null, body, options);
  });
  return function test_ldap_config_auth(_x106, _x107, _x108) {
    return _ref34.apply(this, arguments);
  };
}();
exports.test_ldap_config_auth = test_ldap_config_auth;
var test_ldap_config_user_info = function () {
  var _ref35 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/ldap_config/test_user_info', null, body, options);
  });
  return function test_ldap_config_user_info(_x109, _x110, _x111) {
    return _ref35.apply(this, arguments);
  };
}();
exports.test_ldap_config_user_info = test_ldap_config_user_info;
var test_ldap_config_user_auth = function () {
  var _ref36 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/ldap_config/test_user_auth', null, body, options);
  });
  return function test_ldap_config_user_auth(_x112, _x113, _x114) {
    return _ref36.apply(this, arguments);
  };
}();
exports.test_ldap_config_user_auth = test_ldap_config_user_auth;
var register_mobile_device = function () {
  var _ref37 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/mobile/device', null, body, options);
  });
  return function register_mobile_device(_x115, _x116, _x117) {
    return _ref37.apply(this, arguments);
  };
}();
exports.register_mobile_device = register_mobile_device;
var update_mobile_device_registration = function () {
  var _ref38 = _asyncToGenerator(function* (sdk, device_id, options) {
    device_id = (0, _sdkRtl.encodeParam)(device_id);
    return sdk.patch("/mobile/device/".concat(device_id), null, null, options);
  });
  return function update_mobile_device_registration(_x118, _x119, _x120) {
    return _ref38.apply(this, arguments);
  };
}();
exports.update_mobile_device_registration = update_mobile_device_registration;
var deregister_mobile_device = function () {
  var _ref39 = _asyncToGenerator(function* (sdk, device_id, options) {
    device_id = (0, _sdkRtl.encodeParam)(device_id);
    return sdk.delete("/mobile/device/".concat(device_id), null, null, options);
  });
  return function deregister_mobile_device(_x121, _x122, _x123) {
    return _ref39.apply(this, arguments);
  };
}();
exports.deregister_mobile_device = deregister_mobile_device;
var all_oauth_client_apps = function () {
  var _ref40 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/oauth_client_apps', {
      fields
    }, null, options);
  });
  return function all_oauth_client_apps(_x124, _x125, _x126) {
    return _ref40.apply(this, arguments);
  };
}();
exports.all_oauth_client_apps = all_oauth_client_apps;
var oauth_client_app = function () {
  var _ref41 = _asyncToGenerator(function* (sdk, client_guid, fields, options) {
    client_guid = (0, _sdkRtl.encodeParam)(client_guid);
    return sdk.get("/oauth_client_apps/".concat(client_guid), {
      fields
    }, null, options);
  });
  return function oauth_client_app(_x127, _x128, _x129, _x130) {
    return _ref41.apply(this, arguments);
  };
}();
exports.oauth_client_app = oauth_client_app;
var register_oauth_client_app = function () {
  var _ref42 = _asyncToGenerator(function* (sdk, client_guid, body, fields, options) {
    client_guid = (0, _sdkRtl.encodeParam)(client_guid);
    return sdk.post("/oauth_client_apps/".concat(client_guid), {
      fields
    }, body, options);
  });
  return function register_oauth_client_app(_x131, _x132, _x133, _x134, _x135) {
    return _ref42.apply(this, arguments);
  };
}();
exports.register_oauth_client_app = register_oauth_client_app;
var update_oauth_client_app = function () {
  var _ref43 = _asyncToGenerator(function* (sdk, client_guid, body, fields, options) {
    client_guid = (0, _sdkRtl.encodeParam)(client_guid);
    return sdk.patch("/oauth_client_apps/".concat(client_guid), {
      fields
    }, body, options);
  });
  return function update_oauth_client_app(_x136, _x137, _x138, _x139, _x140) {
    return _ref43.apply(this, arguments);
  };
}();
exports.update_oauth_client_app = update_oauth_client_app;
var delete_oauth_client_app = function () {
  var _ref44 = _asyncToGenerator(function* (sdk, client_guid, options) {
    client_guid = (0, _sdkRtl.encodeParam)(client_guid);
    return sdk.delete("/oauth_client_apps/".concat(client_guid), null, null, options);
  });
  return function delete_oauth_client_app(_x141, _x142, _x143) {
    return _ref44.apply(this, arguments);
  };
}();
exports.delete_oauth_client_app = delete_oauth_client_app;
var invalidate_tokens = function () {
  var _ref45 = _asyncToGenerator(function* (sdk, client_guid, options) {
    client_guid = (0, _sdkRtl.encodeParam)(client_guid);
    return sdk.delete("/oauth_client_apps/".concat(client_guid, "/tokens"), null, null, options);
  });
  return function invalidate_tokens(_x144, _x145, _x146) {
    return _ref45.apply(this, arguments);
  };
}();
exports.invalidate_tokens = invalidate_tokens;
var activate_app_user = function () {
  var _ref46 = _asyncToGenerator(function* (sdk, client_guid, user_id, fields, options) {
    client_guid = (0, _sdkRtl.encodeParam)(client_guid);
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.post("/oauth_client_apps/".concat(client_guid, "/users/").concat(user_id), {
      fields
    }, null, options);
  });
  return function activate_app_user(_x147, _x148, _x149, _x150, _x151) {
    return _ref46.apply(this, arguments);
  };
}();
exports.activate_app_user = activate_app_user;
var deactivate_app_user = function () {
  var _ref47 = _asyncToGenerator(function* (sdk, client_guid, user_id, fields, options) {
    client_guid = (0, _sdkRtl.encodeParam)(client_guid);
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.delete("/oauth_client_apps/".concat(client_guid, "/users/").concat(user_id), {
      fields
    }, null, options);
  });
  return function deactivate_app_user(_x152, _x153, _x154, _x155, _x156) {
    return _ref47.apply(this, arguments);
  };
}();
exports.deactivate_app_user = deactivate_app_user;
var oidc_config = function () {
  var _ref48 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/oidc_config', null, null, options);
  });
  return function oidc_config(_x157, _x158) {
    return _ref48.apply(this, arguments);
  };
}();
exports.oidc_config = oidc_config;
var update_oidc_config = function () {
  var _ref49 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/oidc_config', null, body, options);
  });
  return function update_oidc_config(_x159, _x160, _x161) {
    return _ref49.apply(this, arguments);
  };
}();
exports.update_oidc_config = update_oidc_config;
var oidc_test_config = function () {
  var _ref50 = _asyncToGenerator(function* (sdk, test_slug, options) {
    test_slug = (0, _sdkRtl.encodeParam)(test_slug);
    return sdk.get("/oidc_test_configs/".concat(test_slug), null, null, options);
  });
  return function oidc_test_config(_x162, _x163, _x164) {
    return _ref50.apply(this, arguments);
  };
}();
exports.oidc_test_config = oidc_test_config;
var delete_oidc_test_config = function () {
  var _ref51 = _asyncToGenerator(function* (sdk, test_slug, options) {
    test_slug = (0, _sdkRtl.encodeParam)(test_slug);
    return sdk.delete("/oidc_test_configs/".concat(test_slug), null, null, options);
  });
  return function delete_oidc_test_config(_x165, _x166, _x167) {
    return _ref51.apply(this, arguments);
  };
}();
exports.delete_oidc_test_config = delete_oidc_test_config;
var create_oidc_test_config = function () {
  var _ref52 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/oidc_test_configs', null, body, options);
  });
  return function create_oidc_test_config(_x168, _x169, _x170) {
    return _ref52.apply(this, arguments);
  };
}();
exports.create_oidc_test_config = create_oidc_test_config;
var password_config = function () {
  var _ref53 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/password_config', null, null, options);
  });
  return function password_config(_x171, _x172) {
    return _ref53.apply(this, arguments);
  };
}();
exports.password_config = password_config;
var update_password_config = function () {
  var _ref54 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/password_config', null, body, options);
  });
  return function update_password_config(_x173, _x174, _x175) {
    return _ref54.apply(this, arguments);
  };
}();
exports.update_password_config = update_password_config;
var force_password_reset_at_next_login_for_all_users = function () {
  var _ref55 = _asyncToGenerator(function* (sdk, options) {
    return sdk.put('/password_config/force_password_reset_at_next_login_for_all_users', null, null, options);
  });
  return function force_password_reset_at_next_login_for_all_users(_x176, _x177) {
    return _ref55.apply(this, arguments);
  };
}();
exports.force_password_reset_at_next_login_for_all_users = force_password_reset_at_next_login_for_all_users;
var saml_config = function () {
  var _ref56 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/saml_config', null, null, options);
  });
  return function saml_config(_x178, _x179) {
    return _ref56.apply(this, arguments);
  };
}();
exports.saml_config = saml_config;
var update_saml_config = function () {
  var _ref57 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/saml_config', null, body, options);
  });
  return function update_saml_config(_x180, _x181, _x182) {
    return _ref57.apply(this, arguments);
  };
}();
exports.update_saml_config = update_saml_config;
var saml_test_config = function () {
  var _ref58 = _asyncToGenerator(function* (sdk, test_slug, options) {
    test_slug = (0, _sdkRtl.encodeParam)(test_slug);
    return sdk.get("/saml_test_configs/".concat(test_slug), null, null, options);
  });
  return function saml_test_config(_x183, _x184, _x185) {
    return _ref58.apply(this, arguments);
  };
}();
exports.saml_test_config = saml_test_config;
var delete_saml_test_config = function () {
  var _ref59 = _asyncToGenerator(function* (sdk, test_slug, options) {
    test_slug = (0, _sdkRtl.encodeParam)(test_slug);
    return sdk.delete("/saml_test_configs/".concat(test_slug), null, null, options);
  });
  return function delete_saml_test_config(_x186, _x187, _x188) {
    return _ref59.apply(this, arguments);
  };
}();
exports.delete_saml_test_config = delete_saml_test_config;
var create_saml_test_config = function () {
  var _ref60 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/saml_test_configs', null, body, options);
  });
  return function create_saml_test_config(_x189, _x190, _x191) {
    return _ref60.apply(this, arguments);
  };
}();
exports.create_saml_test_config = create_saml_test_config;
var parse_saml_idp_metadata = function () {
  var _ref61 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/parse_saml_idp_metadata', null, body, options);
  });
  return function parse_saml_idp_metadata(_x192, _x193, _x194) {
    return _ref61.apply(this, arguments);
  };
}();
exports.parse_saml_idp_metadata = parse_saml_idp_metadata;
var fetch_and_parse_saml_idp_metadata = function () {
  var _ref62 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/fetch_and_parse_saml_idp_metadata', null, body, options);
  });
  return function fetch_and_parse_saml_idp_metadata(_x195, _x196, _x197) {
    return _ref62.apply(this, arguments);
  };
}();
exports.fetch_and_parse_saml_idp_metadata = fetch_and_parse_saml_idp_metadata;
var session_config = function () {
  var _ref63 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/session_config', null, null, options);
  });
  return function session_config(_x198, _x199) {
    return _ref63.apply(this, arguments);
  };
}();
exports.session_config = session_config;
var update_session_config = function () {
  var _ref64 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/session_config', null, body, options);
  });
  return function update_session_config(_x200, _x201, _x202) {
    return _ref64.apply(this, arguments);
  };
}();
exports.update_session_config = update_session_config;
var get_support_access_allowlist_entries = function () {
  var _ref65 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/support_access/allowlist', {
      fields
    }, null, options);
  });
  return function get_support_access_allowlist_entries(_x203, _x204, _x205) {
    return _ref65.apply(this, arguments);
  };
}();
exports.get_support_access_allowlist_entries = get_support_access_allowlist_entries;
var add_support_access_allowlist_entries = function () {
  var _ref66 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/support_access/allowlist', null, body, options);
  });
  return function add_support_access_allowlist_entries(_x206, _x207, _x208) {
    return _ref66.apply(this, arguments);
  };
}();
exports.add_support_access_allowlist_entries = add_support_access_allowlist_entries;
var delete_support_access_allowlist_entry = function () {
  var _ref67 = _asyncToGenerator(function* (sdk, entry_id, options) {
    entry_id = (0, _sdkRtl.encodeParam)(entry_id);
    return sdk.delete("/support_access/allowlist/".concat(entry_id), null, null, options);
  });
  return function delete_support_access_allowlist_entry(_x209, _x210, _x211) {
    return _ref67.apply(this, arguments);
  };
}();
exports.delete_support_access_allowlist_entry = delete_support_access_allowlist_entry;
var enable_support_access = function () {
  var _ref68 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/support_access/enable', null, body, options);
  });
  return function enable_support_access(_x212, _x213, _x214) {
    return _ref68.apply(this, arguments);
  };
}();
exports.enable_support_access = enable_support_access;
var disable_support_access = function () {
  var _ref69 = _asyncToGenerator(function* (sdk, options) {
    return sdk.put('/support_access/disable', null, null, options);
  });
  return function disable_support_access(_x215, _x216) {
    return _ref69.apply(this, arguments);
  };
}();
exports.disable_support_access = disable_support_access;
var support_access_status = function () {
  var _ref70 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/support_access/status', null, null, options);
  });
  return function support_access_status(_x217, _x218) {
    return _ref70.apply(this, arguments);
  };
}();
exports.support_access_status = support_access_status;
var all_user_login_lockouts = function () {
  var _ref71 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/user_login_lockouts', {
      fields
    }, null, options);
  });
  return function all_user_login_lockouts(_x219, _x220, _x221) {
    return _ref71.apply(this, arguments);
  };
}();
exports.all_user_login_lockouts = all_user_login_lockouts;
var search_user_login_lockouts = function () {
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
exports.search_user_login_lockouts = search_user_login_lockouts;
var delete_user_login_lockout = function () {
  var _ref73 = _asyncToGenerator(function* (sdk, key, options) {
    key = (0, _sdkRtl.encodeParam)(key);
    return sdk.delete("/user_login_lockout/".concat(key), null, null, options);
  });
  return function delete_user_login_lockout(_x225, _x226, _x227) {
    return _ref73.apply(this, arguments);
  };
}();
exports.delete_user_login_lockout = delete_user_login_lockout;
var all_boards = function () {
  var _ref74 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/boards', {
      fields
    }, null, options);
  });
  return function all_boards(_x228, _x229, _x230) {
    return _ref74.apply(this, arguments);
  };
}();
exports.all_boards = all_boards;
var create_board = function () {
  var _ref75 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/boards', {
      fields
    }, body, options);
  });
  return function create_board(_x231, _x232, _x233, _x234) {
    return _ref75.apply(this, arguments);
  };
}();
exports.create_board = create_board;
var search_boards = function () {
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
exports.search_boards = search_boards;
var board = function () {
  var _ref77 = _asyncToGenerator(function* (sdk, board_id, fields, options) {
    board_id = (0, _sdkRtl.encodeParam)(board_id);
    return sdk.get("/boards/".concat(board_id), {
      fields
    }, null, options);
  });
  return function board(_x238, _x239, _x240, _x241) {
    return _ref77.apply(this, arguments);
  };
}();
exports.board = board;
var update_board = function () {
  var _ref78 = _asyncToGenerator(function* (sdk, board_id, body, fields, options) {
    board_id = (0, _sdkRtl.encodeParam)(board_id);
    return sdk.patch("/boards/".concat(board_id), {
      fields
    }, body, options);
  });
  return function update_board(_x242, _x243, _x244, _x245, _x246) {
    return _ref78.apply(this, arguments);
  };
}();
exports.update_board = update_board;
var delete_board = function () {
  var _ref79 = _asyncToGenerator(function* (sdk, board_id, options) {
    board_id = (0, _sdkRtl.encodeParam)(board_id);
    return sdk.delete("/boards/".concat(board_id), null, null, options);
  });
  return function delete_board(_x247, _x248, _x249) {
    return _ref79.apply(this, arguments);
  };
}();
exports.delete_board = delete_board;
var all_board_items = function () {
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
exports.all_board_items = all_board_items;
var create_board_item = function () {
  var _ref81 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/board_items', {
      fields
    }, body, options);
  });
  return function create_board_item(_x253, _x254, _x255, _x256) {
    return _ref81.apply(this, arguments);
  };
}();
exports.create_board_item = create_board_item;
var board_item = function () {
  var _ref82 = _asyncToGenerator(function* (sdk, board_item_id, fields, options) {
    board_item_id = (0, _sdkRtl.encodeParam)(board_item_id);
    return sdk.get("/board_items/".concat(board_item_id), {
      fields
    }, null, options);
  });
  return function board_item(_x257, _x258, _x259, _x260) {
    return _ref82.apply(this, arguments);
  };
}();
exports.board_item = board_item;
var update_board_item = function () {
  var _ref83 = _asyncToGenerator(function* (sdk, board_item_id, body, fields, options) {
    board_item_id = (0, _sdkRtl.encodeParam)(board_item_id);
    return sdk.patch("/board_items/".concat(board_item_id), {
      fields
    }, body, options);
  });
  return function update_board_item(_x261, _x262, _x263, _x264, _x265) {
    return _ref83.apply(this, arguments);
  };
}();
exports.update_board_item = update_board_item;
var delete_board_item = function () {
  var _ref84 = _asyncToGenerator(function* (sdk, board_item_id, options) {
    board_item_id = (0, _sdkRtl.encodeParam)(board_item_id);
    return sdk.delete("/board_items/".concat(board_item_id), null, null, options);
  });
  return function delete_board_item(_x266, _x267, _x268) {
    return _ref84.apply(this, arguments);
  };
}();
exports.delete_board_item = delete_board_item;
var all_board_sections = function () {
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
exports.all_board_sections = all_board_sections;
var create_board_section = function () {
  var _ref86 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/board_sections', {
      fields
    }, body, options);
  });
  return function create_board_section(_x272, _x273, _x274, _x275) {
    return _ref86.apply(this, arguments);
  };
}();
exports.create_board_section = create_board_section;
var board_section = function () {
  var _ref87 = _asyncToGenerator(function* (sdk, board_section_id, fields, options) {
    board_section_id = (0, _sdkRtl.encodeParam)(board_section_id);
    return sdk.get("/board_sections/".concat(board_section_id), {
      fields
    }, null, options);
  });
  return function board_section(_x276, _x277, _x278, _x279) {
    return _ref87.apply(this, arguments);
  };
}();
exports.board_section = board_section;
var update_board_section = function () {
  var _ref88 = _asyncToGenerator(function* (sdk, board_section_id, body, fields, options) {
    board_section_id = (0, _sdkRtl.encodeParam)(board_section_id);
    return sdk.patch("/board_sections/".concat(board_section_id), {
      fields
    }, body, options);
  });
  return function update_board_section(_x280, _x281, _x282, _x283, _x284) {
    return _ref88.apply(this, arguments);
  };
}();
exports.update_board_section = update_board_section;
var delete_board_section = function () {
  var _ref89 = _asyncToGenerator(function* (sdk, board_section_id, options) {
    board_section_id = (0, _sdkRtl.encodeParam)(board_section_id);
    return sdk.delete("/board_sections/".concat(board_section_id), null, null, options);
  });
  return function delete_board_section(_x285, _x286, _x287) {
    return _ref89.apply(this, arguments);
  };
}();
exports.delete_board_section = delete_board_section;
var all_color_collections = function () {
  var _ref90 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/color_collections', {
      fields
    }, null, options);
  });
  return function all_color_collections(_x288, _x289, _x290) {
    return _ref90.apply(this, arguments);
  };
}();
exports.all_color_collections = all_color_collections;
var create_color_collection = function () {
  var _ref91 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/color_collections', null, body, options);
  });
  return function create_color_collection(_x291, _x292, _x293) {
    return _ref91.apply(this, arguments);
  };
}();
exports.create_color_collection = create_color_collection;
var color_collections_custom = function () {
  var _ref92 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/color_collections/custom', {
      fields
    }, null, options);
  });
  return function color_collections_custom(_x294, _x295, _x296) {
    return _ref92.apply(this, arguments);
  };
}();
exports.color_collections_custom = color_collections_custom;
var color_collections_standard = function () {
  var _ref93 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/color_collections/standard', {
      fields
    }, null, options);
  });
  return function color_collections_standard(_x297, _x298, _x299) {
    return _ref93.apply(this, arguments);
  };
}();
exports.color_collections_standard = color_collections_standard;
var default_color_collection = function () {
  var _ref94 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/color_collections/default', null, null, options);
  });
  return function default_color_collection(_x300, _x301) {
    return _ref94.apply(this, arguments);
  };
}();
exports.default_color_collection = default_color_collection;
var set_default_color_collection = function () {
  var _ref95 = _asyncToGenerator(function* (sdk, collection_id, options) {
    return sdk.put('/color_collections/default', {
      collection_id
    }, null, options);
  });
  return function set_default_color_collection(_x302, _x303, _x304) {
    return _ref95.apply(this, arguments);
  };
}();
exports.set_default_color_collection = set_default_color_collection;
var color_collection = function () {
  var _ref96 = _asyncToGenerator(function* (sdk, collection_id, fields, options) {
    collection_id = (0, _sdkRtl.encodeParam)(collection_id);
    return sdk.get("/color_collections/".concat(collection_id), {
      fields
    }, null, options);
  });
  return function color_collection(_x305, _x306, _x307, _x308) {
    return _ref96.apply(this, arguments);
  };
}();
exports.color_collection = color_collection;
var update_color_collection = function () {
  var _ref97 = _asyncToGenerator(function* (sdk, collection_id, body, options) {
    collection_id = (0, _sdkRtl.encodeParam)(collection_id);
    return sdk.patch("/color_collections/".concat(collection_id), null, body, options);
  });
  return function update_color_collection(_x309, _x310, _x311, _x312) {
    return _ref97.apply(this, arguments);
  };
}();
exports.update_color_collection = update_color_collection;
var delete_color_collection = function () {
  var _ref98 = _asyncToGenerator(function* (sdk, collection_id, options) {
    collection_id = (0, _sdkRtl.encodeParam)(collection_id);
    return sdk.delete("/color_collections/".concat(collection_id), null, null, options);
  });
  return function delete_color_collection(_x313, _x314, _x315) {
    return _ref98.apply(this, arguments);
  };
}();
exports.delete_color_collection = delete_color_collection;
var cloud_storage_configuration = function () {
  var _ref99 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/cloud_storage', null, null, options);
  });
  return function cloud_storage_configuration(_x316, _x317) {
    return _ref99.apply(this, arguments);
  };
}();
exports.cloud_storage_configuration = cloud_storage_configuration;
var update_cloud_storage_configuration = function () {
  var _ref100 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/cloud_storage', null, body, options);
  });
  return function update_cloud_storage_configuration(_x318, _x319, _x320) {
    return _ref100.apply(this, arguments);
  };
}();
exports.update_cloud_storage_configuration = update_cloud_storage_configuration;
var custom_welcome_email = function () {
  var _ref101 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/custom_welcome_email', null, null, options);
  });
  return function custom_welcome_email(_x321, _x322) {
    return _ref101.apply(this, arguments);
  };
}();
exports.custom_welcome_email = custom_welcome_email;
var update_custom_welcome_email = function () {
  var _ref102 = _asyncToGenerator(function* (sdk, body, send_test_welcome_email, options) {
    return sdk.patch('/custom_welcome_email', {
      send_test_welcome_email
    }, body, options);
  });
  return function update_custom_welcome_email(_x323, _x324, _x325, _x326) {
    return _ref102.apply(this, arguments);
  };
}();
exports.update_custom_welcome_email = update_custom_welcome_email;
var update_custom_welcome_email_test = function () {
  var _ref103 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/custom_welcome_email_test', null, body, options);
  });
  return function update_custom_welcome_email_test(_x327, _x328, _x329) {
    return _ref103.apply(this, arguments);
  };
}();
exports.update_custom_welcome_email_test = update_custom_welcome_email_test;
var digest_emails_enabled = function () {
  var _ref104 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/digest_emails_enabled', null, null, options);
  });
  return function digest_emails_enabled(_x330, _x331) {
    return _ref104.apply(this, arguments);
  };
}();
exports.digest_emails_enabled = digest_emails_enabled;
var update_digest_emails_enabled = function () {
  var _ref105 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/digest_emails_enabled', null, body, options);
  });
  return function update_digest_emails_enabled(_x332, _x333, _x334) {
    return _ref105.apply(this, arguments);
  };
}();
exports.update_digest_emails_enabled = update_digest_emails_enabled;
var create_digest_email_send = function () {
  var _ref106 = _asyncToGenerator(function* (sdk, options) {
    return sdk.post('/digest_email_send', null, null, options);
  });
  return function create_digest_email_send(_x335, _x336) {
    return _ref106.apply(this, arguments);
  };
}();
exports.create_digest_email_send = create_digest_email_send;
var public_egress_ip_addresses = function () {
  var _ref107 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/public_egress_ip_addresses', null, null, options);
  });
  return function public_egress_ip_addresses(_x337, _x338) {
    return _ref107.apply(this, arguments);
  };
}();
exports.public_egress_ip_addresses = public_egress_ip_addresses;
var internal_help_resources_content = function () {
  var _ref108 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/internal_help_resources_content', null, null, options);
  });
  return function internal_help_resources_content(_x339, _x340) {
    return _ref108.apply(this, arguments);
  };
}();
exports.internal_help_resources_content = internal_help_resources_content;
var update_internal_help_resources_content = function () {
  var _ref109 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/internal_help_resources_content', null, body, options);
  });
  return function update_internal_help_resources_content(_x341, _x342, _x343) {
    return _ref109.apply(this, arguments);
  };
}();
exports.update_internal_help_resources_content = update_internal_help_resources_content;
var internal_help_resources = function () {
  var _ref110 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/internal_help_resources_enabled', null, null, options);
  });
  return function internal_help_resources(_x344, _x345) {
    return _ref110.apply(this, arguments);
  };
}();
exports.internal_help_resources = internal_help_resources;
var update_internal_help_resources = function () {
  var _ref111 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/internal_help_resources', null, body, options);
  });
  return function update_internal_help_resources(_x346, _x347, _x348) {
    return _ref111.apply(this, arguments);
  };
}();
exports.update_internal_help_resources = update_internal_help_resources;
var all_legacy_features = function () {
  var _ref112 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/legacy_features', null, null, options);
  });
  return function all_legacy_features(_x349, _x350) {
    return _ref112.apply(this, arguments);
  };
}();
exports.all_legacy_features = all_legacy_features;
var legacy_feature = function () {
  var _ref113 = _asyncToGenerator(function* (sdk, legacy_feature_id, options) {
    legacy_feature_id = (0, _sdkRtl.encodeParam)(legacy_feature_id);
    return sdk.get("/legacy_features/".concat(legacy_feature_id), null, null, options);
  });
  return function legacy_feature(_x351, _x352, _x353) {
    return _ref113.apply(this, arguments);
  };
}();
exports.legacy_feature = legacy_feature;
var update_legacy_feature = function () {
  var _ref114 = _asyncToGenerator(function* (sdk, legacy_feature_id, body, options) {
    legacy_feature_id = (0, _sdkRtl.encodeParam)(legacy_feature_id);
    return sdk.patch("/legacy_features/".concat(legacy_feature_id), null, body, options);
  });
  return function update_legacy_feature(_x354, _x355, _x356, _x357) {
    return _ref114.apply(this, arguments);
  };
}();
exports.update_legacy_feature = update_legacy_feature;
var all_locales = function () {
  var _ref115 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/locales', null, null, options);
  });
  return function all_locales(_x358, _x359) {
    return _ref115.apply(this, arguments);
  };
}();
exports.all_locales = all_locales;
var mobile_settings = function () {
  var _ref116 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/mobile/settings', null, null, options);
  });
  return function mobile_settings(_x360, _x361) {
    return _ref116.apply(this, arguments);
  };
}();
exports.mobile_settings = mobile_settings;
var get_setting = function () {
  var _ref117 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/setting', {
      fields
    }, null, options);
  });
  return function get_setting(_x362, _x363, _x364) {
    return _ref117.apply(this, arguments);
  };
}();
exports.get_setting = get_setting;
var set_setting = function () {
  var _ref118 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.patch('/setting', {
      fields
    }, body, options);
  });
  return function set_setting(_x365, _x366, _x367, _x368) {
    return _ref118.apply(this, arguments);
  };
}();
exports.set_setting = set_setting;
var set_smtp_settings = function () {
  var _ref119 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/smtp_settings', null, body, options);
  });
  return function set_smtp_settings(_x369, _x370, _x371) {
    return _ref119.apply(this, arguments);
  };
}();
exports.set_smtp_settings = set_smtp_settings;
var smtp_status = function () {
  var _ref120 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/smtp_status', {
      fields
    }, null, options);
  });
  return function smtp_status(_x372, _x373, _x374) {
    return _ref120.apply(this, arguments);
  };
}();
exports.smtp_status = smtp_status;
var all_timezones = function () {
  var _ref121 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/timezones', null, null, options);
  });
  return function all_timezones(_x375, _x376) {
    return _ref121.apply(this, arguments);
  };
}();
exports.all_timezones = all_timezones;
var versions = function () {
  var _ref122 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/versions', {
      fields
    }, null, options);
  });
  return function versions(_x377, _x378, _x379) {
    return _ref122.apply(this, arguments);
  };
}();
exports.versions = versions;
var api_spec = function () {
  var _ref123 = _asyncToGenerator(function* (sdk, api_version, specification, options) {
    api_version = (0, _sdkRtl.encodeParam)(api_version);
    specification = (0, _sdkRtl.encodeParam)(specification);
    return sdk.get("/api_spec/".concat(api_version, "/").concat(specification), null, null, options);
  });
  return function api_spec(_x380, _x381, _x382, _x383) {
    return _ref123.apply(this, arguments);
  };
}();
exports.api_spec = api_spec;
var whitelabel_configuration = function () {
  var _ref124 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/whitelabel_configuration', {
      fields
    }, null, options);
  });
  return function whitelabel_configuration(_x384, _x385, _x386) {
    return _ref124.apply(this, arguments);
  };
}();
exports.whitelabel_configuration = whitelabel_configuration;
var update_whitelabel_configuration = function () {
  var _ref125 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.put('/whitelabel_configuration', null, body, options);
  });
  return function update_whitelabel_configuration(_x387, _x388, _x389) {
    return _ref125.apply(this, arguments);
  };
}();
exports.update_whitelabel_configuration = update_whitelabel_configuration;
var all_connections = function () {
  var _ref126 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/connections', {
      fields
    }, null, options);
  });
  return function all_connections(_x390, _x391, _x392) {
    return _ref126.apply(this, arguments);
  };
}();
exports.all_connections = all_connections;
var create_connection = function () {
  var _ref127 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/connections', null, body, options);
  });
  return function create_connection(_x393, _x394, _x395) {
    return _ref127.apply(this, arguments);
  };
}();
exports.create_connection = create_connection;
var connection = function () {
  var _ref128 = _asyncToGenerator(function* (sdk, connection_name, fields, options) {
    connection_name = (0, _sdkRtl.encodeParam)(connection_name);
    return sdk.get("/connections/".concat(connection_name), {
      fields
    }, null, options);
  });
  return function connection(_x396, _x397, _x398, _x399) {
    return _ref128.apply(this, arguments);
  };
}();
exports.connection = connection;
var update_connection = function () {
  var _ref129 = _asyncToGenerator(function* (sdk, connection_name, body, options) {
    connection_name = (0, _sdkRtl.encodeParam)(connection_name);
    return sdk.patch("/connections/".concat(connection_name), null, body, options);
  });
  return function update_connection(_x400, _x401, _x402, _x403) {
    return _ref129.apply(this, arguments);
  };
}();
exports.update_connection = update_connection;
var delete_connection = function () {
  var _ref130 = _asyncToGenerator(function* (sdk, connection_name, options) {
    connection_name = (0, _sdkRtl.encodeParam)(connection_name);
    return sdk.delete("/connections/".concat(connection_name), null, null, options);
  });
  return function delete_connection(_x404, _x405, _x406) {
    return _ref130.apply(this, arguments);
  };
}();
exports.delete_connection = delete_connection;
var delete_connection_override = function () {
  var _ref131 = _asyncToGenerator(function* (sdk, connection_name, override_context, options) {
    connection_name = (0, _sdkRtl.encodeParam)(connection_name);
    override_context = (0, _sdkRtl.encodeParam)(override_context);
    return sdk.delete("/connections/".concat(connection_name, "/connection_override/").concat(override_context), null, null, options);
  });
  return function delete_connection_override(_x407, _x408, _x409, _x410) {
    return _ref131.apply(this, arguments);
  };
}();
exports.delete_connection_override = delete_connection_override;
var test_connection = function () {
  var _ref132 = _asyncToGenerator(function* (sdk, connection_name, tests, options) {
    connection_name = (0, _sdkRtl.encodeParam)(connection_name);
    return sdk.put("/connections/".concat(connection_name, "/test"), {
      tests
    }, null, options);
  });
  return function test_connection(_x411, _x412, _x413, _x414) {
    return _ref132.apply(this, arguments);
  };
}();
exports.test_connection = test_connection;
var test_connection_config = function () {
  var _ref133 = _asyncToGenerator(function* (sdk, body, tests, options) {
    return sdk.put('/connections/test', {
      tests
    }, body, options);
  });
  return function test_connection_config(_x415, _x416, _x417, _x418) {
    return _ref133.apply(this, arguments);
  };
}();
exports.test_connection_config = test_connection_config;
var all_dialect_infos = function () {
  var _ref134 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/dialect_info', {
      fields
    }, null, options);
  });
  return function all_dialect_infos(_x419, _x420, _x421) {
    return _ref134.apply(this, arguments);
  };
}();
exports.all_dialect_infos = all_dialect_infos;
var all_external_oauth_applications = function () {
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
exports.all_external_oauth_applications = all_external_oauth_applications;
var create_external_oauth_application = function () {
  var _ref136 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/external_oauth_applications', null, body, options);
  });
  return function create_external_oauth_application(_x425, _x426, _x427) {
    return _ref136.apply(this, arguments);
  };
}();
exports.create_external_oauth_application = create_external_oauth_application;
var create_oauth_application_user_state = function () {
  var _ref137 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/external_oauth_applications/user_state', null, body, options);
  });
  return function create_oauth_application_user_state(_x428, _x429, _x430) {
    return _ref137.apply(this, arguments);
  };
}();
exports.create_oauth_application_user_state = create_oauth_application_user_state;
var all_ssh_servers = function () {
  var _ref138 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/ssh_servers', {
      fields
    }, null, options);
  });
  return function all_ssh_servers(_x431, _x432, _x433) {
    return _ref138.apply(this, arguments);
  };
}();
exports.all_ssh_servers = all_ssh_servers;
var create_ssh_server = function () {
  var _ref139 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/ssh_servers', null, body, options);
  });
  return function create_ssh_server(_x434, _x435, _x436) {
    return _ref139.apply(this, arguments);
  };
}();
exports.create_ssh_server = create_ssh_server;
var ssh_server = function () {
  var _ref140 = _asyncToGenerator(function* (sdk, ssh_server_id, options) {
    ssh_server_id = (0, _sdkRtl.encodeParam)(ssh_server_id);
    return sdk.get("/ssh_server/".concat(ssh_server_id), null, null, options);
  });
  return function ssh_server(_x437, _x438, _x439) {
    return _ref140.apply(this, arguments);
  };
}();
exports.ssh_server = ssh_server;
var update_ssh_server = function () {
  var _ref141 = _asyncToGenerator(function* (sdk, ssh_server_id, body, options) {
    ssh_server_id = (0, _sdkRtl.encodeParam)(ssh_server_id);
    return sdk.patch("/ssh_server/".concat(ssh_server_id), null, body, options);
  });
  return function update_ssh_server(_x440, _x441, _x442, _x443) {
    return _ref141.apply(this, arguments);
  };
}();
exports.update_ssh_server = update_ssh_server;
var delete_ssh_server = function () {
  var _ref142 = _asyncToGenerator(function* (sdk, ssh_server_id, options) {
    ssh_server_id = (0, _sdkRtl.encodeParam)(ssh_server_id);
    return sdk.delete("/ssh_server/".concat(ssh_server_id), null, null, options);
  });
  return function delete_ssh_server(_x444, _x445, _x446) {
    return _ref142.apply(this, arguments);
  };
}();
exports.delete_ssh_server = delete_ssh_server;
var test_ssh_server = function () {
  var _ref143 = _asyncToGenerator(function* (sdk, ssh_server_id, options) {
    ssh_server_id = (0, _sdkRtl.encodeParam)(ssh_server_id);
    return sdk.get("/ssh_server/".concat(ssh_server_id, "/test"), null, null, options);
  });
  return function test_ssh_server(_x447, _x448, _x449) {
    return _ref143.apply(this, arguments);
  };
}();
exports.test_ssh_server = test_ssh_server;
var all_ssh_tunnels = function () {
  var _ref144 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/ssh_tunnels', {
      fields
    }, null, options);
  });
  return function all_ssh_tunnels(_x450, _x451, _x452) {
    return _ref144.apply(this, arguments);
  };
}();
exports.all_ssh_tunnels = all_ssh_tunnels;
var create_ssh_tunnel = function () {
  var _ref145 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/ssh_tunnels', null, body, options);
  });
  return function create_ssh_tunnel(_x453, _x454, _x455) {
    return _ref145.apply(this, arguments);
  };
}();
exports.create_ssh_tunnel = create_ssh_tunnel;
var ssh_tunnel = function () {
  var _ref146 = _asyncToGenerator(function* (sdk, ssh_tunnel_id, options) {
    ssh_tunnel_id = (0, _sdkRtl.encodeParam)(ssh_tunnel_id);
    return sdk.get("/ssh_tunnel/".concat(ssh_tunnel_id), null, null, options);
  });
  return function ssh_tunnel(_x456, _x457, _x458) {
    return _ref146.apply(this, arguments);
  };
}();
exports.ssh_tunnel = ssh_tunnel;
var update_ssh_tunnel = function () {
  var _ref147 = _asyncToGenerator(function* (sdk, ssh_tunnel_id, body, options) {
    ssh_tunnel_id = (0, _sdkRtl.encodeParam)(ssh_tunnel_id);
    return sdk.patch("/ssh_tunnel/".concat(ssh_tunnel_id), null, body, options);
  });
  return function update_ssh_tunnel(_x459, _x460, _x461, _x462) {
    return _ref147.apply(this, arguments);
  };
}();
exports.update_ssh_tunnel = update_ssh_tunnel;
var delete_ssh_tunnel = function () {
  var _ref148 = _asyncToGenerator(function* (sdk, ssh_tunnel_id, options) {
    ssh_tunnel_id = (0, _sdkRtl.encodeParam)(ssh_tunnel_id);
    return sdk.delete("/ssh_tunnel/".concat(ssh_tunnel_id), null, null, options);
  });
  return function delete_ssh_tunnel(_x463, _x464, _x465) {
    return _ref148.apply(this, arguments);
  };
}();
exports.delete_ssh_tunnel = delete_ssh_tunnel;
var test_ssh_tunnel = function () {
  var _ref149 = _asyncToGenerator(function* (sdk, ssh_tunnel_id, options) {
    ssh_tunnel_id = (0, _sdkRtl.encodeParam)(ssh_tunnel_id);
    return sdk.get("/ssh_tunnel/".concat(ssh_tunnel_id, "/test"), null, null, options);
  });
  return function test_ssh_tunnel(_x466, _x467, _x468) {
    return _ref149.apply(this, arguments);
  };
}();
exports.test_ssh_tunnel = test_ssh_tunnel;
var ssh_public_key = function () {
  var _ref150 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/ssh_public_key', null, null, options);
  });
  return function ssh_public_key(_x469, _x470) {
    return _ref150.apply(this, arguments);
  };
}();
exports.ssh_public_key = ssh_public_key;
var search_content_favorites = function () {
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
exports.search_content_favorites = search_content_favorites;
var content_favorite = function () {
  var _ref152 = _asyncToGenerator(function* (sdk, content_favorite_id, fields, options) {
    content_favorite_id = (0, _sdkRtl.encodeParam)(content_favorite_id);
    return sdk.get("/content_favorite/".concat(content_favorite_id), {
      fields
    }, null, options);
  });
  return function content_favorite(_x474, _x475, _x476, _x477) {
    return _ref152.apply(this, arguments);
  };
}();
exports.content_favorite = content_favorite;
var delete_content_favorite = function () {
  var _ref153 = _asyncToGenerator(function* (sdk, content_favorite_id, options) {
    content_favorite_id = (0, _sdkRtl.encodeParam)(content_favorite_id);
    return sdk.delete("/content_favorite/".concat(content_favorite_id), null, null, options);
  });
  return function delete_content_favorite(_x478, _x479, _x480) {
    return _ref153.apply(this, arguments);
  };
}();
exports.delete_content_favorite = delete_content_favorite;
var create_content_favorite = function () {
  var _ref154 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/content_favorite', null, body, options);
  });
  return function create_content_favorite(_x481, _x482, _x483) {
    return _ref154.apply(this, arguments);
  };
}();
exports.create_content_favorite = create_content_favorite;
var all_content_metadatas = function () {
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
exports.all_content_metadatas = all_content_metadatas;
var content_metadata = function () {
  var _ref156 = _asyncToGenerator(function* (sdk, content_metadata_id, fields, options) {
    content_metadata_id = (0, _sdkRtl.encodeParam)(content_metadata_id);
    return sdk.get("/content_metadata/".concat(content_metadata_id), {
      fields
    }, null, options);
  });
  return function content_metadata(_x488, _x489, _x490, _x491) {
    return _ref156.apply(this, arguments);
  };
}();
exports.content_metadata = content_metadata;
var update_content_metadata = function () {
  var _ref157 = _asyncToGenerator(function* (sdk, content_metadata_id, body, options) {
    content_metadata_id = (0, _sdkRtl.encodeParam)(content_metadata_id);
    return sdk.patch("/content_metadata/".concat(content_metadata_id), null, body, options);
  });
  return function update_content_metadata(_x492, _x493, _x494, _x495) {
    return _ref157.apply(this, arguments);
  };
}();
exports.update_content_metadata = update_content_metadata;
var all_content_metadata_accesses = function () {
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
exports.all_content_metadata_accesses = all_content_metadata_accesses;
var create_content_metadata_access = function () {
  var _ref159 = _asyncToGenerator(function* (sdk, body, send_boards_notification_email, options) {
    return sdk.post('/content_metadata_access', {
      send_boards_notification_email
    }, body, options);
  });
  return function create_content_metadata_access(_x500, _x501, _x502, _x503) {
    return _ref159.apply(this, arguments);
  };
}();
exports.create_content_metadata_access = create_content_metadata_access;
var update_content_metadata_access = function () {
  var _ref160 = _asyncToGenerator(function* (sdk, content_metadata_access_id, body, options) {
    content_metadata_access_id = (0, _sdkRtl.encodeParam)(content_metadata_access_id);
    return sdk.put("/content_metadata_access/".concat(content_metadata_access_id), null, body, options);
  });
  return function update_content_metadata_access(_x504, _x505, _x506, _x507) {
    return _ref160.apply(this, arguments);
  };
}();
exports.update_content_metadata_access = update_content_metadata_access;
var delete_content_metadata_access = function () {
  var _ref161 = _asyncToGenerator(function* (sdk, content_metadata_access_id, options) {
    content_metadata_access_id = (0, _sdkRtl.encodeParam)(content_metadata_access_id);
    return sdk.delete("/content_metadata_access/".concat(content_metadata_access_id), null, null, options);
  });
  return function delete_content_metadata_access(_x508, _x509, _x510) {
    return _ref161.apply(this, arguments);
  };
}();
exports.delete_content_metadata_access = delete_content_metadata_access;
var search_content = function () {
  var _ref162 = _asyncToGenerator(function* (sdk, request, options) {
    request.terms = (0, _sdkRtl.encodeParam)(request.terms);
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
exports.search_content = search_content;
var content_thumbnail = function () {
  var _ref163 = _asyncToGenerator(function* (sdk, request, options) {
    request.type = (0, _sdkRtl.encodeParam)(request.type);
    request.resource_id = (0, _sdkRtl.encodeParam)(request.resource_id);
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
exports.content_thumbnail = content_thumbnail;
var content_validation = function () {
  var _ref164 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/content_validation', {
      fields
    }, null, options);
  });
  return function content_validation(_x517, _x518, _x519) {
    return _ref164.apply(this, arguments);
  };
}();
exports.content_validation = content_validation;
var search_content_views = function () {
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
exports.search_content_views = search_content_views;
var vector_thumbnail = function () {
  var _ref166 = _asyncToGenerator(function* (sdk, type, resource_id, reload, options) {
    type = (0, _sdkRtl.encodeParam)(type);
    resource_id = (0, _sdkRtl.encodeParam)(resource_id);
    return sdk.get("/vector_thumbnail/".concat(type, "/").concat(resource_id), {
      reload
    }, null, options);
  });
  return function vector_thumbnail(_x523, _x524, _x525, _x526, _x527) {
    return _ref166.apply(this, arguments);
  };
}();
exports.vector_thumbnail = vector_thumbnail;
var all_dashboards = function () {
  var _ref167 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/dashboards', {
      fields
    }, null, options);
  });
  return function all_dashboards(_x528, _x529, _x530) {
    return _ref167.apply(this, arguments);
  };
}();
exports.all_dashboards = all_dashboards;
var create_dashboard = function () {
  var _ref168 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/dashboards', null, body, options);
  });
  return function create_dashboard(_x531, _x532, _x533) {
    return _ref168.apply(this, arguments);
  };
}();
exports.create_dashboard = create_dashboard;
var search_dashboards = function () {
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
exports.search_dashboards = search_dashboards;
var import_lookml_dashboard = function () {
  var _ref170 = _asyncToGenerator(function* (sdk, lookml_dashboard_id, space_id, body, raw_locale, options) {
    lookml_dashboard_id = (0, _sdkRtl.encodeParam)(lookml_dashboard_id);
    space_id = (0, _sdkRtl.encodeParam)(space_id);
    return sdk.post("/dashboards/".concat(lookml_dashboard_id, "/import/").concat(space_id), {
      raw_locale
    }, body, options);
  });
  return function import_lookml_dashboard(_x537, _x538, _x539, _x540, _x541, _x542) {
    return _ref170.apply(this, arguments);
  };
}();
exports.import_lookml_dashboard = import_lookml_dashboard;
var sync_lookml_dashboard = function () {
  var _ref171 = _asyncToGenerator(function* (sdk, lookml_dashboard_id, body, raw_locale, options) {
    lookml_dashboard_id = (0, _sdkRtl.encodeParam)(lookml_dashboard_id);
    return sdk.patch("/dashboards/".concat(lookml_dashboard_id, "/sync"), {
      raw_locale
    }, body, options);
  });
  return function sync_lookml_dashboard(_x543, _x544, _x545, _x546, _x547) {
    return _ref171.apply(this, arguments);
  };
}();
exports.sync_lookml_dashboard = sync_lookml_dashboard;
var dashboard = function () {
  var _ref172 = _asyncToGenerator(function* (sdk, dashboard_id, fields, options) {
    dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
    return sdk.get("/dashboards/".concat(dashboard_id), {
      fields
    }, null, options);
  });
  return function dashboard(_x548, _x549, _x550, _x551) {
    return _ref172.apply(this, arguments);
  };
}();
exports.dashboard = dashboard;
var update_dashboard = function () {
  var _ref173 = _asyncToGenerator(function* (sdk, dashboard_id, body, options) {
    dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
    return sdk.patch("/dashboards/".concat(dashboard_id), null, body, options);
  });
  return function update_dashboard(_x552, _x553, _x554, _x555) {
    return _ref173.apply(this, arguments);
  };
}();
exports.update_dashboard = update_dashboard;
var delete_dashboard = function () {
  var _ref174 = _asyncToGenerator(function* (sdk, dashboard_id, options) {
    dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
    return sdk.delete("/dashboards/".concat(dashboard_id), null, null, options);
  });
  return function delete_dashboard(_x556, _x557, _x558) {
    return _ref174.apply(this, arguments);
  };
}();
exports.delete_dashboard = delete_dashboard;
var dashboard_aggregate_table_lookml = function () {
  var _ref175 = _asyncToGenerator(function* (sdk, dashboard_id, options) {
    dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
    return sdk.get("/dashboards/aggregate_table_lookml/".concat(dashboard_id), null, null, options);
  });
  return function dashboard_aggregate_table_lookml(_x559, _x560, _x561) {
    return _ref175.apply(this, arguments);
  };
}();
exports.dashboard_aggregate_table_lookml = dashboard_aggregate_table_lookml;
var dashboard_lookml = function () {
  var _ref176 = _asyncToGenerator(function* (sdk, dashboard_id, options) {
    dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
    return sdk.get("/dashboards/lookml/".concat(dashboard_id), null, null, options);
  });
  return function dashboard_lookml(_x562, _x563, _x564) {
    return _ref176.apply(this, arguments);
  };
}();
exports.dashboard_lookml = dashboard_lookml;
var move_dashboard = function () {
  var _ref177 = _asyncToGenerator(function* (sdk, dashboard_id, folder_id, options) {
    dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
    return sdk.patch("/dashboards/".concat(dashboard_id, "/move"), {
      folder_id
    }, null, options);
  });
  return function move_dashboard(_x565, _x566, _x567, _x568) {
    return _ref177.apply(this, arguments);
  };
}();
exports.move_dashboard = move_dashboard;
var import_dashboard_from_lookml = function () {
  var _ref178 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/dashboards/lookml', null, body, options);
  });
  return function import_dashboard_from_lookml(_x569, _x570, _x571) {
    return _ref178.apply(this, arguments);
  };
}();
exports.import_dashboard_from_lookml = import_dashboard_from_lookml;
var create_dashboard_from_lookml = function () {
  var _ref179 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/dashboards/from_lookml', null, body, options);
  });
  return function create_dashboard_from_lookml(_x572, _x573, _x574) {
    return _ref179.apply(this, arguments);
  };
}();
exports.create_dashboard_from_lookml = create_dashboard_from_lookml;
var copy_dashboard = function () {
  var _ref180 = _asyncToGenerator(function* (sdk, dashboard_id, folder_id, options) {
    dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
    return sdk.post("/dashboards/".concat(dashboard_id, "/copy"), {
      folder_id
    }, null, options);
  });
  return function copy_dashboard(_x575, _x576, _x577, _x578) {
    return _ref180.apply(this, arguments);
  };
}();
exports.copy_dashboard = copy_dashboard;
var search_dashboard_elements = function () {
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
exports.search_dashboard_elements = search_dashboard_elements;
var dashboard_element = function () {
  var _ref182 = _asyncToGenerator(function* (sdk, dashboard_element_id, fields, options) {
    dashboard_element_id = (0, _sdkRtl.encodeParam)(dashboard_element_id);
    return sdk.get("/dashboard_elements/".concat(dashboard_element_id), {
      fields
    }, null, options);
  });
  return function dashboard_element(_x582, _x583, _x584, _x585) {
    return _ref182.apply(this, arguments);
  };
}();
exports.dashboard_element = dashboard_element;
var update_dashboard_element = function () {
  var _ref183 = _asyncToGenerator(function* (sdk, dashboard_element_id, body, fields, options) {
    dashboard_element_id = (0, _sdkRtl.encodeParam)(dashboard_element_id);
    return sdk.patch("/dashboard_elements/".concat(dashboard_element_id), {
      fields
    }, body, options);
  });
  return function update_dashboard_element(_x586, _x587, _x588, _x589, _x590) {
    return _ref183.apply(this, arguments);
  };
}();
exports.update_dashboard_element = update_dashboard_element;
var delete_dashboard_element = function () {
  var _ref184 = _asyncToGenerator(function* (sdk, dashboard_element_id, options) {
    dashboard_element_id = (0, _sdkRtl.encodeParam)(dashboard_element_id);
    return sdk.delete("/dashboard_elements/".concat(dashboard_element_id), null, null, options);
  });
  return function delete_dashboard_element(_x591, _x592, _x593) {
    return _ref184.apply(this, arguments);
  };
}();
exports.delete_dashboard_element = delete_dashboard_element;
var dashboard_dashboard_elements = function () {
  var _ref185 = _asyncToGenerator(function* (sdk, dashboard_id, fields, options) {
    dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
    return sdk.get("/dashboards/".concat(dashboard_id, "/dashboard_elements"), {
      fields
    }, null, options);
  });
  return function dashboard_dashboard_elements(_x594, _x595, _x596, _x597) {
    return _ref185.apply(this, arguments);
  };
}();
exports.dashboard_dashboard_elements = dashboard_dashboard_elements;
var create_dashboard_element = function () {
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
exports.create_dashboard_element = create_dashboard_element;
var dashboard_filter = function () {
  var _ref187 = _asyncToGenerator(function* (sdk, dashboard_filter_id, fields, options) {
    dashboard_filter_id = (0, _sdkRtl.encodeParam)(dashboard_filter_id);
    return sdk.get("/dashboard_filters/".concat(dashboard_filter_id), {
      fields
    }, null, options);
  });
  return function dashboard_filter(_x601, _x602, _x603, _x604) {
    return _ref187.apply(this, arguments);
  };
}();
exports.dashboard_filter = dashboard_filter;
var update_dashboard_filter = function () {
  var _ref188 = _asyncToGenerator(function* (sdk, dashboard_filter_id, body, fields, options) {
    dashboard_filter_id = (0, _sdkRtl.encodeParam)(dashboard_filter_id);
    return sdk.patch("/dashboard_filters/".concat(dashboard_filter_id), {
      fields
    }, body, options);
  });
  return function update_dashboard_filter(_x605, _x606, _x607, _x608, _x609) {
    return _ref188.apply(this, arguments);
  };
}();
exports.update_dashboard_filter = update_dashboard_filter;
var delete_dashboard_filter = function () {
  var _ref189 = _asyncToGenerator(function* (sdk, dashboard_filter_id, options) {
    dashboard_filter_id = (0, _sdkRtl.encodeParam)(dashboard_filter_id);
    return sdk.delete("/dashboard_filters/".concat(dashboard_filter_id), null, null, options);
  });
  return function delete_dashboard_filter(_x610, _x611, _x612) {
    return _ref189.apply(this, arguments);
  };
}();
exports.delete_dashboard_filter = delete_dashboard_filter;
var dashboard_dashboard_filters = function () {
  var _ref190 = _asyncToGenerator(function* (sdk, dashboard_id, fields, options) {
    dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
    return sdk.get("/dashboards/".concat(dashboard_id, "/dashboard_filters"), {
      fields
    }, null, options);
  });
  return function dashboard_dashboard_filters(_x613, _x614, _x615, _x616) {
    return _ref190.apply(this, arguments);
  };
}();
exports.dashboard_dashboard_filters = dashboard_dashboard_filters;
var create_dashboard_filter = function () {
  var _ref191 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/dashboard_filters', {
      fields
    }, body, options);
  });
  return function create_dashboard_filter(_x617, _x618, _x619, _x620) {
    return _ref191.apply(this, arguments);
  };
}();
exports.create_dashboard_filter = create_dashboard_filter;
var dashboard_layout_component = function () {
  var _ref192 = _asyncToGenerator(function* (sdk, dashboard_layout_component_id, fields, options) {
    dashboard_layout_component_id = (0, _sdkRtl.encodeParam)(dashboard_layout_component_id);
    return sdk.get("/dashboard_layout_components/".concat(dashboard_layout_component_id), {
      fields
    }, null, options);
  });
  return function dashboard_layout_component(_x621, _x622, _x623, _x624) {
    return _ref192.apply(this, arguments);
  };
}();
exports.dashboard_layout_component = dashboard_layout_component;
var update_dashboard_layout_component = function () {
  var _ref193 = _asyncToGenerator(function* (sdk, dashboard_layout_component_id, body, fields, options) {
    dashboard_layout_component_id = (0, _sdkRtl.encodeParam)(dashboard_layout_component_id);
    return sdk.patch("/dashboard_layout_components/".concat(dashboard_layout_component_id), {
      fields
    }, body, options);
  });
  return function update_dashboard_layout_component(_x625, _x626, _x627, _x628, _x629) {
    return _ref193.apply(this, arguments);
  };
}();
exports.update_dashboard_layout_component = update_dashboard_layout_component;
var dashboard_layout_dashboard_layout_components = function () {
  var _ref194 = _asyncToGenerator(function* (sdk, dashboard_layout_id, fields, options) {
    dashboard_layout_id = (0, _sdkRtl.encodeParam)(dashboard_layout_id);
    return sdk.get("/dashboard_layouts/".concat(dashboard_layout_id, "/dashboard_layout_components"), {
      fields
    }, null, options);
  });
  return function dashboard_layout_dashboard_layout_components(_x630, _x631, _x632, _x633) {
    return _ref194.apply(this, arguments);
  };
}();
exports.dashboard_layout_dashboard_layout_components = dashboard_layout_dashboard_layout_components;
var dashboard_layout = function () {
  var _ref195 = _asyncToGenerator(function* (sdk, dashboard_layout_id, fields, options) {
    dashboard_layout_id = (0, _sdkRtl.encodeParam)(dashboard_layout_id);
    return sdk.get("/dashboard_layouts/".concat(dashboard_layout_id), {
      fields
    }, null, options);
  });
  return function dashboard_layout(_x634, _x635, _x636, _x637) {
    return _ref195.apply(this, arguments);
  };
}();
exports.dashboard_layout = dashboard_layout;
var update_dashboard_layout = function () {
  var _ref196 = _asyncToGenerator(function* (sdk, dashboard_layout_id, body, fields, options) {
    dashboard_layout_id = (0, _sdkRtl.encodeParam)(dashboard_layout_id);
    return sdk.patch("/dashboard_layouts/".concat(dashboard_layout_id), {
      fields
    }, body, options);
  });
  return function update_dashboard_layout(_x638, _x639, _x640, _x641, _x642) {
    return _ref196.apply(this, arguments);
  };
}();
exports.update_dashboard_layout = update_dashboard_layout;
var delete_dashboard_layout = function () {
  var _ref197 = _asyncToGenerator(function* (sdk, dashboard_layout_id, options) {
    dashboard_layout_id = (0, _sdkRtl.encodeParam)(dashboard_layout_id);
    return sdk.delete("/dashboard_layouts/".concat(dashboard_layout_id), null, null, options);
  });
  return function delete_dashboard_layout(_x643, _x644, _x645) {
    return _ref197.apply(this, arguments);
  };
}();
exports.delete_dashboard_layout = delete_dashboard_layout;
var dashboard_dashboard_layouts = function () {
  var _ref198 = _asyncToGenerator(function* (sdk, dashboard_id, fields, options) {
    dashboard_id = (0, _sdkRtl.encodeParam)(dashboard_id);
    return sdk.get("/dashboards/".concat(dashboard_id, "/dashboard_layouts"), {
      fields
    }, null, options);
  });
  return function dashboard_dashboard_layouts(_x646, _x647, _x648, _x649) {
    return _ref198.apply(this, arguments);
  };
}();
exports.dashboard_dashboard_layouts = dashboard_dashboard_layouts;
var create_dashboard_layout = function () {
  var _ref199 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/dashboard_layouts', {
      fields
    }, body, options);
  });
  return function create_dashboard_layout(_x650, _x651, _x652, _x653) {
    return _ref199.apply(this, arguments);
  };
}();
exports.create_dashboard_layout = create_dashboard_layout;
var perform_data_action = function () {
  var _ref200 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/data_actions', null, body, options);
  });
  return function perform_data_action(_x654, _x655, _x656) {
    return _ref200.apply(this, arguments);
  };
}();
exports.perform_data_action = perform_data_action;
var fetch_remote_data_action_form = function () {
  var _ref201 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/data_actions/form', null, body, options);
  });
  return function fetch_remote_data_action_form(_x657, _x658, _x659) {
    return _ref201.apply(this, arguments);
  };
}();
exports.fetch_remote_data_action_form = fetch_remote_data_action_form;
var all_datagroups = function () {
  var _ref202 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/datagroups', null, null, options);
  });
  return function all_datagroups(_x660, _x661) {
    return _ref202.apply(this, arguments);
  };
}();
exports.all_datagroups = all_datagroups;
var datagroup = function () {
  var _ref203 = _asyncToGenerator(function* (sdk, datagroup_id, options) {
    datagroup_id = (0, _sdkRtl.encodeParam)(datagroup_id);
    return sdk.get("/datagroups/".concat(datagroup_id), null, null, options);
  });
  return function datagroup(_x662, _x663, _x664) {
    return _ref203.apply(this, arguments);
  };
}();
exports.datagroup = datagroup;
var update_datagroup = function () {
  var _ref204 = _asyncToGenerator(function* (sdk, datagroup_id, body, options) {
    datagroup_id = (0, _sdkRtl.encodeParam)(datagroup_id);
    return sdk.patch("/datagroups/".concat(datagroup_id), null, body, options);
  });
  return function update_datagroup(_x665, _x666, _x667, _x668) {
    return _ref204.apply(this, arguments);
  };
}();
exports.update_datagroup = update_datagroup;
var graph_derived_tables_for_model = function () {
  var _ref205 = _asyncToGenerator(function* (sdk, request, options) {
    request.model = (0, _sdkRtl.encodeParam)(request.model);
    return sdk.get("/derived_table/graph/model/".concat(request.model), {
      format: request.format,
      color: request.color
    }, null, options);
  });
  return function graph_derived_tables_for_model(_x669, _x670, _x671) {
    return _ref205.apply(this, arguments);
  };
}();
exports.graph_derived_tables_for_model = graph_derived_tables_for_model;
var graph_derived_tables_for_view = function () {
  var _ref206 = _asyncToGenerator(function* (sdk, request, options) {
    request.view = (0, _sdkRtl.encodeParam)(request.view);
    return sdk.get("/derived_table/graph/view/".concat(request.view), {
      models: request.models,
      workspace: request.workspace
    }, null, options);
  });
  return function graph_derived_tables_for_view(_x672, _x673, _x674) {
    return _ref206.apply(this, arguments);
  };
}();
exports.graph_derived_tables_for_view = graph_derived_tables_for_view;
var start_pdt_build = function () {
  var _ref207 = _asyncToGenerator(function* (sdk, request, options) {
    request.model_name = (0, _sdkRtl.encodeParam)(request.model_name);
    request.view_name = (0, _sdkRtl.encodeParam)(request.view_name);
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
exports.start_pdt_build = start_pdt_build;
var check_pdt_build = function () {
  var _ref208 = _asyncToGenerator(function* (sdk, materialization_id, options) {
    materialization_id = (0, _sdkRtl.encodeParam)(materialization_id);
    return sdk.get("/derived_table/".concat(materialization_id, "/status"), null, null, options);
  });
  return function check_pdt_build(_x678, _x679, _x680) {
    return _ref208.apply(this, arguments);
  };
}();
exports.check_pdt_build = check_pdt_build;
var stop_pdt_build = function () {
  var _ref209 = _asyncToGenerator(function* (sdk, materialization_id, source, options) {
    materialization_id = (0, _sdkRtl.encodeParam)(materialization_id);
    return sdk.get("/derived_table/".concat(materialization_id, "/stop"), {
      source
    }, null, options);
  });
  return function stop_pdt_build(_x681, _x682, _x683, _x684) {
    return _ref209.apply(this, arguments);
  };
}();
exports.stop_pdt_build = stop_pdt_build;
var search_folders = function () {
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
exports.search_folders = search_folders;
var folder = function () {
  var _ref211 = _asyncToGenerator(function* (sdk, folder_id, fields, options) {
    folder_id = (0, _sdkRtl.encodeParam)(folder_id);
    return sdk.get("/folders/".concat(folder_id), {
      fields
    }, null, options);
  });
  return function folder(_x688, _x689, _x690, _x691) {
    return _ref211.apply(this, arguments);
  };
}();
exports.folder = folder;
var update_folder = function () {
  var _ref212 = _asyncToGenerator(function* (sdk, folder_id, body, options) {
    folder_id = (0, _sdkRtl.encodeParam)(folder_id);
    return sdk.patch("/folders/".concat(folder_id), null, body, options);
  });
  return function update_folder(_x692, _x693, _x694, _x695) {
    return _ref212.apply(this, arguments);
  };
}();
exports.update_folder = update_folder;
var delete_folder = function () {
  var _ref213 = _asyncToGenerator(function* (sdk, folder_id, options) {
    folder_id = (0, _sdkRtl.encodeParam)(folder_id);
    return sdk.delete("/folders/".concat(folder_id), null, null, options);
  });
  return function delete_folder(_x696, _x697, _x698) {
    return _ref213.apply(this, arguments);
  };
}();
exports.delete_folder = delete_folder;
var all_folders = function () {
  var _ref214 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/folders', {
      fields
    }, null, options);
  });
  return function all_folders(_x699, _x700, _x701) {
    return _ref214.apply(this, arguments);
  };
}();
exports.all_folders = all_folders;
var create_folder = function () {
  var _ref215 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/folders', null, body, options);
  });
  return function create_folder(_x702, _x703, _x704) {
    return _ref215.apply(this, arguments);
  };
}();
exports.create_folder = create_folder;
var folder_children = function () {
  var _ref216 = _asyncToGenerator(function* (sdk, request, options) {
    request.folder_id = (0, _sdkRtl.encodeParam)(request.folder_id);
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
exports.folder_children = folder_children;
var folder_children_search = function () {
  var _ref217 = _asyncToGenerator(function* (sdk, request, options) {
    request.folder_id = (0, _sdkRtl.encodeParam)(request.folder_id);
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
exports.folder_children_search = folder_children_search;
var folder_parent = function () {
  var _ref218 = _asyncToGenerator(function* (sdk, folder_id, fields, options) {
    folder_id = (0, _sdkRtl.encodeParam)(folder_id);
    return sdk.get("/folders/".concat(folder_id, "/parent"), {
      fields
    }, null, options);
  });
  return function folder_parent(_x711, _x712, _x713, _x714) {
    return _ref218.apply(this, arguments);
  };
}();
exports.folder_parent = folder_parent;
var folder_ancestors = function () {
  var _ref219 = _asyncToGenerator(function* (sdk, folder_id, fields, options) {
    folder_id = (0, _sdkRtl.encodeParam)(folder_id);
    return sdk.get("/folders/".concat(folder_id, "/ancestors"), {
      fields
    }, null, options);
  });
  return function folder_ancestors(_x715, _x716, _x717, _x718) {
    return _ref219.apply(this, arguments);
  };
}();
exports.folder_ancestors = folder_ancestors;
var folder_looks = function () {
  var _ref220 = _asyncToGenerator(function* (sdk, folder_id, fields, options) {
    folder_id = (0, _sdkRtl.encodeParam)(folder_id);
    return sdk.get("/folders/".concat(folder_id, "/looks"), {
      fields
    }, null, options);
  });
  return function folder_looks(_x719, _x720, _x721, _x722) {
    return _ref220.apply(this, arguments);
  };
}();
exports.folder_looks = folder_looks;
var folder_dashboards = function () {
  var _ref221 = _asyncToGenerator(function* (sdk, folder_id, fields, options) {
    folder_id = (0, _sdkRtl.encodeParam)(folder_id);
    return sdk.get("/folders/".concat(folder_id, "/dashboards"), {
      fields
    }, null, options);
  });
  return function folder_dashboards(_x723, _x724, _x725, _x726) {
    return _ref221.apply(this, arguments);
  };
}();
exports.folder_dashboards = folder_dashboards;
var all_groups = function () {
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
exports.all_groups = all_groups;
var create_group = function () {
  var _ref223 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/groups', {
      fields
    }, body, options);
  });
  return function create_group(_x730, _x731, _x732, _x733) {
    return _ref223.apply(this, arguments);
  };
}();
exports.create_group = create_group;
var search_groups = function () {
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
exports.search_groups = search_groups;
var search_groups_with_roles = function () {
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
exports.search_groups_with_roles = search_groups_with_roles;
var search_groups_with_hierarchy = function () {
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
exports.search_groups_with_hierarchy = search_groups_with_hierarchy;
var group = function () {
  var _ref227 = _asyncToGenerator(function* (sdk, group_id, fields, options) {
    group_id = (0, _sdkRtl.encodeParam)(group_id);
    return sdk.get("/groups/".concat(group_id), {
      fields
    }, null, options);
  });
  return function group(_x743, _x744, _x745, _x746) {
    return _ref227.apply(this, arguments);
  };
}();
exports.group = group;
var update_group = function () {
  var _ref228 = _asyncToGenerator(function* (sdk, group_id, body, fields, options) {
    group_id = (0, _sdkRtl.encodeParam)(group_id);
    return sdk.patch("/groups/".concat(group_id), {
      fields
    }, body, options);
  });
  return function update_group(_x747, _x748, _x749, _x750, _x751) {
    return _ref228.apply(this, arguments);
  };
}();
exports.update_group = update_group;
var delete_group = function () {
  var _ref229 = _asyncToGenerator(function* (sdk, group_id, options) {
    group_id = (0, _sdkRtl.encodeParam)(group_id);
    return sdk.delete("/groups/".concat(group_id), null, null, options);
  });
  return function delete_group(_x752, _x753, _x754) {
    return _ref229.apply(this, arguments);
  };
}();
exports.delete_group = delete_group;
var all_group_groups = function () {
  var _ref230 = _asyncToGenerator(function* (sdk, group_id, fields, options) {
    group_id = (0, _sdkRtl.encodeParam)(group_id);
    return sdk.get("/groups/".concat(group_id, "/groups"), {
      fields
    }, null, options);
  });
  return function all_group_groups(_x755, _x756, _x757, _x758) {
    return _ref230.apply(this, arguments);
  };
}();
exports.all_group_groups = all_group_groups;
var add_group_group = function () {
  var _ref231 = _asyncToGenerator(function* (sdk, group_id, body, options) {
    group_id = (0, _sdkRtl.encodeParam)(group_id);
    return sdk.post("/groups/".concat(group_id, "/groups"), null, body, options);
  });
  return function add_group_group(_x759, _x760, _x761, _x762) {
    return _ref231.apply(this, arguments);
  };
}();
exports.add_group_group = add_group_group;
var all_group_users = function () {
  var _ref232 = _asyncToGenerator(function* (sdk, request, options) {
    request.group_id = (0, _sdkRtl.encodeParam)(request.group_id);
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
exports.all_group_users = all_group_users;
var add_group_user = function () {
  var _ref233 = _asyncToGenerator(function* (sdk, group_id, body, options) {
    group_id = (0, _sdkRtl.encodeParam)(group_id);
    return sdk.post("/groups/".concat(group_id, "/users"), null, body, options);
  });
  return function add_group_user(_x766, _x767, _x768, _x769) {
    return _ref233.apply(this, arguments);
  };
}();
exports.add_group_user = add_group_user;
var delete_group_user = function () {
  var _ref234 = _asyncToGenerator(function* (sdk, group_id, user_id, options) {
    group_id = (0, _sdkRtl.encodeParam)(group_id);
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.delete("/groups/".concat(group_id, "/users/").concat(user_id), null, null, options);
  });
  return function delete_group_user(_x770, _x771, _x772, _x773) {
    return _ref234.apply(this, arguments);
  };
}();
exports.delete_group_user = delete_group_user;
var delete_group_from_group = function () {
  var _ref235 = _asyncToGenerator(function* (sdk, group_id, deleting_group_id, options) {
    group_id = (0, _sdkRtl.encodeParam)(group_id);
    deleting_group_id = (0, _sdkRtl.encodeParam)(deleting_group_id);
    return sdk.delete("/groups/".concat(group_id, "/groups/").concat(deleting_group_id), null, null, options);
  });
  return function delete_group_from_group(_x774, _x775, _x776, _x777) {
    return _ref235.apply(this, arguments);
  };
}();
exports.delete_group_from_group = delete_group_from_group;
var update_user_attribute_group_value = function () {
  var _ref236 = _asyncToGenerator(function* (sdk, group_id, user_attribute_id, body, options) {
    group_id = (0, _sdkRtl.encodeParam)(group_id);
    user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
    return sdk.patch("/groups/".concat(group_id, "/attribute_values/").concat(user_attribute_id), null, body, options);
  });
  return function update_user_attribute_group_value(_x778, _x779, _x780, _x781, _x782) {
    return _ref236.apply(this, arguments);
  };
}();
exports.update_user_attribute_group_value = update_user_attribute_group_value;
var delete_user_attribute_group_value = function () {
  var _ref237 = _asyncToGenerator(function* (sdk, group_id, user_attribute_id, options) {
    group_id = (0, _sdkRtl.encodeParam)(group_id);
    user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
    return sdk.delete("/groups/".concat(group_id, "/attribute_values/").concat(user_attribute_id), null, null, options);
  });
  return function delete_user_attribute_group_value(_x783, _x784, _x785, _x786) {
    return _ref237.apply(this, arguments);
  };
}();
exports.delete_user_attribute_group_value = delete_user_attribute_group_value;
var all_primary_homepage_sections = function () {
  var _ref238 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/primary_homepage_sections', {
      fields
    }, null, options);
  });
  return function all_primary_homepage_sections(_x787, _x788, _x789) {
    return _ref238.apply(this, arguments);
  };
}();
exports.all_primary_homepage_sections = all_primary_homepage_sections;
var all_integration_hubs = function () {
  var _ref239 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/integration_hubs', {
      fields
    }, null, options);
  });
  return function all_integration_hubs(_x790, _x791, _x792) {
    return _ref239.apply(this, arguments);
  };
}();
exports.all_integration_hubs = all_integration_hubs;
var create_integration_hub = function () {
  var _ref240 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/integration_hubs', {
      fields
    }, body, options);
  });
  return function create_integration_hub(_x793, _x794, _x795, _x796) {
    return _ref240.apply(this, arguments);
  };
}();
exports.create_integration_hub = create_integration_hub;
var integration_hub = function () {
  var _ref241 = _asyncToGenerator(function* (sdk, integration_hub_id, fields, options) {
    integration_hub_id = (0, _sdkRtl.encodeParam)(integration_hub_id);
    return sdk.get("/integration_hubs/".concat(integration_hub_id), {
      fields
    }, null, options);
  });
  return function integration_hub(_x797, _x798, _x799, _x800) {
    return _ref241.apply(this, arguments);
  };
}();
exports.integration_hub = integration_hub;
var update_integration_hub = function () {
  var _ref242 = _asyncToGenerator(function* (sdk, integration_hub_id, body, fields, options) {
    integration_hub_id = (0, _sdkRtl.encodeParam)(integration_hub_id);
    return sdk.patch("/integration_hubs/".concat(integration_hub_id), {
      fields
    }, body, options);
  });
  return function update_integration_hub(_x801, _x802, _x803, _x804, _x805) {
    return _ref242.apply(this, arguments);
  };
}();
exports.update_integration_hub = update_integration_hub;
var delete_integration_hub = function () {
  var _ref243 = _asyncToGenerator(function* (sdk, integration_hub_id, options) {
    integration_hub_id = (0, _sdkRtl.encodeParam)(integration_hub_id);
    return sdk.delete("/integration_hubs/".concat(integration_hub_id), null, null, options);
  });
  return function delete_integration_hub(_x806, _x807, _x808) {
    return _ref243.apply(this, arguments);
  };
}();
exports.delete_integration_hub = delete_integration_hub;
var accept_integration_hub_legal_agreement = function () {
  var _ref244 = _asyncToGenerator(function* (sdk, integration_hub_id, options) {
    integration_hub_id = (0, _sdkRtl.encodeParam)(integration_hub_id);
    return sdk.post("/integration_hubs/".concat(integration_hub_id, "/accept_legal_agreement"), null, null, options);
  });
  return function accept_integration_hub_legal_agreement(_x809, _x810, _x811) {
    return _ref244.apply(this, arguments);
  };
}();
exports.accept_integration_hub_legal_agreement = accept_integration_hub_legal_agreement;
var all_integrations = function () {
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
exports.all_integrations = all_integrations;
var integration = function () {
  var _ref246 = _asyncToGenerator(function* (sdk, integration_id, fields, options) {
    integration_id = (0, _sdkRtl.encodeParam)(integration_id);
    return sdk.get("/integrations/".concat(integration_id), {
      fields
    }, null, options);
  });
  return function integration(_x815, _x816, _x817, _x818) {
    return _ref246.apply(this, arguments);
  };
}();
exports.integration = integration;
var update_integration = function () {
  var _ref247 = _asyncToGenerator(function* (sdk, integration_id, body, fields, options) {
    integration_id = (0, _sdkRtl.encodeParam)(integration_id);
    return sdk.patch("/integrations/".concat(integration_id), {
      fields
    }, body, options);
  });
  return function update_integration(_x819, _x820, _x821, _x822, _x823) {
    return _ref247.apply(this, arguments);
  };
}();
exports.update_integration = update_integration;
var fetch_integration_form = function () {
  var _ref248 = _asyncToGenerator(function* (sdk, integration_id, body, options) {
    integration_id = (0, _sdkRtl.encodeParam)(integration_id);
    return sdk.post("/integrations/".concat(integration_id, "/form"), null, body, options);
  });
  return function fetch_integration_form(_x824, _x825, _x826, _x827) {
    return _ref248.apply(this, arguments);
  };
}();
exports.fetch_integration_form = fetch_integration_form;
var test_integration = function () {
  var _ref249 = _asyncToGenerator(function* (sdk, integration_id, options) {
    integration_id = (0, _sdkRtl.encodeParam)(integration_id);
    return sdk.post("/integrations/".concat(integration_id, "/test"), null, null, options);
  });
  return function test_integration(_x828, _x829, _x830) {
    return _ref249.apply(this, arguments);
  };
}();
exports.test_integration = test_integration;
var all_looks = function () {
  var _ref250 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/looks', {
      fields
    }, null, options);
  });
  return function all_looks(_x831, _x832, _x833) {
    return _ref250.apply(this, arguments);
  };
}();
exports.all_looks = all_looks;
var create_look = function () {
  var _ref251 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/looks', {
      fields
    }, body, options);
  });
  return function create_look(_x834, _x835, _x836, _x837) {
    return _ref251.apply(this, arguments);
  };
}();
exports.create_look = create_look;
var search_looks = function () {
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
exports.search_looks = search_looks;
var look = function () {
  var _ref253 = _asyncToGenerator(function* (sdk, look_id, fields, options) {
    look_id = (0, _sdkRtl.encodeParam)(look_id);
    return sdk.get("/looks/".concat(look_id), {
      fields
    }, null, options);
  });
  return function look(_x841, _x842, _x843, _x844) {
    return _ref253.apply(this, arguments);
  };
}();
exports.look = look;
var update_look = function () {
  var _ref254 = _asyncToGenerator(function* (sdk, look_id, body, fields, options) {
    look_id = (0, _sdkRtl.encodeParam)(look_id);
    return sdk.patch("/looks/".concat(look_id), {
      fields
    }, body, options);
  });
  return function update_look(_x845, _x846, _x847, _x848, _x849) {
    return _ref254.apply(this, arguments);
  };
}();
exports.update_look = update_look;
var delete_look = function () {
  var _ref255 = _asyncToGenerator(function* (sdk, look_id, options) {
    look_id = (0, _sdkRtl.encodeParam)(look_id);
    return sdk.delete("/looks/".concat(look_id), null, null, options);
  });
  return function delete_look(_x850, _x851, _x852) {
    return _ref255.apply(this, arguments);
  };
}();
exports.delete_look = delete_look;
var run_look = function () {
  var _ref256 = _asyncToGenerator(function* (sdk, request, options) {
    request.look_id = (0, _sdkRtl.encodeParam)(request.look_id);
    request.result_format = (0, _sdkRtl.encodeParam)(request.result_format);
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
exports.run_look = run_look;
var copy_look = function () {
  var _ref257 = _asyncToGenerator(function* (sdk, look_id, folder_id, options) {
    look_id = (0, _sdkRtl.encodeParam)(look_id);
    return sdk.post("/looks/".concat(look_id, "/copy"), {
      folder_id
    }, null, options);
  });
  return function copy_look(_x856, _x857, _x858, _x859) {
    return _ref257.apply(this, arguments);
  };
}();
exports.copy_look = copy_look;
var move_look = function () {
  var _ref258 = _asyncToGenerator(function* (sdk, look_id, folder_id, options) {
    look_id = (0, _sdkRtl.encodeParam)(look_id);
    return sdk.patch("/looks/".concat(look_id, "/move"), {
      folder_id
    }, null, options);
  });
  return function move_look(_x860, _x861, _x862, _x863) {
    return _ref258.apply(this, arguments);
  };
}();
exports.move_look = move_look;
var all_lookml_models = function () {
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
exports.all_lookml_models = all_lookml_models;
var create_lookml_model = function () {
  var _ref260 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/lookml_models', null, body, options);
  });
  return function create_lookml_model(_x867, _x868, _x869) {
    return _ref260.apply(this, arguments);
  };
}();
exports.create_lookml_model = create_lookml_model;
var lookml_model = function () {
  var _ref261 = _asyncToGenerator(function* (sdk, lookml_model_name, fields, options) {
    lookml_model_name = (0, _sdkRtl.encodeParam)(lookml_model_name);
    return sdk.get("/lookml_models/".concat(lookml_model_name), {
      fields
    }, null, options);
  });
  return function lookml_model(_x870, _x871, _x872, _x873) {
    return _ref261.apply(this, arguments);
  };
}();
exports.lookml_model = lookml_model;
var update_lookml_model = function () {
  var _ref262 = _asyncToGenerator(function* (sdk, lookml_model_name, body, options) {
    lookml_model_name = (0, _sdkRtl.encodeParam)(lookml_model_name);
    return sdk.patch("/lookml_models/".concat(lookml_model_name), null, body, options);
  });
  return function update_lookml_model(_x874, _x875, _x876, _x877) {
    return _ref262.apply(this, arguments);
  };
}();
exports.update_lookml_model = update_lookml_model;
var delete_lookml_model = function () {
  var _ref263 = _asyncToGenerator(function* (sdk, lookml_model_name, options) {
    lookml_model_name = (0, _sdkRtl.encodeParam)(lookml_model_name);
    return sdk.delete("/lookml_models/".concat(lookml_model_name), null, null, options);
  });
  return function delete_lookml_model(_x878, _x879, _x880) {
    return _ref263.apply(this, arguments);
  };
}();
exports.delete_lookml_model = delete_lookml_model;
var lookml_model_explore = function () {
  var _ref264 = _asyncToGenerator(function* (sdk, lookml_model_name, explore_name, fields, options) {
    lookml_model_name = (0, _sdkRtl.encodeParam)(lookml_model_name);
    explore_name = (0, _sdkRtl.encodeParam)(explore_name);
    return sdk.get("/lookml_models/".concat(lookml_model_name, "/explores/").concat(explore_name), {
      fields
    }, null, options);
  });
  return function lookml_model_explore(_x881, _x882, _x883, _x884, _x885) {
    return _ref264.apply(this, arguments);
  };
}();
exports.lookml_model_explore = lookml_model_explore;
var model_fieldname_suggestions = function () {
  var _ref265 = _asyncToGenerator(function* (sdk, request, options) {
    request.model_name = (0, _sdkRtl.encodeParam)(request.model_name);
    request.view_name = (0, _sdkRtl.encodeParam)(request.view_name);
    request.field_name = (0, _sdkRtl.encodeParam)(request.field_name);
    return sdk.get("/models/".concat(request.model_name, "/views/").concat(request.view_name, "/fields/").concat(request.field_name, "/suggestions"), {
      term: request.term,
      filters: request.filters
    }, null, options);
  });
  return function model_fieldname_suggestions(_x886, _x887, _x888) {
    return _ref265.apply(this, arguments);
  };
}();
exports.model_fieldname_suggestions = model_fieldname_suggestions;
var get_model = function () {
  var _ref266 = _asyncToGenerator(function* (sdk, model_name, options) {
    model_name = (0, _sdkRtl.encodeParam)(model_name);
    return sdk.get("/models/".concat(model_name), null, null, options);
  });
  return function get_model(_x889, _x890, _x891) {
    return _ref266.apply(this, arguments);
  };
}();
exports.get_model = get_model;
var connection_databases = function () {
  var _ref267 = _asyncToGenerator(function* (sdk, connection_name, options) {
    connection_name = (0, _sdkRtl.encodeParam)(connection_name);
    return sdk.get("/connections/".concat(connection_name, "/databases"), null, null, options);
  });
  return function connection_databases(_x892, _x893, _x894) {
    return _ref267.apply(this, arguments);
  };
}();
exports.connection_databases = connection_databases;
var connection_features = function () {
  var _ref268 = _asyncToGenerator(function* (sdk, connection_name, fields, options) {
    connection_name = (0, _sdkRtl.encodeParam)(connection_name);
    return sdk.get("/connections/".concat(connection_name, "/features"), {
      fields
    }, null, options);
  });
  return function connection_features(_x895, _x896, _x897, _x898) {
    return _ref268.apply(this, arguments);
  };
}();
exports.connection_features = connection_features;
var connection_schemas = function () {
  var _ref269 = _asyncToGenerator(function* (sdk, request, options) {
    request.connection_name = (0, _sdkRtl.encodeParam)(request.connection_name);
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
exports.connection_schemas = connection_schemas;
var connection_tables = function () {
  var _ref270 = _asyncToGenerator(function* (sdk, request, options) {
    request.connection_name = (0, _sdkRtl.encodeParam)(request.connection_name);
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
exports.connection_tables = connection_tables;
var connection_columns = function () {
  var _ref271 = _asyncToGenerator(function* (sdk, request, options) {
    request.connection_name = (0, _sdkRtl.encodeParam)(request.connection_name);
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
exports.connection_columns = connection_columns;
var connection_search_columns = function () {
  var _ref272 = _asyncToGenerator(function* (sdk, request, options) {
    request.connection_name = (0, _sdkRtl.encodeParam)(request.connection_name);
    return sdk.get("/connections/".concat(request.connection_name, "/search_columns"), {
      column_name: request.column_name,
      fields: request.fields
    }, null, options);
  });
  return function connection_search_columns(_x908, _x909, _x910) {
    return _ref272.apply(this, arguments);
  };
}();
exports.connection_search_columns = connection_search_columns;
var connection_cost_estimate = function () {
  var _ref273 = _asyncToGenerator(function* (sdk, connection_name, body, fields, options) {
    connection_name = (0, _sdkRtl.encodeParam)(connection_name);
    return sdk.post("/connections/".concat(connection_name, "/cost_estimate"), {
      fields
    }, body, options);
  });
  return function connection_cost_estimate(_x911, _x912, _x913, _x914, _x915) {
    return _ref273.apply(this, arguments);
  };
}();
exports.connection_cost_estimate = connection_cost_estimate;
var lock_all = function () {
  var _ref274 = _asyncToGenerator(function* (sdk, project_id, fields, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.post("/projects/".concat(project_id, "/manifest/lock_all"), {
      fields
    }, null, options);
  });
  return function lock_all(_x916, _x917, _x918, _x919) {
    return _ref274.apply(this, arguments);
  };
}();
exports.lock_all = lock_all;
var all_git_branches = function () {
  var _ref275 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.get("/projects/".concat(project_id, "/git_branches"), null, null, options);
  });
  return function all_git_branches(_x920, _x921, _x922) {
    return _ref275.apply(this, arguments);
  };
}();
exports.all_git_branches = all_git_branches;
var git_branch = function () {
  var _ref276 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.get("/projects/".concat(project_id, "/git_branch"), null, null, options);
  });
  return function git_branch(_x923, _x924, _x925) {
    return _ref276.apply(this, arguments);
  };
}();
exports.git_branch = git_branch;
var update_git_branch = function () {
  var _ref277 = _asyncToGenerator(function* (sdk, project_id, body, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.put("/projects/".concat(project_id, "/git_branch"), null, body, options);
  });
  return function update_git_branch(_x926, _x927, _x928, _x929) {
    return _ref277.apply(this, arguments);
  };
}();
exports.update_git_branch = update_git_branch;
var create_git_branch = function () {
  var _ref278 = _asyncToGenerator(function* (sdk, project_id, body, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.post("/projects/".concat(project_id, "/git_branch"), null, body, options);
  });
  return function create_git_branch(_x930, _x931, _x932, _x933) {
    return _ref278.apply(this, arguments);
  };
}();
exports.create_git_branch = create_git_branch;
var find_git_branch = function () {
  var _ref279 = _asyncToGenerator(function* (sdk, project_id, branch_name, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    branch_name = (0, _sdkRtl.encodeParam)(branch_name);
    return sdk.get("/projects/".concat(project_id, "/git_branch/").concat(branch_name), null, null, options);
  });
  return function find_git_branch(_x934, _x935, _x936, _x937) {
    return _ref279.apply(this, arguments);
  };
}();
exports.find_git_branch = find_git_branch;
var delete_git_branch = function () {
  var _ref280 = _asyncToGenerator(function* (sdk, project_id, branch_name, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    branch_name = (0, _sdkRtl.encodeParam)(branch_name);
    return sdk.delete("/projects/".concat(project_id, "/git_branch/").concat(branch_name), null, null, options);
  });
  return function delete_git_branch(_x938, _x939, _x940, _x941) {
    return _ref280.apply(this, arguments);
  };
}();
exports.delete_git_branch = delete_git_branch;
var deploy_ref_to_production = function () {
  var _ref281 = _asyncToGenerator(function* (sdk, request, options) {
    request.project_id = (0, _sdkRtl.encodeParam)(request.project_id);
    return sdk.post("/projects/".concat(request.project_id, "/deploy_ref_to_production"), {
      branch: request.branch,
      ref: request.ref
    }, null, options);
  });
  return function deploy_ref_to_production(_x942, _x943, _x944) {
    return _ref281.apply(this, arguments);
  };
}();
exports.deploy_ref_to_production = deploy_ref_to_production;
var deploy_to_production = function () {
  var _ref282 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.post("/projects/".concat(project_id, "/deploy_to_production"), null, null, options);
  });
  return function deploy_to_production(_x945, _x946, _x947) {
    return _ref282.apply(this, arguments);
  };
}();
exports.deploy_to_production = deploy_to_production;
var reset_project_to_production = function () {
  var _ref283 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.post("/projects/".concat(project_id, "/reset_to_production"), null, null, options);
  });
  return function reset_project_to_production(_x948, _x949, _x950) {
    return _ref283.apply(this, arguments);
  };
}();
exports.reset_project_to_production = reset_project_to_production;
var reset_project_to_remote = function () {
  var _ref284 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.post("/projects/".concat(project_id, "/reset_to_remote"), null, null, options);
  });
  return function reset_project_to_remote(_x951, _x952, _x953) {
    return _ref284.apply(this, arguments);
  };
}();
exports.reset_project_to_remote = reset_project_to_remote;
var all_projects = function () {
  var _ref285 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/projects', {
      fields
    }, null, options);
  });
  return function all_projects(_x954, _x955, _x956) {
    return _ref285.apply(this, arguments);
  };
}();
exports.all_projects = all_projects;
var create_project = function () {
  var _ref286 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/projects', null, body, options);
  });
  return function create_project(_x957, _x958, _x959) {
    return _ref286.apply(this, arguments);
  };
}();
exports.create_project = create_project;
var project = function () {
  var _ref287 = _asyncToGenerator(function* (sdk, project_id, fields, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.get("/projects/".concat(project_id), {
      fields
    }, null, options);
  });
  return function project(_x960, _x961, _x962, _x963) {
    return _ref287.apply(this, arguments);
  };
}();
exports.project = project;
var update_project = function () {
  var _ref288 = _asyncToGenerator(function* (sdk, project_id, body, fields, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.patch("/projects/".concat(project_id), {
      fields
    }, body, options);
  });
  return function update_project(_x964, _x965, _x966, _x967, _x968) {
    return _ref288.apply(this, arguments);
  };
}();
exports.update_project = update_project;
var manifest = function () {
  var _ref289 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.get("/projects/".concat(project_id, "/manifest"), null, null, options);
  });
  return function manifest(_x969, _x970, _x971) {
    return _ref289.apply(this, arguments);
  };
}();
exports.manifest = manifest;
var git_deploy_key = function () {
  var _ref290 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.get("/projects/".concat(project_id, "/git/deploy_key"), null, null, options);
  });
  return function git_deploy_key(_x972, _x973, _x974) {
    return _ref290.apply(this, arguments);
  };
}();
exports.git_deploy_key = git_deploy_key;
var create_git_deploy_key = function () {
  var _ref291 = _asyncToGenerator(function* (sdk, project_id, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.post("/projects/".concat(project_id, "/git/deploy_key"), null, null, options);
  });
  return function create_git_deploy_key(_x975, _x976, _x977) {
    return _ref291.apply(this, arguments);
  };
}();
exports.create_git_deploy_key = create_git_deploy_key;
var project_validation_results = function () {
  var _ref292 = _asyncToGenerator(function* (sdk, project_id, fields, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.get("/projects/".concat(project_id, "/validate"), {
      fields
    }, null, options);
  });
  return function project_validation_results(_x978, _x979, _x980, _x981) {
    return _ref292.apply(this, arguments);
  };
}();
exports.project_validation_results = project_validation_results;
var validate_project = function () {
  var _ref293 = _asyncToGenerator(function* (sdk, project_id, fields, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.post("/projects/".concat(project_id, "/validate"), {
      fields
    }, null, options);
  });
  return function validate_project(_x982, _x983, _x984, _x985) {
    return _ref293.apply(this, arguments);
  };
}();
exports.validate_project = validate_project;
var project_workspace = function () {
  var _ref294 = _asyncToGenerator(function* (sdk, project_id, fields, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.get("/projects/".concat(project_id, "/current_workspace"), {
      fields
    }, null, options);
  });
  return function project_workspace(_x986, _x987, _x988, _x989) {
    return _ref294.apply(this, arguments);
  };
}();
exports.project_workspace = project_workspace;
var all_project_files = function () {
  var _ref295 = _asyncToGenerator(function* (sdk, project_id, fields, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.get("/projects/".concat(project_id, "/files"), {
      fields
    }, null, options);
  });
  return function all_project_files(_x990, _x991, _x992, _x993) {
    return _ref295.apply(this, arguments);
  };
}();
exports.all_project_files = all_project_files;
var project_file = function () {
  var _ref296 = _asyncToGenerator(function* (sdk, project_id, file_id, fields, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.get("/projects/".concat(project_id, "/files/file"), {
      file_id,
      fields
    }, null, options);
  });
  return function project_file(_x994, _x995, _x996, _x997, _x998) {
    return _ref296.apply(this, arguments);
  };
}();
exports.project_file = project_file;
var all_git_connection_tests = function () {
  var _ref297 = _asyncToGenerator(function* (sdk, project_id, remote_url, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.get("/projects/".concat(project_id, "/git_connection_tests"), {
      remote_url
    }, null, options);
  });
  return function all_git_connection_tests(_x999, _x1000, _x1001, _x1002) {
    return _ref297.apply(this, arguments);
  };
}();
exports.all_git_connection_tests = all_git_connection_tests;
var run_git_connection_test = function () {
  var _ref298 = _asyncToGenerator(function* (sdk, request, options) {
    request.project_id = (0, _sdkRtl.encodeParam)(request.project_id);
    request.test_id = (0, _sdkRtl.encodeParam)(request.test_id);
    return sdk.get("/projects/".concat(request.project_id, "/git_connection_tests/").concat(request.test_id), {
      remote_url: request.remote_url,
      use_production: request.use_production
    }, null, options);
  });
  return function run_git_connection_test(_x1003, _x1004, _x1005) {
    return _ref298.apply(this, arguments);
  };
}();
exports.run_git_connection_test = run_git_connection_test;
var all_lookml_tests = function () {
  var _ref299 = _asyncToGenerator(function* (sdk, project_id, file_id, options) {
    project_id = (0, _sdkRtl.encodeParam)(project_id);
    return sdk.get("/projects/".concat(project_id, "/lookml_tests"), {
      file_id
    }, null, options);
  });
  return function all_lookml_tests(_x1006, _x1007, _x1008, _x1009) {
    return _ref299.apply(this, arguments);
  };
}();
exports.all_lookml_tests = all_lookml_tests;
var run_lookml_test = function () {
  var _ref300 = _asyncToGenerator(function* (sdk, request, options) {
    request.project_id = (0, _sdkRtl.encodeParam)(request.project_id);
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
exports.run_lookml_test = run_lookml_test;
var tag_ref = function () {
  var _ref301 = _asyncToGenerator(function* (sdk, request, options) {
    request.project_id = (0, _sdkRtl.encodeParam)(request.project_id);
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
exports.tag_ref = tag_ref;
var update_repository_credential = function () {
  var _ref302 = _asyncToGenerator(function* (sdk, root_project_id, credential_id, body, options) {
    root_project_id = (0, _sdkRtl.encodeParam)(root_project_id);
    credential_id = (0, _sdkRtl.encodeParam)(credential_id);
    return sdk.put("/projects/".concat(root_project_id, "/credential/").concat(credential_id), null, body, options);
  });
  return function update_repository_credential(_x1016, _x1017, _x1018, _x1019, _x1020) {
    return _ref302.apply(this, arguments);
  };
}();
exports.update_repository_credential = update_repository_credential;
var delete_repository_credential = function () {
  var _ref303 = _asyncToGenerator(function* (sdk, root_project_id, credential_id, options) {
    root_project_id = (0, _sdkRtl.encodeParam)(root_project_id);
    credential_id = (0, _sdkRtl.encodeParam)(credential_id);
    return sdk.delete("/projects/".concat(root_project_id, "/credential/").concat(credential_id), null, null, options);
  });
  return function delete_repository_credential(_x1021, _x1022, _x1023, _x1024) {
    return _ref303.apply(this, arguments);
  };
}();
exports.delete_repository_credential = delete_repository_credential;
var get_all_repository_credentials = function () {
  var _ref304 = _asyncToGenerator(function* (sdk, root_project_id, options) {
    root_project_id = (0, _sdkRtl.encodeParam)(root_project_id);
    return sdk.get("/projects/".concat(root_project_id, "/credentials"), null, null, options);
  });
  return function get_all_repository_credentials(_x1025, _x1026, _x1027) {
    return _ref304.apply(this, arguments);
  };
}();
exports.get_all_repository_credentials = get_all_repository_credentials;
var create_query_task = function () {
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
exports.create_query_task = create_query_task;
var query_task_multi_results = function () {
  var _ref306 = _asyncToGenerator(function* (sdk, query_task_ids, options) {
    return sdk.get('/query_tasks/multi_results', {
      query_task_ids
    }, null, options);
  });
  return function query_task_multi_results(_x1031, _x1032, _x1033) {
    return _ref306.apply(this, arguments);
  };
}();
exports.query_task_multi_results = query_task_multi_results;
var query_task = function () {
  var _ref307 = _asyncToGenerator(function* (sdk, query_task_id, fields, options) {
    query_task_id = (0, _sdkRtl.encodeParam)(query_task_id);
    return sdk.get("/query_tasks/".concat(query_task_id), {
      fields
    }, null, options);
  });
  return function query_task(_x1034, _x1035, _x1036, _x1037) {
    return _ref307.apply(this, arguments);
  };
}();
exports.query_task = query_task;
var query_task_results = function () {
  var _ref308 = _asyncToGenerator(function* (sdk, query_task_id, options) {
    query_task_id = (0, _sdkRtl.encodeParam)(query_task_id);
    return sdk.get("/query_tasks/".concat(query_task_id, "/results"), null, null, options);
  });
  return function query_task_results(_x1038, _x1039, _x1040) {
    return _ref308.apply(this, arguments);
  };
}();
exports.query_task_results = query_task_results;
var query = function () {
  var _ref309 = _asyncToGenerator(function* (sdk, query_id, fields, options) {
    query_id = (0, _sdkRtl.encodeParam)(query_id);
    return sdk.get("/queries/".concat(query_id), {
      fields
    }, null, options);
  });
  return function query(_x1041, _x1042, _x1043, _x1044) {
    return _ref309.apply(this, arguments);
  };
}();
exports.query = query;
var query_for_slug = function () {
  var _ref310 = _asyncToGenerator(function* (sdk, slug, fields, options) {
    slug = (0, _sdkRtl.encodeParam)(slug);
    return sdk.get("/queries/slug/".concat(slug), {
      fields
    }, null, options);
  });
  return function query_for_slug(_x1045, _x1046, _x1047, _x1048) {
    return _ref310.apply(this, arguments);
  };
}();
exports.query_for_slug = query_for_slug;
var create_query = function () {
  var _ref311 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/queries', {
      fields
    }, body, options);
  });
  return function create_query(_x1049, _x1050, _x1051, _x1052) {
    return _ref311.apply(this, arguments);
  };
}();
exports.create_query = create_query;
var run_query = function () {
  var _ref312 = _asyncToGenerator(function* (sdk, request, options) {
    request.query_id = (0, _sdkRtl.encodeParam)(request.query_id);
    request.result_format = (0, _sdkRtl.encodeParam)(request.result_format);
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
exports.run_query = run_query;
var run_inline_query = function () {
  var _ref313 = _asyncToGenerator(function* (sdk, request, options) {
    request.result_format = (0, _sdkRtl.encodeParam)(request.result_format);
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
exports.run_inline_query = run_inline_query;
var run_url_encoded_query = function () {
  var _ref314 = _asyncToGenerator(function* (sdk, model_name, view_name, result_format, options) {
    model_name = (0, _sdkRtl.encodeParam)(model_name);
    view_name = (0, _sdkRtl.encodeParam)(view_name);
    result_format = (0, _sdkRtl.encodeParam)(result_format);
    return sdk.get("/queries/models/".concat(model_name, "/views/").concat(view_name, "/run/").concat(result_format), null, null, options);
  });
  return function run_url_encoded_query(_x1059, _x1060, _x1061, _x1062, _x1063) {
    return _ref314.apply(this, arguments);
  };
}();
exports.run_url_encoded_query = run_url_encoded_query;
var merge_query = function () {
  var _ref315 = _asyncToGenerator(function* (sdk, merge_query_id, fields, options) {
    merge_query_id = (0, _sdkRtl.encodeParam)(merge_query_id);
    return sdk.get("/merge_queries/".concat(merge_query_id), {
      fields
    }, null, options);
  });
  return function merge_query(_x1064, _x1065, _x1066, _x1067) {
    return _ref315.apply(this, arguments);
  };
}();
exports.merge_query = merge_query;
var create_merge_query = function () {
  var _ref316 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/merge_queries', {
      fields
    }, body, options);
  });
  return function create_merge_query(_x1068, _x1069, _x1070, _x1071) {
    return _ref316.apply(this, arguments);
  };
}();
exports.create_merge_query = create_merge_query;
var all_running_queries = function () {
  var _ref317 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/running_queries', null, null, options);
  });
  return function all_running_queries(_x1072, _x1073) {
    return _ref317.apply(this, arguments);
  };
}();
exports.all_running_queries = all_running_queries;
var kill_query = function () {
  var _ref318 = _asyncToGenerator(function* (sdk, query_task_id, options) {
    query_task_id = (0, _sdkRtl.encodeParam)(query_task_id);
    return sdk.delete("/running_queries/".concat(query_task_id), null, null, options);
  });
  return function kill_query(_x1074, _x1075, _x1076) {
    return _ref318.apply(this, arguments);
  };
}();
exports.kill_query = kill_query;
var create_sql_query = function () {
  var _ref319 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/sql_queries', null, body, options);
  });
  return function create_sql_query(_x1077, _x1078, _x1079) {
    return _ref319.apply(this, arguments);
  };
}();
exports.create_sql_query = create_sql_query;
var sql_query = function () {
  var _ref320 = _asyncToGenerator(function* (sdk, slug, options) {
    slug = (0, _sdkRtl.encodeParam)(slug);
    return sdk.get("/sql_queries/".concat(slug), null, null, options);
  });
  return function sql_query(_x1080, _x1081, _x1082) {
    return _ref320.apply(this, arguments);
  };
}();
exports.sql_query = sql_query;
var run_sql_query = function () {
  var _ref321 = _asyncToGenerator(function* (sdk, slug, result_format, download, options) {
    slug = (0, _sdkRtl.encodeParam)(slug);
    result_format = (0, _sdkRtl.encodeParam)(result_format);
    return sdk.post("/sql_queries/".concat(slug, "/run/").concat(result_format), {
      download
    }, null, options);
  });
  return function run_sql_query(_x1083, _x1084, _x1085, _x1086, _x1087) {
    return _ref321.apply(this, arguments);
  };
}();
exports.run_sql_query = run_sql_query;
var create_look_render_task = function () {
  var _ref322 = _asyncToGenerator(function* (sdk, look_id, result_format, width, height, fields, options) {
    look_id = (0, _sdkRtl.encodeParam)(look_id);
    result_format = (0, _sdkRtl.encodeParam)(result_format);
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
exports.create_look_render_task = create_look_render_task;
var create_query_render_task = function () {
  var _ref323 = _asyncToGenerator(function* (sdk, query_id, result_format, width, height, fields, options) {
    query_id = (0, _sdkRtl.encodeParam)(query_id);
    result_format = (0, _sdkRtl.encodeParam)(result_format);
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
exports.create_query_render_task = create_query_render_task;
var create_dashboard_render_task = function () {
  var _ref324 = _asyncToGenerator(function* (sdk, request, options) {
    request.dashboard_id = (0, _sdkRtl.encodeParam)(request.dashboard_id);
    request.result_format = (0, _sdkRtl.encodeParam)(request.result_format);
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
exports.create_dashboard_render_task = create_dashboard_render_task;
var render_task = function () {
  var _ref325 = _asyncToGenerator(function* (sdk, render_task_id, fields, options) {
    render_task_id = (0, _sdkRtl.encodeParam)(render_task_id);
    return sdk.get("/render_tasks/".concat(render_task_id), {
      fields
    }, null, options);
  });
  return function render_task(_x1105, _x1106, _x1107, _x1108) {
    return _ref325.apply(this, arguments);
  };
}();
exports.render_task = render_task;
var render_task_results = function () {
  var _ref326 = _asyncToGenerator(function* (sdk, render_task_id, options) {
    render_task_id = (0, _sdkRtl.encodeParam)(render_task_id);
    return sdk.get("/render_tasks/".concat(render_task_id, "/results"), null, null, options);
  });
  return function render_task_results(_x1109, _x1110, _x1111) {
    return _ref326.apply(this, arguments);
  };
}();
exports.render_task_results = render_task_results;
var create_dashboard_element_render_task = function () {
  var _ref327 = _asyncToGenerator(function* (sdk, dashboard_element_id, result_format, width, height, fields, options) {
    dashboard_element_id = (0, _sdkRtl.encodeParam)(dashboard_element_id);
    result_format = (0, _sdkRtl.encodeParam)(result_format);
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
exports.create_dashboard_element_render_task = create_dashboard_element_render_task;
var search_model_sets = function () {
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
exports.search_model_sets = search_model_sets;
var model_set = function () {
  var _ref329 = _asyncToGenerator(function* (sdk, model_set_id, fields, options) {
    model_set_id = (0, _sdkRtl.encodeParam)(model_set_id);
    return sdk.get("/model_sets/".concat(model_set_id), {
      fields
    }, null, options);
  });
  return function model_set(_x1122, _x1123, _x1124, _x1125) {
    return _ref329.apply(this, arguments);
  };
}();
exports.model_set = model_set;
var update_model_set = function () {
  var _ref330 = _asyncToGenerator(function* (sdk, model_set_id, body, options) {
    model_set_id = (0, _sdkRtl.encodeParam)(model_set_id);
    return sdk.patch("/model_sets/".concat(model_set_id), null, body, options);
  });
  return function update_model_set(_x1126, _x1127, _x1128, _x1129) {
    return _ref330.apply(this, arguments);
  };
}();
exports.update_model_set = update_model_set;
var delete_model_set = function () {
  var _ref331 = _asyncToGenerator(function* (sdk, model_set_id, options) {
    model_set_id = (0, _sdkRtl.encodeParam)(model_set_id);
    return sdk.delete("/model_sets/".concat(model_set_id), null, null, options);
  });
  return function delete_model_set(_x1130, _x1131, _x1132) {
    return _ref331.apply(this, arguments);
  };
}();
exports.delete_model_set = delete_model_set;
var all_model_sets = function () {
  var _ref332 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/model_sets', {
      fields
    }, null, options);
  });
  return function all_model_sets(_x1133, _x1134, _x1135) {
    return _ref332.apply(this, arguments);
  };
}();
exports.all_model_sets = all_model_sets;
var create_model_set = function () {
  var _ref333 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/model_sets', null, body, options);
  });
  return function create_model_set(_x1136, _x1137, _x1138) {
    return _ref333.apply(this, arguments);
  };
}();
exports.create_model_set = create_model_set;
var all_permissions = function () {
  var _ref334 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/permissions', null, null, options);
  });
  return function all_permissions(_x1139, _x1140) {
    return _ref334.apply(this, arguments);
  };
}();
exports.all_permissions = all_permissions;
var search_permission_sets = function () {
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
exports.search_permission_sets = search_permission_sets;
var permission_set = function () {
  var _ref336 = _asyncToGenerator(function* (sdk, permission_set_id, fields, options) {
    permission_set_id = (0, _sdkRtl.encodeParam)(permission_set_id);
    return sdk.get("/permission_sets/".concat(permission_set_id), {
      fields
    }, null, options);
  });
  return function permission_set(_x1144, _x1145, _x1146, _x1147) {
    return _ref336.apply(this, arguments);
  };
}();
exports.permission_set = permission_set;
var update_permission_set = function () {
  var _ref337 = _asyncToGenerator(function* (sdk, permission_set_id, body, options) {
    permission_set_id = (0, _sdkRtl.encodeParam)(permission_set_id);
    return sdk.patch("/permission_sets/".concat(permission_set_id), null, body, options);
  });
  return function update_permission_set(_x1148, _x1149, _x1150, _x1151) {
    return _ref337.apply(this, arguments);
  };
}();
exports.update_permission_set = update_permission_set;
var delete_permission_set = function () {
  var _ref338 = _asyncToGenerator(function* (sdk, permission_set_id, options) {
    permission_set_id = (0, _sdkRtl.encodeParam)(permission_set_id);
    return sdk.delete("/permission_sets/".concat(permission_set_id), null, null, options);
  });
  return function delete_permission_set(_x1152, _x1153, _x1154) {
    return _ref338.apply(this, arguments);
  };
}();
exports.delete_permission_set = delete_permission_set;
var all_permission_sets = function () {
  var _ref339 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/permission_sets', {
      fields
    }, null, options);
  });
  return function all_permission_sets(_x1155, _x1156, _x1157) {
    return _ref339.apply(this, arguments);
  };
}();
exports.all_permission_sets = all_permission_sets;
var create_permission_set = function () {
  var _ref340 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/permission_sets', null, body, options);
  });
  return function create_permission_set(_x1158, _x1159, _x1160) {
    return _ref340.apply(this, arguments);
  };
}();
exports.create_permission_set = create_permission_set;
var all_roles = function () {
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
exports.all_roles = all_roles;
var create_role = function () {
  var _ref342 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/roles', null, body, options);
  });
  return function create_role(_x1164, _x1165, _x1166) {
    return _ref342.apply(this, arguments);
  };
}();
exports.create_role = create_role;
var search_roles = function () {
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
exports.search_roles = search_roles;
var search_roles_with_user_count = function () {
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
exports.search_roles_with_user_count = search_roles_with_user_count;
var role = function () {
  var _ref345 = _asyncToGenerator(function* (sdk, role_id, options) {
    role_id = (0, _sdkRtl.encodeParam)(role_id);
    return sdk.get("/roles/".concat(role_id), null, null, options);
  });
  return function role(_x1173, _x1174, _x1175) {
    return _ref345.apply(this, arguments);
  };
}();
exports.role = role;
var update_role = function () {
  var _ref346 = _asyncToGenerator(function* (sdk, role_id, body, options) {
    role_id = (0, _sdkRtl.encodeParam)(role_id);
    return sdk.patch("/roles/".concat(role_id), null, body, options);
  });
  return function update_role(_x1176, _x1177, _x1178, _x1179) {
    return _ref346.apply(this, arguments);
  };
}();
exports.update_role = update_role;
var delete_role = function () {
  var _ref347 = _asyncToGenerator(function* (sdk, role_id, options) {
    role_id = (0, _sdkRtl.encodeParam)(role_id);
    return sdk.delete("/roles/".concat(role_id), null, null, options);
  });
  return function delete_role(_x1180, _x1181, _x1182) {
    return _ref347.apply(this, arguments);
  };
}();
exports.delete_role = delete_role;
var role_groups = function () {
  var _ref348 = _asyncToGenerator(function* (sdk, role_id, fields, options) {
    role_id = (0, _sdkRtl.encodeParam)(role_id);
    return sdk.get("/roles/".concat(role_id, "/groups"), {
      fields
    }, null, options);
  });
  return function role_groups(_x1183, _x1184, _x1185, _x1186) {
    return _ref348.apply(this, arguments);
  };
}();
exports.role_groups = role_groups;
var set_role_groups = function () {
  var _ref349 = _asyncToGenerator(function* (sdk, role_id, body, options) {
    role_id = (0, _sdkRtl.encodeParam)(role_id);
    return sdk.put("/roles/".concat(role_id, "/groups"), null, body, options);
  });
  return function set_role_groups(_x1187, _x1188, _x1189, _x1190) {
    return _ref349.apply(this, arguments);
  };
}();
exports.set_role_groups = set_role_groups;
var role_users = function () {
  var _ref350 = _asyncToGenerator(function* (sdk, request, options) {
    request.role_id = (0, _sdkRtl.encodeParam)(request.role_id);
    return sdk.get("/roles/".concat(request.role_id, "/users"), {
      fields: request.fields,
      direct_association_only: request.direct_association_only
    }, null, options);
  });
  return function role_users(_x1191, _x1192, _x1193) {
    return _ref350.apply(this, arguments);
  };
}();
exports.role_users = role_users;
var set_role_users = function () {
  var _ref351 = _asyncToGenerator(function* (sdk, role_id, body, options) {
    role_id = (0, _sdkRtl.encodeParam)(role_id);
    return sdk.put("/roles/".concat(role_id, "/users"), null, body, options);
  });
  return function set_role_users(_x1194, _x1195, _x1196, _x1197) {
    return _ref351.apply(this, arguments);
  };
}();
exports.set_role_users = set_role_users;
var scheduled_plans_for_space = function () {
  var _ref352 = _asyncToGenerator(function* (sdk, space_id, fields, options) {
    space_id = (0, _sdkRtl.encodeParam)(space_id);
    return sdk.get("/scheduled_plans/space/".concat(space_id), {
      fields
    }, null, options);
  });
  return function scheduled_plans_for_space(_x1198, _x1199, _x1200, _x1201) {
    return _ref352.apply(this, arguments);
  };
}();
exports.scheduled_plans_for_space = scheduled_plans_for_space;
var scheduled_plan = function () {
  var _ref353 = _asyncToGenerator(function* (sdk, scheduled_plan_id, fields, options) {
    scheduled_plan_id = (0, _sdkRtl.encodeParam)(scheduled_plan_id);
    return sdk.get("/scheduled_plans/".concat(scheduled_plan_id), {
      fields
    }, null, options);
  });
  return function scheduled_plan(_x1202, _x1203, _x1204, _x1205) {
    return _ref353.apply(this, arguments);
  };
}();
exports.scheduled_plan = scheduled_plan;
var update_scheduled_plan = function () {
  var _ref354 = _asyncToGenerator(function* (sdk, scheduled_plan_id, body, options) {
    scheduled_plan_id = (0, _sdkRtl.encodeParam)(scheduled_plan_id);
    return sdk.patch("/scheduled_plans/".concat(scheduled_plan_id), null, body, options);
  });
  return function update_scheduled_plan(_x1206, _x1207, _x1208, _x1209) {
    return _ref354.apply(this, arguments);
  };
}();
exports.update_scheduled_plan = update_scheduled_plan;
var delete_scheduled_plan = function () {
  var _ref355 = _asyncToGenerator(function* (sdk, scheduled_plan_id, options) {
    scheduled_plan_id = (0, _sdkRtl.encodeParam)(scheduled_plan_id);
    return sdk.delete("/scheduled_plans/".concat(scheduled_plan_id), null, null, options);
  });
  return function delete_scheduled_plan(_x1210, _x1211, _x1212) {
    return _ref355.apply(this, arguments);
  };
}();
exports.delete_scheduled_plan = delete_scheduled_plan;
var all_scheduled_plans = function () {
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
exports.all_scheduled_plans = all_scheduled_plans;
var create_scheduled_plan = function () {
  var _ref357 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/scheduled_plans', null, body, options);
  });
  return function create_scheduled_plan(_x1216, _x1217, _x1218) {
    return _ref357.apply(this, arguments);
  };
}();
exports.create_scheduled_plan = create_scheduled_plan;
var scheduled_plan_run_once = function () {
  var _ref358 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/scheduled_plans/run_once', null, body, options);
  });
  return function scheduled_plan_run_once(_x1219, _x1220, _x1221) {
    return _ref358.apply(this, arguments);
  };
}();
exports.scheduled_plan_run_once = scheduled_plan_run_once;
var scheduled_plans_for_look = function () {
  var _ref359 = _asyncToGenerator(function* (sdk, request, options) {
    request.look_id = (0, _sdkRtl.encodeParam)(request.look_id);
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
exports.scheduled_plans_for_look = scheduled_plans_for_look;
var scheduled_plans_for_dashboard = function () {
  var _ref360 = _asyncToGenerator(function* (sdk, request, options) {
    request.dashboard_id = (0, _sdkRtl.encodeParam)(request.dashboard_id);
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
exports.scheduled_plans_for_dashboard = scheduled_plans_for_dashboard;
var scheduled_plans_for_lookml_dashboard = function () {
  var _ref361 = _asyncToGenerator(function* (sdk, request, options) {
    request.lookml_dashboard_id = (0, _sdkRtl.encodeParam)(request.lookml_dashboard_id);
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
exports.scheduled_plans_for_lookml_dashboard = scheduled_plans_for_lookml_dashboard;
var scheduled_plan_run_once_by_id = function () {
  var _ref362 = _asyncToGenerator(function* (sdk, scheduled_plan_id, body, options) {
    scheduled_plan_id = (0, _sdkRtl.encodeParam)(scheduled_plan_id);
    return sdk.post("/scheduled_plans/".concat(scheduled_plan_id, "/run_once"), null, body, options);
  });
  return function scheduled_plan_run_once_by_id(_x1231, _x1232, _x1233, _x1234) {
    return _ref362.apply(this, arguments);
  };
}();
exports.scheduled_plan_run_once_by_id = scheduled_plan_run_once_by_id;
var session = function () {
  var _ref363 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/session', null, null, options);
  });
  return function session(_x1235, _x1236) {
    return _ref363.apply(this, arguments);
  };
}();
exports.session = session;
var update_session = function () {
  var _ref364 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.patch('/session', null, body, options);
  });
  return function update_session(_x1237, _x1238, _x1239) {
    return _ref364.apply(this, arguments);
  };
}();
exports.update_session = update_session;
var sql_interface_metadata = function () {
  var _ref365 = _asyncToGenerator(function* (sdk, avatica_request, options) {
    return sdk.get('/sql_interface_queries/metadata', {
      avatica_request
    }, null, options);
  });
  return function sql_interface_metadata(_x1240, _x1241, _x1242) {
    return _ref365.apply(this, arguments);
  };
}();
exports.sql_interface_metadata = sql_interface_metadata;
var run_sql_interface_query = function () {
  var _ref366 = _asyncToGenerator(function* (sdk, query_id, result_format, options) {
    result_format = (0, _sdkRtl.encodeParam)(result_format);
    return sdk.get("/sql_interface_queries/".concat(query_id, "/run/").concat(result_format), null, null, options);
  });
  return function run_sql_interface_query(_x1243, _x1244, _x1245, _x1246) {
    return _ref366.apply(this, arguments);
  };
}();
exports.run_sql_interface_query = run_sql_interface_query;
var create_sql_interface_query = function () {
  var _ref367 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/sql_interface_queries', null, body, options);
  });
  return function create_sql_interface_query(_x1247, _x1248, _x1249) {
    return _ref367.apply(this, arguments);
  };
}();
exports.create_sql_interface_query = create_sql_interface_query;
var all_themes = function () {
  var _ref368 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/themes', {
      fields
    }, null, options);
  });
  return function all_themes(_x1250, _x1251, _x1252) {
    return _ref368.apply(this, arguments);
  };
}();
exports.all_themes = all_themes;
var create_theme = function () {
  var _ref369 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/themes', null, body, options);
  });
  return function create_theme(_x1253, _x1254, _x1255) {
    return _ref369.apply(this, arguments);
  };
}();
exports.create_theme = create_theme;
var search_themes = function () {
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
exports.search_themes = search_themes;
var default_theme = function () {
  var _ref371 = _asyncToGenerator(function* (sdk, ts, options) {
    return sdk.get('/themes/default', {
      ts
    }, null, options);
  });
  return function default_theme(_x1259, _x1260, _x1261) {
    return _ref371.apply(this, arguments);
  };
}();
exports.default_theme = default_theme;
var set_default_theme = function () {
  var _ref372 = _asyncToGenerator(function* (sdk, name, options) {
    return sdk.put('/themes/default', {
      name
    }, null, options);
  });
  return function set_default_theme(_x1262, _x1263, _x1264) {
    return _ref372.apply(this, arguments);
  };
}();
exports.set_default_theme = set_default_theme;
var active_themes = function () {
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
exports.active_themes = active_themes;
var theme_or_default = function () {
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
exports.theme_or_default = theme_or_default;
var validate_theme = function () {
  var _ref375 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/themes/validate', null, body, options);
  });
  return function validate_theme(_x1272, _x1273, _x1274) {
    return _ref375.apply(this, arguments);
  };
}();
exports.validate_theme = validate_theme;
var theme = function () {
  var _ref376 = _asyncToGenerator(function* (sdk, theme_id, fields, options) {
    theme_id = (0, _sdkRtl.encodeParam)(theme_id);
    return sdk.get("/themes/".concat(theme_id), {
      fields
    }, null, options);
  });
  return function theme(_x1275, _x1276, _x1277, _x1278) {
    return _ref376.apply(this, arguments);
  };
}();
exports.theme = theme;
var update_theme = function () {
  var _ref377 = _asyncToGenerator(function* (sdk, theme_id, body, options) {
    theme_id = (0, _sdkRtl.encodeParam)(theme_id);
    return sdk.patch("/themes/".concat(theme_id), null, body, options);
  });
  return function update_theme(_x1279, _x1280, _x1281, _x1282) {
    return _ref377.apply(this, arguments);
  };
}();
exports.update_theme = update_theme;
var delete_theme = function () {
  var _ref378 = _asyncToGenerator(function* (sdk, theme_id, options) {
    theme_id = (0, _sdkRtl.encodeParam)(theme_id);
    return sdk.delete("/themes/".concat(theme_id), null, null, options);
  });
  return function delete_theme(_x1283, _x1284, _x1285) {
    return _ref378.apply(this, arguments);
  };
}();
exports.delete_theme = delete_theme;
var search_credentials_email = function () {
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
exports.search_credentials_email = search_credentials_email;
var me = function () {
  var _ref380 = _asyncToGenerator(function* (sdk, fields, options) {
    return sdk.get('/user', {
      fields
    }, null, options);
  });
  return function me(_x1289, _x1290, _x1291) {
    return _ref380.apply(this, arguments);
  };
}();
exports.me = me;
var all_users = function () {
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
exports.all_users = all_users;
var create_user = function () {
  var _ref382 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/users', {
      fields
    }, body, options);
  });
  return function create_user(_x1295, _x1296, _x1297, _x1298) {
    return _ref382.apply(this, arguments);
  };
}();
exports.create_user = create_user;
var search_users = function () {
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
exports.search_users = search_users;
var search_users_names = function () {
  var _ref384 = _asyncToGenerator(function* (sdk, request, options) {
    request.pattern = (0, _sdkRtl.encodeParam)(request.pattern);
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
exports.search_users_names = search_users_names;
var user = function () {
  var _ref385 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.get("/users/".concat(user_id), {
      fields
    }, null, options);
  });
  return function user(_x1305, _x1306, _x1307, _x1308) {
    return _ref385.apply(this, arguments);
  };
}();
exports.user = user;
var update_user = function () {
  var _ref386 = _asyncToGenerator(function* (sdk, user_id, body, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.patch("/users/".concat(user_id), {
      fields
    }, body, options);
  });
  return function update_user(_x1309, _x1310, _x1311, _x1312, _x1313) {
    return _ref386.apply(this, arguments);
  };
}();
exports.update_user = update_user;
var delete_user = function () {
  var _ref387 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.delete("/users/".concat(user_id), null, null, options);
  });
  return function delete_user(_x1314, _x1315, _x1316) {
    return _ref387.apply(this, arguments);
  };
}();
exports.delete_user = delete_user;
var user_for_credential = function () {
  var _ref388 = _asyncToGenerator(function* (sdk, credential_type, credential_id, fields, options) {
    credential_type = (0, _sdkRtl.encodeParam)(credential_type);
    credential_id = (0, _sdkRtl.encodeParam)(credential_id);
    return sdk.get("/users/credential/".concat(credential_type, "/").concat(credential_id), {
      fields
    }, null, options);
  });
  return function user_for_credential(_x1317, _x1318, _x1319, _x1320, _x1321) {
    return _ref388.apply(this, arguments);
  };
}();
exports.user_for_credential = user_for_credential;
var user_credentials_email = function () {
  var _ref389 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_email"), {
      fields
    }, null, options);
  });
  return function user_credentials_email(_x1322, _x1323, _x1324, _x1325) {
    return _ref389.apply(this, arguments);
  };
}();
exports.user_credentials_email = user_credentials_email;
var create_user_credentials_email = function () {
  var _ref390 = _asyncToGenerator(function* (sdk, user_id, body, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.post("/users/".concat(user_id, "/credentials_email"), {
      fields
    }, body, options);
  });
  return function create_user_credentials_email(_x1326, _x1327, _x1328, _x1329, _x1330) {
    return _ref390.apply(this, arguments);
  };
}();
exports.create_user_credentials_email = create_user_credentials_email;
var update_user_credentials_email = function () {
  var _ref391 = _asyncToGenerator(function* (sdk, user_id, body, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.patch("/users/".concat(user_id, "/credentials_email"), {
      fields
    }, body, options);
  });
  return function update_user_credentials_email(_x1331, _x1332, _x1333, _x1334, _x1335) {
    return _ref391.apply(this, arguments);
  };
}();
exports.update_user_credentials_email = update_user_credentials_email;
var delete_user_credentials_email = function () {
  var _ref392 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_email"), null, null, options);
  });
  return function delete_user_credentials_email(_x1336, _x1337, _x1338) {
    return _ref392.apply(this, arguments);
  };
}();
exports.delete_user_credentials_email = delete_user_credentials_email;
var user_credentials_totp = function () {
  var _ref393 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_totp"), {
      fields
    }, null, options);
  });
  return function user_credentials_totp(_x1339, _x1340, _x1341, _x1342) {
    return _ref393.apply(this, arguments);
  };
}();
exports.user_credentials_totp = user_credentials_totp;
var create_user_credentials_totp = function () {
  var _ref394 = _asyncToGenerator(function* (sdk, user_id, body, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.post("/users/".concat(user_id, "/credentials_totp"), {
      fields
    }, body, options);
  });
  return function create_user_credentials_totp(_x1343, _x1344, _x1345, _x1346, _x1347) {
    return _ref394.apply(this, arguments);
  };
}();
exports.create_user_credentials_totp = create_user_credentials_totp;
var delete_user_credentials_totp = function () {
  var _ref395 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_totp"), null, null, options);
  });
  return function delete_user_credentials_totp(_x1348, _x1349, _x1350) {
    return _ref395.apply(this, arguments);
  };
}();
exports.delete_user_credentials_totp = delete_user_credentials_totp;
var user_credentials_ldap = function () {
  var _ref396 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_ldap"), {
      fields
    }, null, options);
  });
  return function user_credentials_ldap(_x1351, _x1352, _x1353, _x1354) {
    return _ref396.apply(this, arguments);
  };
}();
exports.user_credentials_ldap = user_credentials_ldap;
var delete_user_credentials_ldap = function () {
  var _ref397 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_ldap"), null, null, options);
  });
  return function delete_user_credentials_ldap(_x1355, _x1356, _x1357) {
    return _ref397.apply(this, arguments);
  };
}();
exports.delete_user_credentials_ldap = delete_user_credentials_ldap;
var user_credentials_google = function () {
  var _ref398 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_google"), {
      fields
    }, null, options);
  });
  return function user_credentials_google(_x1358, _x1359, _x1360, _x1361) {
    return _ref398.apply(this, arguments);
  };
}();
exports.user_credentials_google = user_credentials_google;
var delete_user_credentials_google = function () {
  var _ref399 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_google"), null, null, options);
  });
  return function delete_user_credentials_google(_x1362, _x1363, _x1364) {
    return _ref399.apply(this, arguments);
  };
}();
exports.delete_user_credentials_google = delete_user_credentials_google;
var user_credentials_saml = function () {
  var _ref400 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_saml"), {
      fields
    }, null, options);
  });
  return function user_credentials_saml(_x1365, _x1366, _x1367, _x1368) {
    return _ref400.apply(this, arguments);
  };
}();
exports.user_credentials_saml = user_credentials_saml;
var delete_user_credentials_saml = function () {
  var _ref401 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_saml"), null, null, options);
  });
  return function delete_user_credentials_saml(_x1369, _x1370, _x1371) {
    return _ref401.apply(this, arguments);
  };
}();
exports.delete_user_credentials_saml = delete_user_credentials_saml;
var user_credentials_oidc = function () {
  var _ref402 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_oidc"), {
      fields
    }, null, options);
  });
  return function user_credentials_oidc(_x1372, _x1373, _x1374, _x1375) {
    return _ref402.apply(this, arguments);
  };
}();
exports.user_credentials_oidc = user_credentials_oidc;
var delete_user_credentials_oidc = function () {
  var _ref403 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_oidc"), null, null, options);
  });
  return function delete_user_credentials_oidc(_x1376, _x1377, _x1378) {
    return _ref403.apply(this, arguments);
  };
}();
exports.delete_user_credentials_oidc = delete_user_credentials_oidc;
var user_credentials_api3 = function () {
  var _ref404 = _asyncToGenerator(function* (sdk, user_id, credentials_api3_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    credentials_api3_id = (0, _sdkRtl.encodeParam)(credentials_api3_id);
    return sdk.get("/users/".concat(user_id, "/credentials_api3/").concat(credentials_api3_id), {
      fields
    }, null, options);
  });
  return function user_credentials_api3(_x1379, _x1380, _x1381, _x1382, _x1383) {
    return _ref404.apply(this, arguments);
  };
}();
exports.user_credentials_api3 = user_credentials_api3;
var delete_user_credentials_api3 = function () {
  var _ref405 = _asyncToGenerator(function* (sdk, user_id, credentials_api3_id, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    credentials_api3_id = (0, _sdkRtl.encodeParam)(credentials_api3_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_api3/").concat(credentials_api3_id), null, null, options);
  });
  return function delete_user_credentials_api3(_x1384, _x1385, _x1386, _x1387) {
    return _ref405.apply(this, arguments);
  };
}();
exports.delete_user_credentials_api3 = delete_user_credentials_api3;
var all_user_credentials_api3s = function () {
  var _ref406 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_api3"), {
      fields
    }, null, options);
  });
  return function all_user_credentials_api3s(_x1388, _x1389, _x1390, _x1391) {
    return _ref406.apply(this, arguments);
  };
}();
exports.all_user_credentials_api3s = all_user_credentials_api3s;
var create_user_credentials_api3 = function () {
  var _ref407 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.post("/users/".concat(user_id, "/credentials_api3"), {
      fields
    }, null, options);
  });
  return function create_user_credentials_api3(_x1392, _x1393, _x1394, _x1395) {
    return _ref407.apply(this, arguments);
  };
}();
exports.create_user_credentials_api3 = create_user_credentials_api3;
var user_credentials_embed = function () {
  var _ref408 = _asyncToGenerator(function* (sdk, user_id, credentials_embed_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    credentials_embed_id = (0, _sdkRtl.encodeParam)(credentials_embed_id);
    return sdk.get("/users/".concat(user_id, "/credentials_embed/").concat(credentials_embed_id), {
      fields
    }, null, options);
  });
  return function user_credentials_embed(_x1396, _x1397, _x1398, _x1399, _x1400) {
    return _ref408.apply(this, arguments);
  };
}();
exports.user_credentials_embed = user_credentials_embed;
var delete_user_credentials_embed = function () {
  var _ref409 = _asyncToGenerator(function* (sdk, user_id, credentials_embed_id, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    credentials_embed_id = (0, _sdkRtl.encodeParam)(credentials_embed_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_embed/").concat(credentials_embed_id), null, null, options);
  });
  return function delete_user_credentials_embed(_x1401, _x1402, _x1403, _x1404) {
    return _ref409.apply(this, arguments);
  };
}();
exports.delete_user_credentials_embed = delete_user_credentials_embed;
var all_user_credentials_embeds = function () {
  var _ref410 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_embed"), {
      fields
    }, null, options);
  });
  return function all_user_credentials_embeds(_x1405, _x1406, _x1407, _x1408) {
    return _ref410.apply(this, arguments);
  };
}();
exports.all_user_credentials_embeds = all_user_credentials_embeds;
var user_credentials_looker_openid = function () {
  var _ref411 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.get("/users/".concat(user_id, "/credentials_looker_openid"), {
      fields
    }, null, options);
  });
  return function user_credentials_looker_openid(_x1409, _x1410, _x1411, _x1412) {
    return _ref411.apply(this, arguments);
  };
}();
exports.user_credentials_looker_openid = user_credentials_looker_openid;
var delete_user_credentials_looker_openid = function () {
  var _ref412 = _asyncToGenerator(function* (sdk, user_id, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.delete("/users/".concat(user_id, "/credentials_looker_openid"), null, null, options);
  });
  return function delete_user_credentials_looker_openid(_x1413, _x1414, _x1415) {
    return _ref412.apply(this, arguments);
  };
}();
exports.delete_user_credentials_looker_openid = delete_user_credentials_looker_openid;
var user_session = function () {
  var _ref413 = _asyncToGenerator(function* (sdk, user_id, session_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    session_id = (0, _sdkRtl.encodeParam)(session_id);
    return sdk.get("/users/".concat(user_id, "/sessions/").concat(session_id), {
      fields
    }, null, options);
  });
  return function user_session(_x1416, _x1417, _x1418, _x1419, _x1420) {
    return _ref413.apply(this, arguments);
  };
}();
exports.user_session = user_session;
var delete_user_session = function () {
  var _ref414 = _asyncToGenerator(function* (sdk, user_id, session_id, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    session_id = (0, _sdkRtl.encodeParam)(session_id);
    return sdk.delete("/users/".concat(user_id, "/sessions/").concat(session_id), null, null, options);
  });
  return function delete_user_session(_x1421, _x1422, _x1423, _x1424) {
    return _ref414.apply(this, arguments);
  };
}();
exports.delete_user_session = delete_user_session;
var all_user_sessions = function () {
  var _ref415 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.get("/users/".concat(user_id, "/sessions"), {
      fields
    }, null, options);
  });
  return function all_user_sessions(_x1425, _x1426, _x1427, _x1428) {
    return _ref415.apply(this, arguments);
  };
}();
exports.all_user_sessions = all_user_sessions;
var create_user_credentials_email_password_reset = function () {
  var _ref416 = _asyncToGenerator(function* (sdk, request, options) {
    request.user_id = (0, _sdkRtl.encodeParam)(request.user_id);
    return sdk.post("/users/".concat(request.user_id, "/credentials_email/password_reset"), {
      expires: request.expires,
      fields: request.fields
    }, null, options);
  });
  return function create_user_credentials_email_password_reset(_x1429, _x1430, _x1431) {
    return _ref416.apply(this, arguments);
  };
}();
exports.create_user_credentials_email_password_reset = create_user_credentials_email_password_reset;
var user_roles = function () {
  var _ref417 = _asyncToGenerator(function* (sdk, request, options) {
    request.user_id = (0, _sdkRtl.encodeParam)(request.user_id);
    return sdk.get("/users/".concat(request.user_id, "/roles"), {
      fields: request.fields,
      direct_association_only: request.direct_association_only
    }, null, options);
  });
  return function user_roles(_x1432, _x1433, _x1434) {
    return _ref417.apply(this, arguments);
  };
}();
exports.user_roles = user_roles;
var set_user_roles = function () {
  var _ref418 = _asyncToGenerator(function* (sdk, user_id, body, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.put("/users/".concat(user_id, "/roles"), {
      fields
    }, body, options);
  });
  return function set_user_roles(_x1435, _x1436, _x1437, _x1438, _x1439) {
    return _ref418.apply(this, arguments);
  };
}();
exports.set_user_roles = set_user_roles;
var user_attribute_user_values = function () {
  var _ref419 = _asyncToGenerator(function* (sdk, request, options) {
    request.user_id = (0, _sdkRtl.encodeParam)(request.user_id);
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
exports.user_attribute_user_values = user_attribute_user_values;
var set_user_attribute_user_value = function () {
  var _ref420 = _asyncToGenerator(function* (sdk, user_id, user_attribute_id, body, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
    return sdk.patch("/users/".concat(user_id, "/attribute_values/").concat(user_attribute_id), null, body, options);
  });
  return function set_user_attribute_user_value(_x1443, _x1444, _x1445, _x1446, _x1447) {
    return _ref420.apply(this, arguments);
  };
}();
exports.set_user_attribute_user_value = set_user_attribute_user_value;
var delete_user_attribute_user_value = function () {
  var _ref421 = _asyncToGenerator(function* (sdk, user_id, user_attribute_id, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
    return sdk.delete("/users/".concat(user_id, "/attribute_values/").concat(user_attribute_id), null, null, options);
  });
  return function delete_user_attribute_user_value(_x1448, _x1449, _x1450, _x1451) {
    return _ref421.apply(this, arguments);
  };
}();
exports.delete_user_attribute_user_value = delete_user_attribute_user_value;
var send_user_credentials_email_password_reset = function () {
  var _ref422 = _asyncToGenerator(function* (sdk, user_id, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.post("/users/".concat(user_id, "/credentials_email/send_password_reset"), {
      fields
    }, null, options);
  });
  return function send_user_credentials_email_password_reset(_x1452, _x1453, _x1454, _x1455) {
    return _ref422.apply(this, arguments);
  };
}();
exports.send_user_credentials_email_password_reset = send_user_credentials_email_password_reset;
var wipeout_user_emails = function () {
  var _ref423 = _asyncToGenerator(function* (sdk, user_id, body, fields, options) {
    user_id = (0, _sdkRtl.encodeParam)(user_id);
    return sdk.post("/users/".concat(user_id, "/update_emails"), {
      fields
    }, body, options);
  });
  return function wipeout_user_emails(_x1456, _x1457, _x1458, _x1459, _x1460) {
    return _ref423.apply(this, arguments);
  };
}();
exports.wipeout_user_emails = wipeout_user_emails;
var create_embed_user = function () {
  var _ref424 = _asyncToGenerator(function* (sdk, body, options) {
    return sdk.post('/users/embed_user', null, body, options);
  });
  return function create_embed_user(_x1461, _x1462, _x1463) {
    return _ref424.apply(this, arguments);
  };
}();
exports.create_embed_user = create_embed_user;
var all_user_attributes = function () {
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
exports.all_user_attributes = all_user_attributes;
var create_user_attribute = function () {
  var _ref426 = _asyncToGenerator(function* (sdk, body, fields, options) {
    return sdk.post('/user_attributes', {
      fields
    }, body, options);
  });
  return function create_user_attribute(_x1467, _x1468, _x1469, _x1470) {
    return _ref426.apply(this, arguments);
  };
}();
exports.create_user_attribute = create_user_attribute;
var user_attribute = function () {
  var _ref427 = _asyncToGenerator(function* (sdk, user_attribute_id, fields, options) {
    user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
    return sdk.get("/user_attributes/".concat(user_attribute_id), {
      fields
    }, null, options);
  });
  return function user_attribute(_x1471, _x1472, _x1473, _x1474) {
    return _ref427.apply(this, arguments);
  };
}();
exports.user_attribute = user_attribute;
var update_user_attribute = function () {
  var _ref428 = _asyncToGenerator(function* (sdk, user_attribute_id, body, fields, options) {
    user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
    return sdk.patch("/user_attributes/".concat(user_attribute_id), {
      fields
    }, body, options);
  });
  return function update_user_attribute(_x1475, _x1476, _x1477, _x1478, _x1479) {
    return _ref428.apply(this, arguments);
  };
}();
exports.update_user_attribute = update_user_attribute;
var delete_user_attribute = function () {
  var _ref429 = _asyncToGenerator(function* (sdk, user_attribute_id, options) {
    user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
    return sdk.delete("/user_attributes/".concat(user_attribute_id), null, null, options);
  });
  return function delete_user_attribute(_x1480, _x1481, _x1482) {
    return _ref429.apply(this, arguments);
  };
}();
exports.delete_user_attribute = delete_user_attribute;
var all_user_attribute_group_values = function () {
  var _ref430 = _asyncToGenerator(function* (sdk, user_attribute_id, fields, options) {
    user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
    return sdk.get("/user_attributes/".concat(user_attribute_id, "/group_values"), {
      fields
    }, null, options);
  });
  return function all_user_attribute_group_values(_x1483, _x1484, _x1485, _x1486) {
    return _ref430.apply(this, arguments);
  };
}();
exports.all_user_attribute_group_values = all_user_attribute_group_values;
var set_user_attribute_group_values = function () {
  var _ref431 = _asyncToGenerator(function* (sdk, user_attribute_id, body, options) {
    user_attribute_id = (0, _sdkRtl.encodeParam)(user_attribute_id);
    return sdk.post("/user_attributes/".concat(user_attribute_id, "/group_values"), null, body, options);
  });
  return function set_user_attribute_group_values(_x1487, _x1488, _x1489, _x1490) {
    return _ref431.apply(this, arguments);
  };
}();
exports.set_user_attribute_group_values = set_user_attribute_group_values;
var all_workspaces = function () {
  var _ref432 = _asyncToGenerator(function* (sdk, options) {
    return sdk.get('/workspaces', null, null, options);
  });
  return function all_workspaces(_x1491, _x1492) {
    return _ref432.apply(this, arguments);
  };
}();
exports.all_workspaces = all_workspaces;
var workspace = function () {
  var _ref433 = _asyncToGenerator(function* (sdk, workspace_id, options) {
    workspace_id = (0, _sdkRtl.encodeParam)(workspace_id);
    return sdk.get("/workspaces/".concat(workspace_id), null, null, options);
  });
  return function workspace(_x1493, _x1494, _x1495) {
    return _ref433.apply(this, arguments);
  };
}();
exports.workspace = workspace;
//# sourceMappingURL=funcs.js.map