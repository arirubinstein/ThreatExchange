var v_ThreatExchange = {
    URL             : "https://graph.facebook.com/",
    VERSION         : "v2.0/",
    ACCESS_TOKEN    : "access_token",
    DEFAULT_LIMIT   : 500,
    MAX_LIMIT       : 5000,
    MALWARE_ANALYSES        : "malware_analyses/",
    THREAT_EXCHANGE_MEMBERS : "threat_exchange_members/",
    THREAT_INDICATORS       : "threat_indicators/",
    LIMIT       : "limit",
    TEXT        : "text",
    STRICT_TEXT : "strict_text",
    SINCE       : "since",
    UNTIL       : "until",
    TYPE        : "type",
    FIELDS      : "fields",
    DATA        : "data",
    PAGING      : "paging",
    NEXT        : "next",
    METADATA    : "metadata",
    NO_TOTAL    : -1,
    MIN_TOTAL   : 0,
    DEC_TOTAL   : 1,
    RELATED     : "related/",
    RELATED_ID  : "related_id",
}

var v_Common = {
    ADDED_ON        : "added_on",
    ID              : "id",
    METADATA        : "metadata",
    SHARE_LEVEL     : "share_level",
    STATUS          : "status",
    SUBMITTER_COUNT : "submitter_count",
    VICTIM_COUNT    : "victim_count",
}

var v_Connection = {
    ADDED_ON            : v_Common.ADDED_ON,
    CRX                 : "crx",
    DROPPED             : "dropped",
    DROPPED_BY          : "dropped_by",
    FAMILIES            : "families",
    ID                  : v_Common.ID,
    MALWARE_ANALYSES    : "malware_analyses",
    RELATED             : "related",
    STATUS              : v_Common.STATUS,
    THREAT_INDICATORS   : "threat_indicators",
    VARIANTS            : "variants",
    VICTIM_COUNT        : v_Common.VICTIM_COUNT,
}

var v_Malware = {
    ADDED_ON        : v_Common.ADDED_ON,
    CRX             : "crx",
    ID              : v_Common.ID,
    IMPHASH         : "imphash",
    MD5             : "md5",
    METADATA        : v_Common.METADATA,
    PASSWORD        : "password",
    PE_RICH_HEADER  : "pe_rich_header",
    SAMPLE          : "sample",
    SHA1            : "sha1",
    SHA256          : "sha256",
    SHARE_LEVEL     : v_Common.SHARE_LEVEL,
    SSDEEP          : "ssdeep",
    STATUS          : v_Common.STATUS,
    SUBMITTER_COUNT : v_Common.SUBMITTER_COUNT,
    VICTIM_COUNT    : v_Common.VICTIM_COUNT,
    XPI             : "xpi",
}

var v_Paging = {
    PAGING  : "paging",
    CURSORS : "cursors",
    NEXT    : "next",
}

var v_PagingCursor = {
    BEFORE  : "before",
    AFTER   : "after",
}

var v_ThreatExchangeMember = {
    ID      : v_Common.ID,
    NAME    : "name",
}

var v_ThreatIndicator = {
    ADDED_ON        : v_Common.ADDED_ON,
    CONFIDENCE      : "confidence",
    DESCRIPTION     : "description",
    EXPIRED_ON      : "expired_on",
    ID              : v_Common.ID,
    INDICATOR       : "indicator",
    METADATA        : v_Common.METADATA,
    PASSWORDS       : "passwords",
    PRIVACY_TYPE    : "privacy_type",
    PRIVACY_MEMBERS : "privacy_members",
    REPORT_URLS     : "report_urls",
    SEVERITY        : "severity",
    SHARE_LEVEL     : v_Common.SHARE_LEVEL,
    STATUS          : v_Common.STATUS,
    SUBMITTER_COUNT : v_Common.SUBMITTER_COUNT,
    THREAT_TYPE     : "threat_type",
    THREAT_TYPES    : "threat_types",
    TYPE            : "type",
}

