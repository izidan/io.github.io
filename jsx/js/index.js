var a0_0x20ca=['getSession','appName','trades','_currentApp','setFeedSymbol','feedSymbol','setSymbol','onselect','selected','getIPC','isConnected','start','LLOY','pop','getElementById','tradesApp','<iframe\x20frameborder=\x220\x22\x20scrolling=\x22no\x22\x20id=\x22tradesApp\x22\x20src=\x22?q=','\x22></iframe><br/>','appendTo','#jsToolRoot','contentWindow','app','<img\x20id=\x22zonebourse\x22\x20ondblclick=\x22javascript:marketscreener(this.src)\x22\x20style=\x22margin-left:-7px;\x22\x20src=\x22','\x22><br/>','#zonebourse','attr','display','block','staticchart','<img\x20id=\x22staticchart\x22\x20style=\x22margin-top:3px;\x20margin-left:-1px\x22\x20src=\x22','#staticchart','src','https://www1.zonebourse.com/mods_a/charts/TV/function/search?query=','&limit=99','text','exchange','full_name','https://query1.finance.yahoo.com/v7/finance/quote?region=GB&symbols=','quoteResponse','longName','trim','jsonp','description','https://www.marketscreener.com/search/instruments/equities/?aComposeInputSearch=s_','css','none','_monitorModel','apply','values','modelLastChangeTimestamp','lastChangeTimestamp','_title','_symbolsList','onsort','indexOf','_sortingColumn','_currentSorting','_groupedGrid','_fixStaticCells','_colTypes','title','currentValue','localeCompare','cols','_name','substr','min','clientWidth','&Height=','body','&Type=Custom&Intraday=1&Cycle=DAY1&Duration=6&TopMargin=10&Render=Candle&ShowCopyright=0&ShowName=1&Company=4Traders_us&Name=','&Name=','_blank','https://uk.advfn.com/p.php?pid=staticchart&width=','&height=','&t=6&vol=1&p=5&dm=2&s=L^','_root','_refresh','contentDocument','height','style','width','scrollWidth','monitor','getSymbol','concat','first','ready','undefined','reload','search','get','split','filter','prototype','username:','\x20password:','password','username','session','includes','getDay','info','market\x20is\x20currently\x20closed\x20in\x20weekend.','getMinutes','getHours','round','length','all','map','http://rpc.advfn.com/latest/API/toplist/','.json?market=L&offset=0&limit=','&site=uk&fields=symbol','cors','then','json','reduce','symbol','match','sort','join','catch','error','resolve','https://secure.advfn.com','mobile','<\x20login:','screenName','sessionId','logins','FTSE:UKX','LSE:','getTimezoneOffset','//rpc.advfn.com','protocol','replace','http','//streamws.advfn.com','ws://','streamer',':7000',':80','#000090','#CF0000','blue_up.png','green_dot.png','red_down.png','slice'];(function(_0x370f1a,_0x16d360){var _0x2703e7=function(_0x18fa88){while(--_0x18fa88){_0x370f1a['push'](_0x370f1a['shift']());}};_0x2703e7(++_0x16d360);}(a0_0x20ca,0x180));var a0_0x4752=function(_0x375f72,_0x216bcb){_0x375f72=_0x375f72-0x0;var _0x5363d5=a0_0x20ca[_0x375f72];return _0x5363d5;};if(typeof jQuery===a0_0x4752('0x0')||jQuery===null)location[a0_0x4752('0x1')](!![]);const params=new URLSearchParams(location[a0_0x4752('0x2')]);const hi=params['get']('hi')||0x3e7;const lo=params['get']('lo')||-0x3e7;const views=(params[a0_0x4752('0x3')]('v')||'')[a0_0x4752('0x4')](',');const symbols=(params[a0_0x4752('0x3')]('q')||'')[a0_0x4752('0x4')](',')[a0_0x4752('0x5')](_0x448e28=>!!_0x448e28);IPC[a0_0x4752('0x6')]['_handleDisconnect']=reset;function prompts(){return!!(user=params[a0_0x4752('0x3')]('u')||prompt(a0_0x4752('0x7'),localStorage['username'])||'')&&!!(pass=params['get']('p')||user['toPassCodes']()||prompt(user+a0_0x4752('0x8'),localStorage[a0_0x4752('0x9')])||'')?[localStorage[a0_0x4752('0xa')]=user,localStorage[a0_0x4752('0x9')]=pass]:[localStorage['username'],localStorage[a0_0x4752('0x9')]];};function reset(){delete localStorage[a0_0x4752('0xb')];if([0x0,0x6][a0_0x4752('0xc')](new Date()[a0_0x4752('0xd')]()))console[a0_0x4752('0xe')](a0_0x4752('0xf'))||setTimeout(()=>location[a0_0x4752('0x1')](),(0x3c-new Date()[a0_0x4752('0x10')]()+0x3c*0x17)*0xea60);else if(new Date()[a0_0x4752('0x11')]()<0x7||new Date()[a0_0x4752('0x11')]()>0x10)console[a0_0x4752('0xe')]('market\x20is\x20currently\x20closed.')||setTimeout(()=>location[a0_0x4752('0x1')](),(0x3c-new Date()[a0_0x4752('0x10')]())*0xea60);else setTimeout(onload,0x2710);};function onload(){if(symbols['length']===0x0)return ticks();let {username,password}=localStorage;if(!!username&&!!localStorage[a0_0x4752('0xb')])return app(username,localStorage[a0_0x4752('0xb')],symbols);if(!!!username&&!!!password)[username,password]=prompts();login(username,password)['then'](({sessionId,screenName})=>!!(localStorage[a0_0x4752('0xb')]=sessionId)?app(screenName,sessionId,symbols):void 0x0)['catch'](_0x3d5445=>delete localStorage[a0_0x4752('0x9')]&&!!_0x3d5445&&alert(_0x3d5445));};function ticks(){setTimeout(ticks,0xea60);let _0x57b4cd=Math[a0_0x4752('0x12')](0x64/(views[a0_0x4752('0x13')]||0x1));return Promise[a0_0x4752('0x14')](views[a0_0x4752('0x15')](_0x43fe61=>fetch((a0_0x4752('0x16')+_0x43fe61+a0_0x4752('0x17')+_0x57b4cd+a0_0x4752('0x18'))[a0_0x4752('0x19')]())[a0_0x4752('0x1a')](_0x1a7590=>_0x1a7590[a0_0x4752('0x1b')]())))[a0_0x4752('0x1a')]((_0xd0f43f=[])=>[...new Set(_0xd0f43f[a0_0x4752('0x1c')]((_0x44952d,_0x538573)=>_0x44952d['concat'](_0x538573['map'](_0x31570d=>_0x31570d[a0_0x4752('0x1d')])['filter'](_0x123ef9=>_0x123ef9[a0_0x4752('0x1e')](/^[A-Z]/))),[]))])['then'](_0x372855=>_0x372855[a0_0x4752('0x1f')]()[a0_0x4752('0x20')](',')!==symbols[a0_0x4752('0x1f')]()[a0_0x4752('0x20')](',')?onload(symbols['splice'](0x0,symbols[a0_0x4752('0x13')],..._0x372855)):null)[a0_0x4752('0x21')](console[a0_0x4752('0x22')]);};function login(_0x461b38,_0x82b10a){return!!!_0x461b38&&!!!_0x82b10a?Promise[a0_0x4752('0x23')]({}):a0_0x4752('0x24')[a0_0x4752('0x19')]()[a0_0x4752('0x25')](_0x461b38,_0x82b10a)['then'](_0x2a72b4=>console[a0_0x4752('0xe')](a0_0x4752('0x26'),_0x2a72b4[a0_0x4752('0x27')],_0x2a72b4[a0_0x4752('0x28')],localStorage[a0_0x4752('0x29')]=0x0)||_0x2a72b4||{});};function app(_0x3810c1,_0x48f07b,_0x56da61){let _0x3142be={'site':'uk','locale':'en_GB','monitorId':'1','appName':'monitor','timezone':'GB-Eire','indices':[a0_0x4752('0x2a')],'feedSymbol':'L^'+_0x56da61[0x0],'displaySymbol':a0_0x4752('0x2b')+_0x56da61[0x0],'timezoneOffset':new Date()[a0_0x4752('0x2c')]()*-0x3c,'rpcUrl':a0_0x4752('0x2d'),'advfnUrl':'//uk.advfn.com','streamerUrl':location[a0_0x4752('0x2e')][a0_0x4752('0x2f')](a0_0x4752('0x30'),'ws')+a0_0x4752('0x31'),'alternativeStreamerUrl':a0_0x4752('0x32')[a0_0x4752('0x33')]()+a0_0x4752('0x34'),'alternativeStreamerUrlFallback':a0_0x4752('0x32')[a0_0x4752('0x33')]()+a0_0x4752('0x35'),'colorSchema':{'up':a0_0x4752('0x36'),'down':a0_0x4752('0x37'),'unchanged':'#008000'},'changeArrows':{'up':a0_0x4752('0x38'),'no_change':a0_0x4752('0x39'),'down':a0_0x4752('0x3a')},'monitorSettings':{'indexBreakUp':!![],'orderSymbols':!![],'defaultDisplay':'1','symbols':_0x56da61[a0_0x4752('0x3b')](0x0,0x64)}};let _0x2e174a=Env[a0_0x4752('0x3c')]();if(_0x56da61[a0_0x4752('0x13')]===0x1){_0x3142be[a0_0x4752('0x3d')]=a0_0x4752('0x3e');if(_0x2e174a&&_0x2e174a[a0_0x4752('0x3f')]!=null){Env[a0_0x4752('0x40')](decodeURIComponent(_0x3142be[a0_0x4752('0x41')]));return _0x2e174a[a0_0x4752('0x3f')][a0_0x4752('0x42')](Env['getSymbol']());}}else if(!!sessionStorage[a0_0x4752('0x43')]&&_0x56da61[a0_0x4752('0x13')]<0x21)window[a0_0x4752('0x44')]=setInterval(()=>Env[a0_0x4752('0x45')]()[a0_0x4752('0x46')]()&&(clearInterval(window[a0_0x4752('0x44')]),window['onselect'](sessionStorage[a0_0x4752('0x43')])),0x3e8);_0x2e174a=new Session(_0x3810c1,_0x48f07b,_0x3142be);Env['setSession'](_0x2e174a);_0x2e174a[a0_0x4752('0x47')]();return _0x48f07b;};function onselect(_0x4f2d69=a0_0x4752('0x48')){_0x4f2d69=_0x4f2d69[a0_0x4752('0x4')]('/')[a0_0x4752('0x49')]();sessionStorage[a0_0x4752('0x43')]=_0x4f2d69;let _0x37807b=document[a0_0x4752('0x4a')](a0_0x4752('0x4b'));if(!_0x37807b)$(a0_0x4752('0x4c')+_0x4f2d69+a0_0x4752('0x4d'))[a0_0x4752('0x4e')](a0_0x4752('0x4f'));else if(_0x37807b[a0_0x4752('0x50')]['app'])_0x37807b[a0_0x4752('0x50')][a0_0x4752('0x51')](localStorage[a0_0x4752('0xa')],localStorage[a0_0x4752('0xb')],[_0x4f2d69]);if(!document[a0_0x4752('0x4a')]('zonebourse'))$(a0_0x4752('0x52')+zonebourse(_0x4f2d69)+a0_0x4752('0x53'))[a0_0x4752('0x4e')](a0_0x4752('0x4f'));else $(a0_0x4752('0x54'))[a0_0x4752('0x55')]('src',zonebourse(_0x4f2d69))['css'](a0_0x4752('0x56'),a0_0x4752('0x57'));if(!document['getElementById'](a0_0x4752('0x58')))$(a0_0x4752('0x59')+staticchart(_0x4f2d69)+'\x22>')[a0_0x4752('0x4e')](a0_0x4752('0x4f'));else $(a0_0x4752('0x5a'))[a0_0x4752('0x55')](a0_0x4752('0x5b'),staticchart(_0x4f2d69));if(isNaN(localStorage[_0x4f2d69+'zb']))fetch((a0_0x4752('0x5c')+_0x4f2d69+a0_0x4752('0x5d'))['cors']())[a0_0x4752('0x1a')](_0x514736=>_0x514736[a0_0x4752('0x5e')]()[a0_0x4752('0x1a')](_0xc834c3=>_0xc834c3['jsonp']()))['then'](_0x16f7ad=>_0x16f7ad['filter'](_0x2c0cf4=>_0x2c0cf4[a0_0x4752('0x1d')]===_0x4f2d69&&_0x2c0cf4[a0_0x4752('0x5f')][a0_0x4752('0x1e')](/gb\.png/))[0x0])[a0_0x4752('0x1a')]((_0x5ae7cf={})=>!!_0x5ae7cf[a0_0x4752('0x60')]?Promise[a0_0x4752('0x23')](_0x5ae7cf['full_name']):fetch((a0_0x4752('0x61')+_0x4f2d69+'.L')[a0_0x4752('0x19')]())[a0_0x4752('0x1a')](_0x54abbc=>_0x54abbc[a0_0x4752('0x1b')]())['then'](_0x5ac956=>_0x5ac956[a0_0x4752('0x62')]['result'][0x0])[a0_0x4752('0x1a')](_0x476907=>_0x476907[a0_0x4752('0x63')]['replace'](/\s(plc|ltd|limited|corp|company|inc|oy|hldg|grp|sa|ord)/gi,'')[a0_0x4752('0x2f')](/amp;/g,'')[a0_0x4752('0x64')]())[a0_0x4752('0x1a')](_0x1ebe68=>!_0x1ebe68?Promise['resolve']():fetch(('https://www1.zonebourse.com/mods_a/charts/TV/function/search?query='+_0x1ebe68+a0_0x4752('0x5d'))[a0_0x4752('0x19')]())[a0_0x4752('0x1a')](_0x19b3a4=>_0x19b3a4[a0_0x4752('0x5e')]()[a0_0x4752('0x1a')](_0x995e61=>_0x995e61[a0_0x4752('0x65')]()))[a0_0x4752('0x1a')](_0x11192e=>_0x11192e[a0_0x4752('0x5')](_0x49da45=>(_0x49da45['symbol']===_0x4f2d69||_0x49da45[a0_0x4752('0x66')]['match'](_0x1ebe68))&&_0x49da45[a0_0x4752('0x5f')][a0_0x4752('0x1e')](/gb\.png/))[0x0])[a0_0x4752('0x1a')]((_0x5ae7cf={})=>!!_0x5ae7cf['full_name']?_0x5ae7cf[a0_0x4752('0x60')]:fetch((a0_0x4752('0x67')+_0x1ebe68)[a0_0x4752('0x19')]())[a0_0x4752('0x1a')](_0x4e6755=>_0x4e6755[a0_0x4752('0x5e')]())[a0_0x4752('0x1a')]((_0x4c3a25='')=>Promise['resolve']((_0x4c3a25['match'](/<td[^>]+>GFRD<\/td><td[^>]+><img[^>]+\/gb\.png"><\/td><td><a[^>]+codezb="(\d{6,})/)||[])[0x1])))))[a0_0x4752('0x1a')](_0x488926=>!(localStorage[_0x4f2d69+'zb']=_0x488926)?$('#zonebourse')[a0_0x4752('0x68')]('display',a0_0x4752('0x69')):$(a0_0x4752('0x54'))['attr'](a0_0x4752('0x5b'),zonebourse(_0x4f2d69))[a0_0x4752('0x68')](a0_0x4752('0x56'),'block'))[a0_0x4752('0x21')](_0x1066b9=>$(a0_0x4752('0x54'))[a0_0x4752('0x68')](a0_0x4752('0x56'),a0_0x4752('0x69')));};function resort(){let _0x4d1e3a=Env[a0_0x4752('0x3c')]()[a0_0x4752('0x3f')];if(!_0x4d1e3a||!_0x4d1e3a[a0_0x4752('0x6a')])return;let _0x79a035=Math['max'][a0_0x4752('0x6b')](Math,Object[a0_0x4752('0x6c')](_0x4d1e3a[a0_0x4752('0x6a')])['map'](_0x4c4af3=>_0x4c4af3[a0_0x4752('0x6d')]));if(window[a0_0x4752('0x6e')]===_0x79a035)return;window['lastChangeTimestamp']=_0x79a035;let _0x25167a=_0x4d1e3a['_cols'][a0_0x4752('0x15')](_0x5574d2=>_0x5574d2[a0_0x4752('0x6f')]);let _0x6a19bb=_0x4d1e3a[a0_0x4752('0x70')];let _0x4f1293=new Date()[a0_0x4752('0x11')]();if(!!!sessionStorage['onsort'])sessionStorage[a0_0x4752('0x71')]='-Chg%';let _0x2f0f09=_0x25167a[a0_0x4752('0x72')](sessionStorage[a0_0x4752('0x71')][a0_0x4752('0x4')]('-')['pop']());let _0x4cdc20=Number(sessionStorage['onsort'][0x0]==='-');if(_0x6a19bb[a0_0x4752('0x73')]<0x0)_0x6a19bb['setSortingColumn'](_0x2f0f09,_0x4cdc20);else if(_0x6a19bb[a0_0x4752('0x73')]>=0x0)sessionStorage['onsort']=(_0x6a19bb[a0_0x4752('0x74')]?'-':'')+_0x25167a[_0x6a19bb['_sortingColumn']];_0x4d1e3a[a0_0x4752('0x75')]['sortGrid']();_0x4d1e3a[a0_0x4752('0x76')]();let _0x433933=_0x4d1e3a[a0_0x4752('0x77')][a0_0x4752('0x72')](0xd);document[a0_0x4752('0x78')]=Object[a0_0x4752('0x6c')](_0x4d1e3a[a0_0x4752('0x6a')])['sort']((_0x1670e2,_0xef8649)=>(_0xef8649['cols'][_0x6a19bb[a0_0x4752('0x73')]]||{'currentValue':''})[a0_0x4752('0x79')][a0_0x4752('0x7a')]((_0x1670e2['cols'][_0x6a19bb[a0_0x4752('0x73')]]||{'currentValue':''})[a0_0x4752('0x79')]))[a0_0x4752('0x1c')]((_0x1ae1b5,_0x1e7fa8)=>_0x1e7fa8[a0_0x4752('0x7b')][_0x433933]?_0x1ae1b5+',\x20'+_0x1e7fa8['symbol'][a0_0x4752('0x7c')]+':\x20'+_0x1e7fa8['cols'][_0x433933]['currentValue']:_0x1ae1b5,'')[a0_0x4752('0x7d')](0x2);};function zonebourse(_0x23e336){_0x23e336=localStorage[_0x23e336+'zb']||_0x23e336;return'https://www.zonebourse.com/zbcache/charts/ObjectChart.aspx?Width='+Math[a0_0x4752('0x7e')](document['body'][a0_0x4752('0x7f')]+0x11,0x320)+a0_0x4752('0x80')+Math['round'](Math[a0_0x4752('0x7e')](document[a0_0x4752('0x81')][a0_0x4752('0x7f')],0x1f4))+a0_0x4752('0x82')+_0x23e336;}function marketscreener(_0x58f1e3){let _0x3d01b7=_0x58f1e3[a0_0x4752('0x4')](a0_0x4752('0x83'))[0x1];if(!!!_0x3d01b7||isNaN(_0x3d01b7))return;open('https://www.marketscreener.com/mods_a/charts/TV/inc_dyna_graph.php?c='+_0x3d01b7,a0_0x4752('0x84'));}function staticchart(_0x52fcbe){return a0_0x4752('0x85')+Math['min'](document['body'][a0_0x4752('0x7f')]+0x11,0x320)+a0_0x4752('0x86')+Math['round'](Math[a0_0x4752('0x7e')](document[a0_0x4752('0x81')][a0_0x4752('0x7f')],0x1f4)*0.6)+a0_0x4752('0x87')+_0x52fcbe;}setInterval(function(){Env[a0_0x4752('0x3c')]()&&Env['getSession']()[a0_0x4752('0x88')]&&Env[a0_0x4752('0x3c')]()[a0_0x4752('0x88')][a0_0x4752('0x89')]();},0xc8);setInterval(function(){if(!Env[a0_0x4752('0x3c')]())return;let _0x2b3d12=document[a0_0x4752('0x4a')](a0_0x4752('0x4b'));if(_0x2b3d12&&_0x2b3d12[a0_0x4752('0x8a')][a0_0x4752('0x81')]){_0x2b3d12['style'][a0_0x4752('0x8b')]=$(document[a0_0x4752('0x4a')](a0_0x4752('0x4b'))[a0_0x4752('0x8a')][a0_0x4752('0x81')])['css']('height');_0x2b3d12[a0_0x4752('0x8c')][a0_0x4752('0x8d')]=_0x2b3d12[a0_0x4752('0x8a')][a0_0x4752('0x81')][a0_0x4752('0x8e')]+'px';}},0x3e8);setInterval(function(){if(!Env[a0_0x4752('0x3c')]())return;if(Env['getAppName']()==a0_0x4752('0x8f'))resort();else if(Env['getSymbol']()&&!!Env[a0_0x4752('0x90')]()[a0_0x4752('0x90')]())document[a0_0x4752('0x78')]=[Env[a0_0x4752('0x90')]()[a0_0x4752('0x90')]()][a0_0x4752('0x91')]($('tr')[a0_0x4752('0x92')]()[a0_0x4752('0x5e')]()[a0_0x4752('0x4')](/\n/)['filter'](_0x5d02a2=>_0x5d02a2[a0_0x4752('0x1e')](/^\d+[,\.]/))[a0_0x4752('0x3b')](0x0,0x4)[a0_0x4752('0x15')](_0xd1a4fb=>_0xd1a4fb[a0_0x4752('0x64')]()))[a0_0x4752('0x20')]('\x20');},0xbb8);$(document)[a0_0x4752('0x93')](onload);