import type { IDictionary, DelimArray } from '@looker/sdk-rtl';
export interface IAccessToken {
    access_token?: string;
    token_type?: string;
    expires_in?: number;
    refresh_token?: string | null;
}
export interface IAlert {
    applied_dashboard_filters?: IAlertAppliedDashboardFilter[] | null;
    comparison_type: ComparisonType;
    cron: string;
    custom_url_base?: string | null;
    custom_url_params?: string | null;
    custom_url_label?: string | null;
    show_custom_url?: boolean;
    custom_title?: string | null;
    dashboard_element_id?: string | null;
    description?: string | null;
    destinations: IAlertDestination[] | null;
    field: IAlertField;
    followed?: boolean;
    followable?: boolean;
    id?: string;
    is_disabled?: boolean;
    disabled_reason?: string | null;
    is_public?: boolean;
    investigative_content_type?: InvestigativeContentType | null;
    investigative_content_id?: string | null;
    investigative_content_title?: string | null;
    lookml_dashboard_id?: string | null;
    lookml_link_id?: string | null;
    owner_id: string;
    owner_display_name?: string | null;
    threshold: number;
    time_series_condition_state?: IAlertConditionState;
}
export interface IAlertAppliedDashboardFilter {
    filter_title: string | null;
    field_name: string;
    filter_value: string;
    filter_description?: string | null;
}
export interface IAlertConditionState {
    previous_time_series_id?: string | null;
    latest_time_series_id?: string | null;
}
export interface IAlertDestination {
    destination_type: DestinationType;
    email_address?: string | null;
    action_hub_integration_id?: string | null;
    action_hub_form_params_json?: string | null;
}
export interface IAlertField {
    title: string;
    name: string;
    filter?: IAlertFieldFilter[] | null;
}
export interface IAlertFieldFilter {
    field_name: string;
    field_value: any;
    filter_value?: string | null;
}
export interface IAlertNotifications {
    notification_id?: string;
    alert_condition_id?: string;
    user_id?: string;
    is_read?: boolean;
    field_value?: number | null;
    threshold_value?: number | null;
    ran_at?: string;
    alert?: IMobilePayload;
}
export interface IAlertPatch {
    owner_id?: string | null;
    is_disabled?: boolean | null;
    disabled_reason?: string | null;
    is_public?: boolean | null;
    threshold?: number | null;
}
export declare enum Align {
    left = "left",
    right = "right"
}
export interface IApiSession {
    can?: IDictionary<boolean>;
    workspace_id?: string | null;
    sudo_user_id?: string | null;
}
export interface IApiVersion {
    looker_release_version?: string;
    current_version?: IApiVersionElement;
    supported_versions?: IApiVersionElement[];
    api_server_url?: string;
    web_server_url?: string;
}
export interface IApiVersionElement {
    version?: string | null;
    full_version?: string | null;
    status?: string | null;
    swagger_url?: string | null;
}
export interface IArtifact {
    key: string;
    value: string;
    content_type?: string | null;
    version?: number;
    namespace: string;
    created_at: Date;
    updated_at: Date;
    value_size: number;
    created_by_userid: string;
    updated_by_userid: string;
}
export interface IArtifactNamespace {
    namespace: string;
    count: number;
}
export interface IArtifactUsage {
    max_size: number;
    usage: number;
}
export interface IBackupConfiguration {
    can?: IDictionary<boolean>;
    type?: string | null;
    custom_s3_bucket?: string | null;
    custom_s3_bucket_region?: string | null;
    custom_s3_key?: string | null;
    custom_s3_secret?: string | null;
    url?: string | null;
}
export interface IBoard {
    can?: IDictionary<boolean>;
    content_metadata_id?: string | null;
    created_at?: Date | null;
    deleted_at?: Date | null;
    description?: string | null;
    board_sections?: IBoardSection[] | null;
    id?: string;
    section_order?: string[] | null;
    title?: string | null;
    updated_at?: Date | null;
    user_id?: string | null;
    primary_homepage?: boolean;
}
export interface IBoardItem {
    can?: IDictionary<boolean>;
    content_created_by?: string | null;
    content_favorite_id?: string | null;
    content_metadata_id?: string | null;
    content_updated_at?: string | null;
    custom_description?: string | null;
    custom_title?: string | null;
    custom_url?: string | null;
    dashboard_id?: string | null;
    description?: string | null;
    favorite_count?: number | null;
    board_section_id?: string | null;
    id?: string;
    image_url?: string | null;
    location?: string | null;
    look_id?: string | null;
    lookml_dashboard_id?: string | null;
    order?: number | null;
    title?: string | null;
    url?: string;
    use_custom_description?: boolean;
    use_custom_title?: boolean;
    use_custom_url?: boolean;
    view_count?: number | null;
    custom_image_data_base64?: string | null;
    custom_image_url?: string | null;
    use_custom_image?: boolean;
}
export interface IBoardSection {
    can?: IDictionary<boolean>;
    created_at?: Date | null;
    deleted_at?: Date | null;
    description?: string | null;
    board_id?: string | null;
    board_items?: IBoardItem[] | null;
    id?: string;
    item_order?: string[] | null;
    visible_item_order?: string[] | null;
    title?: string | null;
    updated_at?: Date | null;
}
export declare enum Category {
    parameter = "parameter",
    filter = "filter",
    measure = "measure",
    dimension = "dimension"
}
export interface IColorCollection {
    id?: string;
    label?: string;
    categoricalPalettes?: IDiscretePalette[];
    sequentialPalettes?: IContinuousPalette[];
    divergingPalettes?: IContinuousPalette[];
}
export interface IColorStop {
    color?: string;
    offset?: number;
}
export interface IColumnSearch {
    schema_name?: string | null;
    table_name?: string | null;
    column_name?: string | null;
    data_type?: string | null;
}
export declare enum ComparisonType {
    EQUAL_TO = "EQUAL_TO",
    GREATER_THAN = "GREATER_THAN",
    GREATER_THAN_OR_EQUAL_TO = "GREATER_THAN_OR_EQUAL_TO",
    LESS_THAN = "LESS_THAN",
    LESS_THAN_OR_EQUAL_TO = "LESS_THAN_OR_EQUAL_TO",
    INCREASES_BY = "INCREASES_BY",
    DECREASES_BY = "DECREASES_BY",
    CHANGES_BY = "CHANGES_BY"
}
export interface IConnectionFeatures {
    dialect_name?: string;
    cost_estimate?: boolean;
    multiple_databases?: boolean;
    column_search?: boolean;
    persistent_table_indexes?: boolean;
    persistent_derived_tables?: boolean;
    turtles?: boolean;
    percentile?: boolean;
    distinct_percentile?: boolean;
    stable_views?: boolean;
    milliseconds?: boolean;
    microseconds?: boolean;
    subtotals?: boolean;
    location?: boolean;
    timezone?: boolean;
    connection_pooling?: boolean;
}
export interface IContentFavorite {
    id?: string;
    user_id?: string;
    content_metadata_id?: string;
    look_id?: string | null;
    dashboard_id?: string | null;
    look?: ILookBasic;
    dashboard?: IDashboardBase;
    board_id?: string | null;
}
export interface IContentMeta {
    can?: IDictionary<boolean>;
    id?: string;
    name?: string | null;
    parent_id?: string | null;
    dashboard_id?: string | null;
    look_id?: string | null;
    folder_id?: string | null;
    content_type?: string | null;
    inherits?: boolean;
    inheriting_id?: string | null;
    slug?: string | null;
}
export interface IContentMetaGroupUser {
    can?: IDictionary<boolean>;
    id?: string;
    content_metadata_id?: string | null;
    permission_type?: PermissionType | null;
    group_id?: string | null;
    user_id?: string | null;
}
export interface IContentSearch {
    can?: IDictionary<boolean>;
    content_id?: string | null;
    type?: string | null;
    title?: string | null;
    description?: string | null;
    folder_id?: string | null;
    folder_name?: string | null;
    view_count?: number | null;
    preferred_viewer?: string | null;
}
export interface IContentValidation {
    content_with_errors?: IContentValidatorError[] | null;
    computation_time?: number | null;
    total_looks_validated?: number | null;
    total_dashboard_elements_validated?: number | null;
    total_dashboard_filters_validated?: number | null;
    total_scheduled_plans_validated?: number | null;
    total_alerts_validated?: number | null;
    total_explores_validated?: number | null;
}
export interface IContentValidationAlert {
    id?: string;
    lookml_dashboard_id?: string | null;
    lookml_link_id?: string | null;
    custom_url_base?: string | null;
    custom_url_params?: string | null;
    custom_url_label?: string | null;
    show_custom_url?: boolean;
    custom_title?: string | null;
}
export interface IContentValidationDashboard {
    description?: string | null;
    id?: string;
    folder?: IContentValidationFolder;
    title?: string | null;
    url?: string | null;
}
export interface IContentValidationDashboardElement {
    body_text?: string | null;
    dashboard_id?: string | null;
    id?: string;
    look_id?: string | null;
    note_display?: string | null;
    note_state?: string | null;
    note_text?: string | null;
    note_text_as_html?: string | null;
    query_id?: string | null;
    subtitle_text?: string | null;
    title?: string | null;
    title_hidden?: boolean;
    title_text?: string | null;
    type?: string | null;
    rich_content_json?: string | null;
    extension_id?: string | null;
}
export interface IContentValidationDashboardFilter {
    id?: string;
    dashboard_id?: string | null;
    name?: string | null;
    title?: string | null;
    type?: string | null;
    default_value?: string | null;
    model?: string | null;
    explore?: string | null;
    dimension?: string | null;
}
export interface IContentValidationError {
    message?: string | null;
    field_name?: string | null;
    model_name?: string | null;
    explore_name?: string | null;
    removable?: boolean;
}
export interface IContentValidationFolder {
    name: string;
    id?: string;
}
export interface IContentValidationLook {
    id?: string;
    title?: string | null;
    short_url?: string | null;
    folder?: IContentValidationFolder;
}
export interface IContentValidationLookMLDashboard {
    id?: string;
    title?: string | null;
    space_id?: string | null;
}
export interface IContentValidationLookMLDashboardElement {
    lookml_link_id?: string | null;
    title?: string | null;
}
export interface IContentValidationScheduledPlan {
    name?: string | null;
    look_id?: string | null;
    id?: string;
}
export interface IContentValidatorError {
    look?: IContentValidationLook;
    dashboard?: IContentValidationDashboard;
    dashboard_element?: IContentValidationDashboardElement;
    dashboard_filter?: IContentValidationDashboardFilter;
    scheduled_plan?: IContentValidationScheduledPlan;
    alert?: IContentValidationAlert;
    lookml_dashboard?: IContentValidationLookMLDashboard;
    lookml_dashboard_element?: IContentValidationLookMLDashboardElement;
    errors?: IContentValidationError[] | null;
    id?: string;
}
export interface IContentView {
    can?: IDictionary<boolean>;
    id?: string;
    look_id?: string | null;
    dashboard_id?: string | null;
    title?: string | null;
    content_metadata_id?: string | null;
    user_id?: string | null;
    group_id?: string | null;
    view_count?: number | null;
    favorite_count?: number | null;
    last_viewed_at?: string | null;
    start_of_week_date?: string | null;
}
export interface IContinuousPalette {
    id?: string;
    label?: string | null;
    type?: string;
    stops?: IColorStop[];
}
export interface ICostEstimate {
    cost?: number;
    cache_hit?: boolean;
    cost_unit?: string;
    message?: string;
}
export interface ICreateCostEstimate {
    sql?: string;
}
export interface ICreateCredentialsApi3 {
    can?: IDictionary<boolean>;
    id?: string;
    client_id?: string | null;
    created_at?: string | null;
    is_disabled?: boolean;
    type?: string | null;
    client_secret?: string | null;
    url?: string | null;
}
export interface ICreateDashboardFilter {
    id?: string;
    dashboard_id: string | null;
    name: string | null;
    title: string | null;
    type: string | null;
    default_value?: string | null;
    model?: string | null;
    explore?: string | null;
    dimension?: string | null;
    field?: IDictionary<any> | null;
    row?: number | null;
    listens_to_filters?: string[] | null;
    allow_multiple_values?: boolean;
    required?: boolean;
    ui_config?: IDictionary<any> | null;
}
export interface ICreateDashboardRenderTask {
    dashboard_filters?: string | null;
    dashboard_style?: string | null;
}
export interface ICreateEmbedUserRequest {
    external_user_id: string;
}
export interface ICreateFolder {
    name: string;
    parent_id: string;
}
export interface ICreateOAuthApplicationUserStateRequest {
    user_id: string;
    oauth_application_id: string;
    access_token: string;
    access_token_expires_at: Date;
    refresh_token?: string | null;
    refresh_token_expires_at?: Date | null;
}
export interface ICreateOAuthApplicationUserStateResponse {
    user_id: string;
    oauth_application_id: string;
}
export interface ICreateQueryTask {
    can?: IDictionary<boolean>;
    query_id: string | null;
    result_format: ResultFormat | null;
    source?: string | null;
    deferred?: boolean;
    look_id?: string | null;
    dashboard_id?: string | null;
}
export interface ICredentialsApi3 {
    can?: IDictionary<boolean>;
    id?: string;
    client_id?: string | null;
    created_at?: string | null;
    is_disabled?: boolean;
    type?: string | null;
    url?: string | null;
}
export interface ICredentialsEmail {
    can?: IDictionary<boolean>;
    created_at?: string | null;
    email?: string | null;
    forced_password_reset_at_next_login?: boolean;
    user_id?: string | null;
    is_disabled?: boolean;
    logged_in_at?: string | null;
    password_reset_url?: string | null;
    account_setup_url?: string | null;
    type?: string | null;
    url?: string | null;
    user_url?: string | null;
}
export interface ICredentialsEmailSearch {
    can?: IDictionary<boolean>;
    created_at?: string | null;
    email?: string | null;
    forced_password_reset_at_next_login?: boolean;
    user_id?: string | null;
    is_disabled?: boolean;
    logged_in_at?: string | null;
    password_reset_url?: string | null;
    account_setup_url?: string | null;
    type?: string | null;
    url?: string | null;
    user_url?: string | null;
}
export interface ICredentialsEmbed {
    can?: IDictionary<boolean>;
    created_at?: string | null;
    external_group_id?: string | null;
    external_user_id?: string | null;
    id?: string;
    is_disabled?: boolean;
    logged_in_at?: string | null;
    type?: string | null;
    url?: string | null;
}
export interface ICredentialsGoogle {
    can?: IDictionary<boolean>;
    created_at?: string | null;
    domain?: string | null;
    email?: string | null;
    google_user_id?: string | null;
    is_disabled?: boolean;
    logged_in_at?: string | null;
    type?: string | null;
    url?: string | null;
}
export interface ICredentialsLDAP {
    can?: IDictionary<boolean>;
    created_at?: string | null;
    email?: string | null;
    is_disabled?: boolean;
    ldap_dn?: string | null;
    ldap_id?: string | null;
    logged_in_at?: string | null;
    type?: string | null;
    url?: string | null;
}
export interface ICredentialsLookerOpenid {
    can?: IDictionary<boolean>;
    created_at?: string | null;
    email?: string | null;
    is_disabled?: boolean;
    logged_in_at?: string | null;
    logged_in_ip?: string | null;
    type?: string | null;
    url?: string | null;
    user_url?: string | null;
}
export interface ICredentialsOIDC {
    can?: IDictionary<boolean>;
    created_at?: string | null;
    email?: string | null;
    is_disabled?: boolean;
    logged_in_at?: string | null;
    oidc_user_id?: string | null;
    type?: string | null;
    url?: string | null;
}
export interface ICredentialsSaml {
    can?: IDictionary<boolean>;
    created_at?: string | null;
    email?: string | null;
    is_disabled?: boolean;
    logged_in_at?: string | null;
    saml_user_id?: string | null;
    type?: string | null;
    url?: string | null;
}
export interface ICredentialsTotp {
    can?: IDictionary<boolean>;
    created_at?: string | null;
    is_disabled?: boolean;
    type?: string | null;
    verified?: boolean;
    url?: string | null;
}
export interface ICustomWelcomeEmail {
    enabled?: boolean;
    content?: string | null;
    subject?: string | null;
    header?: string | null;
}
export interface IDashboard {
    can?: IDictionary<boolean>;
    content_favorite_id?: string | null;
    content_metadata_id?: string | null;
    description?: string | null;
    hidden?: boolean;
    id?: string;
    model?: ILookModel;
    query_timezone?: string | null;
    readonly?: boolean;
    refresh_interval?: string | null;
    refresh_interval_to_i?: number | null;
    folder?: IFolderBase;
    title?: string | null;
    user_id?: string | null;
    slug?: string | null;
    preferred_viewer?: string | null;
    alert_sync_with_dashboard_filter_enabled?: boolean;
    background_color?: string | null;
    created_at?: Date | null;
    crossfilter_enabled?: boolean;
    dashboard_elements?: IDashboardElement[] | null;
    dashboard_filters?: IDashboardFilter[] | null;
    dashboard_layouts?: IDashboardLayout[] | null;
    deleted?: boolean;
    deleted_at?: Date | null;
    deleter_id?: string | null;
    edit_uri?: string | null;
    enable_viz_full_screen?: boolean;
    favorite_count?: number | null;
    filters_bar_collapsed?: boolean;
    filters_location_top?: boolean;
    last_accessed_at?: Date | null;
    last_viewed_at?: Date | null;
    updated_at?: Date | null;
    last_updater_id?: string | null;
    last_updater_name?: string | null;
    user_name?: string | null;
    load_configuration?: string | null;
    lookml_link_id?: string | null;
    show_filters_bar?: boolean | null;
    show_title?: boolean | null;
    folder_id?: string | null;
    text_tile_text_color?: string | null;
    tile_background_color?: string | null;
    tile_text_color?: string | null;
    title_color?: string | null;
    view_count?: number | null;
    appearance?: IDashboardAppearance;
    url?: string | null;
}
export interface IDashboardAggregateTableLookml {
    dashboard_id?: string | null;
    aggregate_table_lookml?: string | null;
}
export interface IDashboardAppearance {
    page_side_margins?: number | null;
    page_background_color?: string | null;
    tile_title_alignment?: string | null;
    tile_space_between?: number | null;
    tile_background_color?: string | null;
    tile_shadow?: boolean | null;
    key_color?: string | null;
}
export interface IDashboardBase {
    can?: IDictionary<boolean>;
    content_favorite_id?: string | null;
    content_metadata_id?: string | null;
    description?: string | null;
    hidden?: boolean;
    id?: string;
    model?: ILookModel;
    query_timezone?: string | null;
    readonly?: boolean;
    refresh_interval?: string | null;
    refresh_interval_to_i?: number | null;
    folder?: IFolderBase;
    title?: string | null;
    user_id?: string | null;
    slug?: string | null;
    preferred_viewer?: string | null;
}
export interface IDashboardElement {
    can?: IDictionary<boolean>;
    body_text?: string | null;
    body_text_as_html?: string | null;
    dashboard_id?: string | null;
    edit_uri?: string | null;
    id?: string;
    look?: ILookWithQuery;
    look_id?: string | null;
    lookml_link_id?: string | null;
    merge_result_id?: string | null;
    note_display?: string | null;
    note_state?: string | null;
    note_text?: string | null;
    note_text_as_html?: string | null;
    query?: IQuery;
    query_id?: string | null;
    refresh_interval?: string | null;
    refresh_interval_to_i?: number | null;
    result_maker?: IResultMakerWithIdVisConfigAndDynamicFields;
    result_maker_id?: string | null;
    subtitle_text?: string | null;
    title?: string | null;
    title_hidden?: boolean;
    title_text?: string | null;
    type?: string | null;
    alert_count?: number | null;
    rich_content_json?: string | null;
    title_text_as_html?: string | null;
    subtitle_text_as_html?: string | null;
    extension_id?: string | null;
}
export interface IDashboardFilter {
    can?: IDictionary<boolean>;
    id?: string;
    dashboard_id?: string | null;
    name?: string | null;
    title?: string | null;
    type?: string | null;
    default_value?: string | null;
    model?: string | null;
    explore?: string | null;
    dimension?: string | null;
    field?: IDictionary<any> | null;
    row?: number | null;
    listens_to_filters?: string[] | null;
    allow_multiple_values?: boolean;
    required?: boolean;
    ui_config?: IDictionary<any> | null;
}
export interface IDashboardLayout {
    can?: IDictionary<boolean>;
    id?: string;
    dashboard_id?: string | null;
    type?: string | null;
    active?: boolean;
    column_width?: number | null;
    width?: number | null;
    deleted?: boolean;
    dashboard_title?: string | null;
    dashboard_layout_components?: IDashboardLayoutComponent[] | null;
}
export interface IDashboardLayoutComponent {
    can?: IDictionary<boolean>;
    id?: string;
    dashboard_layout_id?: string | null;
    dashboard_element_id?: string | null;
    row?: number | null;
    column?: number | null;
    width?: number | null;
    height?: number | null;
    deleted?: boolean;
    element_title?: string | null;
    element_title_hidden?: boolean;
    vis_type?: string | null;
}
export interface IDashboardLookml {
    dashboard_id?: string | null;
    folder_id?: string | null;
    lookml?: string | null;
}
export interface IDataActionForm {
    state?: IDataActionUserState;
    fields?: IDataActionFormField[] | null;
}
export interface IDataActionFormField {
    name?: string | null;
    label?: string | null;
    description?: string | null;
    type?: string | null;
    default?: string | null;
    oauth_url?: string | null;
    interactive?: boolean;
    required?: boolean;
    options?: IDataActionFormSelectOption[] | null;
}
export interface IDataActionFormSelectOption {
    name?: string | null;
    label?: string | null;
}
export interface IDataActionRequest {
    action?: IDictionary<any> | null;
    form_values?: IDictionary<string> | null;
}
export interface IDataActionResponse {
    webhook_id?: string | null;
    success?: boolean;
    refresh_query?: boolean;
    validation_errors?: IValidationError;
    message?: string | null;
}
export interface IDataActionUserState {
    data?: string | null;
    refresh_time?: number | null;
}
export interface IDatagroup {
    can?: IDictionary<boolean>;
    created_at?: number | null;
    id?: string;
    model_name?: string | null;
    name?: string | null;
    stale_before?: number | null;
    trigger_check_at?: number | null;
    trigger_error?: string | null;
    trigger_value?: string | null;
    triggered_at?: number | null;
}
export interface IDBConnection {
    can?: IDictionary<boolean>;
    name?: string;
    dialect?: IDialect;
    snippets?: ISnippet[];
    pdts_enabled?: boolean;
    host?: string | null;
    port?: string | null;
    username?: string | null;
    password?: string | null;
    uses_oauth?: boolean;
    certificate?: string | null;
    file_type?: string | null;
    database?: string | null;
    db_timezone?: string | null;
    query_timezone?: string | null;
    schema?: string | null;
    max_connections?: number | null;
    max_billing_gigabytes?: string | null;
    ssl?: boolean;
    verify_ssl?: boolean;
    tmp_db_name?: string | null;
    jdbc_additional_params?: string | null;
    pool_timeout?: number | null;
    dialect_name?: string | null;
    supports_data_studio_link?: boolean;
    created_at?: string | null;
    user_id?: string | null;
    example?: boolean;
    user_db_credentials?: boolean | null;
    user_attribute_fields?: string[] | null;
    maintenance_cron?: string | null;
    last_regen_at?: string | null;
    last_reap_at?: string | null;
    sql_runner_precache_tables?: boolean;
    sql_writing_with_info_schema?: boolean;
    after_connect_statements?: string | null;
    pdt_context_override?: IDBConnectionOverride;
    managed?: boolean;
    custom_local_port?: number | null;
    tunnel_id?: string | null;
    uses_tns?: boolean | null;
    pdt_concurrency?: number | null;
    disable_context_comment?: boolean | null;
    oauth_application_id?: string | null;
    always_retry_failed_builds?: boolean | null;
    cost_estimate_enabled?: boolean | null;
    pdt_api_control_enabled?: boolean | null;
}
export interface IDBConnectionBase {
    can?: IDictionary<boolean>;
    name?: string;
    dialect?: IDialect;
    snippets?: ISnippet[];
    pdts_enabled?: boolean;
}
export interface IDBConnectionOverride {
    context?: string;
    host?: string | null;
    port?: string | null;
    username?: string | null;
    password?: string | null;
    has_password?: boolean;
    certificate?: string | null;
    file_type?: string | null;
    database?: string | null;
    schema?: string | null;
    jdbc_additional_params?: string | null;
    after_connect_statements?: string | null;
}
export interface IDBConnectionTestResult {
    can?: IDictionary<boolean>;
    connection_string?: string | null;
    message?: string | null;
    name?: string | null;
    status?: string | null;
}
export interface IDelegateOauthTest {
    name?: string;
    installation_target_id?: string;
    installation_id?: string;
    success?: boolean;
}
export interface IDependencyGraph {
    graph_text?: string;
}
export declare enum DependencyStatus {
    lock_optional = "lock_optional",
    lock_required = "lock_required",
    lock_error = "lock_error",
    install_none = "install_none"
}
export declare enum DestinationType {
    EMAIL = "EMAIL",
    ACTION_HUB = "ACTION_HUB"
}
export declare enum DeviceType {
    android = "android",
    ios = "ios"
}
export interface IDialect {
    name?: string;
    label?: string;
    supports_cost_estimate?: boolean;
    cost_estimate_style?: string | null;
    persistent_table_indexes?: string;
    persistent_table_sortkeys?: string;
    persistent_table_distkey?: string;
    supports_streaming?: boolean;
    automatically_run_sql_runner_snippets?: boolean;
    connection_tests?: string[];
    supports_inducer?: boolean;
    supports_multiple_databases?: boolean;
    supports_persistent_derived_tables?: boolean;
    has_ssl_support?: boolean;
}
export interface IDialectInfo {
    can?: IDictionary<boolean>;
    default_max_connections?: string | null;
    default_port?: string | null;
    installed?: boolean;
    label?: string | null;
    label_for_database_equivalent?: string | null;
    name?: string | null;
    supported_options?: IDialectInfoOptions;
}
export interface IDialectInfoOptions {
    additional_params?: boolean;
    after_connect_statements?: boolean;
    analytical_view_dataset?: boolean;
    auth?: boolean;
    cost_estimate?: boolean;
    disable_context_comment?: boolean;
    host?: boolean;
    instance_name?: boolean;
    max_billing_gigabytes?: boolean;
    oauth_credentials?: boolean;
    pdts_for_oauth?: boolean;
    port?: boolean;
    project_name?: boolean;
    schema?: boolean;
    service_account_credentials?: boolean;
    ssl?: boolean;
    timezone?: boolean;
    tmp_table?: boolean;
    tns?: boolean;
    username?: boolean;
    username_required?: boolean;
}
export interface IDigestEmails {
    is_enabled?: boolean;
}
export interface IDigestEmailSend {
    configuration_delivered?: boolean;
}
export interface IDiscretePalette {
    id?: string;
    label?: string | null;
    type?: string;
    colors?: string[];
}
export interface IEgressIpAddresses {
    egress_ip_addresses?: string[] | null;
}
export interface IEmbedConfig {
    domain_allowlist?: string[] | null;
    alert_url_allowlist?: string[] | null;
    alert_url_param_owner?: string | null;
    alert_url_label?: string | null;
    sso_auth_enabled?: boolean;
    embed_cookieless_v2?: boolean;
    embed_content_navigation?: boolean;
    embed_content_management?: boolean;
    strict_sameorigin_for_login?: boolean;
    look_filters?: boolean;
    hide_look_navigation?: boolean;
}
export interface IEmbedCookielessSessionAcquire {
    session_length?: number | null;
    force_logout_login?: boolean;
    external_user_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    user_timezone?: string | null;
    permissions?: string[] | null;
    models?: string[] | null;
    group_ids?: string[] | null;
    external_group_id?: string | null;
    user_attributes?: IDictionary<any> | null;
    embed_domain?: string | null;
    session_reference_token?: string | null;
}
export interface IEmbedCookielessSessionAcquireResponse {
    authentication_token?: string | null;
    authentication_token_ttl?: number | null;
    navigation_token?: string | null;
    navigation_token_ttl?: number | null;
    api_token?: string | null;
    api_token_ttl?: number | null;
    session_reference_token?: string | null;
    session_reference_token_ttl?: number | null;
}
export interface IEmbedCookielessSessionGenerateTokens {
    session_reference_token: string;
    navigation_token?: string | null;
    api_token?: string | null;
}
export interface IEmbedCookielessSessionGenerateTokensResponse {
    navigation_token?: string | null;
    navigation_token_ttl?: number | null;
    api_token?: string | null;
    api_token_ttl?: number | null;
    session_reference_token: string;
    session_reference_token_ttl?: number | null;
}
export interface IEmbedParams {
    target_url: string;
    session_length?: number | null;
    force_logout_login?: boolean;
}
export interface IEmbedSecret {
    algorithm?: string | null;
    created_at?: string | null;
    enabled?: boolean;
    id?: string;
    secret?: string | null;
    user_id?: string | null;
    secret_type?: SecretType;
}
export interface IEmbedSsoParams {
    target_url: string;
    session_length?: number | null;
    force_logout_login?: boolean;
    external_user_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    user_timezone?: string | null;
    permissions?: string[] | null;
    models?: string[] | null;
    group_ids?: string[] | null;
    external_group_id?: string | null;
    user_attributes?: IDictionary<any> | null;
    secret_id?: string | null;
    embed_domain?: string | null;
}
export interface IEmbedUrlResponse {
    url?: string;
}
export interface IError {
    message: string | null;
    documentation_url: string | null;
}
export interface IExternalOauthApplication {
    can?: IDictionary<boolean>;
    id?: string;
    name?: string;
    client_id?: string;
    client_secret?: string;
    dialect_name?: string | null;
    created_at?: Date;
}
export declare enum FillStyle {
    enumeration = "enumeration",
    range = "range"
}
export interface IFolder {
    name: string;
    parent_id?: string | null;
    id?: string;
    content_metadata_id?: string | null;
    created_at?: Date | null;
    creator_id?: string | null;
    child_count?: number | null;
    external_id?: string | null;
    is_embed?: boolean;
    is_embed_shared_root?: boolean;
    is_embed_users_root?: boolean;
    is_personal?: boolean;
    is_personal_descendant?: boolean;
    is_shared_root?: boolean;
    is_users_root?: boolean;
    can?: IDictionary<boolean>;
    dashboards?: IDashboardBase[] | null;
    looks?: ILookWithDashboards[] | null;
}
export interface IFolderBase {
    name: string;
    parent_id?: string | null;
    id?: string;
    content_metadata_id?: string | null;
    created_at?: Date | null;
    creator_id?: string | null;
    child_count?: number | null;
    external_id?: string | null;
    is_embed?: boolean;
    is_embed_shared_root?: boolean;
    is_embed_users_root?: boolean;
    is_personal?: boolean;
    is_personal_descendant?: boolean;
    is_shared_root?: boolean;
    is_users_root?: boolean;
    can?: IDictionary<boolean>;
}
export declare enum Format {
    topojson = "topojson",
    vector_tile_region = "vector_tile_region"
}
export interface IGitBranch {
    can?: IDictionary<boolean>;
    name?: string | null;
    remote?: string | null;
    remote_name?: string | null;
    error?: string | null;
    message?: string | null;
    owner_name?: string | null;
    readonly?: boolean;
    personal?: boolean;
    is_local?: boolean;
    is_remote?: boolean;
    is_production?: boolean;
    ahead_count?: number | null;
    behind_count?: number | null;
    commit_at?: number | null;
    ref?: string | null;
    remote_ref?: string | null;
}
export interface IGitConnectionTest {
    can?: IDictionary<boolean>;
    description?: string | null;
    id?: string;
}
export interface IGitConnectionTestResult {
    can?: IDictionary<boolean>;
    id?: string;
    message?: string | null;
    status?: string | null;
}
export interface IGitStatus {
    action?: string | null;
    conflict?: boolean;
    revertable?: boolean;
    text?: string | null;
}
export interface IGroup {
    can?: IDictionary<boolean>;
    can_add_to_content_metadata?: boolean;
    contains_current_user?: boolean;
    external_group_id?: string | null;
    externally_managed?: boolean;
    id?: string;
    include_by_default?: boolean;
    name?: string | null;
    user_count?: number | null;
}
export interface IGroupHierarchy {
    can?: IDictionary<boolean>;
    can_add_to_content_metadata?: boolean;
    contains_current_user?: boolean;
    external_group_id?: string | null;
    externally_managed?: boolean;
    id?: string;
    include_by_default?: boolean;
    name?: string | null;
    user_count?: number | null;
    parent_group_ids?: string[] | null;
    role_ids?: string[] | null;
}
export interface IGroupIdForGroupInclusion {
    group_id?: string | null;
}
export interface IGroupIdForGroupUserInclusion {
    user_id?: string | null;
}
export interface IGroupSearch {
    can?: IDictionary<boolean>;
    can_add_to_content_metadata?: boolean;
    contains_current_user?: boolean;
    external_group_id?: string | null;
    externally_managed?: boolean;
    id?: string;
    include_by_default?: boolean;
    name?: string | null;
    user_count?: number | null;
    roles?: IRole[] | null;
}
export interface IHomepageItem {
    can?: IDictionary<boolean>;
    content_created_by?: string | null;
    content_favorite_id?: string | null;
    content_metadata_id?: string | null;
    content_updated_at?: string | null;
    custom_description?: string | null;
    custom_image_data_base64?: string | null;
    custom_image_url?: string | null;
    custom_title?: string | null;
    custom_url?: string | null;
    dashboard_id?: string | null;
    description?: string | null;
    favorite_count?: number | null;
    homepage_section_id?: string | null;
    id?: string;
    image_url?: string | null;
    location?: string | null;
    look_id?: string | null;
    lookml_dashboard_id?: string | null;
    order?: number | null;
    section_fetch_time?: number | null;
    title?: string | null;
    url?: string | null;
    use_custom_description?: boolean;
    use_custom_image?: boolean;
    use_custom_title?: boolean;
    use_custom_url?: boolean;
    view_count?: number | null;
}
export interface IHomepageSection {
    can?: IDictionary<boolean>;
    created_at?: Date | null;
    deleted_at?: Date | null;
    detail_url?: string | null;
    homepage_id?: string | null;
    homepage_items?: IHomepageItem[] | null;
    id?: string;
    is_header?: boolean;
    item_order?: string[] | null;
    title?: string | null;
    updated_at?: Date | null;
    description?: string | null;
    visible_item_order?: string[] | null;
}
export interface IImportedProject {
    name?: string | null;
    url?: string | null;
    ref?: string | null;
    is_remote?: boolean;
}
export interface IIntegration {
    can?: IDictionary<boolean>;
    id?: string;
    integration_hub_id?: string;
    label?: string;
    description?: string | null;
    enabled?: boolean;
    params?: IIntegrationParam[];
    supported_formats?: SupportedFormats[];
    supported_action_types?: SupportedActionTypes[];
    supported_formattings?: SupportedFormattings[];
    supported_visualization_formattings?: SupportedVisualizationFormattings[];
    supported_download_settings?: SupportedDownloadSettings[];
    icon_url?: string | null;
    uses_oauth?: boolean | null;
    required_fields?: IIntegrationRequiredField[];
    privacy_link?: string | null;
    delegate_oauth?: boolean | null;
    installed_delegate_oauth_targets?: string[];
}
export interface IIntegrationHub {
    can?: IDictionary<boolean>;
    id?: string;
    url?: string;
    label?: string;
    official?: boolean;
    fetch_error_message?: string | null;
    authorization_token?: string | null;
    has_authorization_token?: boolean;
    legal_agreement_signed?: boolean;
    legal_agreement_required?: boolean;
    legal_agreement_text?: string | null;
}
export interface IIntegrationParam {
    name?: string | null;
    label?: string | null;
    description?: string | null;
    required?: boolean;
    has_value?: boolean;
    value?: string | null;
    user_attribute_name?: string | null;
    sensitive?: boolean | null;
    per_user?: boolean;
    delegate_oauth_url?: string | null;
}
export interface IIntegrationRequiredField {
    tag?: string | null;
    any_tag?: string[] | null;
    all_tags?: string[] | null;
}
export interface IIntegrationTestResult {
    success?: boolean;
    message?: string | null;
    delegate_oauth_result?: IDelegateOauthTest[] | null;
}
export interface IInternalHelpResources {
    can?: IDictionary<boolean>;
    enabled?: boolean;
}
export interface IInternalHelpResourcesContent {
    can?: IDictionary<boolean>;
    organization_name?: string | null;
    markdown_content?: string | null;
}
export declare enum InvestigativeContentType {
    dashboard = "dashboard"
}
export interface IJsonBi {
    big_query_metadata: IJsonBiBigQueryMetadata;
    fields: IJsonBiFields;
    pivots: IJsonBiPivots[];
    has_subtotals: boolean;
    has_totals: boolean;
    columns_truncated: string;
    filter_expression: string | null;
    filters: IDictionary<string>;
    data: string[];
}
export interface IJsonBiBigQueryMetadata {
    total_bytes_processed: number;
    backend_cache_hit: boolean;
}
export interface IJsonBiField {
    sql: string | null;
    view: string;
    dimension_group: string | null;
    category: string;
    field_group_label: string | null;
    name: string;
    type: string;
    view_label: string | null;
    label: string;
    field_group_variant: string;
    hidden: boolean;
    description: string | null;
}
export interface IJsonBiFields {
    dimensions: IJsonBiField[];
    measures: IJsonBiField[];
    pivots: IJsonBiField[];
}
export interface IJsonBiPivots {
    key: string;
    data: IDictionary<string>;
    sort_values: IDictionary<string>;
    is_total: boolean;
}
export interface ILDAPConfig {
    can?: IDictionary<boolean>;
    alternate_email_login_allowed?: boolean;
    auth_password?: string | null;
    auth_requires_role?: boolean;
    auth_username?: string | null;
    connection_host?: string | null;
    connection_port?: string | null;
    connection_tls?: boolean;
    connection_tls_no_verify?: boolean;
    default_new_user_group_ids?: string[] | null;
    default_new_user_groups?: IGroup[] | null;
    default_new_user_role_ids?: string[] | null;
    default_new_user_roles?: IRole[] | null;
    enabled?: boolean;
    force_no_page?: boolean;
    groups?: ILDAPGroupRead[] | null;
    groups_base_dn?: string | null;
    groups_finder_type?: string | null;
    groups_member_attribute?: string | null;
    groups_objectclasses?: string | null;
    groups_user_attribute?: string | null;
    groups_with_role_ids?: ILDAPGroupWrite[] | null;
    has_auth_password?: boolean;
    merge_new_users_by_email?: boolean;
    modified_at?: string | null;
    modified_by?: string | null;
    set_roles_from_groups?: boolean;
    test_ldap_password?: string | null;
    test_ldap_user?: string | null;
    user_attribute_map_email?: string | null;
    user_attribute_map_first_name?: string | null;
    user_attribute_map_last_name?: string | null;
    user_attribute_map_ldap_id?: string | null;
    user_attributes?: ILDAPUserAttributeRead[] | null;
    user_attributes_with_ids?: ILDAPUserAttributeWrite[] | null;
    user_bind_base_dn?: string | null;
    user_custom_filter?: string | null;
    user_id_attribute_names?: string | null;
    user_objectclass?: string | null;
    allow_normal_group_membership?: boolean;
    allow_roles_from_normal_groups?: boolean;
    allow_direct_roles?: boolean;
    url?: string | null;
}
export interface ILDAPConfigTestIssue {
    severity?: string | null;
    message?: string | null;
}
export interface ILDAPConfigTestResult {
    details?: string | null;
    issues?: ILDAPConfigTestIssue[] | null;
    message?: string | null;
    status?: string | null;
    trace?: string | null;
    user?: ILDAPUser;
    url?: string | null;
}
export interface ILDAPGroupRead {
    id?: string;
    looker_group_id?: string | null;
    looker_group_name?: string | null;
    name?: string | null;
    roles?: IRole[] | null;
    url?: string | null;
}
export interface ILDAPGroupWrite {
    id?: string | null;
    looker_group_id?: string | null;
    looker_group_name?: string | null;
    name?: string | null;
    role_ids?: string[] | null;
    url?: string | null;
}
export interface ILDAPUser {
    all_emails?: string[] | null;
    attributes?: IDictionary<string> | null;
    email?: string | null;
    first_name?: string | null;
    groups?: string[] | null;
    last_name?: string | null;
    ldap_dn?: string | null;
    ldap_id?: string | null;
    roles?: string[] | null;
    url?: string | null;
}
export interface ILDAPUserAttributeRead {
    name?: string | null;
    required?: boolean;
    user_attributes?: IUserAttribute[] | null;
    url?: string | null;
}
export interface ILDAPUserAttributeWrite {
    name?: string | null;
    required?: boolean;
    user_attribute_ids?: string[] | null;
    url?: string | null;
}
export interface ILegacyFeature {
    can?: IDictionary<boolean>;
    id?: string;
    name?: string | null;
    description?: string | null;
    enabled_locally?: boolean;
    enabled?: boolean;
    disallowed_as_of_version?: string | null;
    disable_on_upgrade_to_version?: string | null;
    end_of_life_version?: string | null;
    documentation_url?: string | null;
    approximate_disable_date?: Date | null;
    approximate_end_of_life_date?: Date | null;
    has_disabled_on_upgrade?: boolean;
}
export interface ILocale {
    code?: string | null;
    native_name?: string | null;
    english_name?: string | null;
}
export interface ILocalizationSettings {
    default_locale?: string | null;
    localization_level?: string | null;
}
export interface ILook {
    can?: IDictionary<boolean>;
    content_metadata_id?: string | null;
    id?: string;
    title?: string | null;
    user_id?: string | null;
    content_favorite_id?: string | null;
    created_at?: Date | null;
    deleted?: boolean;
    deleted_at?: Date | null;
    deleter_id?: string | null;
    description?: string | null;
    embed_url?: string | null;
    excel_file_url?: string | null;
    favorite_count?: number | null;
    google_spreadsheet_formula?: string | null;
    image_embed_url?: string | null;
    is_run_on_load?: boolean;
    last_accessed_at?: Date | null;
    last_updater_id?: string | null;
    last_viewed_at?: Date | null;
    model?: ILookModel;
    public?: boolean;
    public_slug?: string | null;
    public_url?: string | null;
    query_id?: string | null;
    short_url?: string | null;
    folder?: IFolderBase;
    folder_id?: string | null;
    updated_at?: Date | null;
    view_count?: number | null;
}
export interface ILookBasic {
    can?: IDictionary<boolean>;
    content_metadata_id?: string | null;
    id?: string;
    title?: string | null;
    user_id?: string | null;
}
export interface ILookmlModel {
    can?: IDictionary<boolean>;
    allowed_db_connection_names?: string[] | null;
    explores?: ILookmlModelNavExplore[] | null;
    has_content?: boolean;
    label?: string | null;
    name?: string | null;
    project_name?: string | null;
    unlimited_db_connections?: boolean;
}
export interface ILookmlModelExplore {
    id?: string;
    name?: string | null;
    description?: string | null;
    label?: string | null;
    title?: string | null;
    scopes?: string[] | null;
    can_total?: boolean;
    can_develop?: boolean;
    can_see_lookml?: boolean;
    lookml_link?: string | null;
    can_save?: boolean;
    can_explain?: boolean;
    can_pivot_in_db?: boolean;
    can_subtotal?: boolean;
    has_timezone_support?: boolean;
    supports_cost_estimate?: boolean;
    connection_name?: string | null;
    null_sort_treatment?: string | null;
    files?: string[] | null;
    source_file?: string | null;
    project_name?: string | null;
    model_name?: string | null;
    view_name?: string | null;
    hidden?: boolean;
    sql_table_name?: string | null;
    access_filter_fields?: string[] | null;
    access_filters?: ILookmlModelExploreAccessFilter[] | null;
    aliases?: ILookmlModelExploreAlias[] | null;
    always_filter?: ILookmlModelExploreAlwaysFilter[] | null;
    conditionally_filter?: ILookmlModelExploreConditionallyFilter[] | null;
    index_fields?: string[] | null;
    sets?: ILookmlModelExploreSet[] | null;
    tags?: string[] | null;
    errors?: ILookmlModelExploreError[] | null;
    fields?: ILookmlModelExploreFieldset;
    joins?: ILookmlModelExploreJoins[] | null;
    group_label?: string | null;
    supported_measure_types?: ILookmlModelExploreSupportedMeasureType[];
    always_join?: string[] | null;
}
export interface ILookmlModelExploreAccessFilter {
    field?: string | null;
    user_attribute?: string | null;
}
export interface ILookmlModelExploreAlias {
    name?: string | null;
    value?: string | null;
}
export interface ILookmlModelExploreAlwaysFilter {
    name?: string | null;
    value?: string | null;
}
export interface ILookmlModelExploreConditionallyFilter {
    name?: string | null;
    value?: string | null;
}
export interface ILookmlModelExploreError {
    message?: string | null;
    details?: any | null;
    error_pos?: string | null;
    field_error?: boolean;
}
export interface ILookmlModelExploreField {
    align?: Align;
    can_filter?: boolean;
    category?: Category | null;
    default_filter_value?: string | null;
    description?: string | null;
    dimension_group?: string | null;
    enumerations?: ILookmlModelExploreFieldEnumeration[] | null;
    error?: string | null;
    field_group_label?: string | null;
    field_group_variant?: string | null;
    fill_style?: FillStyle | null;
    fiscal_month_offset?: number;
    has_allowed_values?: boolean;
    hidden?: boolean;
    is_filter?: boolean;
    is_fiscal?: boolean;
    is_numeric?: boolean;
    is_timeframe?: boolean;
    can_time_filter?: boolean;
    time_interval?: ILookmlModelExploreFieldTimeInterval;
    label?: string;
    label_from_parameter?: string | null;
    label_short?: string;
    lookml_link?: string | null;
    map_layer?: ILookmlModelExploreFieldMapLayer;
    measure?: boolean;
    name?: string;
    strict_value_format?: boolean;
    parameter?: boolean;
    permanent?: boolean | null;
    primary_key?: boolean;
    project_name?: string | null;
    requires_refresh_on_sort?: boolean;
    scope?: string;
    sortable?: boolean;
    source_file?: string;
    source_file_path?: string;
    sql?: string | null;
    sql_case?: ILookmlModelExploreFieldSqlCase[] | null;
    filters?: ILookmlModelExploreFieldMeasureFilters[] | null;
    suggest_dimension?: string;
    suggest_explore?: string;
    suggestable?: boolean;
    suggestions?: string[] | null;
    tags?: string[];
    type?: string;
    user_attribute_filter_types?: UserAttributeFilterTypes[];
    value_format?: string | null;
    view?: string;
    view_label?: string;
    dynamic?: boolean;
    week_start_day?: WeekStartDay;
    times_used?: number;
    original_view?: string;
}
export interface ILookmlModelExploreFieldEnumeration {
    label?: string | null;
    value?: any | null;
}
export interface ILookmlModelExploreFieldMapLayer {
    url?: string;
    name?: string;
    feature_key?: string | null;
    property_key?: string | null;
    property_label_key?: string | null;
    projection?: string | null;
    format?: Format;
    extents_json_url?: string | null;
    max_zoom_level?: number | null;
    min_zoom_level?: number | null;
}
export interface ILookmlModelExploreFieldMeasureFilters {
    field?: string | null;
    condition?: string | null;
}
export interface ILookmlModelExploreFieldset {
    dimensions?: ILookmlModelExploreField[] | null;
    measures?: ILookmlModelExploreField[] | null;
    filters?: ILookmlModelExploreField[] | null;
    parameters?: ILookmlModelExploreField[] | null;
}
export interface ILookmlModelExploreFieldSqlCase {
    value?: string | null;
    condition?: string | null;
}
export interface ILookmlModelExploreFieldTimeInterval {
    name?: Name;
    count?: number;
}
export interface ILookmlModelExploreJoins {
    name?: string | null;
    dependent_fields?: string[] | null;
    fields?: string[] | null;
    foreign_key?: string | null;
    from?: string | null;
    outer_only?: boolean | null;
    relationship?: string | null;
    required_joins?: string[] | null;
    sql_foreign_key?: string | null;
    sql_on?: string | null;
    sql_table_name?: string | null;
    type?: string | null;
    view_label?: string | null;
}
export interface ILookmlModelExploreSet {
    name?: string | null;
    value?: string[] | null;
}
export interface ILookmlModelExploreSupportedMeasureType {
    dimension_type?: string | null;
    measure_types?: string[] | null;
}
export interface ILookmlModelNavExplore {
    name?: string | null;
    description?: string | null;
    label?: string | null;
    hidden?: boolean;
    group_label?: string | null;
}
export interface ILookmlTest {
    can?: IDictionary<boolean>;
    model_name?: string;
    name?: string;
    explore_name?: string;
    query_url_params?: string;
    file?: string;
    line?: number | null;
}
export interface ILookmlTestResult {
    can?: IDictionary<boolean>;
    model_name?: string;
    test_name?: string;
    assertions_count?: number;
    assertions_failed?: number;
    errors?: IProjectError[] | null;
    warnings?: IProjectError[] | null;
    success?: boolean;
}
export interface ILookModel {
    id?: string;
    label?: string | null;
}
export interface ILookWithDashboards {
    can?: IDictionary<boolean>;
    content_metadata_id?: string | null;
    id?: string;
    title?: string | null;
    user_id?: string | null;
    content_favorite_id?: string | null;
    created_at?: Date | null;
    deleted?: boolean;
    deleted_at?: Date | null;
    deleter_id?: string | null;
    description?: string | null;
    embed_url?: string | null;
    excel_file_url?: string | null;
    favorite_count?: number | null;
    google_spreadsheet_formula?: string | null;
    image_embed_url?: string | null;
    is_run_on_load?: boolean;
    last_accessed_at?: Date | null;
    last_updater_id?: string | null;
    last_viewed_at?: Date | null;
    model?: ILookModel;
    public?: boolean;
    public_slug?: string | null;
    public_url?: string | null;
    query_id?: string | null;
    short_url?: string | null;
    folder?: IFolderBase;
    folder_id?: string | null;
    updated_at?: Date | null;
    view_count?: number | null;
    dashboards?: IDashboardBase[] | null;
}
export interface ILookWithQuery {
    can?: IDictionary<boolean>;
    content_metadata_id?: string | null;
    id?: string;
    title?: string | null;
    user_id?: string | null;
    content_favorite_id?: string | null;
    created_at?: Date | null;
    deleted?: boolean;
    deleted_at?: Date | null;
    deleter_id?: string | null;
    description?: string | null;
    embed_url?: string | null;
    excel_file_url?: string | null;
    favorite_count?: number | null;
    google_spreadsheet_formula?: string | null;
    image_embed_url?: string | null;
    is_run_on_load?: boolean;
    last_accessed_at?: Date | null;
    last_updater_id?: string | null;
    last_viewed_at?: Date | null;
    model?: ILookModel;
    public?: boolean;
    public_slug?: string | null;
    public_url?: string | null;
    query_id?: string | null;
    short_url?: string | null;
    folder?: IFolderBase;
    folder_id?: string | null;
    updated_at?: Date | null;
    view_count?: number | null;
    query?: IQuery;
    url?: string | null;
}
export interface IManifest {
    can?: IDictionary<boolean>;
    name?: string | null;
    imports?: IImportedProject[] | null;
    localization_settings?: ILocalizationSettings;
}
export interface IMarketplaceAutomation {
    install_enabled?: boolean;
    update_looker_enabled?: boolean;
    update_third_party_enabled?: boolean;
}
export interface IMaterializePDT {
    materialization_id?: string;
    resp_text?: string | null;
}
export interface IMergeFields {
    field_name?: string | null;
    source_field_name?: string | null;
}
export interface IMergeQuery {
    can?: IDictionary<boolean>;
    column_limit?: string | null;
    dynamic_fields?: string | null;
    id?: string;
    pivots?: string[] | null;
    result_maker_id?: string | null;
    sorts?: string[] | null;
    source_queries?: IMergeQuerySourceQuery[] | null;
    total?: boolean;
    vis_config?: IDictionary<string> | null;
}
export interface IMergeQuerySourceQuery {
    merge_fields?: IMergeFields[] | null;
    name?: string | null;
    query_id?: string | null;
}
export interface IMobileFeatureFlags {
    feature_flag_name?: string | null;
    feature_flag_state?: boolean;
}
export interface IMobilePayload {
    title?: string | null;
    alert_id: string;
    investigative_content_id?: string | null;
    dashboard_name?: string | null;
    dashboard_id?: string;
    query_slug?: string;
}
export interface IMobileSettings {
    mobile_force_authentication?: boolean;
    mobile_app_integration?: boolean;
    mobile_feature_flags?: IMobileFeatureFlags[] | null;
}
export interface IMobileToken {
    id?: string;
    device_token: string;
    device_type: DeviceType;
}
export interface IModel {
    connection?: string | null;
    name?: string;
    value_formats?: IModelNamedValueFormats[] | null;
}
export interface IModelFieldSuggestions {
    suggestions?: string[];
    error?: string | null;
    from_cache?: boolean;
    hit_limit?: boolean;
    used_calcite_materialization?: boolean;
}
export interface IModelNamedValueFormats {
    format_string?: string;
    label?: string;
    name?: string;
    strict_value_format?: boolean;
}
export interface IModelSet {
    can?: IDictionary<boolean>;
    all_access?: boolean;
    built_in?: boolean;
    id?: string;
    models?: string[] | null;
    name?: string | null;
    url?: string | null;
}
export interface IModelsNotValidated {
    name?: string | null;
    project_file_id?: string | null;
}
export declare enum Name {
    day = "day",
    hour = "hour",
    minute = "minute",
    second = "second",
    millisecond = "millisecond",
    microsecond = "microsecond",
    week = "week",
    month = "month",
    quarter = "quarter",
    year = "year"
}
export interface IOauthClientApp {
    can?: IDictionary<boolean>;
    client_guid?: string;
    redirect_uri?: string;
    display_name?: string;
    description?: string;
    enabled?: boolean;
    group_id?: string | null;
    tokens_invalid_before?: Date;
    activated_users?: IUserPublic[];
}
export interface IOIDCConfig {
    can?: IDictionary<boolean>;
    alternate_email_login_allowed?: boolean;
    audience?: string | null;
    auth_requires_role?: boolean;
    authorization_endpoint?: string | null;
    default_new_user_group_ids?: string[] | null;
    default_new_user_groups?: IGroup[] | null;
    default_new_user_role_ids?: string[] | null;
    default_new_user_roles?: IRole[] | null;
    enabled?: boolean;
    groups?: IOIDCGroupRead[] | null;
    groups_attribute?: string | null;
    groups_with_role_ids?: IOIDCGroupWrite[] | null;
    identifier?: string | null;
    issuer?: string | null;
    modified_at?: Date | null;
    modified_by?: string | null;
    new_user_migration_types?: string | null;
    scopes?: string[] | null;
    secret?: string | null;
    set_roles_from_groups?: boolean;
    test_slug?: string | null;
    token_endpoint?: string | null;
    user_attribute_map_email?: string | null;
    user_attribute_map_first_name?: string | null;
    user_attribute_map_last_name?: string | null;
    user_attributes?: IOIDCUserAttributeRead[] | null;
    user_attributes_with_ids?: IOIDCUserAttributeWrite[] | null;
    userinfo_endpoint?: string | null;
    allow_normal_group_membership?: boolean;
    allow_roles_from_normal_groups?: boolean;
    allow_direct_roles?: boolean;
    url?: string | null;
}
export interface IOIDCGroupRead {
    id?: string;
    looker_group_id?: string | null;
    looker_group_name?: string | null;
    name?: string | null;
    roles?: IRole[] | null;
}
export interface IOIDCGroupWrite {
    id?: string | null;
    looker_group_id?: string | null;
    looker_group_name?: string | null;
    name?: string | null;
    role_ids?: string[] | null;
}
export interface IOIDCUserAttributeRead {
    name?: string | null;
    required?: boolean;
    user_attributes?: IUserAttribute[] | null;
}
export interface IOIDCUserAttributeWrite {
    name?: string | null;
    required?: boolean;
    user_attribute_ids?: string[] | null;
}
export interface IPasswordConfig {
    can?: IDictionary<boolean>;
    min_length?: number | null;
    require_numeric?: boolean;
    require_upperlower?: boolean;
    require_special?: boolean;
}
export interface IPermission {
    can?: IDictionary<boolean>;
    permission?: string | null;
    parent?: string | null;
    description?: string | null;
}
export interface IPermissionSet {
    can?: IDictionary<boolean>;
    all_access?: boolean;
    built_in?: boolean;
    id?: string;
    name?: string | null;
    permissions?: string[] | null;
    url?: string | null;
}
export declare enum PermissionType {
    view = "view",
    edit = "edit"
}
export interface IPrivatelabelConfiguration {
    logo_file?: string | null;
    logo_url?: string | null;
    favicon_file?: string | null;
    favicon_url?: string | null;
    default_title?: string | null;
    show_help_menu?: boolean;
    show_docs?: boolean;
    show_email_sub_options?: boolean;
    allow_looker_mentions?: boolean;
    allow_looker_links?: boolean;
    custom_welcome_email_advanced?: boolean;
    setup_mentions?: boolean;
    alerts_logo?: boolean;
    alerts_links?: boolean;
    folders_mentions?: boolean;
}
export interface IProject {
    can?: IDictionary<boolean>;
    id?: string;
    name?: string;
    uses_git?: boolean;
    git_remote_url?: string | null;
    git_username?: string | null;
    git_password?: string | null;
    git_production_branch_name?: string;
    use_git_cookie_auth?: boolean;
    git_username_user_attribute?: string | null;
    git_password_user_attribute?: string | null;
    git_service_name?: string | null;
    git_application_server_http_port?: number | null;
    git_application_server_http_scheme?: string | null;
    deploy_secret?: string | null;
    unset_deploy_secret?: boolean;
    pull_request_mode?: PullRequestMode;
    validation_required?: boolean;
    git_release_mgmt_enabled?: boolean;
    allow_warnings?: boolean;
    is_example?: boolean;
    dependency_status?: string | null;
}
export interface IProjectError {
    code?: string | null;
    severity?: string | null;
    kind?: string | null;
    message?: string | null;
    field_name?: string | null;
    file_path?: string | null;
    line_number?: number | null;
    model_id?: string | null;
    explore?: string | null;
    help_url?: string | null;
    params?: IDictionary<any> | null;
    sanitized_message?: string | null;
}
export interface IProjectFile {
    can?: IDictionary<boolean>;
    id?: string;
    path?: string | null;
    title?: string | null;
    type?: string | null;
    extension?: string | null;
    mime_type?: string | null;
    editable?: boolean;
    git_status?: IGitStatus;
}
export interface IProjectValidation {
    errors?: IProjectError[] | null;
    project_digest?: string | null;
    models_not_validated?: IModelsNotValidated[] | null;
    computation_time?: number | null;
}
export interface IProjectValidationCache {
    errors?: IProjectError[] | null;
    project_digest?: string | null;
    models_not_validated?: IModelsNotValidated[] | null;
    computation_time?: number | null;
    stale?: boolean;
}
export interface IProjectWorkspace {
    can?: IDictionary<boolean>;
    project_id?: string | null;
    workspace_id?: string | null;
    git_status?: string | null;
    git_head?: string | null;
    dependency_status?: DependencyStatus | null;
    git_branch?: IGitBranch;
    lookml_type?: string | null;
}
export declare enum PullRequestMode {
    off = "off",
    links = "links",
    recommended = "recommended",
    required = "required"
}
export interface IQuery {
    can?: IDictionary<boolean>;
    id?: string;
    model: string;
    view: string;
    fields?: string[] | null;
    pivots?: string[] | null;
    fill_fields?: string[] | null;
    filters?: IDictionary<string> | null;
    filter_expression?: string | null;
    sorts?: string[] | null;
    limit?: string | null;
    column_limit?: string | null;
    total?: boolean | null;
    row_total?: string | null;
    subtotals?: string[] | null;
    vis_config?: IDictionary<any> | null;
    filter_config?: IDictionary<any> | null;
    visible_ui_sections?: string | null;
    slug?: string | null;
    dynamic_fields?: string | null;
    client_id?: string | null;
    share_url?: string | null;
    expanded_share_url?: string | null;
    url?: string | null;
    query_timezone?: string | null;
    has_table_calculations?: boolean;
}
export interface IQueryFormats {
    json_bi?: IJsonBi;
    json?: string | null;
    json_detail?: string | null;
    csv?: string | null;
    txt?: string | null;
    html?: string | null;
    md?: string | null;
    xlsx?: string | null;
    sql?: string | null;
}
export interface IQueryTask {
    can?: IDictionary<boolean>;
    id?: string;
    query_id?: string | null;
    query?: IQuery;
    generate_links?: boolean;
    force_production?: boolean;
    path_prefix?: string | null;
    cache?: boolean;
    server_table_calcs?: boolean;
    cache_only?: boolean;
    cache_key?: string | null;
    status?: string | null;
    source?: string | null;
    runtime?: number | null;
    rebuild_pdts?: boolean;
    result_source?: string | null;
    look_id?: string | null;
    dashboard_id?: string | null;
    result_format?: string | null;
}
export interface IRenderTask {
    can?: IDictionary<boolean>;
    created_at?: string | null;
    dashboard_filters?: string | null;
    dashboard_id?: string | null;
    dashboard_style?: string | null;
    finalized_at?: string | null;
    height?: number | null;
    id?: string;
    look_id?: string | null;
    lookml_dashboard_id?: string | null;
    query_id?: string | null;
    dashboard_element_id?: string | null;
    query_runtime?: number | null;
    render_runtime?: number | null;
    result_format?: string | null;
    runtime?: number | null;
    status?: string | null;
    status_detail?: string | null;
    user_id?: string | null;
    width?: number | null;
}
export interface IRepositoryCredential {
    can?: IDictionary<boolean>;
    id?: string;
    root_project_id?: string;
    remote_url?: string;
    git_username?: string | null;
    git_password?: string | null;
    ssh_public_key?: string | null;
    is_configured?: boolean;
}
export interface IRequestActiveThemes {
    name?: string | null;
    ts?: Date | null;
    fields?: string | null;
}
export interface IRequestAlertNotifications {
    limit?: number | null;
    offset?: number | null;
}
export interface IRequestAllBoardItems {
    fields?: string | null;
    sorts?: string | null;
    board_section_id?: string | null;
}
export interface IRequestAllBoardSections {
    fields?: string | null;
    sorts?: string | null;
}
export interface IRequestAllExternalOauthApplications {
    name?: string | null;
    client_id?: string | null;
}
export interface IRequestAllGroups {
    fields?: string | null;
    page?: number | null;
    per_page?: number | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    ids?: DelimArray<string> | null;
    content_metadata_id?: string | null;
    can_add_to_content_metadata?: boolean | null;
}
export interface IRequestAllGroupUsers {
    group_id: string;
    fields?: string | null;
    page?: number | null;
    per_page?: number | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
}
export interface IRequestAllIntegrations {
    fields?: string | null;
    integration_hub_id?: string | null;
}
export interface IRequestAllLookmlModels {
    fields?: string | null;
    limit?: number | null;
    offset?: number | null;
}
export interface IRequestAllRoles {
    fields?: string | null;
    ids?: DelimArray<string> | null;
}
export interface IRequestAllScheduledPlans {
    user_id?: string | null;
    fields?: string | null;
    all_users?: boolean | null;
}
export interface IRequestAllUserAttributes {
    fields?: string | null;
    sorts?: string | null;
}
export interface IRequestAllUsers {
    fields?: string | null;
    page?: number | null;
    per_page?: number | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    ids?: DelimArray<string> | null;
}
export interface IRequestArtifact {
    namespace: string;
    key: string;
    fields?: string | null;
    limit?: number | null;
    offset?: number | null;
}
export interface IRequestArtifactNamespaces {
    fields?: string | null;
    limit?: number | null;
    offset?: number | null;
}
export interface IRequestConnectionColumns {
    connection_name: string;
    database?: string | null;
    schema_name?: string | null;
    cache?: boolean | null;
    table_limit?: number | null;
    table_names?: string | null;
    fields?: string | null;
}
export interface IRequestConnectionSchemas {
    connection_name: string;
    database?: string | null;
    cache?: boolean | null;
    fields?: string | null;
}
export interface IRequestConnectionSearchColumns {
    connection_name: string;
    column_name?: string | null;
    fields?: string | null;
}
export interface IRequestConnectionTables {
    connection_name: string;
    database?: string | null;
    schema_name?: string | null;
    cache?: boolean | null;
    fields?: string | null;
    table_filter?: string | null;
    table_limit?: number | null;
}
export interface IRequestContentThumbnail {
    type: string;
    resource_id: string;
    reload?: string | null;
    theme?: string | null;
    format?: string | null;
    width?: number | null;
    height?: number | null;
}
export interface IRequestCreateDashboardElement {
    body: IWriteDashboardElement;
    fields?: string | null;
    apply_filters?: boolean | null;
}
export interface IRequestCreateDashboardRenderTask {
    dashboard_id: string;
    result_format: string;
    body: ICreateDashboardRenderTask;
    width: number;
    height: number;
    fields?: string | null;
    pdf_paper_size?: string | null;
    pdf_landscape?: boolean | null;
    long_tables?: boolean | null;
    theme?: string | null;
}
export interface IRequestCreateQueryTask {
    body: IWriteCreateQueryTask;
    limit?: number | null;
    apply_formatting?: boolean | null;
    apply_vis?: boolean | null;
    cache?: boolean | null;
    generate_drill_links?: boolean | null;
    force_production?: boolean | null;
    cache_only?: boolean | null;
    path_prefix?: string | null;
    rebuild_pdts?: boolean | null;
    server_table_calcs?: boolean | null;
    fields?: string | null;
}
export interface IRequestCreateUserCredentialsEmailPasswordReset {
    user_id: string;
    expires?: boolean | null;
    fields?: string | null;
}
export interface IRequestDeployRefToProduction {
    project_id: string;
    branch?: string | null;
    ref?: string | null;
}
export interface IRequestFolderChildren {
    folder_id: string;
    fields?: string | null;
    page?: number | null;
    per_page?: number | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
}
export interface IRequestFolderChildrenSearch {
    folder_id: string;
    fields?: string | null;
    sorts?: string | null;
    name?: string | null;
}
export interface IRequestGraphDerivedTablesForModel {
    model: string;
    format?: string | null;
    color?: string | null;
}
export interface IRequestGraphDerivedTablesForView {
    view: string;
    models?: string | null;
    workspace?: string | null;
}
export interface IRequestLogin {
    client_id?: string | null;
    client_secret?: string | null;
}
export interface IRequestModelFieldnameSuggestions {
    model_name: string;
    view_name: string;
    field_name: string;
    term?: string | null;
    filters?: any | null;
}
export interface IRequestRoleUsers {
    role_id: string;
    fields?: string | null;
    direct_association_only?: boolean | null;
}
export interface IRequestRunGitConnectionTest {
    project_id: string;
    test_id: string;
    remote_url?: string | null;
    use_production?: string | null;
}
export interface IRequestRunInlineQuery {
    result_format: string;
    body: IWriteQuery;
    limit?: number | null;
    apply_formatting?: boolean | null;
    apply_vis?: boolean | null;
    cache?: boolean | null;
    image_width?: number | null;
    image_height?: number | null;
    generate_drill_links?: boolean | null;
    force_production?: boolean | null;
    cache_only?: boolean | null;
    path_prefix?: string | null;
    rebuild_pdts?: boolean | null;
    server_table_calcs?: boolean | null;
}
export interface IRequestRunLook {
    look_id: string;
    result_format: string;
    limit?: number | null;
    apply_formatting?: boolean | null;
    apply_vis?: boolean | null;
    cache?: boolean | null;
    image_width?: number | null;
    image_height?: number | null;
    generate_drill_links?: boolean | null;
    force_production?: boolean | null;
    cache_only?: boolean | null;
    path_prefix?: string | null;
    rebuild_pdts?: boolean | null;
    server_table_calcs?: boolean | null;
}
export interface IRequestRunLookmlTest {
    project_id: string;
    file_id?: string | null;
    test?: string | null;
    model?: string | null;
}
export interface IRequestRunQuery {
    query_id: string;
    result_format: string;
    limit?: number | null;
    apply_formatting?: boolean | null;
    apply_vis?: boolean | null;
    cache?: boolean | null;
    image_width?: number | null;
    image_height?: number | null;
    generate_drill_links?: boolean | null;
    force_production?: boolean | null;
    cache_only?: boolean | null;
    path_prefix?: string | null;
    rebuild_pdts?: boolean | null;
    server_table_calcs?: boolean | null;
    source?: string | null;
}
export interface IRequestScheduledPlansForDashboard {
    dashboard_id: string;
    user_id?: string | null;
    all_users?: boolean | null;
    fields?: string | null;
}
export interface IRequestScheduledPlansForLook {
    look_id: string;
    user_id?: string | null;
    fields?: string | null;
    all_users?: boolean | null;
}
export interface IRequestScheduledPlansForLookmlDashboard {
    lookml_dashboard_id: string;
    user_id?: string | null;
    fields?: string | null;
    all_users?: boolean | null;
}
export interface IRequestSearchAlerts {
    limit?: number | null;
    offset?: number | null;
    group_by?: string | null;
    fields?: string | null;
    disabled?: boolean | null;
    frequency?: string | null;
    condition_met?: boolean | null;
    last_run_start?: string | null;
    last_run_end?: string | null;
    all_owners?: boolean | null;
}
export interface IRequestSearchArtifacts {
    namespace: string;
    fields?: string | null;
    key?: string | null;
    user_ids?: string | null;
    min_size?: number | null;
    max_size?: number | null;
    limit?: number | null;
    offset?: number | null;
}
export interface IRequestSearchBoards {
    title?: string | null;
    created_at?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    fields?: string | null;
    favorited?: boolean | null;
    creator_id?: string | null;
    sorts?: string | null;
    page?: number | null;
    per_page?: number | null;
    offset?: number | null;
    limit?: number | null;
    filter_or?: boolean | null;
    permission?: string | null;
}
export interface IRequestSearchContent {
    terms: string;
    fields?: string | null;
    types?: string | null;
    limit?: number | null;
    offset?: number | null;
    page?: number | null;
    per_page?: number | null;
}
export interface IRequestSearchContentFavorites {
    id?: string | null;
    user_id?: string | null;
    content_metadata_id?: string | null;
    dashboard_id?: string | null;
    look_id?: string | null;
    board_id?: string | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    fields?: string | null;
    filter_or?: boolean | null;
}
export interface IRequestSearchContentViews {
    view_count?: string | null;
    group_id?: string | null;
    look_id?: string | null;
    dashboard_id?: string | null;
    content_metadata_id?: string | null;
    start_of_week_date?: string | null;
    all_time?: boolean | null;
    user_id?: string | null;
    fields?: string | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    filter_or?: boolean | null;
}
export interface IRequestSearchCredentialsEmail {
    fields?: string | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    id?: string | null;
    email?: string | null;
    emails?: string | null;
    filter_or?: boolean | null;
}
export interface IRequestSearchDashboardElements {
    dashboard_id?: string | null;
    look_id?: string | null;
    title?: string | null;
    deleted?: boolean | null;
    fields?: string | null;
    filter_or?: boolean | null;
    sorts?: string | null;
}
export interface IRequestSearchDashboards {
    id?: string | null;
    slug?: string | null;
    title?: string | null;
    description?: string | null;
    content_favorite_id?: string | null;
    folder_id?: string | null;
    deleted?: string | null;
    user_id?: string | null;
    view_count?: string | null;
    content_metadata_id?: string | null;
    curate?: boolean | null;
    last_viewed_at?: string | null;
    fields?: string | null;
    page?: number | null;
    per_page?: number | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    filter_or?: boolean | null;
    not_owned_by?: boolean | null;
}
export interface IRequestSearchFolders {
    fields?: string | null;
    page?: number | null;
    per_page?: number | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    name?: string | null;
    id?: string | null;
    parent_id?: string | null;
    creator_id?: string | null;
    filter_or?: boolean | null;
    is_shared_root?: boolean | null;
    is_users_root?: boolean | null;
}
export interface IRequestSearchGroups {
    fields?: string | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    filter_or?: boolean | null;
    id?: string | null;
    name?: string | null;
    external_group_id?: string | null;
    externally_managed?: boolean | null;
    externally_orphaned?: boolean | null;
}
export interface IRequestSearchGroupsWithHierarchy {
    fields?: string | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    filter_or?: boolean | null;
    id?: string | null;
    name?: string | null;
    external_group_id?: string | null;
    externally_managed?: boolean | null;
    externally_orphaned?: boolean | null;
}
export interface IRequestSearchGroupsWithRoles {
    fields?: string | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    filter_or?: boolean | null;
    id?: string | null;
    name?: string | null;
    external_group_id?: string | null;
    externally_managed?: boolean | null;
    externally_orphaned?: boolean | null;
}
export interface IRequestSearchLooks {
    id?: string | null;
    title?: string | null;
    description?: string | null;
    content_favorite_id?: string | null;
    folder_id?: string | null;
    user_id?: string | null;
    view_count?: string | null;
    deleted?: boolean | null;
    query_id?: string | null;
    curate?: boolean | null;
    last_viewed_at?: string | null;
    fields?: string | null;
    page?: number | null;
    per_page?: number | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    filter_or?: boolean | null;
}
export interface IRequestSearchModelSets {
    fields?: string | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    id?: string | null;
    name?: string | null;
    all_access?: boolean | null;
    built_in?: boolean | null;
    filter_or?: boolean | null;
}
export interface IRequestSearchPermissionSets {
    fields?: string | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    id?: string | null;
    name?: string | null;
    all_access?: boolean | null;
    built_in?: boolean | null;
    filter_or?: boolean | null;
}
export interface IRequestSearchRoles {
    fields?: string | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    id?: string | null;
    name?: string | null;
    built_in?: boolean | null;
    filter_or?: boolean | null;
}
export interface IRequestSearchRolesWithUserCount {
    fields?: string | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    id?: string | null;
    name?: string | null;
    built_in?: boolean | null;
    filter_or?: boolean | null;
}
export interface IRequestSearchThemes {
    id?: string | null;
    name?: string | null;
    begin_at?: Date | null;
    end_at?: Date | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    fields?: string | null;
    filter_or?: boolean | null;
}
export interface IRequestSearchUserLoginLockouts {
    fields?: string | null;
    page?: number | null;
    per_page?: number | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    auth_type?: string | null;
    full_name?: string | null;
    email?: string | null;
    remote_id?: string | null;
    filter_or?: boolean | null;
}
export interface IRequestSearchUsers {
    fields?: string | null;
    page?: number | null;
    per_page?: number | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    verified_looker_employee?: boolean | null;
    embed_user?: boolean | null;
    email?: string | null;
    is_disabled?: boolean | null;
    filter_or?: boolean | null;
    content_metadata_id?: string | null;
    group_id?: string | null;
}
export interface IRequestSearchUsersNames {
    pattern: string;
    fields?: string | null;
    page?: number | null;
    per_page?: number | null;
    limit?: number | null;
    offset?: number | null;
    sorts?: string | null;
    id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    verified_looker_employee?: boolean | null;
    email?: string | null;
    is_disabled?: boolean | null;
}
export interface IRequestStartPdtBuild {
    model_name: string;
    view_name: string;
    force_rebuild?: string | null;
    force_full_incremental?: string | null;
    workspace?: string | null;
    source?: string | null;
}
export interface IRequestTagRef {
    project_id: string;
    body: IWriteProject;
    commit_sha?: string | null;
    tag_name?: string | null;
    tag_message?: string | null;
}
export interface IRequestUserAttributeUserValues {
    user_id: string;
    fields?: string | null;
    user_attribute_ids?: DelimArray<string> | null;
    all_values?: boolean | null;
    include_unset?: boolean | null;
}
export interface IRequestUserRoles {
    user_id: string;
    fields?: string | null;
    direct_association_only?: boolean | null;
}
export declare enum ResultFormat {
    inline_json = "inline_json",
    json = "json",
    json_detail = "json_detail",
    json_fe = "json_fe",
    json_bi = "json_bi",
    csv = "csv",
    html = "html",
    md = "md",
    txt = "txt",
    xlsx = "xlsx",
    gsxml = "gsxml",
    sql = "sql"
}
export interface IResultMakerFilterables {
    model?: string | null;
    view?: string | null;
    name?: string | null;
    listen?: IResultMakerFilterablesListen[] | null;
}
export interface IResultMakerFilterablesListen {
    dashboard_filter_name?: string | null;
    field?: string | null;
}
export interface IResultMakerWithIdVisConfigAndDynamicFields {
    id?: string;
    dynamic_fields?: string | null;
    filterables?: IResultMakerFilterables[] | null;
    sorts?: string[] | null;
    merge_result_id?: string | null;
    total?: boolean;
    query_id?: string | null;
    sql_query_id?: string | null;
    query?: IQuery;
    vis_config?: IDictionary<any> | null;
}
export interface IRole {
    can?: IDictionary<boolean>;
    id?: string;
    name?: string | null;
    permission_set?: IPermissionSet;
    permission_set_id?: string | null;
    model_set?: IModelSet;
    model_set_id?: string | null;
    url?: string | null;
    users_url?: string | null;
}
export interface IRoleSearch {
    can?: IDictionary<boolean>;
    id?: string;
    name?: string | null;
    permission_set?: IPermissionSet;
    permission_set_id?: string | null;
    model_set?: IModelSet;
    model_set_id?: string | null;
    user_count?: number | null;
    url?: string | null;
    users_url?: string | null;
}
export interface IRunningQueries {
    can?: IDictionary<boolean>;
    id?: string;
    user?: IUserPublic;
    query?: IQuery;
    sql_query?: ISqlQuery;
    look?: ILookBasic;
    created_at?: string | null;
    completed_at?: string | null;
    query_id?: string | null;
    source?: string | null;
    node_id?: string | null;
    slug?: string | null;
    query_task_id?: string | null;
    cache_key?: string | null;
    connection_name?: string | null;
    dialect?: string | null;
    connection_id?: string | null;
    message?: string | null;
    status?: string | null;
    runtime?: number | null;
    sql?: string | null;
}
export interface ISamlConfig {
    can?: IDictionary<boolean>;
    enabled?: boolean;
    idp_cert?: string | null;
    idp_url?: string | null;
    idp_issuer?: string | null;
    idp_audience?: string | null;
    allowed_clock_drift?: number | null;
    user_attribute_map_email?: string | null;
    user_attribute_map_first_name?: string | null;
    user_attribute_map_last_name?: string | null;
    new_user_migration_types?: string | null;
    alternate_email_login_allowed?: boolean;
    test_slug?: string | null;
    modified_at?: string | null;
    modified_by?: string | null;
    default_new_user_roles?: IRole[] | null;
    default_new_user_groups?: IGroup[] | null;
    default_new_user_role_ids?: string[] | null;
    default_new_user_group_ids?: string[] | null;
    set_roles_from_groups?: boolean;
    groups_attribute?: string | null;
    groups?: ISamlGroupRead[] | null;
    groups_with_role_ids?: ISamlGroupWrite[] | null;
    auth_requires_role?: boolean;
    user_attributes?: ISamlUserAttributeRead[] | null;
    user_attributes_with_ids?: ISamlUserAttributeWrite[] | null;
    groups_finder_type?: string | null;
    groups_member_value?: string | null;
    bypass_login_page?: boolean;
    allow_normal_group_membership?: boolean;
    allow_roles_from_normal_groups?: boolean;
    allow_direct_roles?: boolean;
    url?: string | null;
}
export interface ISamlGroupRead {
    id?: string;
    looker_group_id?: string | null;
    looker_group_name?: string | null;
    name?: string | null;
    roles?: IRole[] | null;
    url?: string | null;
}
export interface ISamlGroupWrite {
    id?: string | null;
    looker_group_id?: string | null;
    looker_group_name?: string | null;
    name?: string | null;
    role_ids?: string[] | null;
    url?: string | null;
}
export interface ISamlMetadataParseResult {
    can?: IDictionary<boolean>;
    idp_issuer?: string | null;
    idp_url?: string | null;
    idp_cert?: string | null;
}
export interface ISamlUserAttributeRead {
    name?: string | null;
    required?: boolean;
    user_attributes?: IUserAttribute[] | null;
    url?: string | null;
}
export interface ISamlUserAttributeWrite {
    name?: string | null;
    required?: boolean;
    user_attribute_ids?: string[] | null;
    url?: string | null;
}
export interface IScheduledPlan {
    name?: string | null;
    user_id?: string | null;
    run_as_recipient?: boolean;
    enabled?: boolean;
    look_id?: string | null;
    dashboard_id?: string | null;
    lookml_dashboard_id?: string | null;
    filters_string?: string | null;
    dashboard_filters?: string | null;
    require_results?: boolean;
    require_no_results?: boolean;
    require_change?: boolean;
    send_all_results?: boolean;
    crontab?: string | null;
    datagroup?: string | null;
    timezone?: string | null;
    query_id?: string | null;
    scheduled_plan_destination?: IScheduledPlanDestination[] | null;
    run_once?: boolean;
    include_links?: boolean;
    custom_url_base?: string | null;
    custom_url_params?: string | null;
    custom_url_label?: string | null;
    show_custom_url?: boolean;
    pdf_paper_size?: string | null;
    pdf_landscape?: boolean;
    embed?: boolean;
    color_theme?: string | null;
    long_tables?: boolean;
    inline_table_width?: number | null;
    id?: string;
    created_at?: Date | null;
    updated_at?: Date | null;
    title?: string | null;
    user?: IUserPublic;
    next_run_at?: Date | null;
    last_run_at?: Date | null;
    can?: IDictionary<boolean>;
}
export interface IScheduledPlanDestination {
    id?: string;
    scheduled_plan_id?: string | null;
    format?: string | null;
    apply_formatting?: boolean;
    apply_vis?: boolean;
    address?: string | null;
    looker_recipient?: boolean;
    type?: string | null;
    parameters?: string | null;
    secret_parameters?: string | null;
    message?: string | null;
}
export interface ISchema {
    name?: string;
    is_default?: boolean;
}
export interface ISchemaColumn {
    name?: string | null;
    sql_escaped_name?: string | null;
    schema_name?: string | null;
    data_type_database?: string;
    data_type?: string;
    data_type_looker?: string;
    description?: string | null;
    column_size?: number | null;
    snippets?: ISnippet[];
}
export interface ISchemaColumns {
    name?: string | null;
    sql_escaped_name?: string | null;
    schema_name?: string | null;
    columns?: ISchemaColumn[];
}
export interface ISchemaTable {
    name?: string | null;
    sql_escaped_name?: string | null;
    schema_name?: string | null;
    rows?: number | null;
    external?: string | null;
    snippets?: ISnippet[];
}
export interface ISchemaTables {
    name?: string;
    is_default?: boolean;
    tables?: ISchemaTable[];
    table_limit_hit?: boolean;
}
export declare enum SecretType {
    SSO = "SSO",
    JWT = "JWT"
}
export interface ISession {
    can?: IDictionary<boolean>;
    id?: string;
    ip_address?: string | null;
    browser?: string | null;
    operating_system?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    credentials_type?: string | null;
    extended_at?: string | null;
    extended_count?: number | null;
    sudo_user_id?: string | null;
    created_at?: string | null;
    expires_at?: string | null;
    url?: string | null;
}
export interface ISessionConfig {
    can?: IDictionary<boolean>;
    allow_persistent_sessions?: boolean;
    session_minutes?: number | null;
    unlimited_sessions_per_user?: boolean;
    use_inactivity_based_logout?: boolean;
    track_session_location?: boolean;
}
export interface ISetting {
    extension_framework_enabled?: boolean;
    extension_load_url_enabled?: boolean;
    marketplace_auto_install_enabled?: boolean;
    marketplace_automation?: IMarketplaceAutomation;
    marketplace_enabled?: boolean;
    marketplace_site?: string;
    marketplace_terms_accepted?: boolean;
    privatelabel_configuration?: IPrivatelabelConfiguration;
    custom_welcome_email?: ICustomWelcomeEmail;
    onboarding_enabled?: boolean;
    timezone?: string;
    allow_user_timezones?: boolean;
    data_connector_default_enabled?: boolean;
    host_url?: string;
    override_warnings?: boolean;
    email_domain_allowlist?: string[];
    embed_cookieless_v2?: boolean;
    embed_enabled?: boolean;
    embed_config?: IEmbedConfig;
    login_notification_enabled?: boolean;
    login_notification_text?: string | null;
}
export interface ISmtpNodeStatus {
    is_valid?: boolean;
    message?: string | null;
    hostname?: string | null;
}
export interface ISmtpSettings {
    address?: string;
    from?: string;
    user_name?: string;
    password?: string;
    port?: number;
    enable_starttls_auto?: boolean;
    ssl_version?: SslVersion | null;
    default_smtp?: boolean | null;
}
export interface ISmtpStatus {
    is_valid?: boolean;
    node_count?: number | null;
    node_status?: ISmtpNodeStatus[] | null;
}
export interface ISnippet {
    name?: string;
    label?: string;
    sql?: string;
}
export interface ISqlInterfaceQuery {
    can?: IDictionary<boolean>;
    id?: number;
    signature: string | null;
}
export interface ISqlInterfaceQueryCreate {
    can?: IDictionary<boolean>;
    sql: string | null;
    jdbc_client?: boolean;
}
export interface ISqlInterfaceQueryMetadata {
    results?: string;
}
export interface ISqlQuery {
    can?: IDictionary<boolean>;
    slug?: string;
    last_runtime?: number | null;
    run_count?: number;
    browser_limit?: number;
    sql?: string;
    last_run_at?: string | null;
    connection?: IDBConnectionBase;
    model_name?: string | null;
    creator?: IUserPublic;
    explore_url?: string | null;
    plaintext?: boolean;
    vis_config?: IDictionary<any> | null;
    result_maker_id?: string | null;
}
export interface ISqlQueryCreate {
    connection_name?: string | null;
    connection_id?: string | null;
    model_name?: string | null;
    sql?: string | null;
    vis_config?: IDictionary<any> | null;
}
export interface ISshPublicKey {
    public_key?: string;
}
export interface ISshServer {
    ssh_server_id?: string;
    ssh_server_name?: string;
    ssh_server_host?: string;
    ssh_server_port?: number;
    ssh_server_user?: string;
    finger_print?: string;
    sha_finger_print?: string;
    public_key?: string;
    status?: string;
}
export interface ISshTunnel {
    tunnel_id?: string;
    ssh_server_id?: string;
    ssh_server_name?: string;
    ssh_server_host?: string;
    ssh_server_port?: number;
    ssh_server_user?: string;
    last_attempt?: string;
    local_host_port?: number;
    database_host?: string;
    database_port?: number;
    status?: string;
}
export declare enum SslVersion {
    TLSv1_1 = "TLSv1_1",
    SSLv23 = "SSLv23",
    TLSv1_2 = "TLSv1_2"
}
export interface ISupportAccessAddEntries {
    emails?: string[] | null;
    reason?: string | null;
}
export interface ISupportAccessAllowlistEntry {
    id?: string;
    email?: string | null;
    full_name?: string | null;
    reason?: string | null;
    created_date?: Date | null;
}
export interface ISupportAccessEnable {
    duration_in_seconds: number | null;
}
export interface ISupportAccessStatus {
    open?: boolean;
    open_until?: Date | null;
}
export declare enum SupportedActionTypes {
    cell = "cell",
    query = "query",
    dashboard = "dashboard",
    none = "none"
}
export declare enum SupportedDownloadSettings {
    push = "push",
    url = "url"
}
export declare enum SupportedFormats {
    txt = "txt",
    csv = "csv",
    inline_json = "inline_json",
    json = "json",
    json_label = "json_label",
    json_detail = "json_detail",
    json_detail_lite_stream = "json_detail_lite_stream",
    xlsx = "xlsx",
    html = "html",
    wysiwyg_pdf = "wysiwyg_pdf",
    assembled_pdf = "assembled_pdf",
    wysiwyg_png = "wysiwyg_png",
    csv_zip = "csv_zip"
}
export declare enum SupportedFormattings {
    formatted = "formatted",
    unformatted = "unformatted"
}
export declare enum SupportedVisualizationFormattings {
    apply = "apply",
    noapply = "noapply"
}
export interface ITheme {
    can?: IDictionary<boolean>;
    begin_at?: Date | null;
    end_at?: Date | null;
    id?: string;
    name?: string;
    settings?: IThemeSettings;
}
export interface IThemeSettings {
    background_color?: string;
    base_font_size?: string | null;
    color_collection_id?: string;
    font_color?: string | null;
    font_family?: string;
    font_source?: string | null;
    info_button_color?: string;
    primary_button_color?: string;
    show_filters_bar?: boolean;
    show_title?: boolean;
    text_tile_text_color?: string;
    tile_background_color?: string;
    text_tile_background_color?: string;
    tile_text_color?: string;
    title_color?: string;
    warn_button_color?: string;
    tile_title_alignment?: string;
    tile_shadow?: boolean;
    show_last_updated_indicator?: boolean;
    show_reload_data_icon?: boolean;
    show_dashboard_menu?: boolean;
    show_filters_toggle?: boolean;
    show_dashboard_header?: boolean;
    center_dashboard_title?: boolean;
    dashboard_title_font_size?: string;
    box_shadow?: string;
    page_margin_top?: string;
    page_margin_bottom?: string;
    page_margin_sides?: string;
    show_explore_header?: boolean;
    show_explore_title?: boolean;
    show_explore_last_run?: boolean;
    show_explore_timezone?: boolean;
    show_explore_run_stop_button?: boolean;
    show_explore_actions_button?: boolean;
    show_look_header?: boolean;
    show_look_title?: boolean;
    show_look_last_run?: boolean;
    show_look_timezone?: boolean;
    show_look_run_stop_button?: boolean;
    show_look_actions_button?: boolean;
    tile_title_font_size?: string;
    column_gap_size?: string;
    row_gap_size?: string;
    border_radius?: string;
}
export interface ITimezone {
    value?: string | null;
    label?: string | null;
    group?: string | null;
}
export interface IUpdateArtifact {
    key: string;
    value: string;
    content_type?: string | null;
    version?: number;
}
export interface IUpdateFolder {
    name?: string;
    parent_id?: string;
}
export interface IUser {
    can?: IDictionary<boolean>;
    avatar_url?: string | null;
    avatar_url_without_sizing?: string | null;
    credentials_api3?: ICredentialsApi3[] | null;
    credentials_email?: ICredentialsEmail;
    credentials_embed?: ICredentialsEmbed[] | null;
    credentials_google?: ICredentialsGoogle;
    credentials_ldap?: ICredentialsLDAP;
    credentials_looker_openid?: ICredentialsLookerOpenid;
    credentials_oidc?: ICredentialsOIDC;
    credentials_saml?: ICredentialsSaml;
    credentials_totp?: ICredentialsTotp;
    display_name?: string | null;
    email?: string | null;
    embed_group_space_id?: string | null;
    first_name?: string | null;
    group_ids?: string[] | null;
    home_folder_id?: string | null;
    id?: string;
    is_disabled?: boolean;
    last_name?: string | null;
    locale?: string | null;
    looker_versions?: string[] | null;
    models_dir_validated?: boolean | null;
    personal_folder_id?: string | null;
    presumed_looker_employee?: boolean;
    role_ids?: string[] | null;
    sessions?: ISession[] | null;
    ui_state?: IDictionary<string> | null;
    verified_looker_employee?: boolean;
    roles_externally_managed?: boolean;
    allow_direct_roles?: boolean;
    allow_normal_group_membership?: boolean;
    allow_roles_from_normal_groups?: boolean;
    embed_group_folder_id?: string | null;
    is_iam_admin?: boolean;
    url?: string | null;
}
export interface IUserAttribute {
    can?: IDictionary<boolean>;
    id?: string;
    name: string | null;
    label: string | null;
    type: string | null;
    default_value?: string | null;
    is_system?: boolean;
    is_permanent?: boolean;
    value_is_hidden?: boolean;
    user_can_view?: boolean;
    user_can_edit?: boolean;
    hidden_value_domain_whitelist?: string | null;
}
export declare enum UserAttributeFilterTypes {
    advanced_filter_string = "advanced_filter_string",
    advanced_filter_number = "advanced_filter_number",
    advanced_filter_datetime = "advanced_filter_datetime",
    string = "string",
    number = "number",
    datetime = "datetime",
    relative_url = "relative_url",
    yesno = "yesno",
    zipcode = "zipcode"
}
export interface IUserAttributeGroupValue {
    can?: IDictionary<boolean>;
    id?: string;
    group_id?: string | null;
    user_attribute_id?: string | null;
    value_is_hidden?: boolean;
    rank?: number | null;
    value?: string | null;
}
export interface IUserAttributeWithValue {
    can?: IDictionary<boolean>;
    name?: string | null;
    label?: string | null;
    rank?: number | null;
    value?: string | null;
    user_id?: string | null;
    user_can_edit?: boolean;
    value_is_hidden?: boolean;
    user_attribute_id?: string | null;
    source?: string | null;
    hidden_value_domain_whitelist?: string | null;
}
export interface IUserEmailOnly {
    email: string;
}
export interface IUserLoginLockout {
    can?: IDictionary<boolean>;
    key?: string | null;
    auth_type?: string | null;
    ip?: string | null;
    user_id?: string | null;
    remote_id?: string | null;
    full_name?: string | null;
    email?: string | null;
    fail_count?: number | null;
    lockout_at?: Date | null;
}
export interface IUserPublic {
    can?: IDictionary<boolean>;
    id?: string;
    first_name?: string;
    last_name?: string;
    display_name?: string | null;
    avatar_url?: string;
    url?: string | null;
}
export interface IValidationError {
    message: string | null;
    errors?: IValidationErrorDetail[] | null;
    documentation_url: string | null;
}
export interface IValidationErrorDetail {
    field?: string | null;
    code?: string | null;
    message?: string | null;
    documentation_url: string | null;
}
export declare enum WeekStartDay {
    monday = "monday",
    tuesday = "tuesday",
    wednesday = "wednesday",
    thursday = "thursday",
    friday = "friday",
    saturday = "saturday",
    sunday = "sunday"
}
export interface IWelcomeEmailTest {
    content?: string | null;
    subject?: string | null;
    header?: string | null;
}
export interface IWhitelabelConfiguration {
    id?: string;
    logo_file?: string | null;
    logo_url?: string | null;
    favicon_file?: string | null;
    favicon_url?: string | null;
    default_title?: string | null;
    show_help_menu?: boolean;
    show_docs?: boolean;
    show_email_sub_options?: boolean;
    allow_looker_mentions?: boolean;
    allow_looker_links?: boolean;
    custom_welcome_email_advanced?: boolean;
    setup_mentions?: boolean;
    alerts_logo?: boolean;
    alerts_links?: boolean;
    folders_mentions?: boolean;
}
export interface IWorkspace {
    can?: IDictionary<boolean>;
    id?: string;
    projects?: IProject[] | null;
}
export interface IWriteAlert {
    applied_dashboard_filters?: IAlertAppliedDashboardFilter[] | null;
    comparison_type: ComparisonType | null;
    cron: string;
    custom_url_base?: string | null;
    custom_url_params?: string | null;
    custom_url_label?: string | null;
    show_custom_url?: boolean;
    custom_title?: string | null;
    dashboard_element_id?: string | null;
    description?: string | null;
    destinations: IAlertDestination[] | null;
    field: IAlertField | null;
    is_disabled?: boolean;
    disabled_reason?: string | null;
    is_public?: boolean;
    investigative_content_type?: InvestigativeContentType | null;
    investigative_content_id?: string | null;
    lookml_dashboard_id?: string | null;
    lookml_link_id?: string | null;
    owner_id: string;
    threshold: number;
    time_series_condition_state?: IAlertConditionState | null;
}
export interface IWriteApiSession {
    workspace_id?: string | null;
}
export interface IWriteBackupConfiguration {
    type?: string | null;
    custom_s3_bucket?: string | null;
    custom_s3_bucket_region?: string | null;
    custom_s3_key?: string | null;
    custom_s3_secret?: string | null;
}
export interface IWriteBoard {
    deleted_at?: Date | null;
    description?: string | null;
    section_order?: string[] | null;
    title?: string | null;
}
export interface IWriteBoardItem {
    custom_description?: string | null;
    custom_title?: string | null;
    custom_url?: string | null;
    dashboard_id?: string | null;
    board_section_id?: string | null;
    look_id?: string | null;
    lookml_dashboard_id?: string | null;
    order?: number | null;
    use_custom_description?: boolean;
    use_custom_title?: boolean;
    use_custom_url?: boolean;
    custom_image_data_base64?: string | null;
    use_custom_image?: boolean;
}
export interface IWriteBoardSection {
    deleted_at?: Date | null;
    description?: string | null;
    board_id?: string | null;
    item_order?: string[] | null;
    title?: string | null;
}
export interface IWriteColorCollection {
    label?: string;
    categoricalPalettes?: IDiscretePalette[] | null;
    sequentialPalettes?: IContinuousPalette[] | null;
    divergingPalettes?: IContinuousPalette[] | null;
}
export interface IWriteContentFavorite {
    user_id?: string;
    content_metadata_id?: string;
    look?: IWriteLookBasic | null;
    dashboard?: IWriteDashboardBase | null;
}
export interface IWriteContentMeta {
    inherits?: boolean;
}
export interface IWriteCreateDashboardFilter {
    dashboard_id: string | null;
    name: string | null;
    title: string | null;
    type: string | null;
    default_value?: string | null;
    model?: string | null;
    explore?: string | null;
    dimension?: string | null;
    row?: number | null;
    listens_to_filters?: string[] | null;
    allow_multiple_values?: boolean;
    required?: boolean;
    ui_config?: IDictionary<any> | null;
}
export interface IWriteCreateQueryTask {
    query_id: string | null;
    result_format: ResultFormat | null;
    source?: string | null;
    deferred?: boolean;
    look_id?: string | null;
    dashboard_id?: string | null;
}
export interface IWriteCredentialsEmail {
    email?: string | null;
    forced_password_reset_at_next_login?: boolean;
}
export interface IWriteDashboard {
    description?: string | null;
    hidden?: boolean;
    query_timezone?: string | null;
    refresh_interval?: string | null;
    folder?: IWriteFolderBase | null;
    title?: string | null;
    slug?: string | null;
    preferred_viewer?: string | null;
    alert_sync_with_dashboard_filter_enabled?: boolean;
    background_color?: string | null;
    crossfilter_enabled?: boolean;
    deleted?: boolean;
    enable_viz_full_screen?: boolean;
    filters_bar_collapsed?: boolean;
    filters_location_top?: boolean;
    load_configuration?: string | null;
    lookml_link_id?: string | null;
    show_filters_bar?: boolean | null;
    show_title?: boolean | null;
    folder_id?: string | null;
    text_tile_text_color?: string | null;
    tile_background_color?: string | null;
    tile_text_color?: string | null;
    title_color?: string | null;
    appearance?: IDashboardAppearance | null;
}
export interface IWriteDashboardBase {
    folder?: IWriteFolderBase | null;
}
export interface IWriteDashboardElement {
    body_text?: string | null;
    dashboard_id?: string | null;
    look?: IWriteLookWithQuery | null;
    look_id?: string | null;
    merge_result_id?: string | null;
    note_display?: string | null;
    note_state?: string | null;
    note_text?: string | null;
    query?: IWriteQuery | null;
    query_id?: string | null;
    refresh_interval?: string | null;
    result_maker?: IWriteResultMakerWithIdVisConfigAndDynamicFields | null;
    result_maker_id?: string | null;
    subtitle_text?: string | null;
    title?: string | null;
    title_hidden?: boolean;
    title_text?: string | null;
    type?: string | null;
    rich_content_json?: string | null;
    extension_id?: string | null;
}
export interface IWriteDashboardFilter {
    name?: string | null;
    title?: string | null;
    type?: string | null;
    default_value?: string | null;
    model?: string | null;
    explore?: string | null;
    dimension?: string | null;
    row?: number | null;
    listens_to_filters?: string[] | null;
    allow_multiple_values?: boolean;
    required?: boolean;
    ui_config?: IDictionary<any> | null;
}
export interface IWriteDashboardLayout {
    dashboard_id?: string | null;
    type?: string | null;
    active?: boolean;
    column_width?: number | null;
    width?: number | null;
}
export interface IWriteDashboardLayoutComponent {
    dashboard_layout_id?: string | null;
    dashboard_element_id?: string | null;
    row?: number | null;
    column?: number | null;
    width?: number | null;
    height?: number | null;
}
export interface IWriteDashboardLookml {
    folder_id?: string | null;
    lookml?: string | null;
}
export interface IWriteDatagroup {
    stale_before?: number | null;
    triggered_at?: number | null;
}
export interface IWriteDBConnection {
    name?: string;
    host?: string | null;
    port?: string | null;
    username?: string | null;
    password?: string | null;
    certificate?: string | null;
    file_type?: string | null;
    database?: string | null;
    db_timezone?: string | null;
    query_timezone?: string | null;
    schema?: string | null;
    max_connections?: number | null;
    max_billing_gigabytes?: string | null;
    ssl?: boolean;
    verify_ssl?: boolean;
    tmp_db_name?: string | null;
    jdbc_additional_params?: string | null;
    pool_timeout?: number | null;
    dialect_name?: string | null;
    user_db_credentials?: boolean | null;
    user_attribute_fields?: string[] | null;
    maintenance_cron?: string | null;
    sql_runner_precache_tables?: boolean;
    sql_writing_with_info_schema?: boolean;
    after_connect_statements?: string | null;
    pdt_context_override?: IWriteDBConnectionOverride | null;
    custom_local_port?: number | null;
    tunnel_id?: string | null;
    uses_tns?: boolean | null;
    pdt_concurrency?: number | null;
    disable_context_comment?: boolean | null;
    oauth_application_id?: string | null;
    always_retry_failed_builds?: boolean | null;
    cost_estimate_enabled?: boolean | null;
    pdt_api_control_enabled?: boolean | null;
}
export interface IWriteDBConnectionOverride {
    context?: string;
    host?: string | null;
    port?: string | null;
    username?: string | null;
    password?: string | null;
    certificate?: string | null;
    file_type?: string | null;
    database?: string | null;
    schema?: string | null;
    jdbc_additional_params?: string | null;
    after_connect_statements?: string | null;
}
export interface IWriteEmbedSecret {
    algorithm?: string | null;
    enabled?: boolean;
    secret_type?: SecretType | null;
}
export interface IWriteExternalOauthApplication {
    name?: string;
    client_id?: string;
    client_secret?: string;
    dialect_name?: string | null;
}
export interface IWriteFolderBase {
    name: string;
    parent_id?: string | null;
}
export interface IWriteGitBranch {
    name?: string | null;
    ref?: string | null;
}
export interface IWriteGroup {
    can_add_to_content_metadata?: boolean;
    name?: string | null;
}
export interface IWriteIntegration {
    enabled?: boolean;
    params?: IIntegrationParam[] | null;
    installed_delegate_oauth_targets?: string[] | null;
}
export interface IWriteIntegrationHub {
    url?: string;
    authorization_token?: string | null;
}
export interface IWriteInternalHelpResources {
    enabled?: boolean;
}
export interface IWriteInternalHelpResourcesContent {
    organization_name?: string | null;
    markdown_content?: string | null;
}
export interface IWriteLDAPConfig {
    alternate_email_login_allowed?: boolean;
    auth_password?: string | null;
    auth_requires_role?: boolean;
    auth_username?: string | null;
    connection_host?: string | null;
    connection_port?: string | null;
    connection_tls?: boolean;
    connection_tls_no_verify?: boolean;
    default_new_user_group_ids?: string[] | null;
    default_new_user_role_ids?: string[] | null;
    enabled?: boolean;
    force_no_page?: boolean;
    groups_base_dn?: string | null;
    groups_finder_type?: string | null;
    groups_member_attribute?: string | null;
    groups_objectclasses?: string | null;
    groups_user_attribute?: string | null;
    groups_with_role_ids?: ILDAPGroupWrite[] | null;
    merge_new_users_by_email?: boolean;
    set_roles_from_groups?: boolean;
    test_ldap_password?: string | null;
    test_ldap_user?: string | null;
    user_attribute_map_email?: string | null;
    user_attribute_map_first_name?: string | null;
    user_attribute_map_last_name?: string | null;
    user_attribute_map_ldap_id?: string | null;
    user_attributes_with_ids?: ILDAPUserAttributeWrite[] | null;
    user_bind_base_dn?: string | null;
    user_custom_filter?: string | null;
    user_id_attribute_names?: string | null;
    user_objectclass?: string | null;
    allow_normal_group_membership?: boolean;
    allow_roles_from_normal_groups?: boolean;
    allow_direct_roles?: boolean;
}
export interface IWriteLegacyFeature {
    enabled_locally?: boolean;
}
export interface IWriteLookBasic {
    user_id?: string | null;
}
export interface IWriteLookmlModel {
    allowed_db_connection_names?: string[] | null;
    name?: string | null;
    project_name?: string | null;
    unlimited_db_connections?: boolean;
}
export interface IWriteLookWithQuery {
    title?: string | null;
    user_id?: string | null;
    deleted?: boolean;
    description?: string | null;
    is_run_on_load?: boolean;
    public?: boolean;
    query_id?: string | null;
    folder?: IWriteFolderBase | null;
    folder_id?: string | null;
    query?: IWriteQuery | null;
}
export interface IWriteMergeQuery {
    column_limit?: string | null;
    dynamic_fields?: string | null;
    pivots?: string[] | null;
    sorts?: string[] | null;
    source_queries?: IMergeQuerySourceQuery[] | null;
    total?: boolean;
    vis_config?: IDictionary<string> | null;
}
export interface IWriteMobileToken {
    device_token: string;
    device_type: DeviceType | null;
}
export interface IWriteModelSet {
    models?: string[] | null;
    name?: string | null;
}
export interface IWriteOauthClientApp {
    redirect_uri?: string;
    display_name?: string;
    description?: string;
    enabled?: boolean;
    group_id?: string | null;
}
export interface IWriteOIDCConfig {
    alternate_email_login_allowed?: boolean;
    audience?: string | null;
    auth_requires_role?: boolean;
    authorization_endpoint?: string | null;
    default_new_user_group_ids?: string[] | null;
    default_new_user_role_ids?: string[] | null;
    enabled?: boolean;
    groups_attribute?: string | null;
    groups_with_role_ids?: IOIDCGroupWrite[] | null;
    identifier?: string | null;
    issuer?: string | null;
    new_user_migration_types?: string | null;
    scopes?: string[] | null;
    secret?: string | null;
    set_roles_from_groups?: boolean;
    token_endpoint?: string | null;
    user_attribute_map_email?: string | null;
    user_attribute_map_first_name?: string | null;
    user_attribute_map_last_name?: string | null;
    user_attributes_with_ids?: IOIDCUserAttributeWrite[] | null;
    userinfo_endpoint?: string | null;
    allow_normal_group_membership?: boolean;
    allow_roles_from_normal_groups?: boolean;
    allow_direct_roles?: boolean;
}
export interface IWritePasswordConfig {
    min_length?: number | null;
    require_numeric?: boolean;
    require_upperlower?: boolean;
    require_special?: boolean;
}
export interface IWritePermissionSet {
    name?: string | null;
    permissions?: string[] | null;
}
export interface IWritePrivatelabelConfiguration {
    logo_file?: string | null;
    favicon_file?: string | null;
    default_title?: string | null;
    show_help_menu?: boolean;
    show_docs?: boolean;
    show_email_sub_options?: boolean;
    allow_looker_mentions?: boolean;
    allow_looker_links?: boolean;
    custom_welcome_email_advanced?: boolean;
    setup_mentions?: boolean;
    alerts_logo?: boolean;
    alerts_links?: boolean;
    folders_mentions?: boolean;
}
export interface IWriteProject {
    name?: string;
    git_remote_url?: string | null;
    git_username?: string | null;
    git_password?: string | null;
    git_production_branch_name?: string;
    use_git_cookie_auth?: boolean;
    git_username_user_attribute?: string | null;
    git_password_user_attribute?: string | null;
    git_service_name?: string | null;
    git_application_server_http_port?: number | null;
    git_application_server_http_scheme?: string | null;
    deploy_secret?: string | null;
    unset_deploy_secret?: boolean;
    pull_request_mode?: PullRequestMode | null;
    validation_required?: boolean;
    git_release_mgmt_enabled?: boolean;
    allow_warnings?: boolean;
    dependency_status?: string | null;
}
export interface IWriteQuery {
    model: string;
    view: string;
    fields?: string[] | null;
    pivots?: string[] | null;
    fill_fields?: string[] | null;
    filters?: IDictionary<string> | null;
    filter_expression?: string | null;
    sorts?: string[] | null;
    limit?: string | null;
    column_limit?: string | null;
    total?: boolean | null;
    row_total?: string | null;
    subtotals?: string[] | null;
    vis_config?: IDictionary<any> | null;
    filter_config?: IDictionary<any> | null;
    visible_ui_sections?: string | null;
    dynamic_fields?: string | null;
    client_id?: string | null;
    query_timezone?: string | null;
}
export interface IWriteRepositoryCredential {
    git_username?: string | null;
    git_password?: string | null;
    ssh_public_key?: string | null;
}
export interface IWriteResultMakerWithIdVisConfigAndDynamicFields {
    query?: IWriteQuery | null;
}
export interface IWriteRole {
    name?: string | null;
    permission_set?: IWritePermissionSet | null;
    permission_set_id?: string | null;
    model_set?: IWriteModelSet | null;
    model_set_id?: string | null;
}
export interface IWriteSamlConfig {
    enabled?: boolean;
    idp_cert?: string | null;
    idp_url?: string | null;
    idp_issuer?: string | null;
    idp_audience?: string | null;
    allowed_clock_drift?: number | null;
    user_attribute_map_email?: string | null;
    user_attribute_map_first_name?: string | null;
    user_attribute_map_last_name?: string | null;
    new_user_migration_types?: string | null;
    alternate_email_login_allowed?: boolean;
    default_new_user_role_ids?: string[] | null;
    default_new_user_group_ids?: string[] | null;
    set_roles_from_groups?: boolean;
    groups_attribute?: string | null;
    groups_with_role_ids?: ISamlGroupWrite[] | null;
    auth_requires_role?: boolean;
    user_attributes_with_ids?: ISamlUserAttributeWrite[] | null;
    groups_finder_type?: string | null;
    groups_member_value?: string | null;
    bypass_login_page?: boolean;
    allow_normal_group_membership?: boolean;
    allow_roles_from_normal_groups?: boolean;
    allow_direct_roles?: boolean;
}
export interface IWriteScheduledPlan {
    name?: string | null;
    user_id?: string | null;
    run_as_recipient?: boolean;
    enabled?: boolean;
    look_id?: string | null;
    dashboard_id?: string | null;
    lookml_dashboard_id?: string | null;
    filters_string?: string | null;
    dashboard_filters?: string | null;
    require_results?: boolean;
    require_no_results?: boolean;
    require_change?: boolean;
    send_all_results?: boolean;
    crontab?: string | null;
    datagroup?: string | null;
    timezone?: string | null;
    query_id?: string | null;
    scheduled_plan_destination?: IScheduledPlanDestination[] | null;
    run_once?: boolean;
    include_links?: boolean;
    custom_url_base?: string | null;
    custom_url_params?: string | null;
    custom_url_label?: string | null;
    show_custom_url?: boolean;
    pdf_paper_size?: string | null;
    pdf_landscape?: boolean;
    embed?: boolean;
    color_theme?: string | null;
    long_tables?: boolean;
    inline_table_width?: number | null;
}
export interface IWriteSessionConfig {
    allow_persistent_sessions?: boolean;
    session_minutes?: number | null;
    unlimited_sessions_per_user?: boolean;
    use_inactivity_based_logout?: boolean;
    track_session_location?: boolean;
}
export interface IWriteSetting {
    extension_framework_enabled?: boolean;
    extension_load_url_enabled?: boolean;
    marketplace_auto_install_enabled?: boolean;
    marketplace_automation?: IMarketplaceAutomation | null;
    marketplace_enabled?: boolean;
    marketplace_terms_accepted?: boolean;
    privatelabel_configuration?: IWritePrivatelabelConfiguration | null;
    custom_welcome_email?: ICustomWelcomeEmail | null;
    onboarding_enabled?: boolean;
    timezone?: string;
    allow_user_timezones?: boolean;
    data_connector_default_enabled?: boolean;
    host_url?: string;
    override_warnings?: boolean;
    email_domain_allowlist?: string[] | null;
    embed_cookieless_v2?: boolean;
    embed_config?: IEmbedConfig | null;
}
export interface IWriteSqlInterfaceQueryCreate {
    sql: string | null;
    jdbc_client?: boolean;
}
export interface IWriteSshServer {
    ssh_server_name?: string;
    ssh_server_host?: string;
    ssh_server_port?: number;
    ssh_server_user?: string;
}
export interface IWriteSshTunnel {
    ssh_server_id?: string;
    local_host_port?: number;
    database_host?: string;
    database_port?: number;
}
export interface IWriteTheme {
    begin_at?: Date | null;
    end_at?: Date | null;
    name?: string;
    settings?: IThemeSettings | null;
}
export interface IWriteUser {
    credentials_email?: IWriteCredentialsEmail | null;
    first_name?: string | null;
    home_folder_id?: string | null;
    is_disabled?: boolean;
    last_name?: string | null;
    locale?: string | null;
    models_dir_validated?: boolean | null;
    ui_state?: IDictionary<string> | null;
}
export interface IWriteUserAttribute {
    name: string | null;
    label: string | null;
    type: string | null;
    default_value?: string | null;
    value_is_hidden?: boolean;
    user_can_view?: boolean;
    user_can_edit?: boolean;
    hidden_value_domain_whitelist?: string | null;
}
export interface IWriteUserAttributeWithValue {
    value?: string | null;
}
export interface IWriteWhitelabelConfiguration {
    logo_file?: string | null;
    favicon_file?: string | null;
    default_title?: string | null;
    show_help_menu?: boolean;
    show_docs?: boolean;
    show_email_sub_options?: boolean;
    allow_looker_mentions?: boolean;
    allow_looker_links?: boolean;
    custom_welcome_email_advanced?: boolean;
    setup_mentions?: boolean;
    alerts_logo?: boolean;
    alerts_links?: boolean;
    folders_mentions?: boolean;
}