var v_ThreatType = {
    BAD_ACTOR               : "BAD_ACTOR",
    COMPROMISED_CREDENTIAL  : "COMPROMISED_CREDENTIAL",
    COMMAND_EXEC            : "COMMAND_EXEC",
    MALICIOUS_AD            : "MALICIOUS_AD",
    MALICIOUS_CONTENT       : "MALICIOUS_CONTENT",
    MALICIOUS_DOMAIN        : "MALICIOUS_DOMAIN",
    MALICIOUS_INJECT        : "MALICIOUS_INJECT",
    MALICIOUS_IP            : "MALICIOUS_IP",
    MALICIOUS_URL           : "MALICIOUS_URL",
    MALICIOUS_URLCHUNK      : "MALICIOUS_URLCHUNK",
    MALWARE_ARTIFACTS       : "MALWARE_ARTIFACTS",
    MALWARE_SAMPLE          : "MALWARE_SAMPLE",
    MALWARE_SIGNATURE       : "MALWARE_SIGNATURE",
    MALWARE_VICTIM          : "MALWARE_VICTIM",
    PROXY_IP                : "PROXY_IP",
    SIGNATURE               : "SIGNATURE",
    SINKHOLE_EVENT          : "SINKHOLE_EVENT",
    SMS_SPAM                : "SMS_SPAM",
    VICTIM_IP_USAGE         : "VICTIM_IP_USAGE",
    WEB_REQUEST             : "WEB_REQUEST",
    WHITELIST_DOMAIN        : "WHITELIST_DOMAIN",
    WHITELIST_IP            : "WHITELIST_IP",
    WHITELIST_URL           : "WHITELIST_URL",
}

var v_Severity = {
    INFO        : "INFO",
    WARNING     : "WARNING",
    SUSPICIOUS  : "SUSPICIOUS",
    SEVERE      : "SEVERE",
    APOCALYPSE  : "APOCALYPSE",
}

var v_ShareLevel = {
    UNKNOWN : "UNKNOWN",
    WHITE   : "WHITE",
    GREEN   : "GREEN",
    AMBER   : "AMBER",
    RED     : "RED",
}

var v_Status = {
    MALICIOUS       : "MALICIOUS",
    NON_MALICIOUS   : "NON_MALICIOUS",
    SUSPICIOUS      : "SUSPICIOUS",
    UNKNOWN         : "UNKNOWN",
}

var v_Attack = {
    ACCESS_TOKEN_THEFT  : "ACCESS_TOKEN_THEFT",
    BRUTE_FORCE         : "BRUTE_FORCE",
    CLICKJACKING        : "CLICKJACKING",
    EMAIL_SPAM          : "EMAIL_SPAM",
    FAKE_ACCOUNTS       : "FAKE_ACCOUNTS",
    IP_INFRINGEMENT     : "IP_INFRINGEMENT",
    MALICIOUS_APP       : "MALICIOUS_APP",
    MALWARE             : "MALWARE",
    PHISHING            : "PHISHING",
    SELF_XSS            : "SELF_XSS",
    SHARE_BAITING       : "SHARE_BAITING",
    TARGETED            : "TARGETED",
    UNKNOWN             : "UNKNOWN",
}

