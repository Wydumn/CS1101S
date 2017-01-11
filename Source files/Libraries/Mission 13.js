var interpreter=5;var mission_type="sound";var timeout="30000";(function(r){function e(r){if(Array.isArray===undefined){return r instanceof Array}else{return Array.isArray(r)}}function t(r,e){return[r,e]}function u(r){return e(r)&&r.length===2}function a(r){if(u(r)){return r[0]}else{throw new Error("head(xs) expects a pair as "+"argument xs, but encountered "+r)}}function i(r){if(u(r)){return r[1]}else{throw new Error("tail(xs) expects a pair as "+"argument xs, but encountered "+r)}}function o(r){if(e(r)){if(r.length===0){return true}else if(r.length===2){return false}else{throw new Error("is_empty_list(xs) expects empty list "+"or pair as argument xs, but encountered "+r)}}else{return false}}function s(r){for(;;r=i(r)){if(o(r)){return true}else if(!u(r)){return false}}}function f(){var r=[];for(var e=arguments.length-1;e>=0;e--){r=t(arguments[e],r)}return r}function c(r){var e=[];while(!o(r)){e.push(a(r));r=i(r)}return e}function h(r){if(r.length===0){return[]}var e=[];for(var n=r.length-1;n>=0;n=n-1){e=t(r[n],e)}return e}function l(r){for(var e=0;!o(r);++e){r=i(r)}return e}function d(r,e){return o(e)?[]:t(r(a(e)),d(r,i(e)))}function v(r,e){function n(r,e,u){if(r<0){return u}else{return n(r-1,e,t(e(r),u))}}return n(r-1,e,[])}function p(r,e){if(!s(e)){throw new Error("for_each expects a list as argument xs, but "+"encountered "+e)}for(;!o(e);e=i(e)){r(a(e))}return true}function g(r){if(e(r)&&r.length===0){return"[]"}else{if(!u(r)){return r.toString()}else{return"["+g(a(r))+","+g(i(r))+"]"}}}function b(r){if(!s(r)){throw new Error("reverse(xs) expects a list as argument xs, but "+"encountered "+r)}var e=[];for(;!o(r);r=i(r)){e=t(a(r),e)}return e}function m(r,e){if(o(r)){return e}else{return t(a(r),m(i(r),e))}}function w(r,e){for(;!o(e);e=i(e)){if(a(e)===r){return e}}return[]}function x(r,e){if(o(e)){return[]}else{if(r===a(e)){return i(e)}else{return t(a(e),x(r,i(e)))}}}function k(r,e){if(o(e)){return[]}else{if(r===a(e)){return k(r,i(e))}else{return t(a(e),k(r,i(e)))}}}var _=k;function y(r,n){if(u(r)&&u(n)){return y(a(r),a(n))&&y(i(r),i(n))}else if(e(r)&&r.length===0&&e(n)&&n.length===0){return true}else{return r===n}}function M(r,e){if(o(e)){return false}else if(y(r,a(a(e)))){return a(e)}else{return M(r,i(e))}}function I(r,e){if(o(e)){return e}else{if(r(a(e))){return t(a(e),I(r,i(e)))}else{return I(r,i(e))}}}function S(r,e){if(r>e){return[]}else{return t(r,S(r+1,e))}}function C(r,e){if(e<0){throw new Error("list_ref(xs, n) expects a positive integer as "+"argument n, but encountered "+e)}for(;e>0;--e){r=i(r)}return a(r)}function E(r,e,n){if(o(n)){return e}else{return r(a(n),E(r,e,i(n)))}}function A(r,e){if(u(r)){r[0]=e;return undefined}else{throw new Error("set_head(xs,x) expects a pair as "+"argument xs, but encountered "+r)}}function P(r,e){if(u(r)){r[1]=e;return undefined}else{throw new Error("set_tail(xs,x) expects a pair as "+"argument xs, but encountered "+r)}}function R(r){var e=r;if(is_array(r)&&r.length>2){e="["+r.toString()+"]"}else if(is_array(r)&&o(r)){e="[]"}else if(u(r)){e="";var n=function(r){if(o(r)){return"[]"}else if(u(r)){return"["+n(a(r))+", "+n(i(r))+"]"}else{return r.toString()}};e=n(r)}if(typeof e==="function"&&e.toString){console.log(e.toString())}else{console.log(e)}return r}var z={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encLookup:[],Init:function(){for(var r=0;r<4096;r++){this.encLookup[r]=this.chars[r>>6]+this.chars[r&63]}},Encode:function(r){var e=r.length;var t="";var u=0;while(e>2){n=r[u]<<16|r[u+1]<<8|r[u+2];t+=this.encLookup[n>>12]+this.encLookup[n&4095];e-=3;u+=3}if(e>0){var a=(r[u]&252)>>2;var i=(r[u]&3)<<4;if(e>1)i|=(r[++u]&240)>>4;t+=this.chars[a];t+=this.chars[i];if(e==2){var o=(r[u++]&15)<<2;o|=(r[u]&192)>>6;t+=this.chars[o]}if(e==1)t+="=";t+="="}return t}};z.Init();var L=function(r){this.data=[];this.wav=[];this.dataURI="";this.header={chunkId:[82,73,70,70],chunkSize:0,format:[87,65,86,69],subChunk1Id:[102,109,116,32],subChunk1Size:16,audioFormat:1,numChannels:1,sampleRate:8e3,byteRate:0,blockAlign:0,bitsPerSample:8,subChunk2Id:[100,97,116,97],subChunk2Size:0};function e(r){return[r&255,r>>8&255,r>>16&255,r>>24&255]}function n(r){return[r&255,r>>8&255]}function t(r){var e=[];var n=0;var t=r.length;for(var u=0;u<t;u++){e[n++]=r[u]&255;e[n++]=r[u]>>8&255}return e}this.Make=function(r){if(r instanceof Array)this.data=r;this.header.blockAlign=this.header.numChannels*this.header.bitsPerSample>>3;this.header.byteRate=this.header.blockAlign*this.sampleRate;this.header.subChunk2Size=this.data.length*(this.header.bitsPerSample>>3);this.header.chunkSize=36+this.header.subChunk2Size;this.wav=this.header.chunkId.concat(e(this.header.chunkSize),this.header.format,this.header.subChunk1Id,e(this.header.subChunk1Size),n(this.header.audioFormat),n(this.header.numChannels),e(this.header.sampleRate),e(this.header.byteRate),n(this.header.blockAlign),n(this.header.bitsPerSample),this.header.subChunk2Id,e(this.header.subChunk2Size),this.header.bitsPerSample==16?t(this.data):this.data);this.dataURI="data:audio/wav;base64,"+z.Encode(this.wav)};if(r instanceof Array)this.Make(r)};var U=32e3;function h(r){var e=[];for(var n=r.length-1;n>=0;n--){e=t(r[n],e)}return e}function c(r){var e=[];while(!o(r)){e.push(a(r));r=i(r)}return e}function l(r){var e=0;while(!o(r)){e++;r=i(r)}return e}function m(r,e){var n=c(r);var t=c(e);var u=n.concat(t);return h(u)}function d(r,e){var n=c(e);for(var t=0;t<n.length;t++){n[t]=r(n[t])}return h(n)}function F(r,e){var n=[];for(var t=0;t<e*U;t++){n.push(r(t/U))}return n}function j(r){for(var e=0;e<r.length;e++){r[e]=Math.round((r[e]+1)*126)}return r}function B(r){for(var e=0;e<r.length;e++){if(r[e]>1)r[e]=1;if(r[e]<-1)r[e]=-1}var n=0;for(var e=0;e<r.length;e++){if(Math.abs(n-r[e])>.01&&r[e]==0){r[e]=n*.999}n=r[e]}return r}function D(r){var e=[];for(var n=0;n<r.length;n++){e[n]=r[n]}return e}function G(r){data=D(r);data=B(data);data=j(data);var e=new L;e.header.sampleRate=U;e.header.numChannels=1;e.Make(data);var n=new Audio(e.dataURI);return n}function q(r,e){return t(r,e)}function H(r){return a(r)}function J(r){return i(r)}function K(r){return u(r)&&a(r)==="sound"}var N=false;var O=null;function Q(r){if(N)return;if(!K(r)){throw new Error("play() expects sound as input, did you forget to sourcesound_to_sound()?")}var e=i(r);O=G(e);O.addEventListener("ended",T);O.play();N=true}function T(){if(N){O.pause();delete O}N=false}function V(r,e){var n=H(r);return q(function(r){if(r>=e){return 0}else{return n(r)}},e)}function W(r,e){var n=i(r);var t=[];for(var u=0;u<U*e;u++){t[u]=n[u]}return t}function X(r){return V(r,J(r))}function Y(r){var e=J(r);var n=H(r);var u=F(n,e);var a=t("sound",u);a.toString=function(){return"[object Sound]"};return a}function Z(r){if(!K(r)){throw new Error("sound_to_sourcesound() expects sound as input, did you forget to sourcesound_to_sound()?")}var e=i(r);var n=e.length/U;return X(q(function(r){var n=r*U;var t=Math.floor(n);var u=t+1;var a=n-t;var i=e[u]?e[u]:0;var o=e[t]?e[t]:0;return o*(1-a)+i*a},n))}function $(r){return t("sound",E(function(r,e){return r.concat(e)},[],d(i,r)))}function rr(r){if(false){debugger}var e=c(d(i,r));var n=0;var u;var a=[];for(u=0;u<e.length;u++){n=Math.max(n,e[u].length)}for(u=0;u<n;u++){a[u]=0;for(var o=0;o<e.length;o++){var s=e[o][u];a[u]+=s?s:0}a[u]/=e.length}return t("sound",a)}function er(r){return X(q(function(r){return Math.random()*2-1},r))}function nr(r){return Y(er(r))}function tr(r,e){return X(q(function(e){return Math.sin(2*Math.PI*e*r)},e))}function ur(r,e){return Y(tr(r,e))}function ar(r,e){return X(q(function(r){return 0},e))}function ir(r){return ar(0,r)}function or(r){return ar(1,r)}function sr(r){return Y(ir(r))}function fr(r){return Y(or(r))}function cr(r){var e=H(r);var n=J(r);return q(function(r){return-e(r)},n)}function hr(r){var e=[];var n=i(r);for(var t=0;t<n.length;t++){e[t]=-n[t]}return e}function lr(r){var e=H(r);var n=J(r);return q(function(r){var n=e(r);if(n>1){return 1}else if(n<-1){return-1}else{return n}},n)}function dr(r){var e=[];var n=i(r);for(var t=0;t<n.length;t++){if(e[t]>1){return 1}else if(e[t]<-1){return-1}else{return e[t]}}return e}function vr(r){var r=r.split("");var e=12;var n=r[0].toUpperCase();switch(n){case"D":e=e+2;break;case"E":e=e+4;break;case"F":e=e+5;break;case"G":e=e+7;break;case"A":e=e+9;break;case"B":e=e+11;break;default:break}if(r.length===2){e=parseInt(r[1])*12+e}else if(r.length===3){switch(r[1]){case"#":e=e+1;break;case"b":e=e-1;break;default:break}e=parseInt(r[2])*12+e}return e}function pr(r){return gr(note_to_midi_note(r))}function gr(r){return 8.1757989156*Math.pow(2,r/12)}function br(r,e){function n(e,n){var t=0;for(var u=1;u<=e;u++){t=t+Math.sin(2*Math.PI*(2*u-1)*r*n)/(2*u-1)}return t}return X(q(function(r){var e=4/Math.PI*n(5,r);if(e>1){return 1}else if(e<-1){return-1}else{return e}},e))}function mr(r,e){return Y(br(r,e))}function wr(r,e){function n(e,n){var t=0;for(var u=0;u<e;u++){t=t+Math.pow(-1,u)*Math.sin((2*u+1)*n*r*Math.PI*2)/Math.pow(2*u+1,2)}return t}return X(q(function(r){var e=8/Math.PI/Math.PI*n(5,r);if(e>1){return 1}else if(e<-1){return-1}else{return e}},e))}function xr(r,e){return Y(wr(r,e))}function kr(r,e){function n(e,n){var t=0;for(var u=1;u<=e;u++){t=t+Math.sin(2*Math.PI*u*r*n)/u}return t}return X(q(function(r){var e=1/2-1/Math.PI*n(5,r);if(e>1){return 1}else if(e<-1){return-1}else{return e}},e))}function _r(r,e){return Y(kr(r,e))}function yr(r){if(!K(r)){throw new"play() expects sound as input, did you forget to sourcesound_to_sound()?"}var e=i(r);var n=G(e);n.play()}export_symbol("make_sourcesound",q);export_symbol("get_wave",H);export_symbol("get_duration",J);export_symbol("play",Q);export_symbol("sound_to_sourcesound",Z);export_symbol("sourcesound_to_sound",Y);export_symbol("consecutively",$);export_symbol("simultaneously",rr);export_symbol("sine_sound",ur);export_symbol("silence",sr)})(window);