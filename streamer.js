(function () {
  "use strict";
  var window = this.window || { WebSocket: require('ws'), location: { search: '' }, document: { cookie: '' } };
  var en_GB = {
    alert_reference: "Reference Code:",
    alert_email_subject: "ADVFN HTML5 App Support",
    alert_logout: "You have been logged out, refreshing page...",
    alert_disconnect: "Connection to streaming server lost.",
    alert_conn_error: "Could not connect to streaming server!",
    alert_ipc_reconnecting: "Connection to the streaming server has been lost! Reconnecting, please wait or refresh the page.",
    alert_monitor_nosym: "This monitor has no symbols, please edit your shares.",
    alert_unknown_symbol: "Unknown Symbol: {1}",
    alert_logout_s: "Please give us a call on {1} if you need more information.",
    alert_conn_error_s: "Please give us a call on {1} or email us on {2}.",
    alert_ipc_reconnecting_s: "If it does not reconnect within 1 minute, please give us a call on {1}.",
    alert_monitor_nosym_s: "Give us a call on {1} if you need any help.",
    alert_unknown_symbol_s: "Please give us a call on {1} if you need any help to find out the right symbol.",
    alert_support_nonumber: "Please send us an email to {1} if you need any help.",
    loading_ready: "Ready to go!",
    loading_message_001: "Loading app...",
    console_email_link: "Email a copy to Support",
    symbol_placeholder: "Search for a symbol...",
    comingsoon: "Coming Soon...",
    upgrade_subscription: "Please upgrade your subscription",
    ok: "OK",
    search: "Search",
    l3montage: "Level 3 Montage",
    no_orderbooks: "This symbol has no order book.",
    sub_msg_top: "Sorry, you do not have a subscription for this service",
    sub_msg_call: "Call us on",
    sub_msg_or: "or",
    sub_msg_btn: "Click here to upgrade",
    buy_orders: "Buy Orders",
    sell_orders: "Sell Orders",
    filter_all: "All",
    Announcement: "Announcement",
    More_news: "More news...",
    Summary: "Summary",
    All_orders: "All orders",
    Cur_: "Cur:",
    no_change: "no change",
    Vol: "Vol:",
    Stats: "Stats",
    Histogram: "Histogram",
    Chart: "Chart",
    TickScope: "TickScope",
    Quote_Info: "Quote Info",
    Auction: "Auction",
    Indices: "Indices",
    Flow: "Flow",
    Trades: "Trades",
    News: "News",
    Buy: "Buy",
    Sell: "Sell",
    Num_orders: "Num.Orders",
    Total_volume: "Total Volume",
    Average_size: "Average Size",
    Average_age: "Average Age",
    Stats_VWAP: "VWAP",
    QuoteInfo_Trades: "Trades",
    Time: "Time",
    Cur: "Cur",
    Open: "Open",
    High: "High",
    Low: "Low",
    Trd_Hi: "Trd.Hi",
    Trd_Lo: "Trd.Lo",
    Last_chg: "Last.Chg",
    Mid: "Mid",
    Yest: "Yest",
    VWAP: "VWAP",
    Spread: "Spread",
    Spread_pc: "Sprd %",
    Reference_price: "Reference Price",
    Daily_VWAP: "Daily VWAP",
    Uncrossing_price: "Uncrossing Price",
    Uncrossing_volume: "Uncrossing Volume",
    Current_time: "Current time",
    Auction_started: "Auction Started",
    Auction_duration: "Auction duration (min)",
    min_1: "1 min",
    min_5: "5 min",
    min_10: "10 min",
    min_15: "15 min",
    min_30: "30 min",
    min_60: "60 min",
    flow_Buy: "Buy",
    flow_Sell: "Sell",
    flow_Total: "Total",
    flow_Score: "Score",
    flow_Insert: "Insert",
    flow_Delete: "Delete",
    flow_Price_Up: "Price +",
    flow_Price_Down: "Price -",
    flow_Size_Up: "Size +",
    flow_Size_Down: "Size -",
    select_symbol: "Select Symbol",
    trades_num: "Num",
    trades_exch: "Exch.",
    trades_price: "Price",
    trades_size: "Size",
    trades_type: "Type",
    trades_c: "C",
    trades_t: "T",
    trades_bid: "Bid",
    trades_offer: "Ask",
    trades_time: "Time",
    trades_buy: "Buy",
    trades_sell: "Sell",
    trades_unknown: "?",
    trades_buy_ind: "B/S/? %",
    trades_buy_vol: "Buy Vol",
    trades_sell_vol: "Sell Vol",
    trades_unknown_vol: "? Vol",
    mon_symbol: "Epic",
    mon_stock_name: "Share Name",
    mon_chg: "Chg",
    mon_chg_pc: "Chg%",
    mon_cur: "Cur",
    mon_bid: "Bid",
    mon_mid: "Mid",
    mon_offer: "Ask",
    mon_high: "High",
    mon_low: "Low",
    mon_open: "Open",
    mon_volume: "Volume",
    mon_last_trade: "Last",
    mon_trade_vol: "Trade",
    mon_traded: "Traded",
    mon_trade_type: "Typ",
    mon_trade_high: "Hi",
    mon_trade_low: "Lo",
    mon_trade_1: "T-1",
    mon_trade_2: "T-2",
    mon_trade_3: "T-3",
    mon_trade_4: "T-4",
    mon_yest_close: "Y.Cls",
    mon_yest_bid: "Y.Bid",
    mon_yest_offer: "Y.Ask",
    mon_sprd_pc: "Spr%",
    mon_buysell_ind: "B/S/? %",
    mon_buy_vol: "Buy Vol",
    mon_sell_vol: "Sell Vol",
    mon_unknown_vol: "? Vol",
    mon_buy_pc: "Buy%",
    mon_sell_pc: "Sell%",
    mon_unknown_pc: "?%",
    mon_num_trades: "Count",
    mon_flags: "Flags",
    mon_open_change: "O.Chg",
    mon_open_change_pc: "Opn%",
    mon_last_change: "Ticked",
    mon_exchange: "Exchg",
    mon_memo: "Memo",
    mon_news_reg: "!",
    mon_news_non_reg: "NRN",
    mon_news_all: "AN",
    mon_arrow_up: "Up",
    mon_arrow_down: "Down",
    mon_arrow_nochange: "No Change",
    mon_add_memo: "Add Memo",
    mon_traded_closed: "Closed",
    mon_indices_subheading: "Indices",
    mon_bid_size: "Bid Size",
    mon_offer_size: "Offer Size",
    mon_remove_symbol: "Remove ",
    mon_delayed: "Delayed",
    mon_contended: "Contended",
    mon_popup_bb: "BB Search",
    mon_popup_quote: "Quote",
    mon_popup_chart: "Chart",
    mon_popup_news: "News",
    mon_popup_financials: "Financials",
    mon_popup_trades: "Trades",
    mon_daily_vwap: "VWAP",
    mon_rate_volume: "PxV",
    mon_trade_exchange: "Exch",
    mon_trade_buy_sell: "B/S"
  };

  this.DOMAlert = {
    sendSymbol: function (a) {
      "undefined" !== typeof ADVFNSymbolInfo && void 0 !== a && ADVFNSymbolInfo.setFeedSymbol(a.getFeedSymbol())
    }
  };
  // #region Utils
  this.Utils = {
    TIME_DAY_TIMESTAMP: 864E5,
    trunc: function (a, b) {
      return a.length > b ? a.substring(0, b - 1) + (a.length > b ? "\x26hellip;" : "") : a
    },
    tsToTime: function (a) {
      if (void 0 === a || isNaN(a)) return "";
      a += Env.getTimezoneOffset();
      var b = new Date(1E3 * a);
      a = "0" + b.getUTCHours();
      var c = "0" + b.getUTCMinutes(),
        b = "0" + b.getUTCSeconds();
      return a.substr(a.length - 2) + ":" + c.substr(c.length - 2) + ":" + b.substr(b.length - 2)
    },
    getScrollbarWidth: function () {
      var a,
        b;
      void 0 === b && (a = $('\x3cdiv style\x3d"width:50px;height:50px;overflow:auto"\x3e\x3cdiv/\x3e\x3c/div\x3e').appendTo("body"), b = a.children(), b = b.innerWidth() - b.height(99).innerWidth(), a.remove());
      return b
    },
    frmtTo2dp: function (a) {
      a = Number(a);
      return a.toFixed(Math.max(2, (a.toString().split(".")[1] || []).length))
    },
    sumArray: function (a) {
      for (var b = 0, c = 0; c < a.length; c++) b += a[c];
      return b
    },
    fetchParent: function (a, b) {
      for (var c = 0; !(a instanceof b);) {
        c++;
        if (void 0 === a) return new RootComponent(RootComponent.CONTAINER_ID); //throw Error("Parent type cannot be reached in the DOM tree.");
        a = a.getParent()
      }
      return a
    },
    inArray: function (a, b) {
      for (var c = 0; c < a.length; c++)
        if (a[c] === b) return !0;
      return !1
    },
    getKey: function (a, b) {
      for (var c in a)
        if (a.hasOwnProperty(c) && a[c] === b) return c;
      return null
    },
    escapeChars: function (a) {
      return a.replace(/([^\w \\])/g, "\\$1")
    },
    countAssociativeArray: function (a) {
      var b = 0,
        c;
      for (c in a) a.hasOwnProperty(c) && b++;
      return b
    }
  };
  // #endregion
  // #region Grouping
  this.Grouping = Grouping;
  function Grouping(a) {
    this._name = a;
    this._values = [];
    this.setName = function (a) {
      this._name = a
    };
    this.getName = function (a) {
      return this._name
    };
    this.addValue = function (a) {
      this._values.push(a)
    };
    this.getValues = function () {
      return this._values
    }
  };
  // #endregion
  // #region Env
  var Env = this.Env = {
    _montageSymbols: [],
    getAdvfnURL: function () {
      return Env._advfnUrl
    },
    setAdvfnURL: function (a) {
      Env._advfnUrl = a
    },
    getRpcURL: function () {
      return Env._rpcUrl
    },
    setRpcURL: function (a) {
      Env._rpcUrl = a
    },
    getSession: function () {
      return Env._session
    },
    setSession: function (a) {
      Env._session = a
    },
    getStreamerURL: function () {
      return Env._streamerUrl
    },
    setStreamerURL: function (a) {
      Env._streamerUrl = a
    },
    getImagesURL: function () {
      return Env._imagesUrl
    },
    setImagesURL: function (a) {
      Env._imagesUrl = a
    },
    getFeedClass: function () {
      return Env._feedClass
    },
    setFeedClass: function (a) {
      Env._feedClass = a
    },
    getBaseFontSize: function () {
      return Env._baseFontSize
    },
    setBaseFontSize: function (a) {
      Env._baseFontSize = a
    },
    getIPC: function () {
      return Env._ipc
    },
    setIPC: function (a) {
      Env._ipc = a
    },
    getAppName: function () {
      return Env._appName
    },
    setAppName: function (a) {
      Env._appName = a
    },
    getDisplaySymbol: function () {
      return Env._displaySymbol
    },
    setDisplaySymbol: function (a) {
      var b = (new SymbolLookup).lookup(a);
      Env._symbol = 0 < b.length ? b[0] : b;
      Env._feedSymbol = Env._symbol.getFeedSymbol();
      Env._displaySymbol = a
    },
    getFeedSymbol: function () {
      return Env._feedSymbol
    },
    setFeedSymbol: function (a) {
      var b = (new SymbolLookup).lookup(a);
      0 < b.length && (Env._symbol = b[0], Env.setMontageSymbols(b), Env._displaySymbol = Env._symbol.getDisplaySymbol());
      Env._feedSymbol = a
    },
    getMontageSymbols: function () {
      return Env._montageSymbols
    },
    setMontageSymbols: function (a) {
      Env._montageSymbols = a
    },
    getSymbol: function () {
      return Env._symbol
    },
    setNewsSources: function (a) {
      Env._news_sources = a
    },
    getNewsSources: function () {
      return Env._news_sources
    },
    getFontWidthMultiplier: function () {
      return Env._fontWidthMultiplier
    },
    setFontWidthMultiplier: function (a) {
      Env._fontWidthMultiplier = a
    },
    setIndices: function (a) {
      Env._indices = a
    },
    getIndices: function () {
      return Env._indices
    },
    setTimezone: function (a) {
      Env._timezone = a
    },
    getTimezone: function () {
      return Env._timezone
    },
    getTimezoneOffset: function () {
      return Env._timezoneOffset
    },
    setTimezoneOffset: function (a) {
      Env._timezoneOffset = parseInt(a, 10)
    },
    setColorSchema: function (a) {
      Color.setSchema(a)
    },
    setChangeArrows: function (a) {
      Env._changeArrows = a
    },
    getChangeArrows: function () {
      return Env._changeArrows
    },
    setLastViewedSymbols: function (a) {
      Env._lastViewedSymbols = a
    },
    getLastViewedSymbols: function () {
      for (var a = [], b = Env._lastViewedSymbols.length - 1; 0 <= b; b--) {
        var c = (new SymbolLookup).lookup(Env._lastViewedSymbols[b]);
        a.unshift(c[0])
      }
      return a
    },
    getRetry: function () {
      return Env._retry
    },
    setRetry: function (a) {
      Env._retry = a
    },
    setAlternativeStreamerURL: function (a) {
      Env._alternativeStreamerURL = a
    },
    getAlternativeStreamerURL: function () {
      return Env._alternativeStreamerURL
    },
    setAlternativeStreamerURLFallback: function (a) {
      Env._fallbackStreamerURL = a
    },
    getAlternativeStreamerURLFallback: function () {
      return Env._fallbackStreamerURL
    },
    getUsername: function () {
      return Env._username
    },
    setUsername: function (a) {
      Env._username = a
    },
    setMonitorId: function (a) {
      Env._monitorId = a
    },
    getMonitorId: function () {
      return Env._monitorId
    },
    setFixedMonitor: function (a) {
      Env._isFixedMonitor = a
    },
    isFixedMonitor: function () {
      return Env._isFixedMonitor
    },
    setMonitorSettings: function (a) {
      Env._monitorSettings = a
    },
    getMonitorSettings: function () {
      return Env._monitorSettings
    }
  };
  Env._timezoneOffset = new Date().getTimezoneOffset() * -60;
  Env._imagesUrl = "";
  Env._feedClass = Feed;
  Env._baseFontSize = 11;
  Env._view = "Level2Panel";
  Env._retry = 1;
  Env._currentStreamerPort = void 0;
  Env._previousStreamerPort = void 0;
  // #endregion
  // #region L
  this.L = L;
  function L(a) {
    return en_GB[a] || a
  };
  // #endregion
  // #region Session
  this.Session = Session;
  function Session(a, b, c) {
    this._currentApp = null;
    Env.setAppName(c.appName);
    var e = 50;
    Env.setTimezoneOffset(c.timezoneOffset);
    //console.info("Starting application for " + a);
    var d = "Boot configuration: \x3cpre\x3e",
      f;
    for (f in c)
      if (c.hasOwnProperty(f))
        if (c[f] instanceof Object) {
          var d = d + ("\n- " + f + ": "),
            g;
          for (g in c[f]) c[f].hasOwnProperty(g) && (d += "\n\t- " + g + " \x3d " + c[f][g])
        } else d += "\n- " + f + " \x3d " + c[f];
    this._username = a;
    this._sid = b;
    this._bootConfiguration = c;
    Env.setUsername(this._username);
    Env.setAdvfnURL(c.advfnUrl || c.advfnURL);
    Env.setRpcURL(c.rpcUrl || c.rpcURL);
    Env.setAlternativeStreamerURL(c.alternativeStreamerUrl || c.alternativeStreamerURL);
    Env.setAlternativeStreamerURLFallback(c.alternativeStreamerUrlFallback || c.alternativeStreamerURLFallback);
    Env.setStreamerURL(c.streamerUrl || c.streamerURL);
    Env.setNewsSources(c.newsSources);
    Env.setTimezone(c.timezone);
    Env.setTimezoneOffset(c.timezoneOffset);
    Env.setIndices(c.indices);
    Env.setColorSchema(c.colorSchema);
    Env.setChangeArrows(c.changeArrows);
    Env.setMonitorId(c.monitorId);
    Env.setFixedMonitor(1 === parseInt(c.fixedMonitor, 10));
    Env.setMonitorSettings(c.monitorSettings);
    this._bootConfiguration = c;
    f = window.location.search;
    g = window.document.cookie.split(";");
    for (c = 0; c < g.length; c++) {
      for (e = g[c];
        " " === e.charAt(0);)
        e = e.substring(1);
      d = e.indexOf("\x3d");
      0 !== d && (e.substr(0, d), e.substring(d + 1))
    }
    if ("?" === f[0])
      for (f = f.substring(1, f.length).split("\x26"), c = 0; c < f.length; c++)
        g = f[c], g.split("\x3d");
    this._root = new RootComponent(RootComponent.CONTAINER_ID);
    this._root.setFontSize(Env.getBaseFontSize());
    this._root.setWidth("100%");
    this._boot(a, b);
  };
  Session.prototype.start = function () {
    this._root.start()
  };
  Session.prototype._boot = function (a, b) {
    this._root.remove(this._wm);
    this._wm = new WindowManager("wm");
    this._wm.setBounds(0, 0, parseInt(this._root.getWidth(), 10), parseInt(this._root.getHeight(), 10));
    this._root.add(this._wm);
    this._handleLoggedIn(a, b);
  };
  Session.prototype._handleLoggedIn = function (a, b) {
    this._ipc = new IPC(a, b);
    this._ipc.attachListener(this);
    var b = this;
    this._ipc.onConnectionError = function () {
      b._handleConnectionError()
    };
    this._ipc.onConnect = function () {
      b._handleConnect()
    };
    Env.setIPC(this._ipc)
  };
  Session.prototype.ipcAlert = function (a) {
    switch (a) {
      case IPC.ALERT_MESSAGE_CLEAR_STATE:
        this._currentApp.clearState()
    }
  };
  Session.prototype._handleConnect = function () {
    if (null === this._currentApp) {
      switch (Env.getAppName()) {
        case "trades":
          console.info("Booting Trades App");
          Env.setFeedSymbol(decodeURIComponent(this._bootConfiguration.feedSymbol));
          DOMAlert.sendSymbol(Env.getSymbol());
          this._currentApp = new TradesApp("trades_app", Env.getSymbol());
          this._currentApp.setBounds(0, 0, TradesApp.WIDTH, TradesApp.HEIGHT_GAP);
          break;
        case "monitor":
          console.info("Booting Monitor App");
          this._currentApp = new MonitorApp("monitorApp");
          break;
        default:
          console.error("Tried to load an non-existent app!")
      }
      this._wm.addWindow(this._currentApp);
      this._currentApp.connect();
    } else this._currentApp.connect();
    var a = this;
    this._feed = new Feed(this._ipc);
    this._feed.addSymbol("\x3d\x3d\x3d");
    this._feed.onLogOut = function () {
      a._handleLoggedOut()
    };
    this._feed.onDisconnect = function () {
      a._handleDisconnect()
    };
    this._feed.start()
  };
  Session.prototype._handleLoggedOut = function () {
    console.warn("User " + this._username + " has been logged out.");
    this._ipc.stop()
  };
  Session.prototype._handleDisconnect = function () {
    console.error("You have been disconnected! @ " + new Date(Date.now()));
    this._root.setHeight(140);
    this._ipc.stop();
    this._root.remove(this._wm)
  };
  Session.prototype._handleConnectionError = function () {
    this._ipc.getConnectionAttempts() >= IPC.MAX_CONNECTION_ATTEMPTS && this._handleDisconnect()
  };
  // #endregion
  // #region BinaryBuffer
  this.BinaryBuffer = BinaryBuffer;
  function BinaryBuffer(a) {
    this._buffer = new DataView(a);
    this._bufferPos = 0
  };
  BinaryBuffer.prototype.getLine = function () {
    for (var a, b = ""; this._bufferPos < this._buffer.byteLength;) {
      a = String.fromCharCode(this._buffer.getUint8(this._bufferPos));
      this._bufferPos++;
      if ("\n" === a) break;
      b += a
    }
    return b
  };
  BinaryBuffer.prototype.getUnsignedLong = function () {
    var a = this._buffer.getUint32(this._bufferPos);
    this._bufferPos += 4;
    return a
  };
  BinaryBuffer.prototype.getUnsignedChar = function () {
    var a = this._buffer.getUint8(this._bufferPos);
    this._bufferPos++;
    return a
  };
  // #endregion
  // #region Color
  var Color = {
    UPDATED_UP: "#000090",
    UPDATED_DOWN: "#cc0000",
    UP: "#000090",
    DOWN: "#cc0000",
    TEXT_UP: "#000090",
    TEXT_DOWN: "#cc0000",
    TEXT_UNCHANGED: "#008000",
    UPDATED: "#ffdc00",
    ODD: "#e0e0e0",
    EVEN: "#f8f8f8",
    TEXT: "#000000",
    TEXT_REVERSED: "#ffffff",
    TEXT_BUY: "#000090",
    TEXT_SELL: "#cf0000",
    TEXT_UNKNOWN: "#008000",
    LEVEL_1: "#90c8ff",
    LEVEL_2: "#cfffff",
    LEVEL_3: "#e7ace0",
    LEVEL_4: "#eaeaff",
    LEVEL_5: "#cfcfcf",
    INSERTED: "#008000",
    DELETED: "#cf0000",
    MARKET: "#ffff00",
    RED: "#F00",
    BLUE: "#00F",
    MONITOR_PURPLE: "#AAAAD5",
    MONITOR_DARK_PURPLE: "#626595",
    MONITOR_LIGHT_PURPLE: "#DEDEEF",
    MONITOR_LINK: "#2B3266",
    MONITOR_ROW_EVEN: "#F0F0E7",
    MONITOR_ROW_ODD: "#E5E5F3",
    setSchema: function (a) {
      Color.UPDATED_UP = a.up;
      Color.UPDATED_DOWN = a.down;
      Color.UP = a.up;
      Color.DOWN = a.down;
      Color.TEXT_UP = a.up;
      Color.TEXT_DOWN = a.down;
      Color.TEXT_UNCHANGED = a.unchanged;
      Color.TEXT_BUY = a.up;
      Color.TEXT_SELL = a.down;
      Color.TEXT_UNKNOWN = a.unchanged
    }
  };
  // #endregion
  // #region Feed
  this.Feed = Feed;
  function Feed(a) {
    this._request = "";
    this._ipc = a;
    this._clientID = Feed.getNextID();
    this._started = !1
  };
  Feed.CLIENT_ID = 0;
  Feed.getNextID = function () {
    return ++Feed.CLIENT_ID
  };
  Feed.prototype.getClientID = function () {
    return this._clientID
  };
  Feed.prototype.getRequest = function () {
    return this._request
  };
  Feed.prototype.hasStarted = function () {
    return this._started
  };
  Feed.prototype.addSymbol = function (a) {
    this._request += "0" + a + "~"
  };
  Feed.prototype.addID = function (a) {
    this._request += "1" + a + "~"
  };
  Feed.prototype.addParam = function (a) {
    this._request += "2" + a.toString(16) + "~"
  };
  Feed.prototype.addParams = function (a) {
    for (var b = 0; b < a.length; b++) this._request += "2" + a[b].toString(16) + "~"
  };
  Feed.prototype.start = function () {
    this._ipc.subscribe(this);
    this._started = !0
  };
  Feed.prototype.stop = function () {
    this._ipc.unsubscribe(this)
  };
  Feed.prototype.onData = function (a) { };
  Feed.prototype.onLoadingComplete = function () { };
  Feed.prototype.onDisconnect = function () { };
  Feed.prototype.onLogOut = function () { };
  Feed.P_ORDERS_BID_TIME = 512;
  Feed.P_ORDERS_BID_SIZE = 513;
  Feed.P_ORDERS_BID_PRICE = 514;
  Feed.P_ORDERS_BID_CODE = 515;
  Feed.P_ORDERS_BID_LIST_COMMAND = 767;
  Feed.P_ORDERS_OFFER_TIME = 768;
  Feed.P_ORDERS_OFFER_SIZE = 769;
  Feed.P_ORDERS_OFFER_PRICE = 770;
  Feed.P_ORDERS_OFFER_CODE = 771;
  Feed.P_ORDERS_OFFER_LIST_COMMAND = 1023;
  Feed.P_CHANGE = 32;
  Feed.P_CHANGE_PC = 33;
  Feed.P_CUR_PRICE = 34;
  Feed.P_BID_PRICE = 35;
  Feed.P_BID_SIZE = 96;
  Feed.P_OFFER_PRICE = 36;
  Feed.P_OFFER_SIZE = 97;
  Feed.P_MID_PRICE = 37;
  Feed.P_SPREAD = 38;
  Feed.P_SPREAD_PC = 39;
  Feed.P_OPEN_PRICE = 40;
  Feed.P_HIGH_PRICE = 41;
  Feed.P_LOW_PRICE = 42;
  Feed.P_CLOSE_PRICE = 43;
  Feed.P_LAST_CHANGE_TIME = 44;
  Feed.P_OPEN_CHANGE = 45;
  Feed.P_OPEN_CHANGE_PC = 46;
  Feed.P_VOLUME = 48;
  Feed.P_BUY_VOLUME = 49;
  Feed.P_SELL_VOLUME = 50;
  Feed.P_UNKNOWN_VOLUME = 51;
  Feed.P_BUY_SELL_UNKNOWN = 52;
  Feed.P_BUY_PC = 53;
  Feed.P_SELL_PC = 54;
  Feed.P_UNKNOWN_PC = 55;
  Feed.P_TIME = 224;
  Feed.P_DELAYED = 226;
  Feed.P_NEWS_COUNT_BB = 74;
  Feed.P_NEWS_COUNT_NEWS_REG = 76;
  Feed.P_NEWS_COUNT_NEWS_NON_REG = 77;
  Feed.P_NEWS_COUNT_NEWS_ALL = 75;
  Feed.P_PERIOD_1_PERIOD = 1024;
  Feed.P_PERIOD_1_CUR_OPEN = 1168;
  Feed.P_PERIOD_1_CUR_HIGH = 1184;
  Feed.P_PERIOD_1_CUR_LOW = 1200;
  Feed.P_PERIOD_1_CUR_CLOSE = 1216;
  Feed.P_PERIOD_1_TOTAL_VOLUME = 1232;
  Feed.P_PERIOD_1_BUY_VOLUME = 1248;
  Feed.P_PERIOD_1_SELL_VOLUME = 1264;
  Feed.P_PERIOD_1_UNKNOWN_VOLUME = 1280;
  Feed.P_TRADE_PRICE_0 = 160;
  Feed.P_TRADE_PRICE_1 = 161;
  Feed.P_TRADE_PRICE_2 = 162;
  Feed.P_TRADE_PRICE_3 = 163;
  Feed.P_TRADE_PRICE_4 = 164;
  Feed.P_TRADE_SIZE = 165;
  Feed.P_TRADE_TIME = 166;
  Feed.P_TRADE_TYPE = 167;
  Feed.P_TRADE_HIGH = 168;
  Feed.P_TRADE_LOW = 169;
  Feed.P_NUM_TRADES = 170;
  Feed.P_TRADE_EXCHANGE = 179;
  Feed.P_TRADE_BUY_SELL = 180;
  Feed.P_YEST_BID = 80;
  Feed.P_YEST_OFFER = 81;
  Feed.P_YEST_CLOSE = 82;
  Feed.P_LSE_DAILY_VWAP = 114;
  Feed.P_NUM_TRADES = 170;
  Feed.P_TRADES_TIME = 256;
  Feed.P_TRADES_PRICE = 257;
  Feed.P_TRADES_SIZE = 258;
  Feed.P_TRADES_TYPE = 259;
  Feed.P_TRADES_EXCHANGE = 260;
  Feed.P_TRADES_BID = 261;
  Feed.P_TRADES_OFFER = 262;
  Feed.P_TRADES_BUY_SIZE = 263;
  Feed.P_TRADES_SELL_SIZE = 264;
  Feed.P_TRADES_UNKNOWN_SIZE = 265;
  Feed.P_TRADES_BUY_VOLUME = 266;
  Feed.P_TRADES_SELL_VOLUME = 267;
  Feed.P_TRADES_UNKNOWN_VOLUME = 268;
  Feed.P_TRADES_NUMBER = 269;
  Feed.P_TRADES_BUY_SELL_UNKNOWN = 272;
  Feed.P_TRADES_FLAGS = 273;
  Feed.P_V1_TRADES_CODE = 278;
  Feed.P_TRADES_LIST_COMMAND = 511;
  Feed.P_FLOW_I_P1_BID = 1552;
  Feed.P_FLOW_I_P1_OFFER = 1553;
  Feed.P_FLOW_I_P5_BID = 1554;
  Feed.P_FLOW_I_P5_OFFER = 1555;
  Feed.P_FLOW_I_P10_BID = 1556;
  Feed.P_FLOW_I_P10_OFFER = 1557;
  Feed.P_FLOW_I_P15_BID = 1558;
  Feed.P_FLOW_I_P15_OFFER = 1559;
  Feed.P_FLOW_I_P30_BID = 1560;
  Feed.P_FLOW_I_P30_OFFER = 1561;
  Feed.P_FLOW_I_P60_BID = 1562;
  Feed.P_FLOW_I_P60_OFFER = 1563;
  Feed.P_FLOW_D_P1_BID = 1564;
  Feed.P_FLOW_D_P1_OFFER = 1565;
  Feed.P_FLOW_D_P5_BID = 1566;
  Feed.P_FLOW_D_P5_OFFER = 1567;
  Feed.P_FLOW_D_P10_BID = 1568;
  Feed.P_FLOW_D_P10_OFFER = 1569;
  Feed.P_FLOW_D_P15_BID = 1570;
  Feed.P_FLOW_D_P15_OFFER = 1571;
  Feed.P_FLOW_D_P30_BID = 1572;
  Feed.P_FLOW_D_P30_OFFER = 1573;
  Feed.P_FLOW_D_P60_BID = 1574;
  Feed.P_FLOW_D_P60_OFFER = 1575;
  Feed.P_FLOW_PU_P1_BID = 1576;
  Feed.P_FLOW_PU_P1_OFFER = 1577;
  Feed.P_FLOW_PU_P5_BID = 1578;
  Feed.P_FLOW_PU_P5_OFFER = 1579;
  Feed.P_FLOW_PU_P10_BID = 1580;
  Feed.P_FLOW_PU_P10_OFFER = 1581;
  Feed.P_FLOW_PU_P15_BID = 1582;
  Feed.P_FLOW_PU_P15_OFFER = 1583;
  Feed.P_FLOW_PU_P30_BID = 1584;
  Feed.P_FLOW_PU_P30_OFFER = 1585;
  Feed.P_FLOW_PU_P60_BID = 1586;
  Feed.P_FLOW_PU_P60_OFFER = 1587;
  Feed.P_FLOW_PD_P1_BID = 1588;
  Feed.P_FLOW_PD_P1_OFFER = 1589;
  Feed.P_FLOW_PD_P5_BID = 1590;
  Feed.P_FLOW_PD_P5_OFFER = 1591;
  Feed.P_FLOW_PD_P10_BID = 1592;
  Feed.P_FLOW_PD_P10_OFFER = 1593;
  Feed.P_FLOW_PD_P15_BID = 1594;
  Feed.P_FLOW_PD_P15_OFFER = 1595;
  Feed.P_FLOW_PD_P30_BID = 1596;
  Feed.P_FLOW_PD_P30_OFFER = 1597;
  Feed.P_FLOW_PD_P60_BID = 1598;
  Feed.P_FLOW_PD_P60_OFFER = 1648;
  Feed.P_FLOW_SU_P1_BID = 1649;
  Feed.P_FLOW_SU_P1_OFFER = 1650;
  Feed.P_FLOW_SU_P5_BID = 1651;
  Feed.P_FLOW_SU_P5_OFFER = 1652;
  Feed.P_FLOW_SU_P10_BID = 1653;
  Feed.P_FLOW_SU_P10_OFFER = 1654;
  Feed.P_FLOW_SU_P15_BID = 1655;
  Feed.P_FLOW_SU_P15_OFFER = 1656;
  Feed.P_FLOW_SU_P30_BID = 1657;
  Feed.P_FLOW_SU_P30_OFFER = 1658;
  Feed.P_FLOW_SU_P60_BID = 1659;
  Feed.P_FLOW_SU_P60_OFFER = 1660;
  Feed.P_FLOW_SD_P1_BID = 1661;
  Feed.P_FLOW_SD_P1_OFFER = 1662;
  Feed.P_FLOW_SD_P5_BID = 1663;
  Feed.P_FLOW_SD_P5_OFFER = 1664;
  Feed.P_FLOW_SD_P10_BID = 1665;
  Feed.P_FLOW_SD_P10_OFFER = 1666;
  Feed.P_FLOW_SD_P15_BID = 1667;
  Feed.P_FLOW_SD_P15_OFFER = 1668;
  Feed.P_FLOW_SD_P30_BID = 1669;
  Feed.P_FLOW_SD_P30_OFFER = 1670;
  Feed.P_FLOW_SD_P60_BID = 1671;
  Feed.P_FLOW_SD_P60_OFFER = 1672;
  Feed.P_RATE_VOLUME = 1673;
  Feed.P_PERIOD_1_RATE_VOLUME = 1680;
  Feed.P_LSE_REFERENCE_PRICE = 113;
  Feed.P_LSE_DAILY_VWAP = 114;
  Feed.P_LSE_UNCROSSING_PRICE = 115;
  Feed.P_LSE_UNCROSSING_VOLUME = 116;
  Feed.P_LSE_AUCTION_TIME = 117;
  Feed.P_FLAGS = 64;
  Feed.P_LONG_FLAGS = 65;
  Feed.strings = {};
  Feed.strings["100"] = "(no change";
  Feed.strings["101"] = "(no trades";
  Feed.strings["102"] = "MKT";
  Feed.strings["1000"] = "O";
  Feed.strings["1001"] = "B";
  Feed.strings["1002"] = "EU";
  Feed.strings["1003"] = "ER";
  Feed.strings["1004"] = "K";
  Feed.strings["1005"] = "LC";
  Feed.strings["1006"] = "M";
  Feed.strings["1007"] = "N";
  Feed.strings["1008"] = "NM";
  Feed.strings["1009"] = "NR";
  Feed.strings["1010"] = "P";
  Feed.strings["1011"] = "R";
  Feed.strings["1012"] = "RO";
  Feed.strings["1013"] = "RT";
  Feed.strings["1014"] = "ST";
  Feed.strings["1015"] = "SW";
  Feed.strings["1016"] = "UT";
  Feed.strings["1017"] = "X";
  Feed.strings["1018"] = "AT";
  Feed.strings["1019"] = "PA";
  Feed.strings["1020"] = "PC";
  Feed.strings["1021"] = "T";
  Feed.strings["1022"] = "WN";
  Feed.strings["1023"] = "WT";
  Feed.strings["1024"] = "CT";
  Feed.strings["1025"] = "AI";
  Feed.strings["1026"] = "PN";
  Feed.strings["1027"] = "VW";
  Feed.strings["1028"] = "RC";
  Feed.strings["1029"] = "OK";
  Feed.strings["1030"] = "NT";
  Feed.strings["1031"] = "NK";
  Feed.strings["1032"] = "OT";
  Feed.strings["1033"] = "TK";
  Feed.strings["1034"] = "BF";
  Feed.strings["1036"] = "SI";
  Feed.strings["1037"] = "SK";
  Feed.strings["1038"] = "SK";
  Feed.strings["1039"] = "PT";
  Feed.strings["1100"] = "B";
  Feed.strings["1101"] = "C";
  Feed.strings["1102"] = "L";
  Feed.strings["1103"] = "O";
  Feed.strings["1200"] = "LSE";
  Feed.strings["1300"] = "A";
  Feed.strings["1301"] = "S";
  Feed.strings["1302"] = "XC";
  Feed.strings["1303"] = "XD";
  Feed.strings["1304"] = "XL";
  Feed.strings["1305"] = "XO";
  Feed.strings["1306"] = "XR";
  Feed.strings["1307"] = "XP";
  Feed.strings["1308"] = "XS";
  Feed.strings["1309"] = "SU";
  Feed.strings["1310"] = "AU";
  Feed.strings["1400"] = "ANNOUNCEMENT";
  Feed.strings["1401"] = "STABALISATION";
  Feed.strings["1402"] = "EX-CAPITALISATION";
  Feed.strings["1403"] = "EX-DIVIDEND";
  Feed.strings["1404"] = "EX-LIQUIDATION-DISTRIBUTION";
  Feed.strings["1405"] = "EX-OTHER";
  Feed.strings["1406"] = "EX-RIGHTS";
  Feed.strings["1407"] = "EX-REPAYMENT OF CAPITAL";
  Feed.strings["1408"] = "EX-STOCK DISTRIBUTION";
  Feed.strings["1409"] = "SUSPENDED";
  Feed.strings["1410"] = "AUCTION";
  Feed.strings["2000"] = "";
  Feed.strings["2001"] = "aq";
  Feed.strings["2002"] = "bunched";
  Feed.strings["2003"] = "cash";
  Feed.strings["2004"] = "dist";
  Feed.strings["2007"] = "bnch.sold";
  Feed.strings["2009"] = "Odd lot";
  Feed.strings["2011"] = "rule 155";
  Feed.strings["2012"] = "sold last";
  Feed.strings["2014"] = "nxt.day";
  Feed.strings["2015"] = "opened";
  Feed.strings["2016"] = "prior ref";
  Feed.strings["2018"] = "seller";
  Feed.strings["2019"] = "split";
  Feed.strings["2020"] = "form t";
  Feed.strings["2023"] = "avg.";
  Feed.strings["2026"] = "seq";
  Feed.strings["2027"] = "vol.only";
  Feed.strings["2200"] = "nasd";
  Feed.strings["2201"] = "amex";
  Feed.strings["2202"] = "bost";
  Feed.strings["2203"] = "cinc";
  Feed.strings["2204"] = "chgo";
  Feed.strings["2205"] = "nyse";
  Feed.strings["2206"] = "pac";
  Feed.strings["2207"] = "phil";
  Feed.strings["3000"] = "";
  Feed.strings["3001"] = "aq";
  Feed.strings["3002"] = "avg.";
  Feed.strings["3003"] = "cash";
  Feed.strings["3004"] = "nxt.day.mkt";
  Feed.strings["3005"] = "direct+";
  Feed.strings["3006"] = "burst";
  Feed.strings["3007"] = "open/reopen";
  Feed.strings["3008"] = "intraday";
  Feed.strings["3009"] = "basket idx";
  Feed.strings["3010"] = "rule127";
  Feed.strings["3011"] = "rule155";
  Feed.strings["3012"] = "sold last";
  Feed.strings["3014"] = "nxt.day";
  Feed.strings["3015"] = "opened";
  Feed.strings["3018"] = "seller";
  Feed.strings["3019"] = "split";
  Feed.strings["3020"] = "form t";
  Feed.strings["3026"] = "seq";
  Feed.strings["3027"] = "vol.only";
  Feed.strings["3200"] = "nasd";
  Feed.strings["3201"] = "amex";
  Feed.strings["3202"] = "bost";
  Feed.strings["3203"] = "cinc";
  Feed.strings["3204"] = "chgo";
  Feed.strings["3205"] = "nyse";
  Feed.strings["3206"] = "pac";
  Feed.strings["3207"] = "phil";
  Feed.strings["3208"] = "nasdsc";
  Feed.strings["4000"] = "";
  Feed.strings["4001"] = "aq";
  Feed.strings["4002"] = "avg.";
  Feed.strings["4003"] = "cash";
  Feed.strings["4004"] = "nxt.day.mkt";
  Feed.strings["4005"] = "direct+";
  Feed.strings["4006"] = "burst basket";
  Feed.strings["4007"] = "open/reopen";
  Feed.strings["4008"] = "intraday";
  Feed.strings["4009"] = "basket idx";
  Feed.strings["4010"] = "rule 127";
  Feed.strings["4011"] = "rule 155";
  Feed.strings["4012"] = "sold last";
  Feed.strings["4014"] = "nxt.day";
  Feed.strings["4015"] = "opened";
  Feed.strings["4018"] = "seller";
  Feed.strings["4019"] = "split";
  Feed.strings["4020"] = "form t";
  Feed.strings["4026"] = "seq";
  Feed.strings["4027"] = "vol.only";
  Feed.strings["4200"] = "nasd";
  Feed.strings["4201"] = "amex";
  Feed.strings["4202"] = "bost";
  Feed.strings["4203"] = "cinc";
  Feed.strings["4204"] = "chgo";
  Feed.strings["4205"] = "nyse";
  Feed.strings["4206"] = "pac";
  Feed.strings["4207"] = "phil";
  Feed.strings["4208"] = "nasdsc";
  Feed.strings["5000"] = "";
  Feed.strings["5200"] = "";
  Feed.strings["91200"] = "EU";
  Feed.strings["91000"] = "EC";
  Feed.strings["6000"] = "";
  Feed.strings["6200"] = "";
  Feed.strings["7000"] = "";
  Feed.strings["7200"] = "";
  Feed.strings["8000"] = "";
  Feed.strings["8200"] = "";
  Feed.strings["10000"] = "";
  Feed.strings["10200"] = "";
  Feed.strings["11000"] = "";
  Feed.strings["11200"] = "";
  Feed.strings["14000"] = "";
  Feed.strings["14200"] = "";
  Feed.strings["12000"] = "";
  Feed.strings["12001"] = "aq";
  Feed.strings["12002"] = "bunched";
  Feed.strings["12003"] = "cash";
  Feed.strings["12004"] = "dist";
  Feed.strings["12007"] = "bnch.sold";
  Feed.strings["12011"] = "rule 155";
  Feed.strings["12012"] = "sold last";
  Feed.strings["12014"] = "nxt.day";
  Feed.strings["12015"] = "opened";
  Feed.strings["12016"] = "prior ref";
  Feed.strings["12018"] = "seller";
  Feed.strings["12019"] = "split";
  Feed.strings["12020"] = "form t";
  Feed.strings["12023"] = "avg.";
  Feed.strings["12026"] = "seq";
  Feed.strings["12027"] = "vol.only";
  Feed.strings["12200"] = "nasd";
  Feed.strings["12201"] = "amex";
  Feed.strings["12202"] = "bost";
  Feed.strings["12203"] = "cinc";
  Feed.strings["12204"] = "chgo";
  Feed.strings["12205"] = "nyse";
  Feed.strings["12206"] = "pac";
  Feed.strings["12207"] = "phil";
  Feed.strings["13000"] = "";
  Feed.strings["13001"] = "aq";
  Feed.strings["13002"] = "bunched";
  Feed.strings["13003"] = "cash";
  Feed.strings["13004"] = "dist";
  Feed.strings["13007"] = "bnch.sold";
  Feed.strings["13011"] = "rule 155";
  Feed.strings["13012"] = "sold last";
  Feed.strings["13014"] = "nxt.day";
  Feed.strings["13015"] = "opened";
  Feed.strings["13016"] = "prior ref";
  Feed.strings["13018"] = "seller";
  Feed.strings["13019"] = "split";
  Feed.strings["13020"] = "form t";
  Feed.strings["13023"] = "avg.";
  Feed.strings["13026"] = "seq";
  Feed.strings["13027"] = "vol.only";
  Feed.strings["13200"] = "nasd";
  Feed.strings["13201"] = "amex";
  Feed.strings["13202"] = "bost";
  Feed.strings["13203"] = "cinc";
  Feed.strings["13204"] = "chgo";
  Feed.strings["13205"] = "nyse";
  Feed.strings["13206"] = "pac";
  Feed.strings["13207"] = "phil";
  Feed.strings.datetime = "Time";
  Feed.strings.source = "Source";
  Feed.strings.headline = "Headline";
  Feed.strings.symbol = "Symbol";
  Feed.strings.symbol_name = "Company";
  // #endregion
  // #region FeedContent
  this.FeedContent = FeedContent;
  function FeedContent(a, b, c) {
    this.id = a;
    this.contents = b;
    this.flags = c
  };
  FeedContent.prototype.getID = function () {
    return this.id
  };
  FeedContent.prototype.getContents = function () {
    return this.contents
  };
  FeedContent.prototype.getFlags = function () {
    return this.flags
  };
  FeedContent.prototype.toString = function () {
    return "(" + this.id + "," + this.contents + "," + this.flags + ")"
  };
  FeedContent.FLAG_UPDATE_UP = 1;
  FeedContent.FLAG_UPDATE_DOWN = 2;
  FeedContent.FLAG_UPDATE_NO_CHANGE = 4;
  FeedContent.FLAG_DELETED = 8;
  FeedContent.FLAG_HIGHLIGHT = 16;
  FeedContent.FLAG_PERIOD_UP = 32;
  FeedContent.FLAG_PERIOD_DOWN = 64;
  FeedContent.FLAG_PERIOD_NO_CHANGE = 128;
  FeedContent.FLAG_INITIAL_VALUE = 134217728;
  FeedContent.FLAG_KEEP_CONTENTS = 268435456;
  FeedContent.FLAG_LIST_INSERT = 536870912;
  FeedContent.FLAG_LIST_DELETE = 1073741824;
  FeedContent.ID_GAVE_UP_CONNECTING = -1;
  FeedContent.ID_LOAD_PERCENT = -2;
  FeedContent.ID_LOAD_COMPLETE = -3;
  FeedContent.ID_HAVE_RECONNECTED = -4;
  // #endregion
  // #region IPC
  this.IPC = IPC;
  function IPC(a, b) {
    if ("undefined" === typeof window.WebSocket) throw "No websocket";
    this._username = a.toLowerCase();
    this._sid = b;
    this._ipcTag = this._createIPCTag();
    this._handler = {};
    this._handlerStatus = {};
    this._subscribeList = [];
    this._listeners = [];
    this._hasOpened = this._connected = !1;
    this._connectURL = Env.getStreamerURL();
    this._attemptToReconnect = !0;
    this._connectionAttempts = 0;
    this._reconnectionTimeout = 125;
    this._reconnectionMax = 18E4;
    this._connectWebSocket()
  };
  IPC.MAX_CONNECTION_ATTEMPTS = 2;
  IPC.prototype.getUsername = function () {
    return this._username
  };
  IPC.prototype.getSID = function () {
    return this._sid
  };
  IPC.prototype.getIPCTag = function () {
    return this._ipcTag
  };
  IPC.prototype._createIPCTag = function () {
    for (var a = [], b = 0; 8 > b; ++b)
      a.push(Math.floor(11 * Math.random()));
    return a.join("")
  };
  IPC.prototype.isConnected = function () {
    return this._connected
  };
  IPC.prototype.setConnected = function (a) {
    this._connected = a
  };
  IPC.prototype.getConnectionAttempts = function () {
    return this._connectionAttempts
  };
  IPC.prototype._connectWebSocket = function () {
    this._ws = new window.WebSocket(this._connectURL);
    var a = this;
    this._ws.onmessage = function (b) {
      a._handleData(b)
    };
    this._ws.onclose = function (b) {
      a._handleDisconnect(b)
    };
    this._ws.onopen = function (b) {
      a._hasOpened ? (a._triggerClearState(), a._hasOpened = !1) : a._hasOpened = !0;
      a._handleOpen(b)
    };
    this._ws.onerror = function (b) {
      a._handleError(b)
    }
  };
  IPC.ALERT_MESSAGE_CLEAR_STATE = "clear_state";
  IPC.prototype._triggerClearState = function () {
    this.alertListeners(IPC.ALERT_MESSAGE_CLEAR_STATE)
  };
  IPC.prototype.attachListener = function (a) {
    this._listeners.push(a)
  };
  IPC.prototype.alertListeners = function (a) {
    for (var b = 0; b < this._listeners.length; b++) this._listeners[b].ipcAlert(a)
  };
  IPC.prototype._handleReconnection = function () {
    this._reconnectionTimeout *= 2;
    this._connectionAttempts++;
    console.info("IPC Reconnection attempt: " + this._connectionAttempts);
    var a = this;
    setTimeout(function () {
      a._connectWebSocket()
    }, this._reconnectionTimeout)
  };
  IPC.prototype.stop = function () {
    this._ws.close();
    delete this._ws;
    this._handler = {};
    this._handlerStatus = {}
  };
  IPC.prototype.send = function (a) {
    this._ws.send(JSON.stringify(a))
  };
  IPC.prototype.subscribe = function (a) {
    if (a instanceof Feed) {
      if (this.isConnected()) {
        var b = a.getClientID(),
          c = {
            type: "subscribe",
            ipc_tag: this.getIPCTag(),
            client_id: b,
            user: this.getUsername(),
            sid: this.getSID(),
            page_key: "pagekey",
            app: "hello",
            request: a.getRequest()
          };
        this.send(c);
        this._handler[b] = a;
        return !0
      }
      this._subscribeList.push(a)
    }
    return !1
  };
  IPC.prototype.unsubscribe = function (a) {
    if (a instanceof Feed && a.hasStarted()) {
      a = a.getClientID();
      var b = {
        type: "unsubscribe",
        ipc_tag: this.getIPCTag(),
        client_id: a
      };
      this.send(b);
      delete this._handler[a];
      return !0
    }
    return !1
  };
  IPC.prototype.onConnect = function () { };
  IPC.prototype.onError = function () { };
  IPC.prototype.onConnectionError = function () { };
  IPC.prototype.onDisconnect = function () {
    this._attemptToReconnect = !1;
    for (var a in this._handler)
      if (this._handler.hasOwnProperty(a)) this._handler[a].onDisconnect();
    console.error("Client has been disconnected from the streamer");
  };
  IPC.prototype._handleError = function (a) {
    this.isConnected() ? (console.error("IPC error detected on " + a.target.url), this.onError()) : (console.error("IPC connection error detected on " + a.target.url), this.onConnectionError())
  };
  IPC.prototype._handleOpen = function (a) {
    //console.info("Opened the connection to the web sockets streamer: " + a.target.url);
    this.setConnected(!0);
    this._connectionAttempts = 0;
    this._reconnectionTimeout = 500
  };
  IPC.prototype._handleDisconnect = function (a) {
    console.error("IPC has been disconnected from " + a.target.url);
    if (!this.isConnected() && (0 === this._connectionAttempts && (console.error("Failed to boot up the first time, trying with alternative URL: " + Env.getAlternativeStreamerURL()), this._connectURL = Env.getAlternativeStreamerURL()),
      1 === this._connectionAttempts && this._connectURL === Env.getAlternativeStreamerURL() && (console.error("Failed to connect to alternative, now trying with fallback: " + Env.getAlternativeStreamerURLFallback()), this._connectURL = Env.getAlternativeStreamerURLFallback()),
      this._connectionAttempts === IPC.MAX_CONNECTION_ATTEMPTS && this._connectURL === Env.getAlternativeStreamerURLFallback())) this.onDisconnect();
    this._reconnectionTimeout > this._reconnectionMax && this.isConnected() && (this.setConnected(!1), this.onDisconnect());
    var b = this;
    this._attemptToReconnect && (console.warn("-- THROTTLE -- Next reconnection attempt in 2 seconds..."), setTimeout(function () {
      b._handleReconnection()
    }, 2E3))
  };
  IPC.prototype._handleData = function (a) {
    a = a.data;
    var b;
    RootComponent.setTimestamp(Date.now());
    if ("#" === a) this._lastTimestamp = Date.now();
    else if ("connect" === a) {
      this.send({ type: "stream_request", ipc_tag: this.getIPCTag() });
      for (a = 0; a < this._subscribeList.length; a++)
        this.subscribe(this._subscribeList[a]);
      this._subscribeList = [];
      this.onConnect();
    } else {
      switch (a[0]) {
        case "$":
          b = a.substr(1).split(",");
          this._curClient = this._handler[b[1]];
          break;
        case "{":
          if (void 0 !== this._curClient) {
            b = a.substr(1).split("~");
            var c = parseInt(b[2], 10);
            "complete" !== this._handlerStatus[this._curClient.getClientID()] && (c += FeedContent.FLAG_INITIAL_VALUE);
            b = new FeedContent(parseInt(b[0], 10), b[1], c);
            this._curClient.onData(b);
          }
          if (Env.getAppName() === 'trades') {
            clearTimeout(window.refresh1);
            window.refresh1 = setTimeout(function () { requestAnimFrame(function () { Env.getSession()._root && Env.getSession()._root._refresh() }) }, 1000);
          }
          break;
        case "p":
          void 0 !== this._curClient && (b = a.substr(1), "100" === b && (this._handlerStatus[this._curClient.getClientID()] !== "complete") &&
            (this._handlerStatus[this._curClient.getClientID()] = "complete", this._curClient.onLoadingComplete(), Env.getSession()._root._refresh()));
          break;
        case "+":
          b = a.substr(1).split(":");
          switch (b[0]) {
            case "6":
              new Date().getHours() > 7 && new Date().getHours() < 17 && this._ws.readyState === 1 && this.subscribe(this._curClient);
              ///this._handleLogout();
              break;
            case "0":
              this.subscribe(this._curClient);
          }
      } - 1 !== a.indexOf("Streamer")
    }
  };
  IPC.prototype._handleLogout = function () {
    for (var a in this._handler) this._handler.hasOwnProperty(a) && (this._handler[a].onLogOut(), delete this._handler[a])
  };
  // #endregion
  // #region TradeListsInfo
  this.TradeListsInfo = TradeListsInfo;
  function TradeListsInfo(a) {
    this._currency = a.currency;
    this._displayMarket = a.display_market;
    this._displaySymbol = a.display_symbol;
    this._entitled = a.entitled;
    this._feedSymbol = a.feed_symbol;
    this._market = a.market;
    this._symbol = a.symbol
  };
  TradeListsInfo.prototype.getDisplayMarket = function () {
    return this._displayMarket
  };
  TradeListsInfo.prototype.getFeedSymbol = function () {
    return this._feedSymbol
  };
  TradeListsInfo.prototype.getEntitled = function () {
    return this._entitled
  };
  TradeListsInfo.prototype.getSymbol = function () {
    return this._symbol
  };
  TradeListsInfo.prototype.getCurrency = function () {
    return this._currency
  };
  // #endregion
  // #region Trade
  this.Trade = Trade;
  function Trade(a) {
    this._id = a;
    this._unknownSize = this._sellSize = this._buySize = this._offer = this._bid = this._exchange = this._tradeFlag = this._type = this._size = this._price = this._time = this._tradeNumber = void 0;
    this._unknownVolume = this._sellVolume = this._buyVolume = "";
    this._market = this._typeOfSize = this._timestamp = void 0
  };
  Trade.prototype.getID = function () {
    return this._id
  };
  Trade.prototype.getMarket = function () {
    return this._market
  };
  Trade.prototype.setMarket = function (a) {
    this._market = a
  };
  Trade.prototype.setTypeOfSize = function (a) {
    this._typeOfSize = a
  };
  Trade.prototype.getTypeOfSize = function () {
    return this._typeOfSize
  };
  Trade.prototype.getTradeNumber = function () {
    return this._tradeNumber
  };
  Trade.prototype.setTradeNumber = function (a) {
    this._tradeNumber = a
  };
  Trade.prototype.getTime = function () {
    return this._time
  };
  Trade.prototype.setTime = function (a) {
    this._time = a
  };
  Trade.prototype.getPrice = function () {
    return this._price
  };
  Trade.prototype.setPrice = function (a) {
    this._price = a
  };
  Trade.prototype.getSize = function () {
    return this._size
  };
  Trade.prototype.setSize = function (a) {
    this._size = a
  };
  Trade.prototype.getType = function () {
    return this._type
  };
  Trade.prototype.setType = function (a) {
    this._type = a
  };
  Trade.prototype.getTradeFlag = function () {
    return this._tradeFlag
  };
  Trade.prototype.setTradeFlag = function (a) {
    this._tradeFlag = a
  };
  Trade.prototype.getExchange = function () {
    "undefined" === typeof this._exchange && (this._exchange = "");
    return this._exchange
  };
  Trade.prototype.setExchange = function (a) {
    this._exchange = a
  };
  Trade.prototype.getBid = function () {
    return this._bid
  };
  Trade.prototype.setBid = function (a) {
    this._bid = a
  };
  Trade.prototype.getOffer = function () {
    return this._offer
  };
  Trade.prototype.setOffer = function (a) {
    this._offer = a
  };
  Trade.prototype.getBuySize = function () {
    return this._buySize
  };
  Trade.prototype.setBuySize = function (a) {
    this._buySize = a
  };
  Trade.prototype.getSellSize = function () {
    return this._sellSize
  };
  Trade.prototype.setSellSize = function (a) {
    this._sellSize = a
  };
  Trade.prototype.getUnknownSize = function () {
    return this._unknownSize
  };
  Trade.prototype.setUnknownSize = function (a) {
    this._unknownSize = a
  };
  Trade.prototype.getBuyVolume = function () {
    return 0 === this._buyVolume.trim().length ? "0" : this._buyVolume
  };
  Trade.prototype.setBuyVolume = function (a) {
    this._buyVolume = a
  };
  Trade.prototype.getSellVolume = function () {
    return 0 === this._sellVolume.trim().length ? "0" : this._sellVolume
  };
  Trade.prototype.setSellVolume = function (a) {
    this._sellVolume = a
  };
  Trade.prototype.getUnknownVolume = function () {
    return 0 === this._unknownVolume.trim().length ? "0" : this._unknownVolume
  };
  Trade.prototype.setUnknownVolume = function (a) {
    this._unknownVolume = a
  };
  Trade.prototype.setTimestamp = function (a) {
    this._timestamp = a
  };
  Trade.prototype.getTimestamp = function () {
    return this._timestamp
  };
  Trade.prototype.getLastChange = function () {
    return this._lastChange
  };
  Trade.prototype.getLastChangeTimestamp = function () {
    return this._lastChangeTimestamp
  };
  Trade.prototype.toString = function () {
    return "(trade id\x3d" + this._id + ", price\x3d" + this._price + ", size\x3d" + this._size + ", type\x3d" + this._type + ", time\x3d" + this._time + " lastChange\x3d" + this._lastChange + ")"
  };
  Trade.PRICE_UP = 1;
  Trade.PRICE_DOWN = 2;
  Trade.PRICE = Trade.PRICE_UP | Trade.PRICE_DOWN;
  Trade.SIZE_UP = 4;
  Trade.SIZE_DOWN = 8;
  Trade.SIZE = Trade.SIZE_UP | Trade.SIZE_DOWN;
  Trade.TYPE = 16;
  Trade.TIME = 32;
  Trade.INSERTED = 64;
  Trade.DELETED = 128;
  Trade.INITIAL = 256;
  Trade.BUY = 0;
  Trade.SELL = 1;
  // #endregion
  // #region TradesList
  this.TradesList = TradesList;
  function TradesList(a) {
    this._trades = [];
    this._listeners = [];
    this._deletedTrades = [];
    this._max_length = a;
    void 0 === a && (this._max_length = 50)
  };
  TradesList.prototype.addListener = function (a) {
    this._listeners.push(a)
  };
  TradesList.prototype.removeListener = function (a) {
    for (var b = 0; b < this._listeners.length; b++)
      this._listeners[b] === a && this._listeners.splice(b, 1);
  };
  TradesList.prototype.start = function () {
    var a = this;
    ///this._intervalID = setInterval(function() { a._interval() }, 1E3 / 12)
  };
  TradesList.prototype.stop = function () {
    clearInterval(this._intervalID)
  };
  TradesList.prototype.getTrades = function () {
    return this._trades
  };
  TradesList.prototype.addTrade = function (a) {
    a._lastChangeTimestamp = RootComponent.getTimestamp();
    this._trades.length === this._max_length && this._trades.pop();
    this._trades.unshift(a)
  };
  TradesList.prototype.insertTrade = function (a, b) {
    a._lastChangeTimestamp = RootComponent.getTimestamp();
    this._trades[b] = a
  };
  TradesList.prototype.sortByTimestamp = function () {
    this._trades.sort(function (a, b) {
      var c = a.getTimestamp(),
        d = b.getTimestamp();
      if (c < d) return 1;
      if (c > d) return -1;
      c = a.getTradeNumber();
      d = b.getTradeNumber();
      return c < d ? 1 : c > d ? -1 : 0
    })
  };
  TradesList.prototype._interval = function () {
    if (0 !== this._deletedTrades.length)
      for (var a = RootComponent.getTimestamp(), b = this._deletedTrades[0];
        "undefined" !== typeof b && a > b._removeTimestamp;) this._deletedTrades.splice(0, 1), b = this._deletedTrades[0]
  };
  // #endregion
  // #region MontageTradesList
  this.MontageTradesList = MontageTradesList;
  function MontageTradesList(a) {
    TradesList.call(this, a);
    this._trades = [];
    this._listeners = [];
    this._ready = !1
  };
  MontageTradesList.prototype = Object.create(TradesList.prototype);
  MontageTradesList.prototype.constructor = MontageTradesList;
  MontageTradesList.prototype.setSymbolMontage = function (a) {
    this._symbol = a;
    this._tli = this._symbol.getEntitledTradeListsInfo();
    this._tradesLists = [];
    if (0 < this._tli.length)
      for (var b = a = 0; b < this._tli.length; b++) this._tli[b].getCurrency() === this._symbol.getCurrency() && (this._tradesLists[a] = new SimpleTradesList, this._tradesLists[a].setDisplayMarket(this._tli[b].getDisplayMarket()), this._tradesLists[a].setSymbol(this._tli[b].getFeedSymbol()), this._tradesLists[a].addListener(this), a++);
    else
      this._tradesLists[0] = new SimpleTradesList, this._tradesLists[0].setDisplayMarket(a.getDisplayMarket()), this._tradesLists[0].setSymbol(a.getFeedSymbol()), this._tradesLists[0].addListener(this)
  };
  MontageTradesList.prototype.start = function () {
    TradesList.prototype.start.call(this);
    for (var a = 0; a < this._tradesLists.length; a++) this._tradesLists[a].start()
  };
  MontageTradesList.prototype.stop = function () {
    TradesList.prototype.stop.call(this);
    for (var a = 0; a < this._tradesLists.length; a++) this._tradesLists[a].stop()
  };
  MontageTradesList.prototype.onTradeAdd = function (a) {
    if (this._ready) {
      this.addTrade(a);
      for (var b = 0; b < this._listeners.length; b++) this._listeners[b].onTradeAdd(a)
    } else this.addTrade(a), this.sortByTimestamp()
  };
  MontageTradesList.prototype.onListReady = function () {
    for (var a = !0, b = 0; b < this._tradesLists.length; b++)
      if (!this._tradesLists[b].isReady()) {
        a = !1;
        break
      }
    if (a)
      for (var c = this._trades.length - 1; 0 <= c; c--)
        for (b = 0; b < this._listeners.length; b++) this._listeners[b].onTradeAdd(this._trades[c]);
    this._ready = a
  };
  // #endregion
  // #region SimpleTradesList
  this.SimpleTradesList = SimpleTradesList;
  function SimpleTradesList(a) {
    TradesList.call(this, a);
    this._listeners = [];
    this._numTrades = 0;
    this._ready = !1
  };
  SimpleTradesList.prototype = Object.create(TradesList.prototype);
  SimpleTradesList.prototype.constructor = SimpleTradesList;
  SimpleTradesList.FEED_LIST_COMMAND = 0;
  SimpleTradesList.FEED_NUMBER = 1;
  SimpleTradesList.FEED_TIME = 2;
  SimpleTradesList.FEED_PRICE = 3;
  SimpleTradesList.FEED_SIZE = 4;
  SimpleTradesList.FEED_TYPE = 5;
  SimpleTradesList.FEED_FLAGS = 6;
  SimpleTradesList.FEED_EXCHANGE = 7;
  SimpleTradesList.FEED_BID = 8;
  SimpleTradesList.FEED_OFFER = 9;
  SimpleTradesList.FEED_BUY_SIZE = 10;
  SimpleTradesList.FEED_SELL_SIZE = 11;
  SimpleTradesList.FEED_UNKNOWN_SIZE = 12;
  SimpleTradesList.FEED_BUY_VOLUME = 13;
  SimpleTradesList.FEED_SELL_VOLUME = 14;
  SimpleTradesList.FEED_UNKNOWN_VOLUME = 15;
  SimpleTradesList.FEED_NUM_PARAMS = 16;
  SimpleTradesList.prototype.setSymbol = function (a) {
    this._feed instanceof Feed && this._feed.hasStarted() && this._feed.stop();
    this._feedSymbol = a;
    this._feed = new Feed(Env.getIPC());
    this._feed.addSymbol(a);
    this._feed.addParams([
      Feed.P_TRADES_LIST_COMMAND, Feed.P_TRADES_NUMBER, Feed.P_TRADES_TIME, Feed.P_TRADES_PRICE, Feed.P_TRADES_SIZE, Feed.P_TRADES_TYPE,
      Feed.P_TRADES_FLAGS, Feed.P_TRADES_EXCHANGE, Feed.P_TRADES_BID, Feed.P_TRADES_OFFER, Feed.P_TRADES_BUY_SIZE, Feed.P_TRADES_SELL_SIZE,
      Feed.P_TRADES_UNKNOWN_SIZE, Feed.P_TRADES_BUY_VOLUME, Feed.P_TRADES_SELL_VOLUME, Feed.P_TRADES_UNKNOWN_VOLUME
    ]);
    var b = this;
    this._line = [];
    this._feed.onData = function (a) {
      b._handleFeed(a)
    };
    this._feed.onLoadingComplete = function () {
      b.setReady(!0)
    }
  };
  SimpleTradesList.prototype.getDisplayMarket = function () {
    return this._displayMarket
  };
  SimpleTradesList.prototype.setDisplayMarket = function (a) {
    this._displayMarket = a
  };
  SimpleTradesList.prototype.start = function () {
    TradesList.prototype.start.call(this);
    void 0 !== this._feed && this._feed.start()
  };
  SimpleTradesList.prototype.stop = function () {
    TradesList.prototype.stop.call(this);
    void 0 !== this._feed && this._feed.stop()
  };
  SimpleTradesList.prototype._handleFeed = function (a) {
    if (a.getID() === SimpleTradesList.FEED_LIST_COMMAND) {
      if ("undefined" === typeof a.getContents()) return !1;
      var b = new Trade("ts-" + this._numTrades + "-" + this._feedSymbol),
        c = /(\d{1,})/,
        d = [];
      b.setMarket(this.getDisplayMarket());
      d = void 0;
      this._line[SimpleTradesList.FEED_NUMBER] instanceof FeedContent && (d = this._line[SimpleTradesList.FEED_NUMBER].getContents());
      b.setTradeNumber(d);
      var e, d = void 0;
      this._line[SimpleTradesList.FEED_TIME] instanceof FeedContent && (d = this._line[SimpleTradesList.FEED_TIME].getContents(),
        e = Utils.tsToTime(parseInt(d, 10)));
      b.setTimestamp(d);
      b.setTime(e);
      e = void 0;
      this._line[SimpleTradesList.FEED_PRICE] instanceof FeedContent && (e = this._line[SimpleTradesList.FEED_PRICE].getContents());
      b.setPrice(e);
      e = void 0;
      this._line[SimpleTradesList.FEED_SIZE] instanceof FeedContent && (e = this._line[SimpleTradesList.FEED_SIZE].getContents());
      b.setSize(e);
      e = void 0;
      this._line[SimpleTradesList.FEED_TYPE] instanceof FeedContent && (e = this._line[SimpleTradesList.FEED_TYPE].getContents(), d = c.exec(e), null !== d && 0 < d.length ? (e = Feed.strings[d[1]], "undefined" === typeof e && (e = "")) : e = "");
      b.setType(e);
      e = void 0;
      this._line[SimpleTradesList.FEED_FLAGS] instanceof FeedContent && (e = this._line[SimpleTradesList.FEED_FLAGS].getContents(), d = c.exec(e), null !== d && 0 < d.length ? (e = Feed.strings[d[1]], "undefined" === typeof e && (e = "")) : e = "");
      b.setTradeFlag(e);
      e = void 0;
      this._line[SimpleTradesList.FEED_EXCHANGE] instanceof FeedContent && (e = this._line[SimpleTradesList.FEED_EXCHANGE].getContents(), d = c.exec(e), null !== d && 0 < d.length ? (e = Feed.strings[d[1]], "undefined" === typeof e && (e = this.getDisplayMarket())) : e = this.getDisplayMarket());
      b.setExchange(e);
      var f, c = void 0;
      this._line[SimpleTradesList.FEED_BID] instanceof FeedContent && (f = this._line[SimpleTradesList.FEED_BID].getContents());
      this._line[SimpleTradesList.FEED_OFFER] instanceof FeedContent && (c = this._line[SimpleTradesList.FEED_OFFER].getContents());
      b.setBid(f);
      b.setOffer(c);
      var g, m;
      f = void 0;
      this._line[SimpleTradesList.FEED_BUY_SIZE] instanceof FeedContent && (g = this._line[SimpleTradesList.FEED_BUY_SIZE].getContents());
      this._line[SimpleTradesList.FEED_SELL_SIZE] instanceof FeedContent && (m = this._line[SimpleTradesList.FEED_SELL_SIZE].getContents());
      this._line[SimpleTradesList.FEED_UNKNOWN_SIZE] instanceof FeedContent && (f = this._line[SimpleTradesList.FEED_UNKNOWN_SIZE].getContents());
      b.setBuySize(g);
      b.setSellSize(m);
      b.setUnknownSize(f);
      c = void 0;
      " " !== g ? c = "buy" : " " !== m ? c = "sell" : " " !== f && (c = "unknown");
      b.setTypeOfSize(c);
      var k, h;
      g = void 0;
      this._line[SimpleTradesList.FEED_BUY_VOLUME] instanceof FeedContent && (k = this._line[SimpleTradesList.FEED_BUY_VOLUME].getContents());
      this._line[SimpleTradesList.FEED_SELL_VOLUME] instanceof FeedContent && (h = this._line[SimpleTradesList.FEED_SELL_VOLUME].getContents());
      this._line[SimpleTradesList.FEED_UNKNOWN_VOLUME] instanceof FeedContent && (g = this._line[SimpleTradesList.FEED_UNKNOWN_VOLUME].getContents());
      b.setBuyVolume(k);
      b.setSellVolume(h);
      b.setUnknownVolume(g);
      switch (a.getContents()[0]) {
        case "A":
          this._tradeAdd(b)
      }
      for (a = 0; a < SimpleTradesList.FEED_NUM_PARAMS; a++)
        this._line[a] = void 0;
    } else this._line[a.id] = a;
    return !0
  };
  SimpleTradesList.prototype._tradeAdd = function (a) {
    // check if the trade or a newer trade already exists to prevent duplicates
    if (this._trades.find && this._trades.find(function (t) { return t._exchange === a._exchange && parseInt(t._tradeNumber) >= parseInt(a._tradeNumber) })) return;
    if (this._trades.filter(function (t) { return t._exchange === a._exchange && parseInt(t._tradeNumber) >= parseInt(a._tradeNumber) })[0]) return;
    this.addTrade(a);
    for (var b = 0; b < this._listeners.length; b++) this._listeners[b].onTradeAdd(a);
    this._numTrades++;
  };
  SimpleTradesList.prototype.setReady = function (a) {
    if (this._ready = a)
      for (a = 0; a < this._listeners.length; a++) this._listeners[a].onListReady()
  };
  SimpleTradesList.prototype.isReady = function () {
    return this._ready
  };
  // #endregion
  // #region Symbol
  this.Symbol = Symbol;
  function Symbol(a) {
    this._urls = a.urls;
    this._name = a.name;
    this._companyShortName = a.company_short_name;
    this._currency = a.currency;
    this._market = a.market;
    this._symbol = a.symbol;
    this._displayMarket = a.display_market;
    this._displaySymbol = a.display_symbol;
    this._feedSymbol = a.feed_symbol;
    this._dayStart = a.day_start_seconds;
    this._dayStop = a.day_stop_seconds;
    this._timeZone = a.timezone;
    this._numWeekends = (this._weekends = a.weekends) ? this._weekends.length : 0;
    this._daySeconds = 86400 - (this._dayStop - this._dayStart);
    this._delay = a.delay;
    this._delayEntitlement = a.delay_entitlement;
    this._isDelayed = "D" === this._delayEntitlement;
    this._orderBooks = a.order_books;
    this._tradeLists = a.trade_lists;
    this._isEntitled = this._checkIfEntitled();
    this._pageTitles = a.titles;
    this._memo = a.memo;
    this._type = a.type;
  };
  Symbol.prototype.constructor = Symbol;
  Symbol.prototype.getEntitledOrderBooksInfo = function () {
    if (void 0 !== this._orderBooks) {
      for (var a = [], b = 0, c = 0; c < this._orderBooks.length; c++) {
        var d = new OrderBookInfo(this._orderBooks[c]);
        d.getEntitled() && (a[b++] = d)
      }
      return a
    }
  };
  Symbol.prototype.getOrderBooks = function () {
    return this._orderBooks
  };
  Symbol.prototype.getEntitledTradeListsInfo = function () {
    if (void 0 !== this._tradeLists) {
      for (var a = [], b = 0; b < this._tradeLists.length; b++) {
        var c = new TradeListsInfo(this._tradeLists[b]);
        c.getEntitled() && a.push(c)
      }
      return a
    }
  };
  Symbol.prototype.getType = function () {
    return this._type
  };
  Symbol.prototype._checkIfEntitled = function () {
    for (var a = {
      display_symbol: void 0,
      entitled: void 0
    }, b = 0; b < this._orderBooks.length; b++)
      if (a = this._orderBooks[b], void 0 !== a && a.display_symbol === this._displaySymbol) return a.entitled;
    return !1
  };
  Symbol.prototype.isEntitled = function () {
    return Boolean(this._isEntitled)
  };
  Symbol.prototype.getCurrency = function () {
    return this._currency
  };
  Symbol.prototype.getPageTitles = function () {
    return this._pageTitles
  };
  Symbol.prototype.getURLs = function () {
    return this._urls
  };
  Symbol.prototype.getName = function () {
    return this._name
  };
  Symbol.prototype.getDelay = function () {
    return this._delay
  };
  Symbol.prototype.getDelayEntitlement = function () {
    return this._delayEntitlement
  };
  Symbol.prototype.isDelayed = function () {
    return this._isDelayed
  };
  Symbol.prototype.getMarket = function () {
    return this._market
  };
  Symbol.prototype.getDisplayMarket = function () {
    return this._displayMarket
  };
  Symbol.prototype.getFeedSymbol = function () {
    return this._feedSymbol
  };
  Symbol.prototype.getNumWeekends = function () {
    return this._numWeekends
  };
  Symbol.prototype.getWeekends = function () {
    return this._weekends
  };
  Symbol.prototype.getDaySeconds = function () {
    return this._daySeconds
  };
  Symbol.prototype.getDayStartSeconds = function () {
    return this._dayStart
  };
  Symbol.prototype.getDayStopSeconds = function () {
    return this._dayStop
  };
  Symbol.prototype.getDisplaySymbol = function () {
    return this._displaySymbol
  };
  Symbol.prototype.getSymbol = function () {
    return this._symbol
  };
  Symbol.prototype.getCompanyShortName = function () {
    return this._companyShortName
  };
  Symbol.prototype.getMemo = function () {
    return this._memo
  };
  Symbol.prototype.setMemo = function (a) {
    this._memo = a
  };
  Symbol.prototype.toString = function () {
    return "Symbol\x3c" + this._displaySymbol + "\x3e"
  };
  // #endregion
  // #region SymbolList
  this.SymbolList = SymbolList;
  function SymbolList() {
    this._items = [];
    this._groupedList = new GroupedSymbolList;
    this._groupBy = 0;
    this._sortingColumn = -1;
    this._currentSorting = SymbolList.SORT_ASCENDING;
    this._feedMap = [];
    this.setFeedMapping = function (a, b) {
      this._feedMap[b] = a
    };
    this.getSymbolByFeedMapping = function (a) {
      return void 0 === this._feedMap[a] ? null : this._feedMap[a]
    };
    this.updateSymbolValue = function (a, b, c, d) {
      a = a.getFeedSymbol();
      this._items[a].setValue(b, c, d)
    };
    this.getItem = function (a) {
      a = a.getFeedSymbol();
      return this._items[a]
    };
    this.getItemByFeedSymbol = function (a) {
      return this._items[a]
    };
    this.getItems = function () {
      return this._items
    };
    this.addSymbol = function (a) {
      var b = a.getFeedSymbol();
      this._items[b] = new SymbolListItem(b, a)
    };
    this.removeSymbol = function (a) {
      var b = a.getFeedSymbol(),
        c = Number(Utils.getKey(this._feedMap, a));
      delete this._feedMap[c];
      delete this._items[b];
      this._groupedList.removeSymbol(a)
    };
    this.getMaxValue = function (a) {
      var b = 0,
        c;
      for (c in this._items)
        if (this._items.hasOwnProperty(c)) {
          var d = this._items[c].getValue(a),
            e = 0;
          d !== Number.NEGATIVE_INFINITY && d !== Number.POSITIVE_INFINITY && (e = null === d ? 0 : d.toString().length, isNaN(d) || 1E-6 > Math.abs(d) && (e += 3));
          b < e && (b = e)
        }
      return b
    };
    this.sortByColumn = function (a, b) {
      this._sortingColumn = a;
      this._currentSorting = b;
      var c = [],
        d;
      for (d in this._items) this._items.hasOwnProperty(d) && c.push(this._items[d]);
      c.sort(function (c, d) {
        switch (b) {
          case SymbolList.SORT_DESCENDING:
            return isNaN(d.getValue(a)) && isNaN(c.getValue(a)) ? d.getValue(a) < c.getValue(a) ? -1 : c.getValue(a) == d.getValue(a) ? 0 : 1 : isNaN(d.getValue(a)) ? 1 : isNaN(c.getValue(a)) ? -1 : d.getValue(a) - c.getValue(a);
          default:
            return isNaN(c.getValue(a)) && isNaN(d.getValue(a)) ? c.getValue(a) < d.getValue(a) ? -1 : c.getValue(a) == d.getValue(a) ? 0 : 1 : isNaN(c.getValue(a)) ? 1 : isNaN(d.getValue(a)) ? -1 : c.getValue(a) - d.getValue(a)
        }
      });
      this._items = [];
      for (d = 0; d < c.length; d++) this._items[c[d].getSymbol().getFeedSymbol()] = c[d]
    };
    this._orderBySymbol = function () {
      var a = [],
        b;
      for (b in this._items) this._items.hasOwnProperty(b) && a.push(this._items[b]);
      a.sort(function (a, b) {
        return isNaN(a.getSymbol().getSymbol()) && isNaN(b.getSymbol().getSymbol()) ?
          a.getSymbol().getSymbol() < b.getSymbol().getSymbol() ? -1 : a.getSymbol().getSymbol() == b.getSymbol().getSymbol() ? 0 : 1 : isNaN(a.getSymbol().getSymbol()) ? 1 : isNaN(b.getSymbol().getSymbol()) ? -1 : a.getSymbol().getSymbol() - b.getSymbol().getSymbol()
      });
      b = [];
      for (var c = 0; c < a.length; c++) b[a[c].getSymbol().getFeedSymbol()] = a[c];
      this._items = [];
      this._items = b
    };
    this.getSymbols = function () {
      var a = [],
        b;
      for (b in this._items) this._items.hasOwnProperty(b) && a.push(this._items[b].getSymbol());
      return a;
    };
    this.setGroupBy = function (a) {
      this._groupBy = a;
    };
    this.setSortingColumn = function (a, b) {
      this._sortingColumn = a;
      this._currentSorting = b;
    };
    this.orderBySymbol = function () {
      this._orderBySymbol();
    };
    this.getGroupedList = function () {
      -1 < this._sortingColumn && this.sortByColumn(this._sortingColumn, this._currentSorting);
      switch (this._groupBy) {
        case SymbolList.GROUPBY_MARKET_IX:
          this._groupedList = this._groupedList.getByMarketAndIX(this._items);
          break;
        case SymbolList.GROUPBY_MARKET_IX_JP:
          this._groupedList = this._groupedList.getByMarketAndIXJapan(this._items);
          break;
        case SymbolList.NOT_GROUPED:
          this._groupedList = this._groupedList.getNotGrouped(this._items)
      }
      return this._groupedList
    };
    this.getGroupedListObject = function () {
      return this._groupedList
    };
    this.getRowBySymbol = function (a) {
      return this._groupedList.getRowBySymbol(a)
    };
    this.getSymbolByRow = function (a) {
      return void 0 === this._items[this._groupedList.getSymbolByRow(a)] ? null : this._items[this._groupedList.getSymbolByRow(a)].getSymbol()
    };
    this.getRowCount = function () {
      return this._groupedList.getRowCount()
    };
    this.setItemStyle = function (a, b, c, d, e) {
      this._items[a.getFeedSymbol()].setStyle(b, c, d, e)
    }
  };
  SymbolList.NOT_GROUPED = 0;
  SymbolList.GROUPBY_MARKET_IX = 1;
  SymbolList.GROUPBY_MARKET_IX_JP = 2;
  SymbolList.SORT_ASCENDING = 0;
  SymbolList.SORT_DESCENDING = 1;
  // #endregion
  // #region GroupedSymbolList
  this.GroupedSymbolList = GroupedSymbolList;
  function GroupedSymbolList() {
    this._rowCount = 1;
    this._rows = [];
    this._items = [];
    this.getGroupNameBySymbol = function (a) {
      for (var b in this._items)
        if (this._items.hasOwnProperty(b))
          for (var c = 0; c < this._items[b].length; c++)
            if (this._items[b][c] === a.getFeedSymbol()) return b;
      return null
    };
    this.removeSymbol = function (a) {
      var b;
      b = "IX" === a.getType() ? a.getType() : a.getMarket();
      void 0 === this._items[b] && (b = GroupedSymbolList.DEFAULT_GROUPING);
      a = this._items[b].indexOf(a.getFeedSymbol());
      this._items[b].splice(a, 1);
      0 === this._items[b].length &&
        delete this._items[b];
      this._updateRows(this._items)
    };
    this.getItems = function () {
      return this._items
    };
    this.getByMarketAndIX = function (a) {
      var b, c = [],
        d = [];
      for (b in a)
        if (a.hasOwnProperty(b)) {
          var e = a[b].getSymbol();
          if ("IX" === e.getType()) d.push(e.getFeedSymbol());
          else {
            var f = e.getMarket();
            void 0 === c[f] && (c[f] = []);
            c[f].push(e.getFeedSymbol())
          }
        }
      a = [];
      0 < d.length && (a.IX = d);
      d = Object.keys(c);
      d.sort();
      for (e = 0; e < d.length; e++) b = d[e], a[b] = c[b];
      this._items = a;
      this._updateRows(a);
      return this
    };
    this.getByMarketAndIXJapan = function (a) {
      var b,
        c = [],
        d = [],
        e = [];
      for (b in a)
        if (a.hasOwnProperty(b)) {
          var f = a[b].getSymbol();
          if ("IX" === f.getType()) d.push(f.getFeedSymbol());
          else if ("FX" === f.getType()) e.push(f.getFeedSymbol());
          else {
            var g = f.getMarket();
            void 0 === c[g] && (c[g] = []);
            c[g].push(f.getFeedSymbol())
          }
        }
      a = [];
      0 < e.length && (a.FX = e);
      0 < d.length && (a.IX = d);
      d = Object.keys(c);
      d.sort();
      for (e = 0; e < d.length; e++) b = d[e], a[b] = c[b];
      this._items = a;
      this._updateRows(a);
      return this
    };
    this.getNotGrouped = function (a) {
      var b = [];
      b[GroupedSymbolList.DEFAULT_GROUPING] = [];
      for (var c in a) a.hasOwnProperty(c) &&
        b[GroupedSymbolList.DEFAULT_GROUPING].push(a[c].getSymbol().getFeedSymbol());
      this._items = b;
      this._updateRows(b);
      return this
    };
    this.getRowBySymbol = function (a) {
      return this._rows[a.getFeedSymbol()]
    };
    this.getSymbolByRow = function (a) {
      return Utils.getKey(this._rows, parseInt(a, 10))
    };
    this._updateRows = function (a) {
      this._rows = [];
      var b = 1,
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          for (var d in a[c]) a[c].hasOwnProperty(d) && (b++ , this._rows[a[c][d]] = b);
          b++
        }
      this._rowCount = b
    };
    this.getRowCount = function () {
      return this._rowCount
    };
    this.getRows = function () {
      return this._rows
    }
  };
  GroupedSymbolList.DEFAULT_GROUPING = "group";
  // #endregion
  // #region SymbolListItem
  this.SymbolListItem = SymbolListItem;
  function SymbolListItem(a, b) {
    this._id = a;
    this._symbol = b;
    this._values = [];
    this._content = [];
    this._style = [];
    this.getStyle = function (a) {
      return this._style[a]
    };
    this.setStyle = function (a, b, e, f) {
      this._style[a] = { color: b, background: e, isBold: f }
    };
    this.setValue = function (a, b, e) {
      this._values[a] = b;
      this._content[a] = e
    };
    this.getValues = function () {
      return this._values
    };
    this.getValue = function (a) {
      return void 0 === this._values[a] ? "" : this._values[a]
    };
    this.getContent = function (a) {
      return this._content[a]
    };
    this.getSymbol = function () {
      return this._symbol
    }
  };
  // #endregion
  // #region SymbolLookup
  this.SymbolLookup = SymbolLookup;
  function SymbolLookup() { }
  SymbolLookup.prototype.lookup = function (a) {
    a = a.split('^')[1] || a;
    return [new Symbol(this.mock(a))];
  };
  SymbolLookup.prototype.mock = function (a) {
    a = a.split('^')[1] || a;
    return {
      class: "Symbol",
      feed_symbol: "L^" + a,
      display_symbol: "LSE:" + a,
      symbol: a,
      name: a,
      market: "L",
      display_market: "LSE",
      type: "DE",
      currency: "GBX",
      order_books: [{
        class: "SymbolMontage",
        currency: "GBX",
        display_market: "LSE",
        display_symbol: "LSE:" + a,
        entitled: true,
        feed_symbol: "L^" + a,
        market: "L",
        symbol: a
      }],
      trade_lists: [{
        class: "SymbolMontage",
        currency: "GBX",
        display_market: "NEX",
        display_symbol: "NEX:" + a + ".GB",
        entitled: true,
        feed_symbol: "NEX^" + a + ".GB",
        market: "NEX",
        symbol: a + ".GB"
      }, {
        class: "SymbolMontage",
        currency: "GBX",
        display_market: "LSE",
        display_symbol: "LSE:" + a,
        entitled: true,
        feed_symbol: "L^" + a,
        market: "L",
        symbol: a
      }],
      day_start_seconds: 28800,
      day_stop_seconds: 59400,
      timezone: "Europe/London",
      delay: 0,
      delay_entitlement: "C",
      weekends: [6, 0],
    };
  };
  // #endregion
  // #region Component
  this.Component = Component;
  function Component(a) {
    this._height = this._width = this._z = this._y = this._x = 0;
    this._child = [];
    this._canvas = void 0;
    this._roundedCorners = 0;
    this._borderSize = 1;
    this._border = Component.BORDER_NONE;
    this._id = void 0 !== a ? a : "comp" + Component._nextID++;
    this._drawBounds = !0;
    this._borderColor = void 0;
    this._visible = this._drawCursor = this._drawCreate = !0;
    this._disabled = !1;
    this._cursor = Component.CURSOR_DEFAULT;
    this._minHeight = this._minWidth = 0
  };
  Component._nextID = 0;
  Component._cursorName = "default move n-resize ne-resize e-resize se-resize s-resize sw-resize w-resize nw-resize nwse-resize nesw-resize ew-resize ns-resize pointer".split(" ");
  Component.BORDER_NONE = 0;
  Component.BORDER_SOLID = 1;
  Component.BORDER_INSET = 2;
  Component.BORDER_BEVEL = 3;
  Component.BORDER_FLOAT = 4;
  Component.CURSOR_DEFAULT = 0;
  Component.CURSOR_MOVE = 1;
  Component.CURSOR_RESIZE_N = 2;
  Component.CURSOR_RESIZE_NE = 3;
  Component.CURSOR_RESIZE_E = 4;
  Component.CURSOR_RESIZE_SE = 5;
  Component.CURSOR_RESIZE_S = 6;
  Component.CURSOR_RESIZE_SW = 7;
  Component.CURSOR_RESIZE_W = 8;
  Component.CURSOR_RESIZE_NW = 9;
  Component.CURSOR_RESIZE_NW_SE = 10;
  Component.CURSOR_RESIZE_NE_SW = 11;
  Component.CURSOR_RESIZE_E_W = 12;
  Component.CURSOR_RESIZE_N_S = 13;
  Component.CURSOR_POINTER = 14;
  Component.COLOR_BACKGROUND = "#EAEAEA";
  Component.prototype.getID = function () {
    return this._id
  };
  Component.prototype.create = function () {
    void 0 !== this._parent && (this._parent._div.append('\x3cdiv id\x3d"' + this._id + '"\x3e\x3c/div\x3e'), this._div = $("#" + this._id), /*this._div.css("position", "absolute"),*/ this._div.onselectstart = function () {
      return !1
    }, this._div.unselectable = "on", this._div.css("box-sizing", "border-box"), this._div.css("user-select", "none"), this._div.css("-o-user-select", "none"), this._div.css("-moz-user-select", "none"), this._div.css("-khtml-user-select", "none"), this._div.css("-webkit-user-select",
      "none"))
  };
  Component.prototype.setBorder = function (a) {
    this._border !== a && (this._drawColors = !0, this._border = a)
  };
  Component.prototype.setBorderSize = function (a) {
    this._borderSize !== a && (this._drawColors = !0, this._borderSize = a)
  };
  Component.prototype.setBorderColor = function (a) {
    this._borderColor !== a && (this._drawColors = !0, this._borderColor = a)
  };
  Component.prototype.setGradient = function (a, b) {
    if (this._gradientTop !== a || this._gradientBottom !== b) this._gradientTop = a, this._gradientBottom = b, this._drawColors = !0
  };
  Component.prototype.draw = function () {
    this._drawCreate && (this.create(), this._drawCreate = !1);
    this._drawCursor && (this._div.css("cursor", Component._cursorName[this._cursor]), this._drawCursor = !1);
    this._drawBounds && (this._drawBounds = !1, this._div.css("left", this._x + "px"), this._div.css("top", this._y + "px"), this._div.css("width", this._width + "px"), this._div.css("height", this._height + "px"), this._div.css("z-index", this._z), this._visible ? this._div.css("display", "block") : this._div.css("display", "none"),
      void 0 !== this._overflow_y && this._div.css("overflow-y", this._overflow_y), void 0 !== this._overflow_x && this._div.css("overflow-x", this._overflow_x), void 0 !== this._overflow && this._div.css("overflow", this._overflow));
    if (this._drawColors) switch (this._drawColors = !1, this._div.css("font-family", this._font), this._div.css("font-size", this._fontSize + "px"), this._div.css("color", this._color), this._div.css("border-radius", this._roundedCorners + "px " + this._roundedCorners + "px"), void 0 === this._gradientTop ? this._div.css("background",
      this._background) : this._div.css("background", "linear-gradient(to bottom,  " + this._gradientTop + " 0%," + this._gradientBottom + " 100%)"), this._border) {
        case Component.BORDER_BEVEL:
          this._div.css("border-top", "2px solid #fff");
          this._div.css("box-shadow", "0px 1px 2px #888");
          break;
        case Component.BORDER_INSET:
          this._div.css("border-bottom", "1px solid #ccc");
          this._div.css("box-shadow", "0px -1px 2px #888");
          break;
        case Component.BORDER_SOLID:
          this._div.css("border", this._borderSize + "px solid " + this._borderColor);
          break;
        case Component.BORDER_FLOAT:
          this._div.css("box-shadow", "0px 4px 20px rgba(0,0,0,0.4)")
      }
  };
  Component.prototype.setFont = function (a) {
    a !== this._font && (this._font = a, this._drawColors = !0)
  };
  Component.prototype.setOverflow = function (a, b) {
    this._drawBounds = !0;
    switch (a) {
      case "y":
        this._overflow_y = b;
        break;
      case "x":
        this._overflow_x = b;
        break;
      default:
        this._overflow = b
    }
  };
  Component.prototype.getParent = function () {
    return this._parent
  };
  Component.prototype.getFont = function () {
    return this._font
  };
  Component.prototype.setFontSize = function (a) {
    a !== this._fontSize && (this._fontSize = a, this._drawColors = !0)
  };
  Component.prototype.getFontSize = function () {
    return this._fontSize
  };
  Component.prototype.refresh = function () {
    this.draw();
    if (this._visible)
      for (var a = 0; a < this._child.length; a++) this._child[a].refresh()
  };
  Component.prototype.add = function (a) {
    a.setParent(this);
    this._child.push(a)
  };
  Component.prototype.remove = function (a) {
    for (var b = 0; b < this._child.length; b++)
      if (this._child[b] === a) {
        void 0 !== a._div && a._div.remove();
        this._child.splice(b, 1);
        break
      }
  };
  Component.prototype.setParent = function (a) {
    this._parent = a;
    this.inheritProperties()
  };
  Component.prototype.inheritProperties = function () {
    void 0 === this._font && (this._font = this._parent._font);
    void 0 === this._fontSize && (this._fontSize = this._parent._fontSize);
    0 === this._z && (this._z = this._parent._z + 1);
    for (var a = 0; a < this._child.length; a++) this._child[a].inheritProperties()
  };
  Component.prototype.setBackground = function (a) {
    this._background !== a && (this._drawColors = !0, this._background = a, this._gradientTop = void 0)
  };
  Component.prototype.setRoundedCorners = function (a) {
    this._roundedCorners !== a && (this._drawColors = !0, this._roundedCorners = a)
  };
  Component.prototype.getRoundedCorners = function () {
    return this._roundedCorners
  };
  Component.prototype.getBackground = function () {
    return this._background
  };
  Component.prototype.setColor = function (a) {
    this._color !== a && (this._drawColors = !0, this._color = a)
  };
  Component.prototype.getColor = function () {
    return this._color
  };
  Component.prototype.rightOf = function (a, b, c, d, e) {
    this.setBounds(a._x + a._width + b, a._y + c, d, e)
  };
  Component.prototype.bottomOf = function (a, b, c, d, e) {
    this.setBounds(a._x + b, a._y + a._height + c, d, e)
  };
  Component.prototype.setMinSize = function (a, b) {
    this._minWidth = a;
    this._minHeight = b
  };
  Component.prototype.setClipping = function (a) {
    a !== this._clipping && (this._drawBounds = this._clipping = !0)
  };
  Component.prototype.setBounds = function (a, b, c, d) {
    a = Math.floor(a);
    b = Math.floor(b);
    c = Math.floor(c);
    d = Math.floor(d);
    c < this._minWidth && (c = this._minWidth);
    d < this._minHeight && (d = this._minHeight);
    return a !== this._x || b !== this._y || c !== this._width || d !== this._height ? (this._x = a, this._y = b, this._width = c, this._height = d, this._drawBounds = !0) : !1
  };
  Component.prototype.setLocation = function (a, b) {
    this.setBounds(a, b, this._width, this._height)
  };
  Component.prototype.setSize = function (a, b) {
    this.setBounds(this._x, this._y, a, b)
  };
  Component.prototype.setX = function (a) {
    this.setBounds(a, this._y, this._width, this._height)
  };
  Component.prototype.setY = function (a) {
    this.setBounds(this._x, a, this._width, this._height)
  };
  Component.prototype.setZ = function (a) {
    this._z !== a && (this._z = a, this._drawBounds = !0)
  };
  Component.prototype.getZ = function () {
    return this._z
  };
  Component.prototype.setWidth = function (a) {
    this.setBounds(this._x, this._y, a, this._height)
  };
  Component.prototype.setHeight = function (a) {
    this.setBounds(this._x, this._y, this._width, a)
  };
  Component.prototype.getX = function () {
    return this._x
  };
  Component.prototype.getY = function () {
    return this._y
  };
  Component.prototype.getOffsetX = function () {
    return $("#" + this._id).offset().left
  };
  Component.prototype.getOffsetY = function () {
    return $("#" + this._id).offset().top
  };
  Component.prototype.getWidth = function () {
    return this._width
  };
  Component.prototype.getHeight = function () {
    return this._height
  };
  Component.prototype.blur = function () {
    this._focus && (this._focus = !1, this._drawBounds = !0)
  };
  Component.prototype.focus = function () {
    this._focus || (this._drawBounds = this._focus = !0)
  };
  Component.prototype.hide = function () {
    this._visible && (this._visible = !1, this._drawBounds = !0)
  };
  Component.prototype.show = function () {
    this._visible || (this._drawBounds = this._visible = !0)
  };
  Component.prototype.isVisible = function () {
    return this._visible
  };
  Component.prototype.getCursor = function () {
    return this._cursor
  };
  Component.prototype.setCursor = function (a) {
    this._cursor !== a && (this._cursor = a, this._drawCursor = !0)
  };
  Component.prototype.handleMouseMove = function (a, b) {
    a -= this._x;
    b -= this._y;
    RootComponent.setMouseIn(this);
    for (var c = 0; c < this._child.length; c++) {
      var d = this._child[c];
      if (a >= d._x && b >= d._y && a < d._x + d._width && b < d._y + d._height && d._visible && d.handleMouseMove(a, b)) return !0
    }
    return this.onMouseMove(a, b)
  };
  Component.prototype.handleMouseDown = function (a, b) {
    a -= this._x;
    b -= this._y;
    for (var c = 0; c < this._child.length; c++) {
      var d = this._child[c];
      if (a >= d._x && b >= d._y && a < d._x + d._width && b < d._y + d._height && d._visible && d.handleMouseDown(a, b)) return !0
    }
    return this.onMouseDown(a, b)
  };
  Component.prototype.handleMouseUp = function (a, b) {
    a -= this._x;
    b -= this._y;
    for (var c = 0; c < this._child.length; c++) {
      var d = this._child[c];
      if (a >= d._x && b >= d._y && a < d._x + d._width && b < d._y + d._height && d._visible && d.handleMouseUp(a, b)) return !0
    }
    return this.onMouseUp(a, b)
  };
  Component.prototype.onMouseDown = function (a, b) {
    return !1
  };
  Component.prototype.onMouseUp = function (a, b) {
    return !1
  };
  Component.prototype.onMouseMove = function (a, b) {
    return !1
  };
  Component.prototype.onCaptureLost = function () {
    return !1
  };
  Component.prototype.onMouseEnter = function () {
    return !1
  };
  Component.prototype.onMouseLeave = function () {
    return !1
  };
  Component.prototype.onMouseOver = function () {
    return !1
  };
  Component.prototype.getChildren = function () {
    return this._child
  };
  Component.prototype._flagCreate = function () {
    this._drawColors = this._drawBounds = !0;
    RootComponent.pushToCreateList(this);
    for (var a = 0; a < this._child.length; a++) this._child[a]._flagCreate()
  };
  Component.prototype.flagCreate = function () {
    this._flagCreate()
  };
  Component.prototype.disable = function () {
    this._disabled = !0
  };
  Component.prototype.enable = function () {
    this._disabled = !1
  };
  // #endregion
  // #region Cell
  this.Cell = Cell;
  function Cell() {
    this._listeners = []
  };
  Cell.prototype.addListener = function (a) {
    this._listeners.push(a)
  };
  Cell._alignments = ["center", "left", "right"];
  Cell.ALIGN_CENTER = 0;
  Cell.ALIGN_LEFT = 1;
  Cell.ALIGN_RIGHT = 2;
  Cell.ALIGN_TOP = 0;
  Cell.ALIGN_MIDDLE = 1;
  Cell.ALIGN_BOTTOM = 2;
  Cell.prototype.setElement = function (a) {
    this._element = a;
    this._element.style.overflow = "hidden"
  };
  Cell.prototype.setClickable = function () {
    this._drawCursor = this._isClickable = !0;
    var a = this;
    this._element.onclick = function () {
      Env && Env.getSession() && Env.getSession()._root._refresh();
      a._handleClick();
    }
  };
  Cell.prototype._handleClick = function () {
    for (var a = 0; a < this._listeners.length; a++) this._listeners[a]._handleCellClick(this)
  };
  Cell.prototype.getCellIndex = function () {
    return "undefined" !== typeof this._element ? this._element.cellIndex : -1
  };
  Cell.prototype.setColspan = function (a) {
    this._colspan !== a && (this._colspan = a, this._changeColspan = !0);
    return !0
  };
  Cell.prototype.setNumber = function (a, b, c, d) {
    var e, f;
    b = isNaN(b = Math.abs(b)) ? 2 : b;
    d = "undefined" === typeof d ? "." : d;
    c = "undefined" === typeof c ? "," : c;
    var g = 0 > a ? "-" : "";
    e = parseInt(a = Math.abs(+a || 0).toFixed(b), 10) + "";
    f = 3 < (f = e.length) ? f % 3 : 0;
    a = g + (f ? e.substr(0, f) + c : "") + e.substr(f).replace(/(\d{3})(?=\d)/g, "$1" + c) + (b ? d + Math.abs(a - e).toFixed(b).slice(2) : "");
    this.setContent(a)
  };
  Cell.prototype.remove = function () {
    this._getParent().removeChild(this._element)
  };
  Cell.prototype.removeParent = function () {
    var a = this._getParent();
    if (a.parentNode) a.parentNode.removeChild(a)
  };
  Cell.prototype.hideParent = function () {
    this._hideParent = !0
  };
  Cell.prototype._getParent = function () {
    return this._element.parentNode
  };
  Cell.prototype.setContent = function (a) {
    return this._content !== a ? (this._content = a, this._dirtyContent = !0) : !1
  };
  Cell.prototype.setBackgroundImage = function (a, b, c) {
    this._backgroundUrl !== a && (this._backgroundUrl = a, this._drawBackgroundImage = !0);
    this._backgroundRepeat !== b && (this._backgroundRepeat = b, this._drawBackgroundImage = !0);
    this._backgroundPosition !== c && (this._backgroundPosition = c, this._drawBackgroundImage = !0);
    this._drawBackgroundImage && (this._dirtyColors = !0)
  };
  Cell.prototype.setWidth = function (a) {
    this._width !== a && (this._width = a, this._dirtyDimensions = !0)
  };
  Cell.prototype.setHeight = function (a) {
    this._height !== a && (this._height = a, this._dirtyDimensions = !0)
  };
  Cell.prototype.setPaddingTop = function (a) {
    this._paddingTop !== a && (this._paddingTop = a, this._dirtyCss = !0)
  };
  Cell.prototype.setPaddingRight = function (a) {
    this._paddingRight !== a && (this._paddingRight = a, this._dirtyCss = !0)
  };
  Cell.prototype.setPaddingBottom = function (a) {
    this._paddingBottom !== a && (this._paddingBottom = a, this._dirtyCss = !0)
  };
  Cell.prototype.setPaddingLeft = function (a) {
    this._paddingLeft !== a && (this._paddingLeft = a, this._dirtyCss = !0)
  };
  Cell.prototype.setBackground = function (a) {
    return this._background !== a ? (this._background = a, this._dirtyColors = !0) : !1
  };
  Cell.STARTING_BACKGROUND = 1;
  Cell.prototype.setStartingBackground = function (a) {
    return this._startingBackground !== a ? (this._startingBackground = a, !0) : !1
  };
  Cell.prototype.getStartingBackground = function () {
    return this._startingBackground
  };
  Cell.prototype.setColor = function (a) {
    return this._color !== a ? (this._startingColor = this._color = a, this._dirtyColors = !0) : !1
  };
  Cell.prototype.setAlign = function (a) {
    a = Cell._alignments[a];
    return this._align !== a ? (this._align = a, this._dirtyCss = !0) : !1
  };
  Cell.prototype.setBold = function (a) {
    return this._bold !== a ? (this._bold = a, this._dirtyColors = !0) : !1
  };
  Cell.prototype.setFontSize = function (a) {
    return this.fontSize !== a ? (this._fontSize = a, this._dirtyCss = !0) : !1
  };
  Cell.prototype.setBorder = function (a, b, c, d) {
    this._borderTop !== a && (this._borderTop = a, this._drawBorders = !0);
    this._borderRight !== b && (this._borderRight = b, this._drawBorders = !0);
    this._borderBottom !== c && (this._borderBottom = c, this._drawBorders = !0);
    this._borderLeft !== d && (this._borderLeft = d, this._drawBorders = !0)
  };
  Cell.prototype.setTitle = function (a) {
    this._title !== a && (this._title = a, this._drawTitle = !0)
  };
  Cell.prototype.setVerticalAlign = function (a) {
    switch (a) {
      case Cell.ALIGN_TOP:
        this._verticalAlign = "top";
        break;
      case Cell.ALIGN_MIDDLE:
        this._verticalAlign = "middle";
        break;
      case Cell.ALIGN_BOTTOM:
        this._verticalAlign = "bottom";
        break;
      default:
        this._verticalAlign = "middle"
    }
    return this._dirtyCss = !0
  };
  Cell.prototype.draw = function () {
    var a = !1;
    this._dirtyContent && (a = !0, this._element.innerHTML = this._content, this._dirtyContent = !1);
    this._drawTitle && (void 0 !== this._title && (a = !0, "" === this._title.trim() ? this._element.removeAttribute("title") : this._element.title = this._title), this._drawTitle = !1);
    this._dirtyColors && (a = !0, this._element.style.background = this._background, this._element.style.color = this._color, this._element.style.fontWeight = this._bold ? "bold" : "normal", this._drawBackgroundImage && (this._element.style.backgroundImage = "url('" + this._backgroundUrl + "')", this._element.style.backgroundRepeat = this._backgroundRepeat, this._element.style.backgroundPosition = this._backgroundPosition, this._drawBackgroundImage = !1), this._dirtyColors = !1);
    this._dirtyDimensions && (a = !0, this._element.style.width = this._width + "px", this._element.style.maxWidth = this._width + "px", this._element.style.height = this._height + "px", this._dirtyDimensions = !1);
    this._dirtyCss && (a = !0, this._element.style.paddingTop = this._paddingTop + "px", this._element.style.paddingRight = this._paddingRight + "px", this._element.style.paddingBottom = this._paddingBottom + "px", this._element.style.paddingLeft = this._paddingLeft + "px", this._element.style.textAlign = this._align, this._element.style.fontSize = this._fontSize + "px", this._element.style.fontFamily = "helvetica, sans-serif", this._element.style.whiteSpace = "nowrap", this._element.style.verticalAlign = this._verticalAlign, this._textOverflowEllipsis && (this._element.style.textOverflow = "ellipsis"), this._boxSizing && (this._element.style.boxSizing = "border-box", this._element.style.minWidth = this._width + "px"), this._dirtyCss = !1);
    this._drawBorders && (a = !0, this._element.style.borderTop = this._borderTop, this._element.style.borderRight = this._borderRight, this._element.style.borderBottom = this._borderBottom, this._element.style.borderLeft = this._borderLeft, this._drawBorders = !1);
    this._drawCursor && (a = !0, this._isClickable && (this._element.style.cursor = "pointer"), this._drawCursor = !1);
    this._hideParent && (a = !0, this._getParent().style.display = "none", this._hideParent = !1);
    this._changeColspan && (a = !0, this._element.colSpan = this._colspan);
    return a
  };
  Cell.prototype.setTextOverflowEllipsis = function (a) {
    this._textOverflowEllipsis = a
  };
  Cell.prototype.setBoxSizing = function (a) {
    this._boxSizing = a
  };
  // #endregion
  // #region Grid
  this.Grid = Grid;
  function Grid(a, b, c) {
    Component.call(this, c);
    this._numRows = a;
    this._numColumns = b;
    this._columnWidth = [];
    this._columnAlign = [];
    this._cell = [];
    for (c = 0; c < a; c++) {
      this._cell[c] = [];
      for (var d = 0; d < b; d++) this._cell[c][d] = new Cell
    }
    this._topPadding = 0;
    this._rightPadding = 3;
    this._bottomPadding = 0;
    this._leftPadding = 3;
    this._cellSpacing = 0;
    this._drawColumns = !0;
    this._overflow = !1;
    this._clickableCells = []
  };
  Grid.prototype = Object.create(Component.prototype);
  Grid.prototype.constructor = Grid;
  Grid.ALIGN_CENTER = 0;
  Grid.ALIGN_LEFT = 1;
  Grid.ALIGN_RIGHT = 2;
  Grid.prototype.setBorders = function (a) {
    this._borders !== a && (this._borders = a, this._drawCells = !0)
  };
  Grid.prototype.setBordersColor = function (a) {
    this._bordersColor !== a && (this._bordersColor = a, this._drawCells = !0)
  };
  Grid.prototype.draw = function () {
    Component.prototype.draw.call(this);
    if (this._drawTable) {
      for (var a = Math.floor(this._height / this._numRows), b = this._height % this._numRows / this._numRows, c = 0, d = 0; d < this._numRows; d++) {
        var e, c = c + b;
        1 <= c ? (e = a + 1, c--) : e = a;
        for (var f = 0; f < this._numColumns; f++) {
          var g = this._cell[d][f];
          void 0 !== this._columnWidth[f] && g.setWidth(this._columnWidth[f]);
          g.setHeight(e)
        }
      }
      this._table = $("#" + this._tableID);
      this._overflow && (this._width -= Utils.getScrollbarWidth());
      this._table.css("width", "100%");
      this._table.css("height", this._height + "px");
      this._drawTable = !1
    }
    if (this._drawColumns) {
      for (d = 0; d < this._numRows; d++)
        for (f = 0; f < this._numColumns; f++) g = this._cell[d][f], void 0 !== this._columnWidth[f] && g.setWidth(this._columnWidth[f]), void 0 !== this._columnAlign[f] && g.setAlign(this._columnAlign[f]), g.setPaddingTop(this._topPadding), g.setPaddingRight(this._rightPadding), g.setPaddingBottom(this._bottomPadding), g.setPaddingLeft(this._leftPadding);
      this._drawColumns = !1
    }
    if (this._drawCells) {
      a = !1;
      for (b = 0; b <
        this._numRows; b++)
        for (c = 0; c < this._numColumns; c++) this._cell[b][c].draw() && (a = !0);
      this._drawCells = a
    }
    if (this._drawCellHeight) {
      for (d = 0; d < this._numRows; d++)
        for (f = 0; f < this._numColumns; f++) g = this._cell[d][f], g.setHeight(this._cellHeight);
      this._drawCellHeight = !1
    }
  };
  Grid.prototype.setBounds = function (a, b, c, d) {
    return Component.prototype.setBounds.call(this, a, b, c, d) ? this._drawTable = !0 : !1
  };
  Grid.prototype.setCellSpacing = function (a) {
    this._cellSpacing = a
  };
  Grid.prototype.setMaxHeight = function (a) {
    this._table.css("max-height", a + "px")
  };
  Grid.prototype.setAutoHeight = function () {
    this._table.css("height", "auto")
  };
  Grid.prototype.setWidth = function (a) {
    this._table.css("height", "auto")
  };
  Grid.prototype.create = function () {
    Component.prototype.create.call(this);
    this._tableID = this._id + "_table";
    var a = '\x3ctable id\x3d"' + this._tableID + '" cellspacing\x3d"' + this._cellSpacing + '" cellpadding\x3d"0"\x3e',
      b, c;
    for (b = 0; b < this._numRows; b++) {
      a += "\x3ctr\x3e";
      for (c = 0; c < this._numColumns; c++) a += "\x3ctd\x3e\x3c/td\x3e";
      a += "\x3c/tr\x3e"
    }
    this._div.append(a + "\x3c/table\x3e");
    this._table = $("#" + this._tableID);
    a = this._table.get(0);
    for (b = 0; b < this._numRows; b++) {
      var d = a.rows[b];
      for (c = 0; c < this._numColumns; c++) {
        var e = this._cell[b][c];
        void 0 !== d && e.setElement(d.cells[c])
      }
    }
    for (var f in this._clickableCells)
      if (this._clickableCells.hasOwnProperty(f))
        for (var g in this._clickableCells[f]) this._clickableCells[f].hasOwnProperty(g) && this.getCell(parseInt(f, 10), this._clickableCells[f][g]).setClickable()
  };
  Grid.prototype.setClickableCell = function (a, b) {
    void 0 === this._clickableCells[a] && (this._clickableCells[a] = []);
    this._clickableCells[a].push(b)
  };
  Grid.prototype.getTable = function () {
    return this._table
  };
  Grid.prototype.setPadding = function (a, b) {
    this._leftPadding = a;
    this._rightPadding = b;
    this._drawColumns = !0
  };
  Grid.prototype.setFullPadding = function (a, b, c, d) {
    this._topPadding = a;
    this._rightPadding = b;
    this._bottomPadding = c;
    this._leftPadding = d;
    this._drawColumns = !0
  };
  Grid.prototype.setColumnWidth = function (a, b) {
    this._columnWidth[a] = b;
    this._drawColumns = !0
  };
  Grid.prototype.getColumnWidth = function (a) {
    return this._columnWidth[a]
  };
  Grid.prototype.setColumnAlign = function (a, b) {
    this._columnAlign[a] = b;
    this._drawColumns = !0
  };
  Grid.prototype.getCell = function (a, b) {
    var c = this._cell[a][b];
    this._drawCells = !0;
    return c
  };
  Grid.prototype.setCell = function (a, b, c) {
    this._cell[a][b].setContent(c) && (this._drawCells = !0)
  };
  Grid.prototype.setCellBackground = function (a, b, c) {
    this._cell[a][b].setBackground(c) && (this._drawCells = !0)
  };
  Grid.prototype.setCellColor = function (a, b, c) {
    this._cell[a][b].setColor(c) && (this._drawCells = !0)
  };
  Grid.prototype.setCellFontSize = function (a, b, c, d) {
    this._cell[a][b].setFontSize(c) && (this._drawCells = !0);
    void 0 !== d && this._cell[a][b].setBold(d) && (this._drawCells = !0)
  };
  Grid.prototype.removeCell = function (a, b) {
    this._cell[a][b].remove()
  };
  Grid.prototype.removeRow = function (a) {
    void 0 !== this._cell[a] && (this._cell[a][0].removeParent(), this._numRows--);
    this._fixCellsAfterRemove(a)
  };
  Grid.prototype._fixCellsAfterRemove = function (a) {
    var b = [],
      c = 0,
      d;
    for (d in this._cell)
      if (this._cell.hasOwnProperty(d) && parseInt(d, 10) !== a) {
        b[c] = [];
        for (var e in this._cell[d]) this._cell[d].hasOwnProperty(e) && (b[c].push(e), b[c][e] = this._cell[d][e]);
        c++
      }
    this._cell = b
  };
  Grid.prototype.setTableOverflow = function (a) {
    this._overflow !== a && (this._overflow = a, this.drawTable = !0)
  };
  Grid.prototype.setCellsHeight = function (a) {
    this._cellHeight !== a && (this._cellHeight = a, this._drawCellHeight = !0)
  };
  Grid.prototype.getNumberRows = function () {
    return this._numRows
  };
  Grid.prototype.getNumberColumns = function () {
    return this._numColumns
  };
  // #endregion
  // #region Table
  this.Table = Table;
  function Table(a) {
    Component.call(this, a);
    this._maxHeight = this._minHeight = this._maxWidth = this._minWidth = this._height = this._width = this._maxRows = 0;
    this._colWidths = [];
    this._colAlignments = [];
    this._rows = [];
    this._headers = [];
    this._headersStyle = "";
    this._direction = "top";
    this._rowHeight = 20;
    this._TBody = this._THead = this._Table = void 0;
    this._drawRows = this._drawHeaders = this._drawColumns = this._drawCells = this._drawTable = !1
  };
  Table.prototype = Object.create(Component.prototype);
  Table.prototype.constructor = Table;
  Table.CELL_ALIGN_CENTER = 0;
  Table.CELL_ALIGN_LEFT = 1;
  Table.CELL_ALIGN_RIGHT = 2;
  Table.prototype.create = function () {
    Component.prototype.create.call(this);
    this._tableId = this._id + "_table";
    this._tHeadId = this._id + "_thead";
    this._tBodyId = this._id + "_tbody";
    var a = '\x3ctable cellspacing\x3d"0" cellpadding\x3d"0" style\x3d"border-spacing: 1px 0px;" id\x3d"' + this._tableId + '"\x3e',
      a = a + ('\x3cthead id\x3d"' + this._tHeadId + '"\x3e\x3c/thead\x3e'),
      a = a + ('\x3ctbody id\x3d"' + this._tBodyId + '"\x3e\x3c/tbody\x3e');
    this._div.append(a + "\x3c/table\x3e");
    this._Table = $("#" + this._tableId);
    this._THead = $("#" + this._tHeadId);
    this._TBody = $("#" + this._tBodyId);
    this._drawTable = !0
  };
  Table.prototype.draw = function () {
    Component.prototype.draw.call(this);
    this._drawTable && (this._Table.css("width", this._width), this._Table.css("height", this._height), this._drawTable = !1);
    if (this._drawHeaders) {
      for (var a = "", b = 0; b < this._headers.length; b++) a += '\x3cth style\x3d"' + this._headersStyle + ";text-align:" + this._colAlignments[b] + ";height:" + this._rowHeight + 'px;"\x3e' + this._headers[b] + "\x3c/th\x3e";
      this._THead.html(a);
      this._drawHeaders = !1
    }
    this._drawRows && (this._drawRows = !1)
  };
  Table.prototype.getRowHeight = function () {
    return this._rowHeight
  };
  Table.prototype.getHeight = function () {
    return this._rows.length * this._rowHeight
  };
  Table.prototype.setRowHeight = function (a) {
    this._rowHeight = a
  };
  Table.prototype.setHeadersStyle = function (a) {
    this._headersStyle !== a && (this._headersStyle = a, this._drawHeaders = !0)
  };
  Table.prototype.setBounds = function (a, b, c, d) {
    return Component.prototype.setBounds.call(this, a, b, c, d) ? this._drawTable = !0 : !1
  };
  Table.prototype.setHeaders = function (a) {
    this._headers = a;
    this._numCols = a.length;
    this._drawHeaders = !0
  };
  Table.prototype.setColsWidths = function (a, b) {
    if (b) {
      if (100 !== Utils.sumArray(a)) throw Error("Incorrect percentages amount for the columns, it sums to " + Utils.sumArray(a));
      for (var c = 0; c < a.length; c++) {
        var d = Math.floor(this._width * a[c] / 100);
        this.setColWidth(c, d)
      }
      this.setColWidth(this._colWidths.length - 1, this._colWidths[this._colWidths.length - 1] + (this._width - Math.floor(d)))
    } else this._colWidths = a, this._drawCells = !0
  };
  Table.prototype.setColWidth = function (a, b) {
    this._colWidths[a] = b;
    this._drawCells = !0
  };
  Table.prototype.setColsAlignments = function (a) {
    if (a.length !== this._numCols) throw Error("Wrong amount of column alignments provided: " + a.length + ", needed: " + this._numCols);
    this._colAlignments = a;
    this._drawColumns = !0
  };
  Table.prototype.setColAlignment = function (a, b) {
    this._colAlignments[a] = b;
    this._drawColumns = !0
  };
  Table.prototype.setMaxRows = function (a) {
    this._maxRows !== a && (this._maxRows = a)
  };
  Table.prototype.getMaxRows = function () {
    return this._maxRows
  };
  Table.prototype._removeExtraRows = function () {
    this._rows.length >= this._maxRows && this.removeRow(this._maxRows - 1)
  };
  Table.prototype.getCellsByRow = function (a) {
    if (void 0 !== this._rows[a]) return this._rows[a].CELLS;
    throw Error("Row " + a + " does not exist.");
  };
  Table.prototype.updateRow = function (a, b) {
    var c = this.getCellsByRow(a);
    if (c.length !== b.length) throw Error("Content length (" + b.length + ") does not match the amount of columns for a row (" + c.length + ").");
    for (var d = 0; d < c.length; d++) c[d].setContent(b[d]);
    this._fixTableHeight()
  };
  Table.prototype.addRow = function (a) {
    if (this._rows.length < this._maxRows) {
      for (var b = [], c = this._rows.length, d = 0; d < a.length; d++) {
        var e = new TableCell(this, c, d);
        e.setContent(a[d]);
        b.push(e)
      }
      c = this._id + "_row_" + this._rows.length;
      a = '\n\x3ctr style\x3d"height: ' + this._rowHeight + 'px;" id\x3d"' + c + '"\x3e';
      for (d = 0; d < b.length; d++) a += '\t\n\x3ctd style\x3d"text-align:' + this._colAlignments[d] + ";overflow: hidden;border-bottom: 1px solid #CCC; padding: 0 2px; font-size: 12px; height:" + this._rowHeight + 'px;" id\x3d"' + b[d].getId() + '"\x3e', a += b[d].getContent() + "\x3c/td\x3e";
      a += "\n\x3c/tr\x3e";
      b = { ID: c, CELLS: b };
      switch (this._direction) {
        case "top":
          this._rows.unshift(b);
          this._TBody.prepend(a);
          break;
        case "bottom":
          this._rows.push(b), this._TBody.append(a)
      }
      for (d = 0; d < b.CELLS.length; d++) b.CELLS[d].setUpElement()
    }
    this._fixTableHeight()
  };
  Table.prototype.addEmptyRow = function () {
    if (this._rows.length < this._maxRows) {
      for (var a = [], b = this._rows.length, c = 0; c < this._numCols; c++) {
        var d = new TableCell(this, b, c);
        d.setContent("");
        a.push(d)
      }
      d = this._id + "_row_" + this._rows.length;
      b = '\n\x3ctr style\x3d"height: ' + this._rowHeight + 'px;" id\x3d"' + d + '"\x3e';
      for (c = 0; c < a.length; c++) b += '\t\n\x3ctd style\x3d"text-align:' + this._colAlignments[c] + "; border-bottom: 1px solid #CCC; padding: 0 2px; font-size: 12px; height:" + this._rowHeight + 'px; box-sizing:border-box;" id\x3d"' + a[c].getId() + '"\x3e\x3c/td\x3e';
      b += "\n\x3c/tr\x3e";
      a = { ID: d, CELLS: a };
      switch (this._direction) {
        case "top":
          this._rows.unshift(a);
          this._TBody.prepend(b);
          break;
        case "bottom":
          this._rows.push(a), this._TBody.append(b)
      }
      for (c = 0; c < a.CELLS.length; c++) a.CELLS[c].setUpElement()
    }
    this._fixTableHeight()
  };
  Table.prototype._fixTableHeight = function () {
    this.setHeight(this._rows.length * this._rowHeight);
    this._drawTable = !0
  };
  Table.prototype.getRowById = function (a) {
    for (var b = 0; b < this._rows.length; b++)
      if (this._rows[b].getId() === a) return this._rows[b];
    return null
  };
  Table.prototype.getRow = function (a) {
    return this._rows[a]
  };
  Table.prototype.removeRow = function (a) {
    var b = {
      rowID: void 0
    },
      b = this._rows[a];
    $("#" + b.rowID).remove();
    this._rows.splice(a, 1);
    this._drawRows = !0
  };
  Table.prototype.setMinWidth = function (a) {
    this._minWidth !== a && (this._minWidth = a, this._drawTable = !0)
  };
  Table.prototype.setMaxWidth = function (a) {
    this._maxWidth !== a && (this._maxWidth = a, this._drawTable = !0)
  };
  Table.prototype.setMinHeight = function (a) {
    this._minHeight !== a && (this._minHeight = a, this._drawTable = !0)
  };
  Table.prototype.setMaxHeight = function (a) {
    this._maxHeight !== a && (this._maxHeight = a, this._drawTable = !0)
  };
  Table.prototype.maxReached = function () {
    return this._rows.length === this._maxRows
  };
  Table.prototype.setRowBackground = function (a, b) {
    for (var c = this.getCellsByRow(a), d = 0; d < c.length; d++) c[d].setBackground(b)
  };
  Table.prototype.getRowBackground = function (a) {
    return this.getCellsByRow(a)[0].getBackground()
  };
  Table.prototype.setRowColor = function (a, b) {
    for (var c = this.getCellsByRow(a), d = 0; d < c.length; d++) c[d].setColor(b)
  };
  Table.prototype.getCellContent = function (a, b) {
    return this.getCellsByRow(a)[b].getContent()
  };
  Table.prototype.getNumRows = function () {
    return this._rows.length
  };
  Table.prototype.getTableHeight = function () {
    return void 0 !== this._Table ? this._Table.height() : 0
  };
  Table.prototype.clear = function () {
    this._rows = [];
    this._TBody.html("")
  };
  Table.prototype.getTBody = function () {
    return this._TBody
  };
  // #endregion
  // #region TableCell
  this.TableCell = TableCell;
  function TableCell(a, b, c) {
    this._id = a.getID() + "_" + b + "_" + c;
    this._parent = a;
    this._row = b;
    this._column = c;
    this._fontStyle = this._borderStyle = "";
    this._height = this._width = "auto";
    this._color = "#000000";
    this._background = "none";
    this._textAlign = "left";
    this._verticalAlign = "middle";
    this._content = "";
    this._drawContent = this._drawAlignments = this._drawColors = this._drawDimensions = this._drawFont = this._drawBorders = !1
  };
  TableCell.ALIGN_CENTER = "center";
  TableCell.ALIGN_LEFT = "left";
  TableCell.ALIGN_RIGHT = "right";
  TableCell.ALIGN_TOP = "top";
  TableCell.ALIGN_MIDDLE = "middle";
  TableCell.ALIGN_BOTTOM = "bottom";
  TableCell.prototype.setUpElement = function () {
    this._element = $("#" + this._id)
  };
  TableCell.prototype.draw = function () {
    this._drawBorders && (this._element.css("border", this._borderStyle), this._drawBorders = !1);
    this._drawFont && (this._element.css("font", this._fontStyle), this._drawFont = !1);
    this._drawDimensions && (this._element.css("width", this._width), this._element.css("height", this._height), this._drawDimensions = !1);
    this._drawColors && (this._element.css("color", this._color), this._element.css("background", this._background), this._drawColors = !1);
    this._drawAlignments && (this._element.css("text-align",
      this._textAlign), this._element.css("vertical-align", this._verticalAlign), this._drawAlignments = !1);
    this._drawContent && (this._element.html(this._content), this._drawContent = !1)
  };
  TableCell.prototype.getId = function () {
    return this._id
  };
  TableCell.prototype.getRow = function () {
    return this._row
  };
  TableCell.prototype.setRow = function (a) {
    this._row = a
  };
  TableCell.prototype.getColumn = function () {
    return this._column
  };
  TableCell.prototype.setColumn = function (a) {
    this._column = a
  };
  TableCell.prototype.setColor = function (a) {
    this._color !== a && (this._color = a, this._drawColors = !0, this.draw())
  };
  TableCell.prototype.setBackground = function (a) {
    this._background !== a && (this._background = a, this._drawColors = !0, this.draw())
  };
  TableCell.prototype.setWidth = function (a) {
    isNaN(a) ? this._width = a : this._width = a + "px";
    this._drawDimensions = !0;
    this.draw()
  };
  TableCell.prototype.setHeight = function (a) {
    isNaN(a) ? this._height = a : this._height = a + "px";
    this._drawDimensions = !0;
    this.draw()
  };
  TableCell.prototype.setTextAlign = function (a) {
    this._textAlign !== a && (this._textAlign = a, this._element.css("text-align", this._textAlign))
  };
  TableCell.prototype.setVerticalAlign = function (a) {
    this._verticalAlign !== a && (this._verticalAlign = a, this._element.css("vertical-align", this._verticalAlign))
  };
  TableCell.prototype.setBorderStyle = function (a) {
    this._borderStyle !== a && (this._borderStyle = a, this._drawBorders = !0, this.draw())
  };
  TableCell.prototype.setFontStyle = function (a) {
    this._fontStyle !== a && (this._fontStyle = a, this._drawFont = !0, this.draw())
  };
  TableCell.prototype.setContent = function (a) {
    this._content !== a && (this._content = a, this._drawContent = !0, this.draw())
  };
  TableCell.prototype.getContent = function () {
    return this._content
  };
  TableCell.prototype.getBackground = function () {
    return this._background
  };
  // #endregion
  // #region RootComponent
  this.RootComponent = RootComponent;
  function RootComponent(a) {
    Component.call(this, a);
    this._div = $("#" + this._id);
    this._divs = [this._div];
    ///for (a = 0; a < this._divs.length; a++)
    ///  $(this._divs[a]).css("position", "absolute");
    ///this._div.css("position", "relative");
    this._div.css("width", "100%");
    this._div.css("height", "100%");
  };
  var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
    window.setTimeout(a, 1E3 / 60)
  };
  RootComponent.prototype = Object.create(Component.prototype);
  RootComponent.prototype.constructor = RootComponent;
  RootComponent._timestamp = Date.now();
  RootComponent._mouseIn = {};
  RootComponent._createList = [];
  RootComponent.CONTAINER_ID = "jsToolRoot";
  RootComponent.pushToCreateList = function (a) {
    RootComponent._createList.push(a)
  };
  RootComponent.setMouseIn = function (a) {
    RootComponent._mouseIn[a._id] = a
  };
  RootComponent.getTimestamp = function () {
    return RootComponent._timestamp
  };
  RootComponent.setTimestamp = function (a) {
    RootComponent._timestamp = a
  };
  RootComponent.captureMouse = function (a) {
    if (void 0 !== RootComponent._captureMouse) RootComponent._captureMouse.onCaptureLost();
    RootComponent._captureMouse = a
  };
  RootComponent.releaseMouse = function (a) {
    a === RootComponent._captureMouse && (RootComponent._captureMouse.onCaptureLost(), RootComponent._captureMouse = void 0)
  };
  RootComponent.setMinHeight = function (a) {
    $("#" + RootComponent.CONTAINER_ID).css("min-height", a + "px")
  };
  RootComponent.prototype.start = function () {
    var a = this,
      b = $("#" + RootComponent.CONTAINER_ID);
    RootComponent.OFFSET_TOP = b.offset().top;
    RootComponent.OFFSET_LEFT = b.offset().left;
    b.mousemove(function (c) {
      var d = c.pageX - b.offset().left;
      c = c.pageY - b.offset().top;
      a._eventMouseMove(d, c)
    });
    b.mousedown(function (c) {
      var d = c.pageX - b.offset().left;
      c = c.pageY - b.offset().top;
      a._eventMouseDown(d, c)
    });
    b.mouseup(function (c) {
      var d = c.pageX - b.offset().left;
      c = c.pageY - b.offset().top;
      a._eventMouseUp(d, c)
    });
    b.on("tap", function (c) {
      var d = c.pageX - b.offset().left;
      c = c.pageY - b.offset().top;
      a._eventMouseDown(d, c);
      a._eventMouseUp(d, c)
    });
    a._refresh()
  };
  RootComponent.prototype.stop = function () { };
  RootComponent.prototype.getWidth = function () {
    return parseInt($("#" + this._id).width(), 10)
  };
  RootComponent.prototype.setWidth = function (a) {
    $("#" + this._id).width(a)
  };
  RootComponent.prototype.getHeight = function () {
    return parseInt($("#" + this._id).height(), 10)
  };
  RootComponent.prototype.setHeight = function (a) {
    $("#" + this._id).height(a)
  };
  RootComponent.prototype.setBounds = function () { };
  RootComponent.prototype.draw = function () {
    this._drawBounds = !1;
    Component.prototype.draw.call(this)
  };
  RootComponent.prototype.add = function (a) {
    a.setParent(this);
    this._child.push(a);
    a.flagCreate()
  };
  RootComponent.prototype._refresh = function () {
    RootComponent._timestamp = Date.now();
    Clock.update(RootComponent._timestamp);
    this.refresh();
    var a = this;
    ///requestAnimFrame(function() { a._refresh() })
  };
  RootComponent.prototype._eventMouseMove = function (a, b) {
    if (void 0 !== RootComponent._captureMouse) {
      var c = this._getOffset(RootComponent._captureMouse);
      if (RootComponent._captureMouse.onMouseMove(a - c[0], b - c[1])) return RootComponent._captureMouse
    }
    c = RootComponent._mouseIn;
    RootComponent._mouseIn = {};
    var d = Component.prototype.handleMouseMove.call(this, a, b),
      e;
    for (e in RootComponent._mouseIn)
      if (RootComponent._mouseIn.hasOwnProperty(e)) {
        var f = RootComponent._mouseIn[e];
        if (!c.hasOwnProperty(e)) f.onMouseEnter()
      }
    for (e in c)
      if (c.hasOwnProperty(e) &&
        (f = c[e], !RootComponent._mouseIn.hasOwnProperty(e))) f.onMouseLeave();
    return d
  };
  RootComponent.prototype._eventMouseDown = function (a, b) {
    if (void 0 !== RootComponent._captureMouse) {
      var c = this._getOffset(RootComponent._captureMouse);
      if (RootComponent._captureMouse.onMouseDown(a - c[0], b - c[1])) return RootComponent._captureMouse
    }
    return Component.prototype.handleMouseDown.call(this, a, b)
  };
  RootComponent.prototype._eventMouseUp = function (a, b) {
    if (void 0 !== RootComponent._captureMouse) {
      var c = this._getOffset(RootComponent._captureMouse);
      if (RootComponent._captureMouse.onMouseUp(a - c[0], b - c[1])) return RootComponent._captureMouse
    }
    return Component.prototype.handleMouseUp.call(this, a, b)
  };
  RootComponent.prototype._getOffset = function (a) {
    for (var b = a = 0, c = RootComponent._captureMouse; void 0 !== c;) a += c._x, b += c._y, c = c._parent;
    return [a, b]
  };
  // #endregion
  // #region Clock
  var Clock = {
    TIMESTAMP: 0,
    SUBSCRIBERS: [],
    SUBSCRIBERS_MINUTE: [],
    SUBSCRIBERS_TEN_MINUTES: [],
    LOOP_SECONDS: 1E3,
    LOOP_MINUTE: 6E4,
    LOOP_TEN_MINUTES: 6E5,
    _lastTime: 0,
    _lastTimeMin: 0,
    _lastTimeTenMins: 0,
    update: function (a) {
      Clock.TIMESTAMP = a;
      if (a - Clock._lastTime > Clock.LOOP_SECONDS) {
        for (var b = 0; b < Clock.SUBSCRIBERS.length; b++) Clock.SUBSCRIBERS[b]._handleClockSeconds(a);
        Clock._lastTime = a
      }
      if (a - Clock._lastTimeMin > Clock.LOOP_MINUTE) {
        for (b = 0; b < Clock.SUBSCRIBERS_MINUTE.length; b++) Clock.SUBSCRIBERS_MINUTE[b]._handleClockMinute(a);
        Clock._lastTimeMin = a
      }
      if (a - Clock._lastTimeTenMins > Clock.LOOP_TEN_MINUTES) {
        for (b = 0; b < Clock.SUBSCRIBERS_TEN_MINUTES.length; b++) Clock.SUBSCRIBERS_TEN_MINUTES[b]._handleClockTenMinutes(a);
        Clock._lastTimeTenMins = a
      }
    },
    subscribe: function (a) {
      Clock.SUBSCRIBERS.push(a)
    },
    subscribeMinute: function (a) {
      Clock.SUBSCRIBERS_MINUTE.push(a)
    },
    subscribeTenMinutes: function (a) {
      Clock.SUBSCRIBERS_TEN_MINUTES.push(a)
    }
  };
  // #endregion
  // #region GroupComponent
  this.GroupComponent = GroupComponent;
  function GroupComponent(a) {
    Component.call(this, a);
    this.setBackground("none");
    this._components = []
  };
  GroupComponent.prototype = Object.create(Component.prototype);
  GroupComponent.prototype.constructor = GroupComponent;
  GroupComponent.prototype.create = function () {
    Component.prototype.create.call(this);
    this._div.css("width", "100%");
    this._div.css("height", "100%")
  };
  GroupComponent.prototype.addComponent = function (a) {
    this.add(a);
    a.setZ(this._child.length - 1);
    this._components[a._id] = !0
  };
  GroupComponent.prototype.removeComponent = function (a) {
    void 0 !== a && (delete this._components[a._id], this.remove(a))
  };
  // #endregion
  // #region GroupedGrid
  this.GroupedGrid = GroupedGrid;
  function GroupedGrid(a) {
    Component.call(this, a);
    this._grid = new Grid(0, 0, this._id + "_grid");
    this.add(this._grid);
    this._rowHeight = 20;
    this._oddBackground = Color.ODD;
    this._oddColor = "black";
    this._evenBackground = Color.EVEN;
    this._evenColor = "black";
    this._headingBackground = "darkblue";
    this._headingColor = "white";
    this._subheadingBackground = "darkgreen";
    this._subheadingColor = "white";
    this._bordersStyle = ["1px solid black", "1px solid black", "1px solid black", "1px solid black"];
    this._titleColumns = [];
    this._headings = [];
    this._subheadingRows = [];
    this._symbolsList = new SymbolList;
    this._cellContents = [];
    this._columnOverflowEllipsis = [];
    this._subheadingGroups = [];
    this._rowsSubheadings = [];
    this._drawRowColors = !0;
    this._centeredHeadings = this._drawColumns = !1;
    this._headersPaddingRight = 0;
  };
  GroupedGrid.prototype = Object.create(Component.prototype);
  GroupedGrid.prototype.constructor = GroupedGrid;
  GroupedGrid.prototype.removeRow = function (a) {
    this._grid.removeRow(a);
    var b = this._rowsSubheadings[a],
      c = this._subheadingGroups[b].indexOf(a);
    this._subheadingGroups[b].splice(c, 1);
    this._rowsSubheadings.splice(this._rowsSubheadings.indexOf(b), 1);
    this._fixCellsAfterRemove(a);
    0 === this._subheadingGroups[b].length && (this._grid.removeRow(b), this._subheadingGroups.splice(this._subheadingGroups.indexOf(b), 1), this._fixCellsAfterRemove(b));
    this._fixSubheadings();
    a = this._grid.getNumberRows() * this._rowHeight;
    this._grid.setBounds(this._x,
      this._y, this._width, a)
  };
  GroupedGrid.prototype._fixSubheadings = function () {
    var a = this._symbolsList.getGroupedListObject().getItems();
    this._subheadingGroups = [];
    this._rowsSubheadings = [];
    var b = 1,
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = b;
        this._subheadingGroups[d] = [];
        var e = a[c],
          f;
        for (f in e) e.hasOwnProperty(f) && (b++ , this._subheadingGroups[d].push(b), this._rowsSubheadings[b] = d);
        b++
      }
  };
  GroupedGrid.prototype._fixCellsAfterRemove = function (a) {
    var b = [],
      c = 0,
      d;
    for (d in this._cellContents)
      if (this._cellContents.hasOwnProperty(d) && parseInt(d, 10) !== a) {
        b[c] = [];
        for (var e in this._cellContents[d]) this._cellContents[d].hasOwnProperty(e) && (b[c].push(e), b[c][e] = this._cellContents[d][e]);
        c++
      }
    this._cellContents = b
  };
  GroupedGrid.prototype.setHeadersPaddingRight = function (a) {
    this._headersPaddingRight = a
  };
  GroupedGrid.prototype._updateRowColors = function () {
    if (this._drawRowColors) {
      this._drawRowColors = !1;
      var a, b, c, d;
      for (a = 0; a < this._grid.getNumberRows(); a++)
        for (c = 0 === a % 2 ? this._evenBackground : this._oddBackground, b = 0; b < this._grid.getNumberColumns(); b++) this._grid.setCellBackground(a, b, c), this._grid.getCell(a, b).setStartingBackground(c), this._grid.setCellFontSize(a, b, this._fontSize);
      c = this._headingBackground;
      d = this._headingColor;
      for (b = 0; b < this._grid.getNumberColumns(); b++)
        this._grid.setCellBackground(0, b, c), this._grid.setCellColor(0, b, d), this._grid.getCell(0, b).setBold(!0);
      c = this._subheadingBackground;
      d = this._subheadingColor;
      for (a = 0; a < this._subheadingRows.length; a++)
        for (b = 0; b < this._grid.getNumberColumns(); b++) this._grid.setCellBackground(this._subheadingRows[a], b, c), this._grid.setCellColor(this._subheadingRows[a], b, d), this._grid.getCell(this._subheadingRows[a], b).setBold(!0)
    }
  };
  GroupedGrid.prototype._updateColumns = function () {
    if (this._drawColumns) {
      var a, b;
      this._drawColumns = !1;
      for (a = 0; a < this._grid.getNumberRows(); a++)
        for (b = 0; b < this._grid.getNumberColumns(); b++) {
          var c = this._grid.getCell(a, b);
          c.setWidth(this._columnWidths[b]);
          c.setAlign(this._columnAlignments[b]);
          this._columnOverflowEllipsis[b] && c.setTextOverflowEllipsis(!0)
        }
      if (this._centeredHeadings) {
        for (b = 0; b < this._grid.getNumberColumns(); b++) this._grid.getCell(0, b).setAlign(Cell.ALIGN_CENTER), this._grid.getCell(0, b).setPaddingRight(this._headersPaddingRight);
        for (a = 0; a < this._subheadingRows.length; a++)
          for (b = 0; b < this._grid.getNumberColumns(); b++) this._grid.getCell(this._subheadingRows[a], b).setAlign(Cell.ALIGN_CENTER)
      }
    }
  };
  GroupedGrid.prototype.draw = function () {
    Component.prototype.draw.call(this);
    this._updateRowColors();
    this._updateColumns()
  };
  GroupedGrid.prototype.setBounds = function (a, b, c, d) {
    return Component.prototype.setBounds.call(this, a, b, c, d) ? (this._grid.setBounds(a, b, c, d), !0) : !1
  };
  GroupedGrid.prototype.getTableHeight = function () {
    return void 0 !== this._grid.getTable() ? this._grid.getTable().height() : -1
  };
  GroupedGrid.prototype.getTableWidth = function () {
    return void 0 !== this._grid.getTable() ? this._grid.getTable().width() : -1
  };
  GroupedGrid.prototype.setCenteredHeadings = function (a) {
    this._centeredHeadings = a;
    this._drawColumns = !0
  };
  GroupedGrid.prototype.setColumnWidths = function (a) {
    this._columnWidths = a;
    this._drawColumns = !0
  };
  GroupedGrid.prototype.setColumnTextOverflowEllipsis = function (a, b) {
    this._columnOverflowEllipsis[a] = b;
    this._drawColumns = !0
  };
  GroupedGrid.prototype.getColumnTextOverflowEllipsis = function (a) {
    return !0 === this._columnOverflowEllipsis[a]
  };
  GroupedGrid.prototype.setColumnWidth = function (a, b) {
    this._columnWidths[a] !== b && (this._columnWidths[a] = b, this._drawColumns = !0)
  };
  GroupedGrid.prototype.getColumnWidth = function (a) {
    return this._columnWidths[a]
  };
  GroupedGrid.prototype.setColumnAlignments = function (a) {
    this._columnAlignments = a;
    this._drawColumns = !0
  };
  GroupedGrid.prototype.getCellContent = function (a, b) {
    return "undefined" === typeof this._cellContents[a] || "undefined" === typeof this._cellContents[a][b] ? ["", ""] : this._cellContents[a][b]
  };
  GroupedGrid.prototype.setCellContent = function (a, b, c) {
    void 0 === this._cellContents[a] && (this._cellContents[a] = []);
    if (void 0 === c || void 0 === c[0] || 0 === c[0].trim().length) c = ["", ""];
    this._cellContents[a][b] = c;
    this._grid.setCell(a, b, this._cellContents[a][b][0]);
    this._cellContents[a][b][1] && this._grid.getCell(a, b).setTitle(this._cellContents[a][b][1])
  };
  GroupedGrid.prototype.getNumberColumns = function () {
    return this._grid.getNumberColumns()
  };
  GroupedGrid.prototype.getNumberRows = function () {
    return this._grid.getNumberRows()
  };
  GroupedGrid.prototype._rebuild = function () {
    void 0 !== this._grid && this.remove(this._grid);
    this._grid = new Grid(this._numRows, this._headings.length, this._id + "_grid");
    this.add(this._grid);
    var a = this._grid.getNumberRows() * this._rowHeight;
    this._grid.setBounds(this._x, this._y, this._width, a);
  };
  GroupedGrid.prototype.setOddStyle = function (a, b) {
    this._oddBackground !== a && (this._oddBackground = a, this._drawRowColors = !0);
    this._oddColor !== b && (this._oddColor = b, this._drawRowColors = !0)
  };
  GroupedGrid.prototype.setEvenStyle = function (a, b) {
    this._evenBackground !== a && (this._evenBackground = a, this._drawRowColors = !0);
    this._evenColor !== b && (this._evenColor = b, this._drawRowColors = !0)
  };
  GroupedGrid.prototype.setHeadingStyle = function (a, b) {
    this._headingBackground !== a && (this._headingBackground = a, this._drawRowColors = !0);
    this._headingColor !== b && (this._headingColor = b, this._drawRowColors = !0)
  };
  GroupedGrid.prototype.setSubheadingStyle = function (a, b) {
    this._subheadingBackground !== a && (this._subheadingBackground = a, this._drawRowColors = !0);
    this._subheadingColor !== b && (this._subheadingColor = b, this._drawRowColors = !0)
  };
  GroupedGrid.prototype.setBordersStyle = function (a, b, c, d) {
    for (var e = 0; e < this._grid.getNumberRows(); e++)
      for (var f = 0; f < this._grid.getNumberColumns(); f++) {
        var g = this._grid.getCell(e, f);
        g.setBoxSizing(!0);
        g.setBorder(a, b, c, d)
      }
  };
  GroupedGrid.prototype.setTitleColumns = function (a) {
    this._titleColumns = a
  };
  GroupedGrid.prototype.setHeadings = function (a) {
    this._headings = a
  };
  GroupedGrid.prototype.setClickableCell = function (a, b, c) {
    this._grid.setClickableCell(a, b);
    this._grid.getCell(a, b).addListener(c)
  };
  GroupedGrid.prototype.setSymbolsList = function (a) {
    this._symbolsList = a;
    this._fixRowNumbers()
  };
  GroupedGrid.prototype._fixRowNumbers = function () {
    var a = this._symbolsList.getGroupedList();
    this._numRows = this._symbolsList.getRowCount();
    this._subheadingGroups = [];
    this._rebuild();
    var b = this._grid.getNumberColumns(),
      c;
    for (c = 0; c < b; c++) this.setCellContent(0, c, [this._headings[c][0], void 0]), this._grid.getCell(0, c).setTextOverflowEllipsis(!1);
    var a = a.getItems(),
      d = 1,
      e;
    for (e in a)
      if (a.hasOwnProperty(e)) {
        if (1 === d)
          for (c = 0; c < this._titleColumns.length; c++)
            this.setCellContent(d, this._titleColumns[c], [this._headings[this._titleColumns[c]][1], this._headings[this._titleColumns[c]][1]]);
        else
          for (c = 0; c < b; c++) this.setCellContent(d, c, [this._headings[c][1], this._headings[c][1]]);
        c = d;
        this._subheadingRows.push(c);
        this._subheadingGroups[c] = [];
        var f = a[e],
          g;
        for (g in f) f.hasOwnProperty(g) && (d++ , this._subheadingGroups[c].push(d), this._rowsSubheadings[d] = c);
        d++
      }
  };
  GroupedGrid.prototype.sortGrid = function () {
    var a = this._symbolsList.getGroupedList();
    this._numRows = this._symbolsList.getRowCount();
    a = a.getItems();
    this._subheadingGroups = [];
    var b = 1,
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = b;
        this._subheadingGroups[d] = [];
        var e = a[c],
          f;
        for (f in e) e.hasOwnProperty(f) && (b++ , this._subheadingGroups[d].push(b), this._rowsSubheadings[b] = d);
        b++
      }
  };
  GroupedGrid.prototype.getSubHeadingRows = function () {
    return this._subheadingRows
  };
  GroupedGrid.prototype.setCellStyle = function (a, b, c, d, e) {
    void 0 !== c && this._grid.setCellBackground(a, b, c);
    void 0 !== d && this._grid.setCellColor(a, b, d);
    void 0 !== e && this._grid.getCell(a, b).setBold(e)
  };
  GroupedGrid.prototype.setCellColor = function (a, b, c) {
    this._grid.setCellColor(a, b, c)
  };
  GroupedGrid.prototype.setCellBackgroundImage = function (a, b, c, d, e) {
    this._grid.getCell(a, b).setBackgroundImage(c, d, e)
  };
  GroupedGrid.prototype.hideRow = function (a) {
    this._grid.getCell(a, 0).hideParent()
  };
  // #endregion
  // #region HTMLAnchor
  this.HTMLAnchor = HTMLAnchor;
  function HTMLAnchor(a, b) {
    this._href = a;
    this._title = this._text = b;
    this._target = "_self";
    this._html = "";
    this._onClickAction = this._style = void 0;
    this._fixHTML()
  };
  HTMLAnchor.prototype.setLink = function (a) {
    this._href !== a && (this._href = a, this._fixHTML())
  };
  HTMLAnchor.prototype.getLink = function () {
    return this._href
  };
  HTMLAnchor.prototype.setText = function (a) {
    this._text !== a && (this._text = a, this._fixHTML())
  };
  HTMLAnchor.prototype.getText = function () {
    return this._text
  };
  HTMLAnchor.prototype.setTitle = function (a) {
    this._title !== a && (this._title = a, this._fixHTML())
  };
  HTMLAnchor.prototype.getTitle = function () {
    return this._title
  };
  HTMLAnchor.prototype.setTarget = function (a) {
    this._target !== a && (this._target = a, this._fixHTML())
  };
  HTMLAnchor.prototype.setCssStyle = function (a) {
    this._style !== a && (this._style = a, this._fixHTML())
  };
  HTMLAnchor.prototype.getHTML = function () {
    return this._html
  };
  HTMLAnchor.prototype.setOnclick = function (a) {
    this._onClickAction !== a && (this._onClickAction = a, this._fixHTML())
  };
  HTMLAnchor.prototype._fixHTML = function () {
    var a = "";
    void 0 !== this._style && (a = 'style\x3d"' + this._style + '"');
    var b = "";
    void 0 !== this._onClickAction && (b = ' onClick\x3d"' + this._onClickAction + '" ');
    this._html = "\x3ca " + a + ' href\x3d"' + this._href + '" ' + b + ' title\x3d"' + this._title + '" target\x3d"' + this._target + '"\x3e' + this._text + "\x3c/a\x3e "
  };
  // #endregion
  // #region HTMLImage
  this.HTMLImage = HTMLImage;
  function HTMLImage(a) {
    this._alt = this._title = this._src = a;
    this._html = "";
    this._fixHTML()
  };
  HTMLImage.prototype.setSource = function (a) {
    this._src !== a && (this._src = a, this._fixHTML())
  };
  HTMLImage.prototype.setTitle = function (a) {
    this._title !== a && (this._title = a, this._fixHTML())
  };
  HTMLImage.prototype.setAlternativeText = function (a) {
    this._alt !== a && (this._alt = a, this._fixHTML())
  };
  HTMLImage.prototype.getHTML = function () {
    return this._html
  };
  HTMLImage.prototype._fixHTML = function () {
    this._html = '\x3cimg src\x3d"' + this._src + '" title\x3d"' + this._title + '" alt\x3d"' + this._alt + '" /\x3e'
  };
  // #endregion
  // #region HTMLIcon
  this.HTMLIcon = HTMLIcon;
  function HTMLIcon(a, b, c) {
    this._src = a;
    this._alt = b;
    this._id = c;
    this._style = void 0;
    if (void 0 !== this._id) {
      var d = this;
      $("body").on("click", "#" + Utils.escapeChars(this._id), function (a) {
        d._handleClick(a)
      })
    }
    this._subscribers = [];
    this._html = "";
    this._fixHTML()
  };
  HTMLIcon.prototype._handleClick = function (a) {
    for (var b = 0; b < this._subscribers.length; b++) this._subscribers[b].handleIconClick(this, a)
  };
  HTMLIcon.prototype.getId = function () {
    return this._id
  };
  HTMLIcon.prototype.addSubscriber = function (a) {
    this._subscribers.push(a)
  };
  HTMLIcon.prototype.setSource = function (a) {
    this._src !== a && (this._src = a, this._fixHTML())
  };
  HTMLIcon.prototype.setAlternativeText = function (a) {
    this._alt !== a && (this._alt = a, this._fixHTML())
  };
  HTMLIcon.prototype.setCssStyle = function (a) {
    this._style !== a && (this._style = a, this._fixHTML())
  };
  HTMLIcon.prototype.getHTML = function () {
    return this._html
  };
  HTMLIcon.prototype._fixHTML = function () {
    var a = "";
    void 0 !== this._id && (a = ' id\x3d"' + this._id + '" ');
    var b = 'style\x3d"cursor:pointer;';
    void 0 !== this._style && (b += this._style);
    this._html = "\x3cimg " + (b + '"') + " " + a + 'src\x3d"' + this._src + '" alt\x3d"' + this._alt + '" /\x3e'
  };
  // #endregion
  // #region BuySellIndex
  this.BuySellIndex = BuySellIndex;
  function BuySellIndex(a, b) {
    if (3 !== a.length) throw Error("Invalid amount of arguments given for buy/sell index in values.");
    if (3 !== b.length) throw Error("Invalid amount of arguments given for buy/sell index in colours.");
    this._buySize = parseInt(a[0], 10);
    this._sellSize = parseInt(a[1], 10);
    this._unknownSize = parseInt(a[2], 10);
    this._buySize = isNaN(this._buySize) ? 0 : this._buySize;
    this._sellSize = isNaN(this._sellSize) ? 0 : this._sellSize;
    this._unknownSize = isNaN(this._unknownSize) ? 0 : this._unknownSize;
    this._buyColor = b[0];
    this._sellColor = b[1];
    this._unknownColor = b[2];
    this._html = "";
    this._fixHTML()
  };
  BuySellIndex.prototype.getBuySize = function () {
    return this._buySize
  };
  BuySellIndex.prototype.setBuySize = function (a) {
    this._buySize !== a && (this._buySize = a, this._fixHTML())
  };
  BuySellIndex.prototype.getSellSize = function () {
    return this._sellSize
  };
  BuySellIndex.prototype.setSellSize = function (a) {
    this._sellSize !== a && (this._sellSize = a, this._fixHTML())
  };
  BuySellIndex.prototype.getUnknownSize = function () {
    return this._unknownSize
  };
  BuySellIndex.prototype.setUnknownSize = function (a) {
    this._unknownSize !== a && (this._unknownSize = a, this._fixHTML())
  };
  BuySellIndex.prototype.getHTML = function () {
    return this._html
  };
  BuySellIndex.prototype._fixHTML = function () {
    var a = this._buySize + this._sellSize + this._unknownSize,
      b = Math.floor(100 * this._buySize / a),
      a = Math.floor(100 * this._sellSize / a);
    this._html = '\x3cdiv style\x3d"display:inline-block;width:' + b + "%;background:" + this._buyColor + ';height:80%;"\x3e\x3c/div\x3e';
    this._html += '\x3cdiv style\x3d"display:inline-block;width:' + a + "%;background:" + this._sellColor + ';height:80%;"\x3e\x3c/div\x3e';
    this._html += '\x3cdiv style\x3d"display:inline-block;width:' + (100 - b - a) + "%;background:" + this._unknownColor + ';height:80%;"\x3e\x3c/div\x3e'
  };
  // #endregion
  // #region WindowManager
  this.WindowManager = WindowManager;
  function WindowManager(a) {
    Component.call(this, a);
    this.setBackground("none");
    this._windows = {}
  };
  WindowManager.prototype = Object.create(Component.prototype);
  WindowManager.prototype.constructor = WindowManager;
  WindowManager.prototype.create = function () {
    Component.prototype.create.call(this);
    this._div.css("width", "100%");
    this._div.css("height", "100%")
  };
  WindowManager.prototype.draw = function () {
    this._drawBounds = !1;
    Component.prototype.draw.call(this)
  };
  WindowManager.prototype.addWindow = function (a) {
    this.add(a);
    a.setWindowManager(this);
    a.setZ(this._child.length - 1);
    this._windows[a._id] = !0
  };
  WindowManager.prototype.removeWindow = function (a) {
    void 0 !== a && (delete this._windows[a._id], this.remove(a))
  };
  WindowManager.prototype.getSelected = function (a) {
    return this._selected
  };
  WindowManager.prototype.setSelected = function (a) {
    if (this._selected !== a) {
      void 0 !== this._selected && this._selected.blur();
      this._selected = a;
      for (var b = 0; b < this._child.length; b++) this._child[b] === a && (this._child.splice(b, 1), this._child.push(a));
      a.focus();
      for (b = 0; b < this._child.length; b++) this._child[b].setZ(b)
    }
  };
  WindowManager.prototype.handleMouseMove = function (a, b) {
    a -= this._x;
    b -= this._y;
    for (var c = this._child.length - 1; 0 <= c; c--) {
      var d = this._child[c];
      if (a >= d._x && b >= d._y && a < d._x + d._width && b < d._y + d._height && d.handleMouseMove(a, b)) return !0
    }
    return !1
  };
  WindowManager.prototype.handleMouseDown = function (a, b) {
    a -= this._x;
    b -= this._y;
    for (var c = this._child.length - 1; 0 <= c; c--) {
      var d = this._child[c];
      if (a >= d._x && b >= d._y && a < d._x + d._width && b < d._y + d._height && this._windows[d._id]) {
        this.setSelected(d);
        break
      }
    }
    for (c = this._child.length - 1; 0 <= c; c--)
      if (d = this._child[c], a >= d._x && b >= d._y && a < d._x + d._width && b < d._y + d._height) return d.handleMouseDown(a, b), !0;
    return !1
  };
  WindowManager.prototype.handleMouseUp = function (a, b) {
    a -= this._x;
    b -= this._y;
    for (var c = this._child.length - 1; 0 <= c; c--) {
      var d = this._child[c];
      if (a >= d._x && b >= d._y && a < d._x + d._width && b < d._y + d._height && d.handleMouseUp(a, b)) return !0
    }
    return !1
  };
  // #endregion
  // #region TradesTable
  this.TradesTable = TradesTable;
  function TradesTable(a) {
    Component.call(this, a);
    this.setBackground("#e8e8e8");
    this.setBorder(Component.BORDER_SOLID);
    this.setBorderColor("#ccc");
    this._grid = new Grid(0, 0);
    this._scrollBar = new ScrollBar(a + "_scrollbar");
    this.add(this._scrollBar);
    this._scrollBar.setThumbPos(0);
    this._offset = 0;
    var b = this;
    this._scrollBar.onThumbMove = function (a) {
      b.setOffset(a)
    };
    this._created = !1
  };
  TradesTable.prototype = Object.create(Component.prototype);
  TradesTable.prototype.constructor = TradesTable;
  TradesTable.COLUMN_PRICE = 0;
  TradesTable.COLUMN_SIZE = 1;
  TradesTable.COLUMN_TYPE = 2;
  TradesTable.COLUMN_TIME = 3;
  TradesTable.NUM_COLUMNS = 4;
  TradesTable.TIMEOUT = 1E3;
  TradesTable.prototype.setNumRows = function (a) {
    if (this._numRows !== a) {
      this._numRows = a;
      void 0 !== this._grid && this.remove(this._grid);
      this._grid = new Grid(this._numRows, TradesTable.NUM_COLUMNS, this._id + "_trades");
      this.add(this._grid);
      var b = ScrollBar.DEFAULT_WIDTH,
        c = Math.floor(this._width - 2 - b);
      this._drawBounds = !0;
      this._grid.setBounds(0, 0, c, this._height - 2);
      this._scrollBar.setBounds(this._width - b - 2, 0, b, this._height - 2);
      this._drawGrid = !0;
      this._scrollBar.setThumbSize(a)
    }
  };
  TradesTable.prototype.setBounds = function (a, b, c, d) {
    return Component.prototype.setBounds.call(this, a, b, c, d) ? (this._created || (this._initWidth = c, this._initHeight = d, this._created = !0), !0) : !1
  };
  TradesTable.prototype.setTradesList = function (a) {
    this._tradesList = a;
  };
  TradesTable.prototype.setOffset = function (a) {
    this._offset = a;
    this._update()
  };
  TradesTable.prototype.getNumRows = function () {
    return this._numRows
  };
  TradesTable.prototype.draw = function () {
    var a;
    Component.prototype.draw.call(this);
    this._update();
    if (this._drawGrid) {
      this._drawGrid = !1;
      for (var b = 0; b < this._numRows; b++) a = this._grid.getCell(b, TradesTable.COLUMN_PRICE), a.setBold(!0);
      this._grid.setColumnAlign(TradesTable.COLUMN_PRICE, Grid.ALIGN_RIGHT);
      this._grid.setColumnAlign(TradesTable.COLUMN_SIZE, Grid.ALIGN_RIGHT);
      this._grid.setColumnAlign(TradesTable.COLUMN_TYPE, Grid.ALIGN_CENTER);
      this._grid.setColumnAlign(TradesTable.COLUMN_TIME, Grid.ALIGN_RIGHT);
      a = [29, 29, 21, 21];
      for (b = 0; b < a.length; b++) this._grid.setColumnWidth(b, this._width * a[b] / 100)
    }
  };
  TradesTable.prototype.setSymbol = function (a) {
    this._symbol = a;
  };
  TradesTable.prototype.getSymbol = function () {
    return this._symbol
  };
  TradesTable.prototype._update = function () {
    if (void 0 === this._tradesList) return !1;
    var a = this._tradesList.getTrades();
    this._offset = this._scrollBar.getThumbPos();
    this._scrollBar.setContainerSize(Math.max(a.length));
    for (var b = this._grid, c = -1, d = !1, e = [], f = 0; f < this._offset; f++) {
      var g = a[f];
      if (void 0 === g) break;
      g.getPrice() !== c && (e = d ? Color.ODD : Color.EVEN, d = !d, c = g.getPrice())
    }
    for (f = 0; f < this._numRows; f++)
      if (g = a[this._offset + f], void 0 === g)
        for (g = 0; g < TradesTable.NUM_COLUMNS; g++)
          b.setCell(f, g, ""), b.setCellBackground(f, g, this._background);
      else {
        var m = g.getPrice(),
          k = g.getSize();
        b.setCell(f, 0, Utils.frmtTo2dp(m));
        b.getCell(f, 0).setTitle(m);
        b.setCell(f, 1, k);
        b.getCell(f, 1).setTitle(k);
        b.setCell(f, 2, Utils.trunc(g.getType(), 4));
        b.getCell(f, 2).setTitle(g.getType());
        b.setCell(f, 3, g.getTime());
        var h = Color.INSERTED,
          l = Color.TEXT_REVERSED;
        g.getPrice() !== c && (e = d ? Color.ODD : Color.EVEN, d = !d, c = g.getPrice());
        k = Color.TEXT_BUY;
        switch (g.getTypeOfSize()) {
          case "buy":
            k = Color.TEXT_BUY;
            break;
          case "sell":
            k = Color.TEXT_SELL;
            break;
          case "unknown":
            k = Color.TEXT_UNKNOWN
        }
        m = [e, e, e, e];
        k = [k, Color.TEXT, Color.TEXT, Color.TEXT];
        Date.now() - g.getLastChangeTimestamp() < TradesTable.TIMEOUT && (m = [h, h, h, h], k = [l, l, l, l]);
        for (g = 0; g < TradesTable.NUM_COLUMNS; g++) h = b.getCell(f, g), h.setBackground(m[g]), h.setColor(k[g])
      }
    return !0
  };
  TradesTable.prototype.disable = function () {
    Component.prototype.disable.call(this);
    this._scrollBar.disable()
  };
  TradesTable.prototype.enable = function () {
    Component.prototype.enable.call(this);
    this._scrollBar.enable()
  };
  TradesTable.prototype.onListReady = function () { };
  // #endregion
  // #region TradesApp
  this.TradesApp = TradesApp;
  function TradesApp(a, b) {
    Component.call(this, a);
    this._id = a;
    this._symbol = b;
    this._montage = true;
  };
  TradesApp.prototype = Object.create(Component.prototype);
  TradesApp.prototype.constructor = TradesApp;
  TradesApp.HEADER_HEIGHT = 0;
  TradesApp.DEFAULT_MONTAGE_STATUS = !0;
  TradesApp.HEIGHT_GAP = 0;
  TradesApp.WIDTH = Math.max(800, window.innerWidth - 17);
  TradesApp.TRADES_LIMIT = 100;
  TradesApp.prototype.clearState = function () { };
  TradesApp.prototype.connect = function () {
    this._createTradesTable()
  };
  TradesApp.prototype._createTradesTable = function () {
    "undefined" !== typeof this._tradesTable && this.remove(this._tradesTable);
    this._montage = true;
    this._tradesList = new MontageTradesList(TradesApp.TRADES_LIMIT);
    this._tradesList.setSymbolMontage(this._symbol);
    this._tradesTable = new TradesExtendedTable(this._id + "_tradesTable");
    this._tradesTable.setBounds(this._x, this._y + TradesApp.HEADER_HEIGHT, TradesApp.WIDTH, this.height);
    this._tradesTable.setMaxRows(TradesApp.TRADES_LIMIT);
    this.add(this._tradesTable);
    this._tradesList.addListener(this._tradesTable);
    this._tradesList.start()
  };
  TradesApp.prototype.handleSwitch = function () {
    this._createTradesTable()
  };
  TradesApp.prototype.setBounds = function (a, b, c, d) {
    return Component.prototype.setBounds.call(this, a, b, c, d) ? !0 : !1
  };
  TradesApp.prototype.setWindowManager = function (a) {
    this._manager = a
  };
  TradesApp.prototype.fixWindowManager = function (a, b) {
    this._manager.setSize(a, b)
  };
  TradesApp.prototype.getSymbol = function () {
    return this._symbol
  };
  // #endregion
  // #region TradesExtendedTable
  this.TradesExtendedTable = TradesExtendedTable;
  function TradesExtendedTable(a) {
    Component.call(this, a);
    this.setBackground("#FFFFFF");
    this._trades = [];
    this._numRows = TradesApp.TRADES_LIMIT;
    this._oddRow = !0;
    this._lastPrice = void 0;
    this._dirty = !0;
    this._table = new Table(this._id + "_table");
    this._columnWidthPercentages = [5.5, 6, 7, 7, 6, 3, 6, 6, 6, 6, 6, 6, 10, 6.5, 6.5, 6.5];
    this._table.setColAlignment(0, TableCell.ALIGN_RIGHT);
    this._table.setColAlignment(1, TableCell.ALIGN_CENTER);
    this._table.setColAlignment(2, TableCell.ALIGN_RIGHT);
    this._table.setColAlignment(3, TableCell.ALIGN_RIGHT);
    this._table.setColAlignment(4, TableCell.ALIGN_CENTER);
    this._table.setColAlignment(5, TableCell.ALIGN_CENTER);
    this._table.setColAlignment(6, TableCell.ALIGN_CENTER);
    this._table.setColAlignment(7, TableCell.ALIGN_RIGHT);
    this._table.setColAlignment(8, TableCell.ALIGN_RIGHT);
    this._table.setColAlignment(9, TableCell.ALIGN_RIGHT);
    this._table.setColAlignment(10, TableCell.ALIGN_RIGHT);
    this._table.setColAlignment(11, TableCell.ALIGN_RIGHT);
    this._table.setColAlignment(12, TableCell.ALIGN_RIGHT);
    this._table.setColAlignment(13, TableCell.ALIGN_RIGHT);
    this._table.setColAlignment(14, TableCell.ALIGN_RIGHT);
    this._table.setColAlignment(15, TableCell.ALIGN_RIGHT);
    this._table.setColAlignment(16, TableCell.ALIGN_RIGHT);
    this._table.setHeaders([L("trades_num"), L("trades_exch"), L("trades_price"), L("trades_size"), L("trades_type"), L("trades_c"), L("trades_t"), L("trades_bid"), L("trades_offer"), L("trades_time"), L("trades_buy"), L("trades_sell"), L("trades_unknown"), L("trades_buy_ind"), L("trades_buy_vol"), L("trades_sell_vol"), L("trades_unknown_vol")]);
    this.add(this._table);
    this._ready = !1;
    this._firstLoad = !0;
    RootComponent.setMinHeight(30);
  };
  TradesExtendedTable.prototype = Object.create(Component.prototype);
  TradesExtendedTable.prototype.constructor = TradesExtendedTable;
  TradesExtendedTable.COL_NUM = 0;
  TradesExtendedTable.COL_EXCHANGE = 1;
  TradesExtendedTable.COL_PRICE = 2;
  TradesExtendedTable.COL_SIZE = 3;
  TradesExtendedTable.COL_TYPE = 4;
  TradesExtendedTable.COL_C = 5;
  TradesExtendedTable.COL_T = 6;
  TradesExtendedTable.COL_BID = 7;
  TradesExtendedTable.COL_OFFER = 8;
  TradesExtendedTable.COL_TIME = 9;
  TradesExtendedTable.COL_BUY = 10;
  TradesExtendedTable.COL_SELL = 11;
  TradesExtendedTable.COL_UNKNOWN = 12;
  TradesExtendedTable.COL_BUY_INDEX = 13;
  TradesExtendedTable.COL_BUY_VOL = 14;
  TradesExtendedTable.COL_SELL_VOL = 15;
  TradesExtendedTable.COL_UNKNOWN_VOL = 16;
  TradesExtendedTable.NUM_COLUMNS = 17;
  TradesExtendedTable.TIMEOUT = 1E3;
  TradesExtendedTable.prototype.setBounds = function (a, b, c, d) {
    return Component.prototype.setBounds.call(this, a, b, c, d) ? (this._table.setHeadersStyle("font-size: 14px;padding: 2px;font-weight: bold;background-color: #D3D3D3;"), this._table.setBounds(0, 0, this._width, this._height), this._table.setColsWidths(this._columnWidthPercentages, !0), !0) : !1
  };
  TradesExtendedTable.prototype.draw = function () {
    Component.prototype.draw.call(this);
    this._dirty && this._updateTable();
    if (this._firstLoad && void 0 !== this._table.getTBody()) {
      if (this._trades.length <= this._table.getMaxRows()) {
        for (; this._table.getNumRows() < this._trades.length;) this._table.addEmptyRow();
        this._dirty = !0
      }
      this._firstLoad = !1
    }
  };
  TradesExtendedTable.prototype.onListReady = function () {
    this._ready = !0
  };
  TradesExtendedTable.prototype.onTradeAdd = function (a) {
    this._trades.length === this._numRows && this._trades.pop();
    this._trades.unshift(a);
    a = a.getPrice();
    void 0 === this._lastPrice ? this._lastPrice = a : a !== this._lastPrice && (this._lastPrice = a, this._oddRow = !this._oddRow);
    if (void 0 !== this._table.getTBody() && this._trades.length <= this._table.getMaxRows()) {
      for (; this._table.getNumRows() < this._trades.length;) this._table.addEmptyRow();
      this._dirty = !0
    }
  };
  TradesExtendedTable.prototype._updateTable = function () {
    var a = this._oddRow;
    this._dirty = !1;
    for (var b = Date.now(), d = 0; d < this._table.getNumRows(); d++) {
      var e = this._trades[d];
      if (e instanceof Trade) {
        var f = e.getExchange(),
          g = e.getPrice(),
          m = e.getSize(),
          k = e.getBid(),
          h = e.getOffer(),
          l = e.getBuySize(),
          n = e.getSellSize(),
          q = e.getUnknownSize(),
          p = e.getBuyVolume(),
          r = e.getSellVolume(),
          t = e.getUnknownVolume();
        var s = [e.getTradeNumber(), f, g, m, e.getType(), this._specialC(e), this._specialT(e), k, h, e.getTime(), l, n, q, this._genBuyIndex(e), p, r, t];
        this._table.updateRow(d, s);
        this._table.setRowColor(d, Color.TEXT);
        f = this._table.getCellContent(0 === d ? 0 : d - 1, TradesExtendedTable.COL_PRICE);
        this._table.getCellContent(d, TradesExtendedTable.COL_PRICE) !== f && (a = !a);
        b - e.getLastChangeTimestamp() < TradesTable.TIMEOUT ? (this._table.setRowBackground(d, Color.INSERTED), this._table.setRowColor(d, Color.TEXT_REVERSED), this._dirty = !0) : a ? this._table.setRowBackground(d, Color.ODD) : this._table.setRowBackground(d, Color.EVEN)
      }
    }
    for (d = 0; d < this._trades.length; d++) try {
      var u = $("#" + this._table.getCellsByRow(d)[TradesExtendedTable.COL_BUY_INDEX].getId());
      u.css("padding", "0px");
      u.css("border-bottom-width", "0px")
    }
      catch (v) { }
    a = TradesApp.HEIGHT_GAP + this._table.getTableHeight();
    this.setHeight(a);
    this.getParent().setHeight(a);
    this.getParent().fixWindowManager(this._width, a);
    this.setHeight(this._table.getTableHeight());
    this._table.setHeight(this._table.getTableHeight());
    $("#" + RootComponent.CONTAINER_ID).css("height", a + "px")
  };
  TradesExtendedTable.prototype._specialC = function (a) {
    return "LSE" === a.getExchange() && -1 !== a.getTradeFlag().indexOf("B") ? "C" : ""
  };
  TradesExtendedTable.prototype._specialT = function (a) {
    if ("LSE" === a.getExchange()) {
      for (var b = "", c = 0; c < a.getTradeFlag().length; c++)
        "B" !== a.getTradeFlag().charAt(c) && (b += a.getTradeFlag().charAt(c));
      return b
    }
    return ""
  };
  TradesExtendedTable.prototype.getNumRows = function () {
    return this._numRows
  };
  TradesExtendedTable.prototype._genBuyIndex = function (a) {
    var b = parseInt(a.getBuyVolume().replace(/,/g, ""), 10),
      c = parseInt(a.getSellVolume().replace(/,/g, ""), 10);
    a = parseInt(a.getUnknownVolume().replace(/,/g, ""), 10);
    b = isNaN(b) ? 0 : b;
    c = isNaN(c) ? 0 : c;
    a = isNaN(a) ? 0 : a;
    a = b + c + a;
    b = Math.floor(100 * b / a);
    c = Math.floor(100 * c / a);
    a = 100 - b - c;
    b = "" + ('\x3cdiv style\x3d"display:inline-block;height:' + (this._table.getRowHeight() + 1) + "px;width:" + b + "%;background:" + Color.TEXT_BUY + ';"\x3e\x3c/div\x3e');
    b += '\x3cdiv style\x3d"display:inline-block;height:' + (this._table.getRowHeight() + 1) + "px;width:" + c + "%;background:" + Color.TEXT_SELL + ';"\x3e\x3c/div\x3e';
    return b += '\x3cdiv style\x3d"display:inline-block;height:' + (this._table.getRowHeight() + 1) + "px;width:" + a + "%;background:" + Color.TEXT_UNKNOWN + ';"\x3e\x3c/div\x3e'
  };
  TradesExtendedTable.prototype.getHeight = function () {
    return "undefined" !== typeof this._table ? this._table.getTableHeight() : 0
  };
  TradesExtendedTable.prototype.setMaxRows = function (a) {
    this._table.setMaxRows(a)
  };
  // #endregion
  // #region MonitorColumn
  this.MonitorColumn = MonitorColumn;
  function MonitorColumn(a, b, c, d, e, f) {
    this._title = a;
    this._param = b;
    this._width = "undefined" !== typeof c ? c : 50;
    this._maxWidth = "undefined" !== typeof f ? f : Number.POSITIVE_INFINITY;
    this._align = "undefined" !== typeof d ? d : Cell.ALIGN_RIGHT;
    this._subtitle = "undefined" !== typeof e ? e : a;
    this._type = 0;
    this.getTitle = function () {
      return this._title
    };
    this.getParam = function () {
      return this._param
    };
    this.getWidth = function () {
      return this._width
    };
    this.setWidth = function (a) {
      this._width = a
    };
    this.getMaxWidth = function () {
      return this._maxWidth
    };
    this.setMaxWidth = function (a) {
      this._maxWidth = a
    };
    this.getAlign = function () {
      return this._align
    };
    this.getSubtitle = function () {
      return this._subtitle
    };
    this.getType = function () {
      return this._type
    };
    this.setType = function (a) {
      this._type = a
    };
  };
  // #endregion
  // #region MonitorApp
  this.MonitorApp = MonitorApp;
  function MonitorApp(a) {
    Component.call(this, a);
    this._symbolIdentifiers = [];
    this._groupedGrid = new GroupedGrid(this._id + "_groupedGrid");
    this._groupedGrid.setHeadersPaddingRight(11);
    this._groupedGrid.setWidth("100%");
    this.add(this._groupedGrid);
    this.setWidth("100%");
    this._initVariables();
    this._monitorModel = [];
    this._initMonitorSettings();
    this._drawDimensions = !1;
    this._init();
    console.info("Monitor app initialized!");
    Clock.subscribe(this);
  };
  MonitorApp.prototype = Object.create(Component.prototype);
  MonitorApp.prototype.constructor = MonitorApp;
  MonitorApp.prototype.clearState = function () { };
  MonitorApp.COLS = [];
  MonitorApp.CHAR_WIDTH = 9;
  MonitorApp.BOTTOM_OFFSET = 0;
  MonitorApp.prototype.draw = function () {
    Component.prototype.draw.call(this);
    for (var a in this._monitorModel)
      if (this._monitorModel.hasOwnProperty(a)) {
        for (var b in this._monitorModel[a].cols) this._monitorModel[a].cols.hasOwnProperty(b) && this._updateValue(this._monitorModel[a], parseInt(b, 10));
        var c = this._symbolsList.getRowBySymbol(this._monitorModel[a].symbol),
          d = 0 === c % 2 ? Color.MONITOR_ROW_EVEN : Color.MONITOR_ROW_ODD;
        Clock.TIMESTAMP - this._monitorModel[a].modelLastChangeTimestamp < MonitorApp.ANIMATION_SEQUENCE_DEFAULT[0].time && (d = Color.UPDATED);
        this._autoHighlight(c, d);
      }
    this._drawDimensions && (this._drawDimensions = -1 === this._groupedGrid.getTableHeight() || -1 === this._groupedGrid.getTableWidth(), this._drawDimensions || (b = this._groupedGrid.getTableHeight(), a = this._groupedGrid.getTableWidth(), b += MonitorApp.BOTTOM_OFFSET, this._rootComponent = Utils.fetchParent(this, RootComponent), this._rootComponent.setHeight(b), this._rootComponent.setWidth(a), this.setBounds(this._x, this._y, a, b), this._manager.setSize(this._width, this._height)));
    this._drawNewWidths && (this._drawNewWidths = -1 === this._groupedGrid.getTableWidth(), this._drawNewWidths || (a = this._groupedGrid.getTableWidth(), void 0 !== this._rootComponent && this._rootComponent.setWidth(a), this.setBounds(this._x, this._y, a, this._height), this._manager.setSize(this._width, this._height)));
    ((this._groupedGrid._grid || this._groupedGrid)._div || this._div).css("width", "100%");
    (this._groupedGrid._div || this._div).css("width", "100%");
    this._div.css("width", "100%");
  };
  MonitorApp.prototype.setBounds = function (a, b, c, d) {
    return Component.prototype.setBounds.call(this, a, b, c, d) ?
      (this._groupedGrid.setBounds(a, b, c, d - MonitorApp.BOTTOM_OFFSET), !0) : !1
  };
  MonitorApp.prototype._init = function () {
    this._initDefaultColumns();
    this._config = this._loadConfig();
    if (void 0 === this._config) return console.error("Failed to boot up the monitor"), !1;
    this._colTypes = this._config.columns;
    Env.isFixedMonitor() || this._colTypes.push(44);
    this._setUpColumns();
    for (var a = 0; a < this._config.symbols.length; a++) {
      var b = new Symbol(this._config.symbols[a]);
      this._symbolsList.addSymbol(b)
    }
    this._setUpHeadings();
    this._isOrderSymbols && this._symbolsList.orderBySymbol();
    this._symbolsList.setGroupBy(SymbolList.NOT_GROUPED);
    this._groupedGrid.setSymbolsList(this._symbolsList);
    a = this._groupedGrid.getSubHeadingRows();
    for (b = 0; b < a.length; b++)
      for (var c = this._symbolsList.getSymbolByRow(a[b] + 1), d = 0; d < this._symbolCols.length; d++) {
        var e = this._symbolsList.getGroupedList().getGroupNameBySymbol(c),
          f = [];
        "IX" === e ? (f[0] = L("mon_indices_subheading").toUpperCase(), f[1] = L("mon_indices_subheading")) : "group" === e ? (f[0] = "", f[1] = "", this._groupedGrid.hideRow(1)) : (f[0] = c.getDisplayMarket(), f[1] = c.getDisplayMarket());
        this._groupedGrid.setCellContent(a[b], this._symbolCols[d], f)
      }
    this._setUpStyling();
    this._drawDimensions = !0;
    this._initializeCells();
  };
  MonitorApp.prototype.connect = function () {
    this._setUpFeed()
  };
  MonitorApp.prototype._handleClockSeconds = function () {
    this._resizeColumnWidths()
  };
  MonitorApp.prototype._resizeColumnWidths = function () {
    for (var a = 0; a < this._groupedGrid.getNumberColumns(); a++)
      if (!Utils.inArray(this._staticCols, a)) {
        var b = this._cols[a],
          c = this._symbolsList.getMaxValue(a) * MonitorApp.CHAR_WIDTH;
        c > b.getMaxWidth() && (c = b.getMaxWidth());
        c > this._defaultColumnWidths[a] && (this._groupedGrid.setColumnWidth(a, c), this._defaultColumnWidths[a] = c, this._drawNewWidths = !0)
      }
  };
  MonitorApp.prototype._initVariables = function () {
    this._config = {
      columns: void 0,
      symbols: []
    };
    this._cols = [];
    this._colTypes = [];
    this._defaultColumnWidths = [];
    this._rows = [];
    this._titleCols = [];
    this._highlightCols = [];
    this._staticCols = [];
    this._symbolCols = [];
    this._symbolsList = new SymbolList
  };
  MonitorApp.prototype._initMonitorSettings = function () {
    var a = {
      N_A_Disp: void 0,
      defaultDisplay: void 0,
      indexBreakUp: void 0,
      orderSymbols: void 0
    },
      a = Env.getMonitorSettings();
    this._indicesGroup = a.indexBreakUp;
    this._isOrderSymbols = a.orderSymbols;
  };
  MonitorApp.prototype._removeRow = function (a) {
    var b = this._symbolsList.getRowBySymbol(a);
    this._symbolsList.removeSymbol(a);
    this._groupedGrid.removeRow(b);
    delete this._monitorModel[a.getFeedSymbol()];
    this._fixStaticCells();
  };
  MonitorApp.prototype._handleCellClick = function (a) {
    a = parseInt(a.getCellIndex(), 10);
    this._currentSorting = this._currentSorting === SymbolList.SORT_ASCENDING ? SymbolList.SORT_DESCENDING : SymbolList.SORT_ASCENDING;
    var b = "sort_both.png";
    switch (this._currentSorting) {
      case SymbolList.SORT_ASCENDING:
        b = "sort_asc.png";
        break;
      case SymbolList.SORT_DESCENDING:
        b = "sort_desc.png"
    }
    for (var c = Env.isFixedMonitor() ? this._groupedGrid.getNumberColumns() : this._groupedGrid.getNumberColumns() - 5, d = 0; d < c; d++)
      a === d ? this._groupedGrid.setCellBackgroundImage(0, d, Env.getAdvfnURL() + "/common/images/icons/" + b, "no-repeat", "right center") :
        this._groupedGrid.setCellBackgroundImage(0, d, Env.getAdvfnURL() + "/common/images/icons/sort_both.png", "no-repeat", "right center");
    this._symbolsList.setSortingColumn(a, this._currentSorting);
    this._groupedGrid.sortGrid();
    this._fixStaticCells()
  };
  MonitorApp.prototype._fixStaticCells = function () {
    var a, b, c, d, e = this._symbolsList.getItems(),
      f;
    for (f in e)
      if (e.hasOwnProperty(f)) {
        a = e[f].getSymbol();
        a = this._symbolsList.getRowBySymbol(a);
        for (var g = 0; g < this._groupedGrid.getNumberColumns(); g++)
          b = e[f].getContent(g),
            this._groupedGrid.setCellContent(a, g, b),
            d = e[f].getStyle(g),
            c = 0 === a % 2 ? Color.MONITOR_ROW_EVEN : Color.MONITOR_ROW_ODD,
            b = void 0 === d ? void 0 : d.color,
            d = void 0 === d ? void 0 : d.isBold,
            this._groupedGrid.setCellStyle(a, g, c, b, d)
      }
  };
  MonitorApp.prototype._genSymbolIdentifier = function (a) {
    if (void 0 !== this._symbolIdentifiers[a.getFeedSymbol()]) return this._symbolIdentifiers[a.getFeedSymbol()];
    this._symbolIdentifiers[a.getFeedSymbol()] = {};
    this._symbolIdentifiers[a.getFeedSymbol()].id = "sym-" + Utils.countAssociativeArray(this._symbolIdentifiers);
    this._symbolIdentifiers[a.getFeedSymbol()].symbol = a;
    return this._symbolIdentifiers[a.getFeedSymbol()]
  };
  MonitorApp.prototype._getSymbolIdentifier = function (a) {
    for (var b in this._symbolIdentifiers)
      if (this._symbolIdentifiers.hasOwnProperty(b) && this._symbolIdentifiers[b].id === a) return this._symbolIdentifiers[b];
    return null
  };
  MonitorApp.prototype._setStaticContent = function (a, b, c, d) {
    var e, f;
    f = a.getFeedSymbol();
    f = f.split('^')[1] || f;
    switch (d) {
      case 1:
        d = "javascript:open('/adv/t/" + f + "')&&void 0";
        e = "" + a.getSymbol();
        f = new HTMLAnchor(d, e);
        f.setTitle(a.getName());
        f.setCssStyle("color:black");
        f.setTarget("_self");
        d = [f.getHTML(), a.getName()];
        this._groupedGrid.setCellContent(b, c, d);
        this._symbolsList.updateSymbolValue(a, c, e, d);
        break;
      case 2:
        d = new HTMLIcon(Env.getAdvfnURL() + "/common/images/arrows/monitorpopup.gif", "", "jstools_menu_" + this._genSymbolIdentifier(a).id);
        d.addSubscriber(this);
        d.setCssStyle("float:left;margin-right:3px");
        f = "/l2#" + f;
        e = a.getSymbol();
        f = new HTMLAnchor(f, e);
        f.setTitle(e);
        f.setCssStyle("color:black;line-height:19px");
        d = [d.getHTML() + " " + f.getHTML(), a.getName()];
        this._groupedGrid.setCellContent(b, c, d);
        this._groupedGrid.setColumnTextOverflowEllipsis(c, !0);
        this._symbolsList.updateSymbolValue(a, c, e, d);
        break;
      case 39:
        d = [a.getDisplayMarket(), void 0];
        this._groupedGrid.setCellContent(b, c, d);
        this._symbolsList.updateSymbolValue(a, c, a.getDisplayMarket(), d);
        break;
      case 40:
        d = Env.getAdvfnURL() + "/p.php?pid\x3dm_memo\x26mid\x3d" + Env.getMonitorId() + "\x26symbol\x3d" + encodeURIComponent(a.getDisplaySymbol()) + "\x26cb\x3d" + Date.now();
        e = "" === a.getMemo().trim() ? L("mon_add_memo") : a.getMemo();
        f = new HTMLAnchor(d, e);
        f.setTitle(e);
        f.setCssStyle("color:black");
        d = [f.getHTML(), e];
        this._groupedGrid.setCellContent(b, c, d);
        this._groupedGrid.setColumnTextOverflowEllipsis(c, !0);
        this._symbolsList.updateSymbolValue(a, c, e, d);
        break;
      case 44:
        Env.isFixedMonitor() || (
          e = L("mon_remove_symbol") + a.getName() + " (" + a.getDisplaySymbol() + ")",
          d = new HTMLIcon("img_remove.png", "Remove", "jstools_del_" + this._genSymbolIdentifier(a).id),
          d.addSubscriber(this), d = [d.getHTML(), e], this._groupedGrid.setCellContent(b, c, d), this._symbolsList.updateSymbolValue(a, c, e, d)
        );
        break;
      case 66:
        Env.isFixedMonitor() || (
          e = a.getName() + " tweets", d = new HTMLIcon("img_tweets.png", "Tweets", "jstools_tweets_" + this._genSymbolIdentifier(a).id),
          d.addSubscriber(this), d = [d.getHTML(), e], this._groupedGrid.setCellContent(b, c, d), this._symbolsList.updateSymbolValue(a, c, e, d)
        );
        break;
      case 67:
        Env.isFixedMonitor() || (
          e = a.getName() + " posts", d = new HTMLIcon("img_chats.png", "Posts", "jstools_posts_" + this._genSymbolIdentifier(a).id),
          d.addSubscriber(this), d = [d.getHTML(), e], this._groupedGrid.setCellContent(b, c, d), this._symbolsList.updateSymbolValue(a, c, e, d)
        );
        break;
      case 68:
        Env.isFixedMonitor() || (
          e = a.getName() + " chats", d = new HTMLIcon("img_posts.png", "Chats", "jstools_chats_" + this._genSymbolIdentifier(a).id),
          d.setCssStyle("width: 16px; height: 16px"),
          d.addSubscriber(this), d = [d.getHTML(), e], this._groupedGrid.setCellContent(b, c, d), this._symbolsList.updateSymbolValue(a, c, e, d)
        );
        break;
      case 69:
        Env.isFixedMonitor() || (
          e = a.getName() + " announcements", d = new HTMLIcon("img_news.png", "Announcements", "jstools_announcements_" + this._genSymbolIdentifier(a).id),
          d.addSubscriber(this), d = [d.getHTML(), e], this._groupedGrid.setCellContent(b, c, d), this._symbolsList.updateSymbolValue(a, c, e, d)
        );
        break;
    }
  };
  MonitorApp.prototype._initializeCells = function () {
    var a = this._symbolsList.getItems(),
      b;
    for (b in a)
      if (a.hasOwnProperty(b))
        for (var c = a[b].getSymbol(), d = this._symbolsList.getRowBySymbol(c), e = 0; e < this._colTypes.length; e++) this._setStaticContent(c, d, e, this._colTypes[e]);
    for (a = 0; a < this._groupedGrid.getNumberColumns(); a++) this._groupedGrid.setClickableCell(0, a, this)
  };
  MonitorApp.prototype.setWindowManager = function (a) {
    this._manager = a;
    this._manager.setSize(this._width, this._height)
  };
  MonitorApp.prototype._setUpFeed = function () {
    "undefined" !== typeof this._feed && this._feed.stop();
    this._feed = new Feed(Env.getIPC());
    for (var a = [], b = 0; b < this._colTypes.length; b++)
      a.push(MonitorApp.COLS[this._colTypes[b]].getParam());
    for (var b = this._symbolsList.getSymbols(), c = 0; c < b.length; c++) {
      var d = b[c].getFeedSymbol();
      this._symbolsList.setFeedMapping(b[c], c);
      this._feed.addSymbol(d);
      this._feed.addParams(a);
      this._monitorModel[d] = { modelLastChangeTimestamp: 0, symbol: b[c], cols: [] };
    }
    var e = this;
    this._feed.onData = function (a) { e._handleFeed(a) };
    this._feed.start();
  };
  MonitorApp.prototype._handleFeed = function (a) {
    var b = parseInt(a.id / this._cols.length, 10),
      c = a.id - b * this._cols.length,
      d;
    d = a.flags & FeedContent.FLAG_UPDATE_UP ? a.flags & FeedContent.FLAG_PERIOD_UP ? MonitorApp.FLAG_UPDATE_UP_PERIOD_UP : a.flags & FeedContent.FLAG_PERIOD_DOWN ? MonitorApp.FLAG_UPDATE_UP_PERIOD_DOWN : MonitorApp.FLAG_UPDATE_UP_PERIOD_UNCHANGED : a.flags & FeedContent.FLAG_UPDATE_DOWN ? a.flags & FeedContent.FLAG_PERIOD_UP ? MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UP : a.flags & FeedContent.FLAG_PERIOD_DOWN ? MonitorApp.FLAG_UPDATE_DOWN_PERIOD_DOWN :
      MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UNCHANGED : a.flags & FeedContent.FLAG_PERIOD_UP ? MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_UP : a.flags & FeedContent.FLAG_PERIOD_DOWN ? MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_DOWN : MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_UNCHANGED;
    b = this._symbolsList.getSymbolByFeedMapping(b);
    null !== b && (b = b.getFeedSymbol(), void 0 === this._monitorModel[b].cols[c] && (this._monitorModel[b].cols[c] = {}, this._monitorModel[b].cols[c].oldValue = null), this._monitorModel[b].cols[c].currentValue = a.contents,
      this._monitorModel[b].cols[c].lastChangeTime = Clock.TIMESTAMP, this._monitorModel[b].cols[c].animationStep = null, this._monitorModel[b].cols[c].flag = d, window.modelLastChangeTimestamp = this._monitorModel[b].modelLastChangeTimestamp = Clock.TIMESTAMP)
  };
  MonitorApp.FLAG_UPDATE_UP_PERIOD_UNCHANGED = 0;
  MonitorApp.FLAG_UPDATE_UP_PERIOD_UP = 1;
  MonitorApp.FLAG_UPDATE_UP_PERIOD_DOWN = 2;
  MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UNCHANGED = 3;
  MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UP = 4;
  MonitorApp.FLAG_UPDATE_DOWN_PERIOD_DOWN = 5;
  MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_UNCHANGED = 6;
  MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_UP = 7;
  MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_DOWN = 8;
  MonitorApp.ANIMATION_SEQUENCE_MAX_TIME = 5E3;
  MonitorApp.ANIMATION_VALUE_OLD = 0;
  MonitorApp.ANIMATION_VALUE_NEW = 1;
  MonitorApp.ANIMATION_SEQUENCE_DEFAULT = [
    { stepNo: 1, textColor: Color.TEXT, bgColor: Color.UPDATED, value: MonitorApp.ANIMATION_VALUE_NEW, time: 1500 }
  ];
  MonitorApp.ANIMATION_SEQUENCE_NO_COLORS = [
    { stepNo: 1, value: MonitorApp.ANIMATION_VALUE_NEW, time: 1500 }
  ];
  MonitorApp.ANIMATION_SEQUENCE_RESET = [
    { stepNo: null, value: MonitorApp.ANIMATION_VALUE_NEW }
  ];
  MonitorApp.ANIMATION_SEQUENCE_UPDATE_DEFAULT = [
    { stepNo: 1, textColor: Color.TEXT_REVERSED, value: MonitorApp.ANIMATION_VALUE_OLD, time: 500, textBold: !0 },
    { stepNo: 2, textColor: Color.TEXT_REVERSED, value: MonitorApp.ANIMATION_VALUE_NEW, time: 1500, textBold: !0 }
  ];
  MonitorApp.ANIMATION_SEQUENCE_UPDATE_FAST = [
    { stepNo: 1, textColor: Color.TEXT_REVERSED, value: MonitorApp.ANIMATION_VALUE_NEW, time: 1500, textBold: !0 }
  ];
  MonitorApp.prototype._getAnimationSequenceStep = function (a, b) {
    for (var c = 0; c < b.length; c++)
      if (a <= b[c].time) return b[c];
    return MonitorApp.ANIMATION_SEQUENCE_RESET[0]
  };
  MonitorApp.prototype._updateValue = function (a, b) {
    var c = a.symbol;
    if ("undefined" === typeof c) return !1;
    var d = this._colTypes[b],
      e = this._getAnimationSequenceStep(Clock.TIMESTAMP - a.cols[b].lastChangeTime, this._getAnimationSequence(d));
    a.cols[b].animationStep = e.stepNo;
    var f = a.cols[b].currentValue,
      g = a.cols[b].oldValue;
    if (" " === f && null === g) return !1;
    var m = a.cols[b].flag,
      k = void 0,
      h = null;
    e.value === MonitorApp.ANIMATION_VALUE_NEW ? f !== g && (h = this._handleCellContent(g, f, c, d)) : (g = null === g ? f : g, h = this._handleCellContent(void 0, g, c, d));
    null !== h && (k = this._symbolsList.getRowBySymbol(c), this._groupedGrid.setCellContent(k, b, h), this._updateSymbolsList(d, f, c, b, h));
    void 0 === k && (k = this._symbolsList.getRowBySymbol(c));
    var h = Color.TEXT,
      l = 0 === k % 2 ? Color.MONITOR_ROW_EVEN : Color.MONITOR_ROW_ODD,
      n = !1,
      d = this._getAnimationColumnStyleOverrides(d, m, f, g);
    null !== e.stepNo ? (h = e.textColor, l = e.bgColor, n = e.textBold, n = void 0 === d.textBold ? n : d.textBold, l = void 0 === d.bgColor ? l : d.bgColor, h = void 0 === d.textColor ? h : d.textColor) : (n = void 0 === d.textBold ? n : d.textBold, h = void 0 === d.fixedColor ? h : d.fixedColor);
    e = c.getFeedSymbol();
    this._monitorModel[e].cols[b].oldValue = this._monitorModel[e].cols[b].currentValue;
    //if (f !== g)
    this._groupedGrid.setCellStyle(k, b, l, h, n);
    /*else {
      h = l;
      if ([4, 5, 16, 17].includes(b)) {
        h = Color.TEXT;
        l = undefined;
        n = false;
        this._groupedGrid.setCellStyle(k, b, l, h, n);
      }
    }*/
    this._symbolsList.setItemStyle(c, b, h, l, n);
    return !0
  };
  MonitorApp.prototype._getAnimationSequence = function (a) {
    switch (a) {
      case 0:
      case 19:
      case 20:
      case 21:
      case 22:
      case 27:
      case 41:
      case 42:
      case 43:
        return MonitorApp.ANIMATION_SEQUENCE_NO_COLORS;
      case 3:
      case 4:
      case 5:
      case 16:
        return MonitorApp.ANIMATION_SEQUENCE_UPDATE_FAST;
      case 6:
      case 7:
      case 8:
      case 36:
      case 37:
        return MonitorApp.ANIMATION_SEQUENCE_UPDATE_DEFAULT;
      default:
        return MonitorApp.ANIMATION_SEQUENCE_DEFAULT
    }
  };
  MonitorApp.prototype._getAnimationColumnStyleOverrides = function (a, b, c, d) {
    var e = {};
    switch (a) {
      case 0:
      case 19:
      case 20:
      case 21:
      case 22:
      case 27:
        break;
      case 3:
      case 4:
      case 5:
        e.textBold = !0;
        switch (b) {
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_UNCHANGED:
            e.bgColor = Color.TEXT_UP;
            break;
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UNCHANGED:
            e.bgColor = Color.TEXT_DOWN;
            break;
          case MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_UNCHANGED:
            e.bgColor = Color.TEXT_UNCHANGED
        }
        switch (b) {
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_UP:
            e.fixedColor = Color.TEXT_UP;
            break;
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_DOWN:
            e.fixedColor = Color.TEXT_DOWN;
            break;
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_UNCHANGED:
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UNCHANGED:
          case MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_UNCHANGED:
            e.fixedColor = Color.TEXT_UNCHANGED
        }
        break;
      case 6:
      case 7:
      case 8:
      case 36:
      case 37:
        e.textBold = !0;
        switch (b) {
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_UNCHANGED:
            e.bgColor = Color.TEXT_UP;
            e.fixedColor = Color.TEXT_UP;
            break;
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UNCHANGED:
            e.bgColor = Color.TEXT_DOWN;
            e.fixedColor = Color.TEXT_DOWN;
            break;
          case MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_UNCHANGED:
            e.bgColor = Color.TEXT_UNCHANGED
        }
        7 === a && (e.fixedColor = Color.TEXT, e.textBold = !1);
        break;
      case 41:
      case 42:
      case 43:
        c !== d && (e.bgColor = Color.UPDATED);
        break;
      case 16:
        switch (b) {
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_UNCHANGED:
            e.bgColor = Color.UPDATED_UP;
            break;
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UNCHANGED:
            e.bgColor = Color.UPDATED_DOWN
        }
        break;
      default:
        switch (e.textColor = Color.TEXT_REVERSED, b) {
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_UP_PERIOD_UNCHANGED:
            e.bgColor = Color.UPDATED_UP;
            break;
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_DOWN_PERIOD_UNCHANGED:
            e.bgColor = Color.UPDATED_DOWN;
            break;
          case MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_UP:
          case MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_DOWN:
          case MonitorApp.FLAG_UPDATE_UNCHANGED_PERIOD_UNCHANGED:
            e.textColor = Color.TEXT, e.bgColor = Color.UPDATED
        }
    }
    return e
  };
  MonitorApp.prototype._autoHighlight = function (a, b) {
    for (var c = 0; c < this._highlightCols.length; c++)
      this._groupedGrid.setCellStyle(a, this._highlightCols[c], b, void 0, !1);
  };
  MonitorApp.prototype._updateSymbolsList = function (a, b, c, d, e) {
    switch (a) {
      case 3:
      case 4:
      case 5:
      case 12:
      case 14:
      case 23:
      case 24:
      case 25:
      case 28:
      case 29:
      case 30:
      case 31:
      case 32:
      case 33:
      case 36:
      case 62:
        b = b.replace(/[,\s%]/gi, "");
        b = isNaN(parseFloat(b)) ? Number.NEGATIVE_INFINITY : parseFloat(b);
        break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 13:
      case 34:
      case 41:
      case 42:
      case 43:
        b = isNaN(parseFloat(b)) ? Number.NEGATIVE_INFINITY : parseFloat(b)
    }
    this._symbolsList.updateSymbolValue(c, d, b, e)
  };
  MonitorApp.prototype._handleCellContentChangeArrow = function (a) {
    a = parseFloat(a);
    var b = Env.getAdvfnURL() + "/common/images/arrows/",
      c = "",
      c = Env.getChangeArrows();
    0 < a ? (b += c.up, c = L("mon_arrow_up")) : 0 > a ? (b += c.down, c = L("mon_arrow_down")) : (b += c.no_change, c = L("mon_arrow_nochange"));
    a = new HTMLImage(b);
    a.setTitle(c);
    a.setAlternativeText(c);
    return [a.getHTML(), c]
  };
  MonitorApp.prototype._handleCellContentTradeURL = function (a, b) {
    var c = new HTMLAnchor("javascript:onselect('" + encodeURIComponent(a) + "')&&void 0", b);
    c.setCssStyle("color:inherit");
    c.setTarget("_self");
    return [c.getHTML(), void 0]
  };
  MonitorApp.prototype._handleCellContentTradeType = function (a) {
    a = /(\d{1,})/.exec(a);
    return null !== a && void 0 !== Feed.strings[a[1]] ? (a = Feed.strings[a[1]], [Utils.trunc(a, 6), a]) : null
  };
  MonitorApp.prototype._handleCellContentTime = function (a) {
    return "{l4}" === a ? [void 0, void 0] : ((a = Utils.tsToTime(parseInt(a, 10))).match(/0[0|1]:00:00/) ? ["", void 0] : [a, void 0]);
  };
  MonitorApp.prototype._handleCellContentBuySellIndex = function (a, b) {
    var c = a.split(","),
      c = (new BuySellIndex(c, [Color.TEXT_BUY, Color.TEXT_SELL, Color.TEXT_UNKNOWN])).getHTML();
    return b !== c ? [c, void 0] : null
  };
  MonitorApp.prototype._handleCellContentFlags = function (a, b) {
    var c = /(\d{1,})/.exec(b);
    if (null !== c) {
      var c = "undefined" === typeof Feed.strings[c[1]] ? "" : Feed.strings[c[1]],
        d = new HTMLAnchor(Env.getAdvfnURL() + "/p.php?pid\x3dnews\x26srcoptions%5B%5D\x3dreg_news\x26symbol\x3d/" + a, Utils.trunc(c, 5));
      d.setTitle(c);
      d.setCssStyle("color:black");
      return [d.getHTML(), void 0]
    }
    return ["", void 0]
  };
  MonitorApp.prototype._handleCellContentNews = function (a, b) {
    var c = new HTMLAnchor(Env.getAdvfnURL() + "/p.php?pid\x3dnews\x26srcoptions%5B%5D\x3dreg_news\x26symbol\x3d" + a, b);
    c.setTitle(b);
    c.setCssStyle("color:black");
    c.setTarget("_blank");
    return [c.getHTML(), b]
  };
  MonitorApp.prototype._handleCellContent = function (a, b, c, d) {
    c = c.getFeedSymbol();
    var o = this._monitorModel[c];
    c = c.split('^')[1] || c;
    switch (d) {
      case 0:
        return this._handleCellContentChangeArrow(b);
      case 13:
        return this._handleCellContentTradeURL(c, b);
      case 16:
        return this._handleCellContentTradeType(b);
      case 15:
      case 38:
        return this._handleCellContentTime(b);
      case 27:
        return this._handleCellContentBuySellIndex(b, a);
      case 35:
        return this._handleCellContentFlags(c, b);
      case 41:
      case 42:
      case 43:
        return this._handleCellContentNews(c, b);
      case 12:
      case 28:
      case 29:
      case 30:
        return "string" === typeof b, [b, void 0];
      case 4:
      case 14:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 34:
      case 37:
        return [b, void 0]
    }
    a = parseFloat(b);
    return [b, void 0]
  };
  MonitorApp.prototype._setUpColumns = function () {
    this._cols = [];
    this._colTypes = [];
    for (var a = 0; a < this._config.columns.length; a++) {
      switch (this._config.columns[a]) {
        case 1:
          this._highlightCols.push(a);
          this._titleCols.push(a);
          this._symbolCols.push(a);
          break;
        case 2:
          this._highlightCols.push(a);
          this._staticCols.push(a);
          break;
        case 0:
        case 39:
        case 40:
        case 44:
        case 66:
        case 67:
        case 68:
        case 69:
          this._staticCols.push(a);
      }
      void 0 !== MonitorApp.COLS[this._config.columns[a]] && (
        this._colTypes.push(this._config.columns[a]), this._cols.push(MonitorApp.COLS[this._config.columns[a]]))
    }
    for (var b = [], a = 0; a < this._cols.length; a++) {
      var c = this._cols[a].getWidth(),
        d = this._cols[a].getTitle().length * MonitorApp.CHAR_WIDTH;
      c < d && (c = d, this._cols[a].setWidth(c));
      c += MonitorApp.SORTING_ICON_WIDTH;
      this._defaultColumnWidths.push(c);
      b.push(this._cols[a].getAlign())
    }
    this._groupedGrid.setColumnWidths(this._defaultColumnWidths);
    this._groupedGrid.setColumnAlignments(b);
    this._groupedGrid.setTitleColumns(this._titleCols)
  };
  MonitorApp.SORTING_ICON_WIDTH = 18;
  MonitorApp.prototype._setUpHeadings = function () {
    this._headings = [];
    for (var a = 0; a < this._cols.length; a++) {
      var b = [L(this._cols[a].getTitle()), L(this._cols[a].getSubtitle())];
      this._headings.push(b);
    }
    this._groupedGrid.setHeadings(this._headings);
    this._groupedGrid.setCenteredHeadings(!0)
  };
  MonitorApp.prototype._setUpStyling = function () {
    for (var a = Env.isFixedMonitor() ? this._groupedGrid.getNumberColumns() : this._groupedGrid.getNumberColumns() - 5, b = 0; b < a; b++)
      this._groupedGrid.setCellBackgroundImage(0, b, Env.getAdvfnURL() + "/common/images/icons/sort_both.png", "no-repeat", "right center");
    this._groupedGrid.setOddStyle(Color.MONITOR_ROW_ODD, Color.TEXT);
    this._groupedGrid.setEvenStyle(Color.MONITOR_ROW_EVEN, Color.TEXT);
    this._groupedGrid.setHeadingStyle(Color.MONITOR_PURPLE, Color.TEXT_REVERSED);
    this._groupedGrid.setSubheadingStyle(Color.MONITOR_DARK_PURPLE, Color.TEXT_REVERSED);
    this._groupedGrid.setBordersStyle("0", "1px solid white", "1px solid white", "0");
    this._groupedGrid.setFontSize(13)
  };
  MonitorApp.prototype.handleIconClick = function (a, b) {
    var c = a.getId().split("_")[1],
      d = a.getId().split("_")[2],
      d = this._getSymbolIdentifier(d).symbol;
    switch (c) {
      case "del":
        this.removeRow(d);
        break;
      case "posts":
        window.open('//uk.advfn.com/cmn/fbb/threads.php3?symbol=' + d.getSymbol(), '_blank');
        break;
      case "tweets":
        window.open('//mobile.twitter.com/search?f=live&l=en&q=%23' + d.getSymbol(), '_blank');
        break;
      case "chats":
        window.open('//m.lse.co.uk/markets/shareprice/chat.asp?share=' + d.getSymbol(), '_blank');
        break;
      case "announcements":
        window.open('//www.investegate.co.uk/CompData.aspx?tab=announcements&code=' + d.getSymbol(), '_blank');
        break;
    }
  };
  MonitorApp.prototype._loadConfig = function () {
    var lookups = new SymbolLookup();
    return {
      class: "MonitorConfig",
      columns: [67, 66, 41, 1, 13, 4, 6, 8, 12, 15, 38, 18, 17, 27, 28, 29, 26, 62, 34, 14, 68, 69],
      symbols: Env.getMonitorSettings().symbols.map(lookups.mock)
    };
  };
  MonitorApp.prototype.removeRow = function (a) {
    var b = a.getDisplaySymbol();
    console.info("Removing symbol: " + b);
    this._removeRow(a);
    var handler = window.onhashchange;
    window.onhashchange = null;
    window.location.hash = window.location.hash.replace(a.getSymbol(), '').replace(/,,/g, ',');
    return setTimeout(function () { window.onhashchange = handler }, 100);
  };
  MonitorApp.prototype._initDefaultColumns = function () {
    MonitorApp.COLS[0] = new MonitorColumn("", 32, 0, Cell.ALIGN_CENTER);
    MonitorApp.COLS[1] = new MonitorColumn(L("mon_symbol"), 0, 40, Cell.ALIGN_CENTER);
    MonitorApp.COLS[2] = new MonitorColumn(L("mon_stock_name"), 0, 150, Cell.ALIGN_LEFT, "");
    MonitorApp.COLS[3] = new MonitorColumn(L("mon_chg"), Feed.P_CHANGE, 20);
    MonitorApp.COLS[4] = new MonitorColumn(L("mon_chg_pc"), Feed.P_CHANGE_PC, 20);
    MonitorApp.COLS[5] = new MonitorColumn(L("mon_cur"), Feed.P_CUR_PRICE, 20);
    MonitorApp.COLS[6] = new MonitorColumn(L("mon_bid"), Feed.P_BID_PRICE, 20);
    MonitorApp.COLS[7] = new MonitorColumn(L("mon_mid"), Feed.P_MID_PRICE, 20);
    MonitorApp.COLS[8] = new MonitorColumn(L("mon_offer"), Feed.P_OFFER_PRICE, 20);
    MonitorApp.COLS[9] = new MonitorColumn(L("mon_high"), Feed.P_HIGH_PRICE, 20);
    MonitorApp.COLS[10] = new MonitorColumn(L("mon_low"), Feed.P_LOW_PRICE, 20);
    MonitorApp.COLS[11] = new MonitorColumn(L("mon_open"), Feed.P_OPEN_PRICE, 20);
    MonitorApp.COLS[12] = new MonitorColumn(L("mon_volume"), Feed.P_VOLUME, 20, Cell.ALIGN_RIGHT);
    MonitorApp.COLS[13] = new MonitorColumn(L("mon_last_trade"), Feed.P_TRADE_PRICE_0, 20);
    MonitorApp.COLS[14] = new MonitorColumn(L("mon_trade_vol"), Feed.P_TRADE_SIZE, 20, Cell.ALIGN_RIGHT);
    MonitorApp.COLS[15] = new MonitorColumn(L("mon_traded"), Feed.P_TRADE_TIME, 20, Cell.ALIGN_CENTER);
    MonitorApp.COLS[16] = new MonitorColumn(L("mon_trade_type"), Feed.P_TRADE_TYPE, 20, Cell.ALIGN_CENTER);
    MonitorApp.COLS[17] = new MonitorColumn(L("mon_trade_high"), Feed.P_TRADE_HIGH, 20);
    MonitorApp.COLS[18] = new MonitorColumn(L("mon_trade_low"), Feed.P_TRADE_LOW, 20);
    MonitorApp.COLS[19] = new MonitorColumn(L("mon_trade_1"), Feed.P_TRADE_PRICE_1, 20);
    MonitorApp.COLS[20] = new MonitorColumn(L("mon_trade_2"), Feed.P_TRADE_PRICE_2, 20);
    MonitorApp.COLS[21] = new MonitorColumn(L("mon_trade_3"), Feed.P_TRADE_PRICE_3, 20);
    MonitorApp.COLS[22] = new MonitorColumn(L("mon_trade_4"), Feed.P_TRADE_PRICE_4, 20);
    MonitorApp.COLS[23] = new MonitorColumn(L("mon_yest_close"), Feed.P_YEST_CLOSE, 20);
    MonitorApp.COLS[24] = new MonitorColumn(L("mon_yest_bid"), Feed.P_YEST_BID, 20);
    MonitorApp.COLS[25] = new MonitorColumn(L("mon_yest_offer"), Feed.P_YEST_OFFER, 20);
    MonitorApp.COLS[26] = new MonitorColumn(L("mon_sprd_pc"), Feed.P_SPREAD_PC, 20);
    MonitorApp.COLS[27] = new MonitorColumn(L("mon_buysell_ind"), Feed.P_BUY_SELL_UNKNOWN, 20, Cell.ALIGN_RIGHT);
    MonitorApp.COLS[28] = new MonitorColumn(L("mon_buy_vol"), Feed.P_BUY_VOLUME, 20, Cell.ALIGN_RIGHT);
    MonitorApp.COLS[29] = new MonitorColumn(L("mon_sell_vol"), Feed.P_SELL_VOLUME, 20, Cell.ALIGN_RIGHT);
    MonitorApp.COLS[30] = new MonitorColumn(L("mon_unknown_vol"), Feed.P_UNKNOWN_VOLUME, 20, Cell.ALIGN_RIGHT);
    MonitorApp.COLS[31] = new MonitorColumn(L("mon_buy_pc"), Feed.P_BUY_PC, 20, Cell.ALIGN_RIGHT);
    MonitorApp.COLS[32] = new MonitorColumn(L("mon_sell_pc"), Feed.P_SELL_PC, 20, Cell.ALIGN_RIGHT);
    MonitorApp.COLS[33] = new MonitorColumn(L("mon_unknown_pc"), Feed.P_UNKNOWN_PC, 20, Cell.ALIGN_RIGHT);
    MonitorApp.COLS[34] = new MonitorColumn(L("mon_num_trades"), Feed.P_NUM_TRADES, 20, Cell.ALIGN_RIGHT);
    MonitorApp.COLS[35] = new MonitorColumn(L("mon_flags"), Feed.P_FLAGS, 20, Cell.ALIGN_CENTER, "", 75);
    MonitorApp.COLS[36] = new MonitorColumn(L("mon_open_change"), Feed.P_OPEN_CHANGE, 20);
    MonitorApp.COLS[37] = new MonitorColumn(L("mon_open_change_pc"), Feed.P_OPEN_CHANGE_PC, 20);
    MonitorApp.COLS[38] = new MonitorColumn(L("mon_last_change"), Feed.P_LAST_CHANGE_TIME, 20, Cell.ALIGN_CENTER);
    MonitorApp.COLS[39] = new MonitorColumn(L("mon_exchange"), 0, 20, Cell.ALIGN_CENTER);
    MonitorApp.COLS[40] = new MonitorColumn(L("mon_memo"), 0, 80, Cell.ALIGN_CENTER);
    MonitorApp.COLS[41] = new MonitorColumn(L("mon_news_reg"), Feed.P_NEWS_COUNT_NEWS_REG, 0, Cell.ALIGN_CENTER);
    MonitorApp.COLS[42] = new MonitorColumn(L("mon_news_non_reg"), Feed.P_NEWS_COUNT_NEWS_NON_REG, 0, Cell.ALIGN_CENTER);
    MonitorApp.COLS[43] = new MonitorColumn(L("mon_news_all"), Feed.P_NEWS_COUNT_NEWS_ALL, 0, Cell.ALIGN_CENTER);
    MonitorApp.COLS[44] = new MonitorColumn("", 0, 0, Cell.ALIGN_CENTER);
    MonitorApp.COLS[45] = new MonitorColumn("P/E", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[46] = new MonitorColumn("Mkt Cap", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[47] = new MonitorColumn("Sector", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[48] = new MonitorColumn("Op. Margin", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[49] = new MonitorColumn("PEG", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[50] = new MonitorColumn("EPS", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[51] = new MonitorColumn("EPS Growth", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[52] = new MonitorColumn("Rev Growth", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[53] = new MonitorColumn("Interest Cover", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[54] = new MonitorColumn("Net Cur Assets", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[55] = new MonitorColumn("PP Short", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[56] = new MonitorColumn("PP Long", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[57] = new MonitorColumn("Tick Size", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[58] = new MonitorColumn("Activator", 0, 20, Cell.ALIGN_LEFT);
    MonitorApp.COLS[59] = new MonitorColumn("Feed", 0, 20, Cell.ALIGN_CENTER);
    MonitorApp.COLS[60] = new MonitorColumn(L("mon_bid_size"), Feed.P_BID_SIZE, 20);
    MonitorApp.COLS[61] = new MonitorColumn(L("mon_offer_size"), Feed.P_OFFER_SIZE, 20);
    MonitorApp.COLS[62] = new MonitorColumn(L("mon_daily_vwap"), Feed.P_LSE_DAILY_VWAP, 40);
    MonitorApp.COLS[63] = new MonitorColumn(L("mon_rate_volume"), Feed.P_RATE_VOLUME, 20);
    MonitorApp.COLS[64] = new MonitorColumn(L("mon_trade_exchange"), Feed.P_TRADE_EXCHANGE, 100, Cell.ALIGN_CENTER);
    MonitorApp.COLS[65] = new MonitorColumn(L("mon_trade_buy_sell"), Feed.P_TRADE_BUY_SELL, 20, Cell.ALIGN_CENTER);
    MonitorApp.COLS[66] = new MonitorColumn("", 0, 0, Cell.ALIGN_CENTER);
    MonitorApp.COLS[67] = new MonitorColumn("", 0, 0, Cell.ALIGN_CENTER);
    MonitorApp.COLS[68] = new MonitorColumn("", 0, 0, Cell.ALIGN_CENTER);
    MonitorApp.COLS[69] = new MonitorColumn("", 0, 0, Cell.ALIGN_CENTER);
  };
  // #endregion
}).call(this);