var v_AVEngineNames = {
    AV_AGNITUM              : "AV_AGNITUM",
    AV_AHNLAB_V3            : "AV_AHNLAB_V3",
    AV_ANTIVIR              : "AV_ANTIVIR",
    AV_ANTIY_AVL            : "AV_ANTIY_AVL",
    AV_AVAST                : "AV_AVAST",
    AV_AVG                  : "AV_AVG",
    AV_BITDEFENDER          : "AV_BITDEFENDER",
    AV_BYTEHERO             : "AV_BYTEHERO",
    AV_CAT_QUICKHEAL        : "AV_CAT_QUICKHEAL",
    AV_CLAMAV               : "AV_CLAMAV",
    AV_COMMTOUCH            : "AV_COMMTOUCH",
    AV_COMODO               : "AV_COMODO",
    AV_DRWEB                : "AV_DRWEB",
    AV_EMSISOFT             : "AV_EMSISOFT",
    AV_ESET_NOD32           : "AV_ESET_NOD32",
    AV_FORTINET             : "AV_FORTINET",
    AV_F_PROT               : "AV_F_PROT",
    AV_F_SECURE             : "AV_F_SECURE",
    AV_GDATA                : "AV_GDATA",
    AV_IKARUS               : "AV_IKARUS",
    AV_JIANGMIN             : "AV_JIANGMIN",
    AV_K7ANTIVIRUS          : "AV_K7ANTIVIRUS",
    AV_K7GW                 : "AV_K7GW",
    AV_KASPERSKY            : "AV_KASPERSKY",
    AV_KINGSOFT             : "AV_KINGSOFT",
    AV_MALWAREBYTES         : "AV_MALWAREBYTES",
    AV_MCAFEE               : "AV_MCAFEE",
    AV_MCAFEE_GW_EDITION    : "AV_MCAFEE_GW_EDITION",
    AV_MICROSOFT            : "AV_MICROSOFT",
    AV_MICROWORLD_ESCAN     : "AV_MICROWORLD_ESCAN",
    AV_NANO_ANTIVIRUS       : "AV_NANO_ANTIVIRUS",
    AV_NORMAN               : "AV_NORMAN",
    AV_NPROTECT             : "AV_NPROTECT",
    AV_PANDA                : "AV_PANDA",
    AV_PCTOOLS              : "AV_PCTOOLS",
    AV_RISING               : "AV_RISING",
    AV_SUPERANTISPYWARE     : "AV_SUPERANTISPYWARE",
    AV_SYMANTEC             : "AV_SYMANTEC",
    AV_THEHACKER            : "AV_THEHACKER",
    AV_TOTALDEFENSE         : "AV_TOTALDEFENSE",
    AV_TRENDMICRO           : "AV_TRENDMICRO",
    AV_TRENDMICRO_HOUSECALL : "AV_TRENDMICRO_HOUSECALL",
    AV_VBA32                : "AV_VBA32",
    AV_VIPRE                : "AV_VIPRE",
    AV_VIROBOT              : "AV_VIROBOT",
}

var v_AVStatus = {
    UNKNOWN         : "UNKNOWN",
    NON_MALICIOUS   : "NON_MALICIOUS",
    SUSPICIOUS      : "SUSPICIOUS",
    MALICIOUS       : "MALICIOUS",
}

var v_PrivacyType = {
    VISIBLE         : "VISIBLE",
    HAS_WHITELIST    : "HAS_WHITELIST",
    HAS_BACKLIST     : "HAS_BLACKLIST",
}

var v_Role = {
    C2              : "C2",
    EXPLOIT         : "EXPLOIT",
    RECON           : "RECON",
    PHISHING_SITE   : "PHISHING_SITE",
    TRACKING_PIXEL  : "TRACKING_PIXEL",
    WATERING_HOLE   : "WATERING_HOLE",
}

var v_SignatureType = {
    REGEX_URL   : "REGEX_URL",
    SNORT       : "SNORT",
    SURICATA    : "SURICATA",
    YARA        : "YARA",
}

