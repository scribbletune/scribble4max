var templateAPIpass=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){!function(t,e){for(var n in e)t[n]=e[n]}(e,function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);e.scaleMaps={major:"WWHWWW",minor:"WHWWHW","major pentatonic":"WWAW","ionian pentatonic":"HHWH","mixolydian pentatonic":"HHWA",ritusen:"WAWW",egyptian:"WAWA","neopolitan major pentatonic":"HHHH","vietnamese 1":"AWWH",pelog:"HWHH",kumoijoshi:"HHWH",hirajoshi:"WHHH",iwato:"HHHH","in-sen":"HHWA","lydian pentatonic":"HWHH","malkos raga":"AWAW","locrian pentatonic":"AWHH","minor pentatonic":"AWWA","minor six pentatonic":"AWWW","flat three pentatonic":"WHHW","flat six pentatonic":"WWAH",scriabin:"HAAW","whole tone pentatonic":"HWWW","lydian #5P pentatonic":"HWWA","lydian dominant pentatonic":"HWHA","minor #7M pentatonic":"AWWH","super locrian pentatonic":"AHWH","minor hexatonic":"WHWWH",augmented:"AHAHA","major blues":"WHHAW",piongio:"WAWWH","prometheus neopolitan":"HAWAH",prometheus:"WWWAH","mystery #1":"HAWWW","six tone symmetric":"HAHAH","whole tone":"WWWWW","messiaen's mode #5":"HHHHH","minor blues":"AWHHA","locrian major":"WWHHWW","double harmonic lydian":"HAWHHA","harmonic minor":"WHWWHA",altered:"HWHWWW","locrian #2":"WHWHWW","mixolydian b6":"WWHWHW","lydian dominant":"WWWHWH",lydian:"WWWHWW","lydian augmented":"WWWWHW","dorian b2":"HWWWWH","melodic minor":"WHWWWW",locrian:"HWWHWW",ultralocrian:"HWHWWH","locrian 6":"HWWHAH","augmented heptatonic":"AHHWHA","romanian minor":"WHAHWH","dorian #4":"WHAHWH","lydian diminished":"WHAHWW",phrygian:"HWWWHW","leading whole tone":"WWWWWH","lydian minor":"WWWHHW","phrygian dominant":"HAHWHW",balinese:"HWWWHA","neopolitan major":"HWWWWW",aeolian:"WHWWHW","harmonic major":"WWHWHA","double harmonic major":"HAHWHA",dorian:"WHWWWH","hungarian minor":"WHAHHA","hungarian major":"AHWHWH",oriental:"HAHHAH",flamenco:"HWHWHA","todi raga":"HWAHHA",mixolydian:"WWHWWH",persian:"HAHHWA",enigmatic:"HAWWWH","major augmented":"WWHAHW","lydian #9":"AHWHWW","messiaen's mode #4":"HHAHHHA","purvi raga":"HAHHHHA","spanish heptatonic":"HWHHWHW",bebop:"WWHWWHH","bebop minor":"WHHHWWH","bebop major":"WWHWHHW","bebop locrian":"HWWHHHW","minor bebop":"WHWWHWH",diminished:"WHWHWHW",ichikosucho:"WWHHHWW","minor six diminished":"WHWWHHW","half-whole diminished":"HWHWHWH","kafi raga":"AHHWWHH","messiaen's mode #6":"WWHHWWH","composite blues":"WHHHHHWH","messiaen's mode #3":"WHHWHHWH","messiaen's mode #7":"HHHWHHHHW",chromatic:"HHHHHHHHHHH"},e.scales=function(){return Object.keys(e.scaleMaps)},e.chordMaps={"5th":[0,7],fifth:[0,7],"M7#5sus4":[0,5,8,11],"7#5sus4":[0,5,8,10],sus4:[0,5,7],"suspended fourth":[0,5,7],M7sus4:[0,5,7,11],"7sus4":[0,5,7,10],"suspended fourth seventh":[0,5,7,10],"7no5":[0,4,10],aug:[0,4,8],"+":[0,4,8],"+5":[0,4,8],augmented:[0,4,8],Mb6:[0,4,20],M7b6:[0,4,8,11],"major seventh flat sixth":[0,4,8,11],"maj7#5":[0,4,8,11],"maj7+5":[0,4,8,11],"+maj7":[0,4,8,11],"augmented seventh":[0,4,8,11],"7#5":[0,4,8,10],"+7":[0,4,8,10],"7aug":[0,4,8,10],aug7:[0,4,8,10],"7b13":[0,4,10,20],M:[0,4,7],major:[0,4,7],maj7:[0,4,7,11],"Δ":[0,4,7,11],ma7:[0,4,7,11],M7:[0,4,7,11],Maj7:[0,4,7,11],"major seventh":[0,4,7,11],"7th":[0,4,7,10],dom:[0,4,7,10],"dominant seventh":[0,4,7,10],add6:[0,4,7,9],add13:[0,4,7,9],M6:[0,4,7,9],sixth:[0,4,7,9],"7add6":[0,4,7,10,21],"7add13":[0,4,7,10,21],"7b6":[0,4,7,8,10],Mb5:[0,4,6],M7b5:[0,4,6,11],"7b5":[0,4,6,10],"maj#4":[0,4,7,11,18],"Δ#4":[0,4,7,11,18],"Δ#11":[0,4,7,11,18],lydian:[0,4,7,11,18],"7#11":[0,4,7,10,18],"7#4":[0,4,7,10,18],"lydian dominant seventh":[0,4,7,10,18],"M6#11":[0,4,7,9,18],M6b5:[0,4,7,9,18],"6#11":[0,4,7,9,18],"6b5":[0,4,7,9,18],"7#11b13":[0,4,7,10,18,20],"7b5b13":[0,4,7,10,18,20],"m#5":[0,3,8],"m+":[0,3,8],mb6:[0,3,8],mb6M7:[0,3,8,11],"m7#5":[0,3,8,10],m:[0,3,7],min:[0,3,7],"-":[0,4,7],minor:[0,3,7],"m/ma7":[0,3,7,11],"m/maj7":[0,3,7,11],mM7:[0,3,7,11],mMaj7:[0,3,7,11],"m/M7":[0,3,7,11],"mΔ":[0,3,7,11],"minor/major seventh":[0,3,7,11],m7:[0,3,7,10],min7:[0,3,7,10],mi7:[0,3,7,10],"minor seventh":[0,3,7,10],m6:[0,3,7,9],"minor sixth":[0,3,7,9],mMaj7b6:[0,3,7,8,11],dim:[0,3,6],"°":[0,3,6],o:[0,3,6],diminished:[0,3,6],oM7:[0,3,6,11],m7b5:[0,3,6,10],"ø":[0,3,6,10],dim7:[0,3,6,9],"°7":[0,3,6,9],o7:[0,3,6,9],"diminished seventh":[0,3,6,9],o7M7:[0,3,6,9,11],"4th":[0,5,10,15],quartal:[0,5,10,15],madd4:[0,3,5,7],m7add11:[0,3,7,10,17],m7add4:[0,3,7,10,17],"+add#9":[0,4,8,15],"7#5#9":[0,4,8,10,15],"7alt":[0,4,8,10,15],"7#9":[0,4,7,10,15],"dominant sharp ninth":[0,4,7,10,15],"13#9":[0,4,7,10,15,21],"7#9b13":[0,4,7,10,15,20],"maj7#9#11":[0,4,7,11,15,18],"7#9#11":[0,4,7,10,15,18],"7b5#9":[0,4,7,10,15,18],"13#9#11":[0,4,7,10,15,18,21],"7#9#11b13":[0,4,7,10,15,18,20],sus2:[0,2,7],"suspended second":[0,2,7],"M9#5sus4":[0,5,8,11,14],sus24:[0,2,5,7],sus4add9:[0,2,5,7],M9sus4:[0,5,7,11,14],"11th":[0,7,10,14,17],eleventh:[0,7,10,14,17],"9sus4":[0,5,7,10,14],"9sus":[0,5,7,10,14],"13sus4":[0,5,7,10,14,21],"13sus":[0,5,7,10,14,21],"9no5":[0,4,10,14],"13no5":[0,4,10,14,21],"M#5add9":[0,4,8,14],"+add9":[0,4,8,14],"maj9#5":[0,4,8,11,14],"Maj9#5":[0,4,8,11,14],"9#5":[0,4,8,10,14],"9+":[0,4,8,10,14],"9b13":[0,4,10,14,20],Madd9:[0,4,7,14],add9:[0,4,7,14],add2:[0,4,7,14],maj9:[0,4,7,11,14],"Δ9":[0,4,7,11,14],"major ninth":[0,4,7,11,14],"9th":[0,4,7,10,14],"dominant ninth":[0,4,7,10,14],"6/9":[0,4,7,9,14],"sixth/ninth":[0,4,7,9,14],maj13:[0,4,7,11,14,21],Maj13:[0,4,7,11,14,21],"major thirteenth":[0,4,7,11,14,21],M7add13:[0,4,7,9,11,14],"13th":[0,4,7,10,14,21],"dominant thirteenth":[0,4,7,10,14,21],M9b5:[0,4,6,11,14],"9b5":[0,4,6,10,14],"13b5":[0,4,6,9,10,14],"9#5#11":[0,4,8,10,14,18],"maj9#11":[0,4,7,11,14,18],"Δ9#11":[0,4,7,11,14,18],"major sharp eleventh (lydian)":[0,4,7,11,14,18],"9#11":[0,4,7,10,14,18],"9+4":[0,4,7,10,14,18],"9#4":[0,4,7,10,14,18],"M13#11":[0,4,7,11,14,18,21],"maj13#11":[0,4,7,11,14,18,21],"M13+4":[0,4,7,11,14,18,21],"M13#4":[0,4,7,11,14,18,21],"13#11":[0,4,7,10,14,18,21],"13+4":[0,4,7,10,14,18,21],"13#4":[0,4,7,10,14,18,21],"9#11b13":[0,4,7,10,14,18,20],"9b5b13":[0,4,7,10,14,18,20],"m9#5":[0,3,8,10,14],madd9:[0,3,7,14],mMaj9:[0,3,7,11,14],m9:[0,3,7,10,14],"minor ninth":[0,3,7,10,14],m69:[0,3,7,9,14],m13:[0,3,7,10,14,21],"minor thirteenth":[0,3,7,10,14,21],mMaj9b6:[0,3,7,8,11,14],m9b5:[0,2,3,6,10],m11A:[0,3,8,10,14,17],m11:[0,3,7,10,14,17],"minor eleventh":[0,3,7,10,14,17],b9sus:[0,5,7,10,14],phryg:[0,5,7,10,13],"suspended fourth flat ninth":[0,5,7,10,13],"11b9":[0,7,10,13,17],"7sus4b9b13":[0,5,7,10,13,20],"7b9b13sus4":[0,5,7,10,13,20],alt7:[0,4,10,13],altered:[0,4,10,13],"7#5b9":[0,4,8,10,13],Maddb9:[0,4,7,13],M7b9:[0,4,7,11,13],"7b9":[0,4,7,10,13],"dominant flat ninth":[0,4,7,10,13],"13b9":[0,4,7,10,13,21],"7b9b13":[0,4,7,10,13,20],"7#5b9#11":[0,4,8,10,13,18],"7b9#11":[0,4,7,10,13,18],"7b5b9":[0,4,7,10,13,18],"13b9#11":[0,4,7,10,13,18,21],"7b9b13#11":[0,4,7,10,13,18,20],"7b9#11b13":[0,4,7,10,13,18,20],"7b5b9b13":[0,4,7,10,13,18,20],mb6b9:[0,3,8,13],"7b9#9":[0,4,7,10,13,15]},e.chords=function(){return Object.keys(e.chordMaps)},e.scale=function(t){var n=t.match(/([A-Ga-g])(b|#)?([0-9])\s([a-zA-Z0-9\s\#]+)/),i=n[1],o=n[2]||"",a=i+o+n[3],s=n[4];if(!e.scaleMaps[s])throw"No such scale "+s;for(var c=r.Util.midiPitchFromNote(a),u=[a],h=0;h<e.scaleMaps[s].length;h++){"A"===e.scaleMaps[s][h]?c+=3:"W"===e.scaleMaps[s][h]?c+=2:c+=1;var l=r.Util.noteFromMidiPitch(c,!o||"b"===o);l=l[0].toUpperCase()+l.slice(1),u.push(l)}return u},e.chord=function(t){var n=t.match(/([A-Ga-g])(b|#)?([a-zA-Z0-9\-\+\#\s\Δ\°\ø\(\)\/]+)(\_[0-9])?/),r=n[1],i=n[2]||"",o=n[4]&&n[4].replace(/\D/,"")||"4",a=r+i+o,s=n[3];if(!e.chordMaps[s])throw"No such chord "+s;var c=e.scale(a+" chromatic").concat(e.scale(r+i+(+o+1)+" chromatic")),u=[];return e.chordMaps[s].forEach((function(t){u.push(c[t])})),u}},function(t,e,n){(function(t){var n={};!function(t){var e=t.DEFAULT_VOLUME=90,n=(t.DEFAULT_DURATION=128,t.DEFAULT_CHANNEL=0,{midi_letter_pitches:{a:21,b:23,c:12,d:14,e:16,f:17,g:19},midiPitchFromNote:function(t){var e=/([a-g])(#+|b+)?([0-9]+)$/i.exec(t),r=e[1].toLowerCase(),i=e[2]||"";return 12*parseInt(e[3],10)+n.midi_letter_pitches[r]+("#"==i.substr(0,1)?1:-1)*i.length},ensureMidiPitch:function(t){return"number"!=typeof t&&/[^0-9]/.test(t)?n.midiPitchFromNote(t):parseInt(t,10)},midi_pitches_letter:{12:"c",13:"c#",14:"d",15:"d#",16:"e",17:"f",18:"f#",19:"g",20:"g#",21:"a",22:"a#",23:"b"},midi_flattened_notes:{"a#":"bb","c#":"db","d#":"eb","f#":"gb","g#":"ab"},noteFromMidiPitch:function(t,e){var r,i=0,o=t;return e=e||!1,t>23&&(o=t-12*(i=Math.floor(t/12)-1)),r=n.midi_pitches_letter[o],e&&r.indexOf("#")>0&&(r=n.midi_flattened_notes[r]),r+i},mpqnFromBpm:function(t){var e=Math.floor(6e7/t),n=[];do{n.unshift(255&e),e>>=8}while(e);for(;n.length<3;)n.push(0);return n},bpmFromMpqn:function(t){if(void 0!==t[0])for(var e=0,n=t.length-1;n>=0;++e,--n)t[e];return Math.floor(6e7/t)},codes2Str:function(t){return String.fromCharCode.apply(null,t)},str2Bytes:function(t,e){if(e)for(;t.length/2<e;)t="0"+t;for(var n=[],r=t.length-1;r>=0;r-=2){var i=0===r?t[r]:t[r-1]+t[r];n.unshift(parseInt(i,16))}return n},translateTickTime:function(t){for(var e=127&t;t>>=7;)e<<=8,e|=127&t|128;for(var n=[];n.push(255&e),128&e;)e>>=8;return n}}),r=function(t){if(!this)return new r(t);!t||null===t.type&&void 0===t.type||null===t.channel&&void 0===t.channel||null===t.param1&&void 0===t.param1||(this.setTime(t.time),this.setType(t.type),this.setChannel(t.channel),this.setParam1(t.param1),this.setParam2(t.param2))};r.NOTE_OFF=128,r.NOTE_ON=144,r.AFTER_TOUCH=160,r.CONTROLLER=176,r.PROGRAM_CHANGE=192,r.CHANNEL_AFTERTOUCH=208,r.PITCH_BEND=224,r.prototype.setTime=function(t){this.time=n.translateTickTime(t||0)},r.prototype.setType=function(t){if(t<r.NOTE_OFF||t>r.PITCH_BEND)throw new Error("Trying to set an unknown event: "+t);this.type=t},r.prototype.setChannel=function(t){if(t<0||t>15)throw new Error("Channel is out of bounds.");this.channel=t},r.prototype.setParam1=function(t){this.param1=t},r.prototype.setParam2=function(t){this.param2=t},r.prototype.toBytes=function(){var t=[],e=this.type|15&this.channel;return t.push.apply(t,this.time),t.push(e),t.push(this.param1),void 0!==this.param2&&null!==this.param2&&t.push(this.param2),t};var i=function(t){if(!this)return new i(t);this.setTime(t.time),this.setType(t.type),this.setData(t.data)};i.SEQUENCE=0,i.TEXT=1,i.COPYRIGHT=2,i.TRACK_NAME=3,i.INSTRUMENT=4,i.LYRIC=5,i.MARKER=6,i.CUE_POINT=7,i.CHANNEL_PREFIX=32,i.END_OF_TRACK=47,i.TEMPO=81,i.SMPTE=84,i.TIME_SIG=88,i.KEY_SIG=89,i.SEQ_EVENT=127,i.prototype.setTime=function(t){this.time=n.translateTickTime(t||0)},i.prototype.setType=function(t){this.type=t},i.prototype.setData=function(t){this.data=t},i.prototype.toBytes=function(){if(!this.type)throw new Error("Type for meta-event not specified.");var t=[];if(t.push.apply(t,this.time),t.push(255,this.type),Array.isArray(this.data))t.push(this.data.length),t.push.apply(t,this.data);else if("number"==typeof this.data)t.push(1,this.data);else if(null!==this.data&&void 0!==this.data){t.push(this.data.length);var e=this.data.split("").map((function(t){return t.charCodeAt(0)}));t.push.apply(t,e)}else t.push(0);return t};var o=function(t){if(!this)return new o(t);var e=t||{};this.events=e.events||[]};o.START_BYTES=[77,84,114,107],o.END_BYTES=[0,255,47,0],o.prototype.addEvent=function(t){return this.events.push(t),this},o.prototype.addNoteOn=o.prototype.noteOn=function(t,i,o,a){return this.events.push(new r({type:r.NOTE_ON,channel:t,param1:n.ensureMidiPitch(i),param2:a||e,time:o||0})),this},o.prototype.addNoteOff=o.prototype.noteOff=function(t,i,o,a){return this.events.push(new r({type:r.NOTE_OFF,channel:t,param1:n.ensureMidiPitch(i),param2:a||e,time:o||0})),this},o.prototype.addNote=o.prototype.note=function(t,e,n,r,i){return this.noteOn(t,e,r,i),n&&this.noteOff(t,e,n,i),this},o.prototype.addChord=o.prototype.chord=function(t,e,n,r){if(!Array.isArray(e)&&!e.length)throw new Error("Chord must be an array of pitches");return e.forEach((function(e){this.noteOn(t,e,0,r)}),this),e.forEach((function(e,r){0===r?this.noteOff(t,e,n):this.noteOff(t,e)}),this),this},o.prototype.setInstrument=o.prototype.instrument=function(t,e,n){return this.events.push(new r({type:r.PROGRAM_CHANGE,channel:t,param1:e,time:n||0})),this},o.prototype.setTempo=o.prototype.tempo=function(t,e){return this.events.push(new i({type:i.TEMPO,data:n.mpqnFromBpm(t),time:e||0})),this},o.prototype.toBytes=function(){var t=0,e=[],r=o.START_BYTES,i=o.END_BYTES;this.events.forEach((function(n){var r=n.toBytes();t+=r.length,e.push.apply(e,r)})),t+=i.length;var a=n.str2Bytes(t.toString(16),4);return r.concat(a,e,i)};var a=function(t){if(!this)return new a(t);var e=t||{};if(e.ticks){if("number"!=typeof e.ticks)throw new Error("Ticks per beat must be a number!");if(e.ticks<=0||e.ticks>=32768||e.ticks%1!=0)throw new Error("Ticks per beat must be an integer between 1 and 32767!")}this.ticks=e.ticks||128,this.tracks=e.tracks||[]};a.HDR_CHUNKID="MThd",a.HDR_CHUNK_SIZE="\0\0\0",a.HDR_TYPE0="\0\0",a.HDR_TYPE1="\0",a.prototype.addTrack=function(t){return t?(this.tracks.push(t),this):(t=new o,this.tracks.push(t),t)},a.prototype.toBytes=function(){var t=this.tracks.length.toString(16),e=a.HDR_CHUNKID+a.HDR_CHUNK_SIZE;return parseInt(t,16)>1?e+=a.HDR_TYPE1:e+=a.HDR_TYPE0,e+=n.codes2Str(n.str2Bytes(t,2)),e+=String.fromCharCode(this.ticks/256,this.ticks%256),this.tracks.forEach((function(t){e+=n.codes2Str(t.toBytes())})),e},t.Util=n,t.File=a,t.Track=o,t.Event=r,t.MetaEvent=i}(n),null!==t?t.exports=n:null!==e?e=n:this.Midi=n}).call(this,n(4)(t))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isNote=function(t){return/^[a-gA-G](?:#|b)?\d$/.test(t)},e.expandStr=function(t){return t=(t=(t=(t=JSON.stringify(t.split(""))).replace(/,"\[",/g,", [")).replace(/"\[",/g,"[")).replace(/,"\]"/g,"]"),JSON.parse(t)},e.shuffle=function(t){var e=t.length-1;return t.forEach((function(n,r){var i=Math.round(Math.random()*e);t[r]=t[i],t[i]=n})),t},e.sizzleMap=function(t){void 0===t&&(t=127);var e=Math.PI,n=[e/6,e/4,e/3,e/2,2*e/3,3*e/4,5*e/6,e],r=[0,e/6,e/4,e/3,e/2,2*e/3,3*e/4,5*e/6];return r.reverse(),n.concat(r).map((function(e){return Math.round(Math.sin(e)*t)}))},e.pickOne=function(t){return t.length>1?t[Math.round(Math.random())]:t[0]},e.dice=function(){return!!Math.round(Math.random())},e.flat=function(t){return t.reduce((function(t,e){return t.concat(e)}),[])}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0);e.scales=r.scales,e.modes=r.scales,e.chords=r.chords,e.scale=r.scale,e.mode=r.scale,e.chord=r.chord;var i=n(5);e.clip=i.clip;var o=n(6);e.getChordDegrees=o.getChordDegrees,e.getChordsByProgression=o.getChordsByProgression,e.progression=o.progression;var a=n(7);e.arp=a.arp;var s=n(8);e.max=s.max},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n(0),a={"1m":2048,"2m":4096,"3m":6144,"4m":8192,"1n":512,"2n":256,"4n":128,"8n":64,"16n":32},s=function(t){if(i.isNote(t))return[t];if(Array.isArray(t))return t.forEach((function(t){if(!i.isNote(t))throw new TypeError("array must comprise valid notes")})),t;if(!Array.isArray(t)){var e=o.chord(t);if(e&&e.length)return e}throw new Error("Chord "+t+" not found")};e.clip=function(t){if("string"==typeof(t=r(r({},{notes:["C4"],pattern:"x",shuffle:!1,sizzle:!1,sizzleReps:1,arpegiate:!1,subdiv:"4n",amp:100,accentLow:70,randomNotes:null,effects:[],offlineRendering:!1}),t||{})).notes&&(t.notes=t.notes.replace(/\s{2,}/g," "),t.notes=t.notes.split(" ")),t.notes=t.notes.map(s),/[^x\-_\[\]R]/.test(t.pattern))throw new TypeError("pattern can only comprise x - _ [ ], found "+t.pattern);t.shuffle&&(t.notes=i.shuffle(t.notes)),t.randomNotes&&"string"==typeof t.randomNotes&&(t.randomNotes=t.randomNotes.replace(/\s{2,}/g," ").split(/\s/)),t.randomNotes&&(t.randomNotes=t.randomNotes.map(s));var e=[],n=0,o=function(r,i){r.forEach((function(r){if("string"==typeof r){var a=null;"x"===r&&(a=t.notes[n],n++),"R"===r&&(Math.round(Math.random())||t.randomNotes)&&(a=t.randomNotes?t.randomNotes[Math.round(Math.random()*(t.randomNotes.length-1))]:t.notes[n],n++),"x"!==r&&"-"!==r&&"R"!==r||e.push({note:a,length:i,level:"R"!==r||t.randomNotes?t.amp:t.accentLow}),"_"===r&&e.length&&(e[e.length-1].length+=i),n===t.notes.length&&(n=0)}Array.isArray(r)&&o(r,i/r.length)}))};if(o(i.expandStr(t.pattern),a[t.subdiv]||a["4n"]),t.sizzle){var c=[],u=!0===t.sizzle?"sin":t.sizzle,h=e.length,l=t.amp,p=t.sizzleReps,d=l/(h/p);if("sin"===u||"cos"===u)for(var f=0;f<h;f++){var m=Math[u](f*Math.PI/(h/p))*l;c.push(Math.round(Math.abs(m)))}if("rampUp"===u)for(m=0,f=0;f<h;f++)f%(h/p)==0?m=0:m+=d,c.push(Math.round(Math.abs(m)));if("rampDown"===u)for(m=l,f=0;f<h;f++)f%(h/p)==0?m=l:m-=d,c.push(Math.round(Math.abs(m)));for(f=0;f<c.length;f++)e[f].level=c[f]?c[f]:1}if(t.accent){if(/[^x\-]/.test(t.accent))throw new TypeError("Accent can only have x and - characters");for(var H=0,W=0,v=e;W<v.length;W++){var y=v[W];m="x"===t.accent[H]?t.amp:t.accentLow,t.sizzle&&(m=(y.level+m)/2),y.level=Math.round(m),(H+=1)===t.accent.length&&(H=0)}}return e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(2);e.getChordDegrees=function(t){var e={ionian:["I","ii","iii","IV","V","vi","vii°"],dorian:["i","ii","III","IV","v","vi°","VII"],phrygian:["i","II","III","iv","v°","VI","vii"],lydian:["I","II","iii","iv°","V","vi","vii"],mixolydian:["I","ii","iii°","IV","v","vi","VII"],aeolian:["i","ii°","III","iv","v","VI","VII"],locrian:["i°","II","iii","iv","V","VI","vii"],"melodic minor":["i","ii","III+","IV","V","vi°","vii°"],"harmonic minor":["i","ii°","III+","iv","V","VI","vii°"]};return e.major=e.ionian,e.minor=e.aeolian,e[t]||[]};var o={i:0,ii:1,iii:2,iv:3,v:4,vi:5,vii:6};e.getChordsByProgression=function(t,e){var n=t.split(" ");n[0].match(/\d/)||(n[0]+="4",t=n.join(" "));var i=r.scale(t);return e.replace(/\s*,+\s*/g," ").split(" ").map((function(t,e){var n=function(t){var e=t.replace(/\W/g,""),n="M";return e.toLowerCase()===e&&(n="m"),t.indexOf("°")>-1?n+"7b5":t.indexOf("+")>-1?n+"#5":t.indexOf("7")>-1?"M"===n?"Maj7":"m7":n}(t),r=o[t.replace(/\W|\d/g,"").toLowerCase()],a=i[r],s=a.replace(/\D+/,"");return a.replace(/\d/,"")+n+"-"+s})).toString().replace(/,/g," ")};var a=function(t){var e=t.T,n=t.P,r=t.D;return function(t){void 0===t&&(t=4);var o=[];o.push(i.pickOne(e));var a=1;for(a<t-1&&(o.push(i.pickOne(n)),a++),a<t-1&&i.dice()&&(o.push(i.pickOne(n)),a++),a<t-1&&(o.push(i.pickOne(r)),a++),a<t-1&&(o.push(i.pickOne(n)),a++),a<t-1&&(o.push(i.pickOne(r)),a++),a<t-1&&i.dice()&&(o.push(i.pickOne(n)),a++);a<t;)o.push(i.pickOne(r)),a++;return o}},s=a({T:["I","vi"],P:["ii","IV"],D:["V"]}),c=a({T:["i","VI"],P:["ii","iv"],D:["V"]});e.progression=function(t,e){return void 0===e&&(e=4),"major"===t||"M"===t?s(e):"minor"===t||"m"===t?c(e):void 0}},function(t,e,n){"use strict";var r=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=function(t,e){var n=function(t){return t.replace(/\d/,"")+(+t.replace(/\D/g,"")+1)},i=t.map(n),o=i.map(n);return r(t,i,o).slice(0,e)};e.arp=function(t){var e=[],n={count:4,order:"0123",chords:""};if("string"==typeof t)n.chords=t;else{if(t.order&&t.order.match(/\D/g))throw new TypeError("Invalid value for order");if(t.count>8||t.count<2)throw new TypeError("Invalid value for count");t.count&&!t.order&&(n.order=Array.from(Array(t.count).keys()).join("")),Object.assign(n,t)}if("string"==typeof n.chords)for(var a=function(t){var a=o(i.chord(t),n.count),s=n.order.split("").map((function(t){return a[t]}));e=r(e,s)},s=0,c=n.chords.split(" ");s<c.length;s++)a(c[s]);else{if(!Array.isArray(n.chords))throw new TypeError("Invalid value for chords");for(var u=function(t){var i=o(t,n.count),a=n.order.split("").map((function(t){return i[t]}));e=r(e,a)},h=0,l=n.chords;h<l.length;h++)u(l[h])}return e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);e.max=function(t,e){void 0===e&&(e="live_set view highlighted_clip_slot clip");var n=new LiveAPI(e),i=t.reduce((function(t,e){return t+e.length}),0);n.set("loop_end",i/512),n.call("remove_notes",0,1,258,127),n.call("set_notes");var o=t.reduce((function(t,e){return t+(e.note?e.note.length:0)}),0);n.call("notes",o);var a=0;t.forEach((function(t){t.note?(t.note.forEach((function(e){n.call("note",r.Util.midiPitchFromNote(e),a.toFixed(2).toString(),(t.length/512).toFixed(2).toString(),t.level||100,0)})),a+=t.length/512):a+=t.length/512})),n.call("done")}}]))},,,function(t,e,n){var r=n(0);t.exports=function(){var t=function(t){var e=new Dict(t),n=e.get("scribbleObjects");void 0===n.length&&(n=[]).push(e.get("scribbleObjects"));for(var r=[],i=0;i<n.length;i++){var o=n[i].get("note");if(!1===Array.isArray(o)&&null!==o){var a=[];a.push(o),r.push({note:a,length:n[i].get("length"),level:n[i].get("level")})}else r.push({note:o,length:n[i].get("length"),level:n[i].get("level")})}return r}("clip"),e=new LiveAPI("live_set view detail_clip");r.max(t,e?"live_set view detail_clip":"live_set view highlighted_clip_slot clip")}}]);