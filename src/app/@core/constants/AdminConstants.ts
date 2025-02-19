export class AdminConstants {
  // ADMIN PAGE
  OPERATION_SUCCESS_SMTP_UPDATE: string = 'SMTP Settings successfully saved. ' +
    'You have to restart the server to make changes work.';
  OPERATION_FAILED: string = 'Operation failed';
  OPERATION_FAILED_SMTP: string = 'Make sure all fields are filled out.';
  OPERATION_SUCCES_PROXY_SAVE: string = 'The proxy setting is successfully saved\n';
  OPERATION_FAILED_ROUTINGDOMAIN_ADD = 'Operation failed';
  OPERATION_SUCCESS_ROUTINGDOMAIN_ADD = 'Routing Domain is successfully saved';
  OPERATION_SUCCESS_PROXY_ADD = 'The Proxy Setting is successfully saved';
  OPERATION_SUCCESS_ROUTINGDOMAIN_DELETE = 'Routing Domain is deleted';
  OPERATION_FAILED_ROUTINGDOMAIN_DELETE = 'You have to remove all dependent object ' +
    'before proceeding with deletion.';
  OPERATION_SUCCESS_COPY = 'Copied..';
  OPERATION_SUCCESS_COPY_TEXT = 'ApiKey is copied';
  OPERATION_SUCCESS_APIKEY_GENERATE = 'ApiKey is generated successfully';
  OPERATION_FAILED_AUTH = 'At least one authorization option has to be picked';
  OPERATION_SUCCESS_AUTH = 'Authorization settings are saved';
  OPERATION_SUCCESS_PASSWORD_CHANGE = 'Password is successfully changed';
  OPERATION_SUCCESS_SCANNER_TEST = 'Test passed';
  OPERATION_SUCCESS_SCANNER_DELETE = 'Scanner is successfully deleted';
  OPERATION_SUCCESS_USER_BLOCK = 'User is blocked.';
  OPERATION_SUCCESS_USER_UNBLOCK = 'User is unblocked.';
  OPERATION_SUCCESS_USER_SAVE = 'User created.';
  OPERATION_SUCCESS_SCANNER_SAVE = 'Scanner is successfully saved. You have to test it before first use.';
  OPERATION_SUCCESS_RFW_SAVE = 'RFW configuration is successfully saved.';
  TOAST_SUCCESS: string = 'Success';
  TOAST_FAILED: string = 'Failure';
  SCANNER_TYPE_FORTIFYSCA = 'Fortify SCA Rest API';
  SCANNER_TYPE_OPENVAS = 'OpenVAS';
  SCANNER_TYPE_NESSUS = 'Nessus';
  SCANNER_TYPE_ACUNETIX = 'Acunetix';
  SCANNER_TYPE_DEPENDENCYTRACK = 'OWASP Dependency Track';
  USER_GROUPS: any = [
    {
      'name': 'Admin',
      'id': 'ROLE_ADMIN',
    },
    {
      'name': 'Auditor',
      'id': 'ROLE_AUDITOR',
    },
    {
      'name': 'Viewer',
      'id': 'ROLE_USER',
    },
    {
      'name': 'Editor',
      'id': 'ROLE_EDITOR_RUNNER',
    },
    {
      'name': 'API',
      'id': 'ROLE_API',
    }];
  OPERATION_SUCCESS_PROXY_DELETE: string = 'The Proxy is successfully deleted.';
  ADMIN_PAGE_TITLE: string = 'Admin panel';
  ADMIN_TAB_USERS: string = 'Users';
  ADMIN_TAB_SCANNERS: string = 'Scanners';
  ADMIN_TAB_SETTINGS: string = 'Settings';
  ADMIN_ADD_USER: string = 'Add user';
  ADMIN_ADD_SCANNER = 'Add scanner';
  ADMIN_USERTABLE_USERNAME = 'Username';
  ADMIN_USERTABLE_LASTIP = 'Last login IP';
  ADMIN_USERTABLE_ACTIVE = 'Active?';
  ADMIN_USERTABLE_ACTION = 'Actions';
  ADMIN_USERTABLE_COMMONNAME = 'CommonName';
  ADMIN_SCANNERTABLE_TYPE = 'Scanner Type';
  ADMIN_SCANNERTABLE_API_URL = 'API URL';
  ADMIN_SCANNERTABLE_ROUTINGDOMAIN = 'Routing Domain';
  ADMIN_SCANNERTABLE_ACTIVE = 'Active?';
  ADMIN_SCANNERTABLE_ACTION = 'Action';
  YES = 'Yes';
  NO = 'No';
  ADMIN_TOOLTIP_CHANGEPASSWORD = 'Change password';
  ADMIN_TOOLTIP_ACTIVATE_USER = 'Activate user';
  ADMIN_TOOLTIP_BLOCK_USER = 'Block user';
  ADMIN_TOOLTIP_SCANNER_DELETE = 'Delete scanner';
  ADMIN_TOOLTIP_SCANNER_TEST = 'Test configuration';
  ADMIN_TOOLTIP_SCANNER_RFW = 'Add RFW';
  ADMIN_AUTHENTICATION = 'Authentication';
  ADMIN_SMTP_CONFIG = 'SMTP configuration';
  ADMIN_MASTER_APIKEY = 'Global APIKEY';
  ADMIN_SCAN_STRATEGY = 'Test creation strategy';
  ADMIN_ROUTINGDOMAINS = 'Routing Domains';
  ADMIN_PROXXIES = 'Proxies';
  ADMIN_AUTHENTICATION_PASSWORD = 'Password Authentication';
  ADMIN_AUTHENTICATION_CERTIFICATE = 'X.509 Authentication';
  ADMIN_FORM_SAVE = 'Save';
  ADMIN_SMTP_HOSTNAME = 'Hostname';
  ADMIN_SMTP_PORT = 'Port';
  ADMIN_SMTP_USERNAME = 'Username';
  ADMIN_SMTP_PASSWORD = 'Password';
  ADMIN_SMTP_AUTH = 'Authentication';
  ADMIN_SMTP_TLS = 'TLS';
  ADMIN_TOOLTIP_COPY_APIKEY = 'Copy';
  ADMIN_TOOLTIP_GENERATE_APIKEY = 'Generate new ApiKey, old one will be disabled';
  ADMIN_TOOLTIP_DELETE_APIKEY = 'Delete ApiKey';
  ADMIN_STRATEGY_ONCE_PER_RD = 'One Scanner in Routing Domain';
  ADMIN_STRATEGY_N_PER_RD = 'Multiple Scanners in Routing Domain';
  ADMIN_STRATEGY_ALL_RD_SCAN = 'Scan performed on each available scanners';
  ADMIN_STRATEGY_ONE_RD_SCAN = '';
  ADMIN_ADD_ROUTINGDOMAIN = 'Add Routing Domain';
  ADMIN_ADD_PROXY = 'Add Proxy';
  ADMIN_DELETE_ROUTINGDOMAIN = 'Delete Routing Domain';
  ADMIN_DELETE_PROXY = 'Delete Proxy';
  ADMIN_FORM_USER_TITLE = 'Adding user..';
  ADMIN_FORM_USER_NAME = 'Username';
  ADMIN_FORM_USER_PASSWORD_AUTH = 'Enable password authentication?';
  ADMIN_FORM_USER_PASSWORD = 'Password';
  ADMIN_FORM_ROLE = 'Role';
  ADMIN_FORM_COMMONNAME = 'CommonName';
  ADMIN_FORM_COMMONNAME_PLACEHOLDER = 'CommonName of x.509 certificate';
  ADMIN_FORM_SCANNER_TITLE = 'Adding scanner..';
  ADMIN_FORM_SCANNER_TYPE = 'Type';
  ADMIN_FORM_SCANNER_ROUTINGDOMAIN = 'Routing Domain';
  ADMIN_FORM_PROXY = 'Proxy';
  ADMIN_FORM_PROXY_NONE = 'None';
  ADMIN_FORM_SCANNER_APIURL = 'API URL';
  ADMIN_FORM_SCANNER_USERNAME = 'Username';
  ADMIN_FORM_SCANNER_PASSWORD = 'Password';
  ADMIN_FORM_SCANNER_ACCESSKEY = 'Access Key';
  ADMIN_FORM_SCANNER_SECRETKEY = 'Secret Key';
  ADMIN_FORM_SCANNER_APIKEY = 'API Key';
  ADMIN_FORM_SCANNER_CLOUDCTRL = 'Cloud Controller Token';
  ADMIN_FORM_RFW_TITLE = 'RFW Configuration';
  ADMIN_FORM_RFW_URL = 'API RFW';
  ADMIN_FORM_RFW_SCANNER_URL = 'IP of scanner behind RFW';
  ADMIN_FORM_RFW_USERNAME = 'Username';
  ADMIN_FORM_RFW_PASSWORD = 'Password';
  ADMIN_FORM_CHANGEPASSWORD_TITTLE = 'Change password for user';
  ADMIN_FORM_CHANGEPASSWORD_NEWPASS = 'New Password';
  ADMIN_FORM_ROUTINGDOMAIN_TITLE = 'Add New Routing Domain';
  ADMIN_FORM_ROUTINGDOMAIN_NAME = 'Routing Domain name';
  ADMIN_FORM_PROXY_TITLE = 'Add New Proxy';
  ADMIN_FORM_PROXY_IP = 'IP Address';
  ADMIN_FORM_PROXY_PORT = 'Port';
  ADMIN_FORM_PROXY_DESC = 'Description';
  ADMIN_FORM_PROXY_USERNAME = 'Username';
  ADMIN_FORM_PROXY_PASSWORD = 'Password';
  OPERATION_SUCCESS_APIKEY_DELETE = 'ApiKey is successfully deleted, access is revoked';
  ADMIN_TAB_AUTOINFRA = 'Scheduler for automiatic Infrastructure scanning';
  ADMIN_TAB_AUTOWEB = 'Scheduler for automatic Web Application scanning';
  ADMIN_TAB_AUTOCODE = 'Scheduler for automatic Code scanning';
  ADMIN_TAB_AUTOSCAN_DESC = 'Scheduler can be described in CRON expression format. You can check format ' +
    'using <a href="https://crontab.guru/">https://crontab.guru/</a>';
  ADMIN_FORM_CRON_EXPRESSION = 'Cron Expression';
  OPERATION_SUCCESS_SCHEDULERUPDATE = 'Scheduler settings updated. Backend restart is obligatory to make change work.';
  ADMIN_SMTP_DOMAIN = 'EMAIL domain';
  ADMIN_SCANNERTABLE_CAPTION = 'Table containing list of configured vulnerability scanners';
  ADMIN_USERTABLE_CAPTION = 'Table containing list of users';
  ADMIN_TAB_AUTOTREND = 'Scheduler for Trend Email';
  ADMIN_FORM_PROJECTS = 'Permissions for projects';
  ADMIN_FORM_PROJECTS2 = 'Select projects...';
  ADMIN_ROLE_USER = 'ROLE_USER';
  ADMIN_ROLE_USER2 = 'ROLE_EDITOR_RUNNER';
  ADMIN_FORM_EDIT = 'Edit';
  ADMIN_EDIT_USER = 'Editing user';
  ADMIN_TOOLTIP_EDIT = 'Edit user';
  ADMIN_USERTABLE_PERMISSIONS = 'Role';
  WEBAPP_STRATEGY_HEADER = 'Web Application Scanning Strategy';
  WEBAPP_STRATEGY_DESCRIPTION = '(strategies are set when You would like to surpass RoutingDomain limits. For' +
    'example: When You have WebApplications of multiple routing domians, registering Scan policy will pick scanner of given type' +
    'to scan them without RoutingDomain constraint. Having no policy (any) will pick scanner by RoutingDomain match.)';
  WEBAPP_STRATEGY_ANY = 'Any';
  WEBAPP_STRATEGY_API = 'Pick first order for WebApp Scan originated from API calls (including CICD Jobs)';
  SCANNER_TYPE_BURPEE = 'BurpEE';
  WEBAPP_STRATEGY_SCHEDULED = 'Pick first order for WebApp Scan originated by Scheduler';
  WEBAPP_STRATEGY_GUI = 'Pick first order for WebApp Scan originated by GUI (www of mixeway)';
  OPERATION_SUCCESS_SET_STRATEGY = 'Web Application Scanning strategy edit completed';
  SCANNER_CATEGORY_WEB = 'WEBAPP';
  OPERATION_FAILED_STRATEGY_DOUBLE_SCANNER = 'There are more then 1 scanners of given type registered. WebApp Scan policy can be ' +
    'set only for one instance of given scanner. Read docs for more information.';
  OPERATION_FAILED_SCANNER_POLICY_CONFLICT = 'There is policy set for given scanner. With scan policy registered there is limit of' +
    '1 scanner of given type. Read docs for more information.';
    OPERATION_SUCCESS_VULNAUDITOR_UPDATE = 'Vuln Auditor Settings are saved successfully';
  OPERATION_FAILED_VULNAUDITOR = 'There were an error during operation of save ' +
      'Vuln Auditor Settings, please try again.';
  ADMIN_SECURITY_GATEWAY = 'Security Quality Gateway Settings';
  OPERATION_SUCCESS = 'Successfully edited settings ';
  ADMIN_SECURITY_GATEWAY_VULN = 'Limit of confirmed vulnerability before Security Gateway will start denying builds';
  ADMIN_SECURITY_GATEWAY_CRITICAL = 'Limit of vulnerabilities with Severity: CRITICAL';
  ADMIN_SECURITY_GATEWAY_HIGH = 'Limit of vulnerabilities with Severity: HIGH';
  ADMIN_SECURITY_GATEWAY_MEDIUM = 'Limit of vulnerabilities with Severity: MEDIUM';
  ADMIN_APIKEY_MODAL_HEADER = 'CICD Api Key was generated';
  ADMIN_GITCREDS = 'Git Credentials (global)';
  ADMIN_ADD_GITCREDENTIALS = 'Add global Git Credentials';
  ADMIN_URL = 'GIT Url';
  ADMIN_USERNAME = 'GIT Username';
  ADMIN_PASSWORD = 'GIT Password';
  OPERATION_SUCCESS_GITCREDS_DELETE = 'Git Credentials successfully deleted';
  OPERATION_SUCCESS_GITCREDS_ADD = 'Git Credentials successfully saved';
}