var v_Types = {
    ADJUST_TOKEN            : "ADJUST_TOKEN",
    API_KEY                 : "API_KEY",
    AS_NUMBER               : "AS_NUMBER",
    AS_NAME                 : "AS_NAME",
    ATTACK                  : "ATTACK",
    AV_SIGNATURES           : "AV_SIGNATURES",
    AV_STATUS               : "AV_STATUS",
    BANNER                  : "BANNER",
    CHECKSUM_CRC16          : "CHECKSUM_CRC16",
    CMD_LINE                : "CMD_LINE",
    COOKIE_NAME             : "COOKIE_NAME",
    COUNTRY                 : "COUNTRY",
    CRX                     : "CRX",
    DEBUG_STRING            : "DEBUG_STRING",
    DESCRIPTION             : "DESCRIPTION",
    DEST_PORT               : "DEST_PORT",
    DEVICE_IO               : "DEVICE_IO",
    DIRECTORY_QUERIED       : "DIRECTORY_QUERIED",
    DOC_FORM_URL            : "DOC_FORM_URL",
    DOMAIN                  : "DOMAIN",
    EMAIL_ADDRESS           : "EMAIL_ADDRESS",
    EVENT_ID                : "EVENT_ID",
    EVENT_REF               : "EVENT_REF",
    EXPIRED_TIME            : "EXPIRED_TIME",
    FBID                    : "FBID",
    FILE_CREATED            : "FILE_CREATED",
    FILE_DELETED            : "FILE_DELETED",
    FILE_MOVED              : "FILE_MOVED",
    FILE_NAME               : "FILE_NAME",
    FILE_OPENED             : "FILE_OPENED",
    FILE_READ               : "FILE_READ",
    FILE_WRITTEN            : "FILE_WRITTEN",
    FRONTIER_URL            : "FRONTIER_URL",
    GET_PARAM               : "GET_PARAM",
    HASH_IMPHASH            : "HASH_IMPHASH",
    HASH_MD5                : "HASH_MD5",
    HASH_SHA1               : "HASH_SHA1",
    HASH_SHA256             : "HASH_SHA256",
    HASH_SSDEEP             : "HASH_SSDEEP",
    HEX_STRING              : "HEX_STRING",
    HTML_ID                 : "HTML_ID",
    HTTP_REQUEST            : "HTTP_REQUEST",
    HTTP_RESP_CODE          : "HTTP_RESP_CODE",
    IP_ADDRESS              : "IP_ADDRESS",
    ISP                     : "ISP",
    LATITUDE                : "LATITUDE",
    LAUNCH_AGENT            : "LAUNCH_AGENT",
    LOCATION                : "LOCATION",
    LONGITUDE               : "LONGITUDE",
    MALWARE_NAME            : "MALWARE_NAME",
    MEMORY_ALLOC            : "MEMORY_ALLOC",
    MEMORY_PROTECT          : "MEMORY_PROTECT",
    MEMORY_READ             : "MEMORY_READ",
    MEMORY_WRITTEN          : "MEMORY_WRITTEN",
    MUTANT_CREATED          : "MUTANT_CREATED",
    MUTEX                   : "MUTEX",
    NAME                    : "NAME",
    NAME_SERVER             : "NAME_SERVER",
    OTHER_FILE_OP           : "OTHER_FILE_OP",
    PASSWORD                : "PASSWORD",
    PASSWORD_SALT           : "PASSWORD_SALT",
    PAYLOAD_DATA            : "PAYLOAD_DATA",
    PAYLOAD_TYPE            : "PAYLOAD_TYPE",
    PRIVACY_TYPE            : "PRIVACY_TYPE",
    PRIVACY_MEMBERS         : "PRIVACY_MEMBERS",
    POST_DATA               : "POST_DATA",
    PROTOCOL                : "PROTOCOL",
    REFERER                 : "REFERER",
    REFERER_OF_REFERER      : "REFERER_OF_REFERER",
    REGISTRAR               : "REGISTRAR",
    REGISTRY_KEY            : "REGISTRY_KEY",
    REG_KEY_CREATED         : "REG_KEY_CREATED",
    REG_KEY_DELETED         : "REG_KEY_DELETED",
    REG_KEY_ENUMERATED      : "REG_KEY_ENUMERATED",
    REG_KEY_MONITORED       : "REG_KEY_MONITORED",
    REG_KEY_OPENED          : "REG_KEY_OPENED",
    REG_KEY_VALUE_CREATED   : "REG_KEY_VALUE_CREATED",
    REG_KEY_VALUE_DELETED   : "REG_KEY_VALUE_DELETED",
    REG_KEY_VALUE_MODIFIED  : "REG_KEY_VALUE_MODIFIED",
    REG_KEY_VALUE_QUERIED   : "REG_KEY_VALUE_QUERIED",
    REPORT_URL              : "REPORT_URL",
    ROLE                    : "ROLE",
    RULE                    : "RULE",
    SIGNATURE               : "SIGNATURE",
    SIGNATURE_TYPE          : "SIGNATURE_TYPE",
    SMS_ORIGIN              : "SMS_ORIGIN",
    SOURCE_PORT             : "SOURCE_PORT",
    TELEPHONE               : "TELEPHONE",
    TIME_CREATED            : "TIME_CREATED",
    TIME_UPDATED            : "TIME_UPDATED",
    TS_END                  : "TS_END",
    TS_START                : "TS_START",
    URI                     : "URI",
    USER_AGENT              : "USER_AGENT",
    USER_ID                 : "USER_ID",
    VICTIM_IP               : "VICTIM_IP",
    VOLUME_QUERIED          : "VOLUME_QUERIED",
    WEBSTORAGE_KEY          : "WEBSTORAGE_KEY",
    WEB_PAYLOAD             : "WEB_PAYLOAD",
    WHITELIST               : "WHITELIST",
    WHOIS_NAME              : "WHOIS_NAME",
    WHOIS_ADDR1             : "WHOIS_ADDR1",
    WHOIS_ADDR2             : "WHOIS_ADDR2",
    XPI                     : "XPI",
}
