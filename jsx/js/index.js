var a0_0x4eb4=['display','block','<img\x20id=\x22staticchart\x22\x20style=\x22margin-top:3px;\x20margin-left:-1px\x22\x20src=\x22','#staticchart','cors','no-referrer','text','symbol','exchange','match','full_name','https://query1.finance.yahoo.com/v7/finance/quote?region=GB&symbols=','quoteResponse','result','longName','none','&limit=99','jsonp','description','max','apply','_monitorModel','map','lastChangeTimestamp','_cols','_title','_symbolsList','onsort','-Chg%','indexOf','_sortingColumn','setSortingColumn','_currentSorting','sortGrid','_fixStaticCells','_colTypes','title','cols','currentValue','localeCompare','_name','substr','https://www.zonebourse.com/zbcache/charts/ObjectChart.aspx?Width=','min','body','clientWidth','&Name=','https://www.marketscreener.com/mods_a/charts/TV/inc_dyna_graph.php?c=','_blank','https://uk.advfn.com/p.php?pid=staticchart&width=','&height=','round','&t=6&vol=1&p=5&dm=2&s=L^','getIPC','_connected','now','_lastTimestamp','_refresh','tradesApp','style','height','contentDocument','width','getAppName','getSymbol','ready','undefined','reload','search','get','split','filter','prototype','_handleDisconnect','log','username','password','username:','toPassCodes','\x20password:','includes','info','market\x20is\x20currently\x20closed\x20in\x20weekend.','getHours','market\x20is\x20currently\x20closed.','getMinutes','length','then','catch','json','forEach','keys','slice','values','reduce','concat','sort','join','splice','error','mobile','sessionId','en_GB','monitor','GB-Eire','FTSE:UKX','//rpc.advfn.com','//uk.advfn.com','protocol','replace','http','//streamws.advfn.com','ws://','streamer',':7000',':80','#000090','#CF0000','#008000','red_down.png','getSession','trades','feedSymbol','_currentApp','clearState','_createTradesTable','onselect','setSession','start','LLOY','pop','getElementById','appendTo','#jsToolRoot','#tradesApp','attr','src','?q=','zonebourse','<img\x20id=\x22zonebourse\x22\x20ondblclick=\x22javascript:marketscreener(this.src)\x22\x20style=\x22margin-left:-7px;\x22\x20src=\x22','\x22><br/>','#zonebourse','css'];(function(_0x4bc47f,_0x8f43f6){var _0x2ba8b7=function(_0x921a17){while(--_0x921a17){_0x4bc47f['push'](_0x4bc47f['shift']());}};_0x2ba8b7(++_0x8f43f6);}(a0_0x4eb4,0xd1));var a0_0x330e=function(_0x1a026c,_0x2492de){_0x1a026c=_0x1a026c-0x0;var _0x2d8f05=a0_0x4eb4[_0x1a026c];return _0x2d8f05;};if(typeof jQuery===a0_0x330e('0x0')||jQuery===null)location[a0_0x330e('0x1')](!![]);const params=new URLSearchParams(location[a0_0x330e('0x2')]);const hi=params['get']('hi')||0x3e7;const lo=params[a0_0x330e('0x3')]('lo')||-0x3e7;const symbols=(params[a0_0x330e('0x3')]('q')||'')[a0_0x330e('0x4')](',')[a0_0x330e('0x5')](_0x2a62f2=>!!_0x2a62f2);IPC[a0_0x330e('0x6')][a0_0x330e('0x7')]=reset;function prompts(){console[a0_0x330e('0x8')](localStorage[a0_0x330e('0x9')],localStorage[a0_0x330e('0xa')]);return!!(user=params['get']('u')||prompt(a0_0x330e('0xb'),localStorage[a0_0x330e('0x9')])||'')&&!!(pass=params[a0_0x330e('0x3')]('p')||user[a0_0x330e('0xc')]()||prompt(user+a0_0x330e('0xd'),localStorage['password'])||'')?[localStorage[a0_0x330e('0x9')]=user,localStorage['password']=pass]:[localStorage[a0_0x330e('0x9')],localStorage['password']];};function reset(){delete localStorage[localStorage[a0_0x330e('0x9')]];if([0x0,0x6][a0_0x330e('0xe')](new Date()['getDay']()))console[a0_0x330e('0xf')](a0_0x330e('0x10'))||setTimeout(()=>location[a0_0x330e('0x1')](),(0x3c-new Date()['getMinutes']()+0x3c*0x17)*0xea60);else if(new Date()[a0_0x330e('0x11')]()<0x7||new Date()[a0_0x330e('0x11')]()>0x10)console['info'](a0_0x330e('0x12'))||setTimeout(()=>location[a0_0x330e('0x1')](),(0x3c-new Date()[a0_0x330e('0x13')]())*0xea60);else setTimeout(onload,0xbb8);};function onload(){if(symbols[a0_0x330e('0x14')]===0x0)return ticks();let {username,password}=localStorage;if(!!username&&!!localStorage[username])return app(username,localStorage[username],symbols);if(!!!username&&!!!password)[username,password]=prompts();login(username,password)[a0_0x330e('0x15')](({sessionId,screenName})=>!!(localStorage[username]=sessionId)?app(screenName,sessionId,symbols):setTimeout(reset,0x7530))[a0_0x330e('0x16')](()=>onload(prompts()));};function ticks(){setTimeout(ticks,0xea60);return fetch('https://ticks.herokuapp.com')[a0_0x330e('0x15')](_0x36d133=>_0x36d133[a0_0x330e('0x17')]())['then'](_0x18efd7=>params[a0_0x330e('0x18')]((_0x123498,_0x435fdb)=>_0x18efd7[_0x435fdb]=isNaN(_0x123498)||!_0x18efd7[_0x435fdb]?[]:Object[a0_0x330e('0x19')](_0x18efd7[_0x435fdb])['filter'](_0x160fa3=>!['tg','tl'][a0_0x330e('0xe')](_0x435fdb)||_0x18efd7[_0x435fdb][_0x160fa3]<=hi&&_0x18efd7[_0x435fdb][_0x160fa3]>=lo)[a0_0x330e('0x1a')](0x0,_0x123498||0x63))||[...new Set(Object[a0_0x330e('0x1b')](_0x18efd7)[a0_0x330e('0x1c')]((_0x36c35c,_0x18804f)=>Array['isArray'](_0x18804f)?_0x36c35c[a0_0x330e('0x1d')](_0x18804f):_0x36c35c,[]))]['slice'](0x0,0x64))[a0_0x330e('0x15')](_0x3fa411=>_0x3fa411[a0_0x330e('0x1e')]()[a0_0x330e('0x1f')](',')!==symbols[a0_0x330e('0x1e')]()[a0_0x330e('0x1f')](',')?onload(symbols[a0_0x330e('0x20')](0x0,symbols[a0_0x330e('0x14')],..._0x3fa411)):null)[a0_0x330e('0x16')](console[a0_0x330e('0x21')]);};function login(_0x43cf68,_0x57cc9c){return!!!_0x43cf68&&!!!_0x57cc9c?Promise['resolve']():'https://ticks.herokuapp.com'[a0_0x330e('0x22')](_0x43cf68,_0x57cc9c)['then'](_0x1dfc6a=>{if(!!_0x1dfc6a[a0_0x330e('0x23')])return _0x1dfc6a;throw _0x1dfc6a;})['then'](_0x5d038f=>console[a0_0x330e('0xf')](_0x5d038f['screenName'],_0x5d038f[a0_0x330e('0x23')])||_0x5d038f);};function app(_0x5dc607,_0x5b885e,_0x1d9517){let _0x25ea7e={'site':'uk','locale':a0_0x330e('0x24'),'monitorId':'1','appName':a0_0x330e('0x25'),'timezone':a0_0x330e('0x26'),'indices':[a0_0x330e('0x27')],'feedSymbol':'L^'+_0x1d9517[0x0],'displaySymbol':'LSE:'+_0x1d9517[0x0],'timezoneOffset':new Date()['getTimezoneOffset']()*-0x3c,'rpcUrl':a0_0x330e('0x28'),'advfnUrl':a0_0x330e('0x29'),'streamerUrl':location[a0_0x330e('0x2a')][a0_0x330e('0x2b')](a0_0x330e('0x2c'),'ws')+a0_0x330e('0x2d'),'alternativeStreamerUrl':a0_0x330e('0x2e')[a0_0x330e('0x2f')]()+a0_0x330e('0x30'),'alternativeStreamerUrlFallback':a0_0x330e('0x2e')[a0_0x330e('0x2f')]()+a0_0x330e('0x31'),'colorSchema':{'up':a0_0x330e('0x32'),'down':a0_0x330e('0x33'),'unchanged':a0_0x330e('0x34')},'changeArrows':{'up':'blue_up.png','no_change':'green_dot.png','down':a0_0x330e('0x35')},'monitorSettings':{'indexBreakUp':!![],'orderSymbols':!![],'defaultDisplay':'1','symbols':_0x1d9517[a0_0x330e('0x1a')](0x0,0x64)}};let _0x2ea05c=Env[a0_0x330e('0x36')]();if(_0x1d9517[a0_0x330e('0x14')]===0x1){_0x25ea7e['appName']=a0_0x330e('0x37');if(_0x2ea05c){if(_0x2ea05c['_bootConfiguration'][a0_0x330e('0x38')]==='L^'+_0x1d9517[0x0])return;else if(_0x2ea05c[a0_0x330e('0x39')]!=null){_0x2ea05c[a0_0x330e('0x39')][a0_0x330e('0x3a')]();_0x2ea05c[a0_0x330e('0x39')][a0_0x330e('0x3b')]();}}}else if(!!sessionStorage[a0_0x330e('0x3c')]&&_0x1d9517[a0_0x330e('0x14')]<0x21)setTimeout(()=>window[a0_0x330e('0x3c')](sessionStorage['onselect']),0x1388);_0x2ea05c=new Session(_0x5dc607,_0x5b885e,_0x25ea7e);Env[a0_0x330e('0x3d')](_0x2ea05c);_0x2ea05c[a0_0x330e('0x3e')]();return _0x5b885e;}function onselect(_0x464a2f=a0_0x330e('0x3f')){_0x464a2f=_0x464a2f[a0_0x330e('0x4')]('/')[a0_0x330e('0x40')]();sessionStorage['onselect']=_0x464a2f;if(!document[a0_0x330e('0x41')]('tradesApp'))$('<iframe\x20frameborder=\x220\x22\x20scrolling=\x22no\x22\x20id=\x22tradesApp\x22\x20src=\x22?q='+_0x464a2f+'\x22></iframe><br/>')[a0_0x330e('0x42')](a0_0x330e('0x43'));else $(a0_0x330e('0x44'))[a0_0x330e('0x45')](a0_0x330e('0x46'),a0_0x330e('0x47')+_0x464a2f);if(!document[a0_0x330e('0x41')](a0_0x330e('0x48')))$(a0_0x330e('0x49')+zonebourse(_0x464a2f)+a0_0x330e('0x4a'))['appendTo']('#jsToolRoot');else $(a0_0x330e('0x4b'))[a0_0x330e('0x45')]('src',zonebourse(_0x464a2f))[a0_0x330e('0x4c')](a0_0x330e('0x4d'),a0_0x330e('0x4e'));if(!document[a0_0x330e('0x41')]('staticchart'))$(a0_0x330e('0x4f')+staticchart(_0x464a2f)+'\x22>')[a0_0x330e('0x42')](a0_0x330e('0x43'));else $(a0_0x330e('0x50'))[a0_0x330e('0x45')]('src',staticchart(_0x464a2f));if(isNaN(localStorage[_0x464a2f+'zb']))fetch(('https://www1.zonebourse.com/mods_a/charts/TV/function/search?query='+_0x464a2f+'&limit=99')[a0_0x330e('0x51')](),{'referrerPolicy':a0_0x330e('0x52')})[a0_0x330e('0x15')](_0x3f69e0=>_0x3f69e0[a0_0x330e('0x53')]()[a0_0x330e('0x15')](_0x116709=>_0x116709['jsonp']()))['then'](_0x17a75f=>_0x17a75f[a0_0x330e('0x5')](_0x4ca47b=>_0x4ca47b[a0_0x330e('0x54')]===_0x464a2f&&_0x4ca47b[a0_0x330e('0x55')][a0_0x330e('0x56')](/gb\.png/))[0x0])['then']((_0x49939f={})=>!!(localStorage[_0x464a2f+'zb']=_0x49939f[a0_0x330e('0x57')])?$(a0_0x330e('0x4b'))[a0_0x330e('0x45')](a0_0x330e('0x46'),zonebourse(_0x464a2f))[a0_0x330e('0x4c')]('display','block'):fetch((a0_0x330e('0x58')+_0x464a2f+'.L')[a0_0x330e('0x51')](),{'referrerPolicy':a0_0x330e('0x52')})[a0_0x330e('0x15')](_0x416617=>_0x416617[a0_0x330e('0x17')]())['then'](_0x422521=>_0x422521[a0_0x330e('0x59')][a0_0x330e('0x5a')][0x0])[a0_0x330e('0x15')](_0x8b685b=>_0x8b685b[a0_0x330e('0x5b')][a0_0x330e('0x2b')](/\s(plc|ltd|limited|corp|company|inc|oy|hldg|grp|sa|ord)/gi,'')['replace'](/amp;/g,'')['trim']())[a0_0x330e('0x15')](_0x1c7975=>!_0x1c7975?$(a0_0x330e('0x4b'))[a0_0x330e('0x4c')](a0_0x330e('0x4d'),a0_0x330e('0x5c')):fetch(('https://www1.zonebourse.com/mods_a/charts/TV/function/search?query='+_0x1c7975+a0_0x330e('0x5d'))['cors'](),{'referrerPolicy':a0_0x330e('0x52')})[a0_0x330e('0x15')](_0x15e2f6=>_0x15e2f6[a0_0x330e('0x53')]()['then'](_0x1f0bee=>_0x1f0bee[a0_0x330e('0x5e')]()))['then'](_0x13c8a0=>_0x13c8a0[a0_0x330e('0x5')](_0x243e7b=>(_0x243e7b[a0_0x330e('0x54')]===_0x464a2f||_0x243e7b[a0_0x330e('0x5f')][a0_0x330e('0x56')](_0x1c7975))&&_0x243e7b['exchange'][a0_0x330e('0x56')](/gb\.png/))[0x0])[a0_0x330e('0x15')]((_0x49939f={})=>!(localStorage[_0x464a2f+'zb']=_0x49939f[a0_0x330e('0x57')])?$('#zonebourse')[a0_0x330e('0x4c')]('display',a0_0x330e('0x5c')):$(a0_0x330e('0x4b'))[a0_0x330e('0x45')](a0_0x330e('0x46'),zonebourse(_0x464a2f))[a0_0x330e('0x4c')](a0_0x330e('0x4d'),'block')))['catch'](_0x102067=>$(a0_0x330e('0x4b'))[a0_0x330e('0x4c')](a0_0x330e('0x4d'),a0_0x330e('0x5c'))));};function resort(){let _0x2eb76d=Env[a0_0x330e('0x36')]()['_currentApp'];if(!_0x2eb76d||!_0x2eb76d['_monitorModel'])return;let _0x444e15=Math[a0_0x330e('0x60')][a0_0x330e('0x61')](Math,Object['values'](_0x2eb76d[a0_0x330e('0x62')])[a0_0x330e('0x63')](_0x50d30c=>_0x50d30c['modelLastChangeTimestamp']));if(window[a0_0x330e('0x64')]===_0x444e15)return;window[a0_0x330e('0x64')]=_0x444e15;let _0x262440=_0x2eb76d[a0_0x330e('0x65')]['map'](_0x554681=>_0x554681[a0_0x330e('0x66')]);let _0x5ebe9d=_0x2eb76d[a0_0x330e('0x67')];let _0xc904a6=new Date()[a0_0x330e('0x11')]();if(!!!sessionStorage[a0_0x330e('0x68')])sessionStorage[a0_0x330e('0x68')]=a0_0x330e('0x69');let _0x2bde10=_0x262440[a0_0x330e('0x6a')](sessionStorage['onsort'][a0_0x330e('0x4')]('-')['pop']());let _0x4d1178=Number(sessionStorage[a0_0x330e('0x68')][0x0]==='-');if(_0x5ebe9d[a0_0x330e('0x6b')]<0x0)_0x5ebe9d[a0_0x330e('0x6c')](_0x2bde10,_0x4d1178);else if(_0x5ebe9d[a0_0x330e('0x6b')]>=0x0)sessionStorage['onsort']=(_0x5ebe9d[a0_0x330e('0x6d')]?'-':'')+_0x262440[_0x5ebe9d[a0_0x330e('0x6b')]];_0x2eb76d['_groupedGrid'][a0_0x330e('0x6e')]();_0x2eb76d[a0_0x330e('0x6f')]();let _0x3ae2e0=_0x2eb76d[a0_0x330e('0x70')][a0_0x330e('0x6a')](0xd);document[a0_0x330e('0x71')]=Object[a0_0x330e('0x1b')](_0x2eb76d['_monitorModel'])[a0_0x330e('0x1e')]((_0x3d8f96,_0x231a66)=>(_0x231a66[a0_0x330e('0x72')][_0x5ebe9d['_sortingColumn']]||{'currentValue':''})[a0_0x330e('0x73')][a0_0x330e('0x74')]((_0x3d8f96[a0_0x330e('0x72')][_0x5ebe9d[a0_0x330e('0x6b')]]||{'currentValue':''})[a0_0x330e('0x73')]))[a0_0x330e('0x1c')]((_0x21f7f9,_0x34bd66)=>_0x34bd66[a0_0x330e('0x72')][_0x3ae2e0]?_0x21f7f9+',\x20'+_0x34bd66['symbol'][a0_0x330e('0x75')]+':\x20'+_0x34bd66[a0_0x330e('0x72')][_0x3ae2e0][a0_0x330e('0x73')]:_0x21f7f9,'')[a0_0x330e('0x76')](0x2);};function zonebourse(_0x225b0e){_0x225b0e=localStorage[_0x225b0e+'zb']||_0x225b0e;return a0_0x330e('0x77')+Math[a0_0x330e('0x78')](document[a0_0x330e('0x79')]['clientWidth']+0x11,0x320)+'&Height='+Math['round'](Math['min'](document['body'][a0_0x330e('0x7a')],0x1f4))+'&Type=Custom&Intraday=1&Cycle=DAY1&Duration=6&TopMargin=10&Render=Candle&ShowCopyright=0&ShowName=1&Company=4Traders_us&Name='+_0x225b0e;}function marketscreener(_0x59e11e){let _0x429fe2=_0x59e11e[a0_0x330e('0x4')](a0_0x330e('0x7b'))[0x1];if(!!!_0x429fe2||isNaN(_0x429fe2))return;open(a0_0x330e('0x7c')+_0x429fe2,a0_0x330e('0x7d'));}function staticchart(_0x55b3b6){return a0_0x330e('0x7e')+Math[a0_0x330e('0x78')](document['body']['clientWidth']+0x11,0x320)+a0_0x330e('0x7f')+Math[a0_0x330e('0x80')](Math[a0_0x330e('0x78')](document['body'][a0_0x330e('0x7a')],0x1f4)*0.6)+a0_0x330e('0x81')+_0x55b3b6;}setInterval(function(){!Env['getIPC']()||Env[a0_0x330e('0x82')]()[a0_0x330e('0x83')]!==!![]||Date[a0_0x330e('0x84')]()-Env['getIPC']()[a0_0x330e('0x85')]>0x7530?reset():void 0x0;},0x7530);setInterval(function(){Env[a0_0x330e('0x36')]()&&Env[a0_0x330e('0x36')]()['_root']&&Env[a0_0x330e('0x36')]()['_root'][a0_0x330e('0x86')]();},0xc8);setInterval(function(){if(!Env[a0_0x330e('0x36')]())return;let _0x5c4eb0=document[a0_0x330e('0x41')](a0_0x330e('0x87'));if(_0x5c4eb0&&_0x5c4eb0['contentDocument']['body']){_0x5c4eb0[a0_0x330e('0x88')][a0_0x330e('0x89')]=$(document['getElementById'](a0_0x330e('0x87'))[a0_0x330e('0x8a')]['body'])[a0_0x330e('0x4c')]('height');_0x5c4eb0[a0_0x330e('0x88')][a0_0x330e('0x8b')]=_0x5c4eb0[a0_0x330e('0x8a')][a0_0x330e('0x79')]['scrollWidth']+'px';}},0x3e8);setInterval(function(){if(!Env[a0_0x330e('0x36')]())return;if(Env[a0_0x330e('0x8c')]()=='monitor')resort();else if(Env['getSymbol']()&&!!Env['getSymbol']()[a0_0x330e('0x8d')]())document[a0_0x330e('0x71')]=[Env[a0_0x330e('0x8d')]()[a0_0x330e('0x8d')]()][a0_0x330e('0x1d')]($('tr')['first']()['text']()['split'](/\n/)['filter'](_0x5dacd8=>_0x5dacd8['match'](/^\d+[,\.]/))['slice'](0x0,0x4)['map'](_0x32787d=>_0x32787d['trim']()))[a0_0x330e('0x1f')]('\x20');},0xbb8);$(document)[a0_0x330e('0x8e')](onload);