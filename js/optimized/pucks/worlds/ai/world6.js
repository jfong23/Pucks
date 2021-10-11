// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.ai.world6');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.gate');
goog.require('pucks.agents.donor');
/**
 * Returns a positive or negative random number with magnitude less than n.
 */
pucks.worlds.ai.world6.rand_PLUS__ = (function pucks$worlds$ai$world6$rand_PLUS__(n){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * n)) - n);
});
/**
 * Returns a sequence of pucks that form a box of stones with a vent in the
 * middle and a gate on each side.
 */
pucks.worlds.ai.world6.ventbox = (function pucks$worlds$ai$world6$ventbox(p__14013){
var vec__14014 = p__14013;
var center_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14014,(0),null);
var center_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14014,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y - (50))], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y + (50))], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y - (50))], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y + (50))], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),center_y], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),center_y], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y - (50))], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y + (50))], null)], null)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null)], null)], 0))], null)], 0));
});
pucks.worlds.ai.world6.agents = (function pucks$worlds$ai$world6$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$ai$world6$agents_$_iter__14017(s__14018){
return (new cljs.core.LazySeq(null,(function (){
var s__14018__$1 = s__14018;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14018__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__14018__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__14017_$_iter__14019(s__14020){
return (new cljs.core.LazySeq(null,((function (s__14018__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__14020__$1 = s__14020;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14020__$1);
if(temp__5735__auto____$1){
var s__14020__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14020__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14020__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14022 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14021 = (0);
while(true){
if((i__14021 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14021);
cljs.core.chunk_append(b__14022,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$radius,(70)], null)], 0)));

var G__14053 = (i__14021 + (1));
i__14021 = G__14053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14022),pucks$worlds$ai$world6$agents_$_iter__14017_$_iter__14019(cljs.core.chunk_rest(s__14020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14022),null);
}
} else {
var y = cljs.core.first(s__14020__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$radius,(70)], null)], 0)),pucks$worlds$ai$world6$agents_$_iter__14017_$_iter__14019(cljs.core.rest(s__14020__$2)));
}
} else {
return null;
}
break;
}
});})(s__14018__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__14018__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((50),(751),(100))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$ai$world6$agents_$_iter__14017(cljs.core.rest(s__14018__$1)));
} else {
var G__14054 = cljs.core.rest(s__14018__$1);
s__14018__$1 = G__14054;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((50),(751),(100)));
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world6$agents_$_iter__14023(s__14024){
return (new cljs.core.LazySeq(null,(function (){
var s__14024__$1 = s__14024;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14024__$1);
if(temp__5735__auto__){
var s__14024__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14024__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14024__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14026 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14025 = (0);
while(true){
if((i__14025 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14025);
cljs.core.chunk_append(b__14026,(function (){var start = cljs.core.rand_int((800));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (i__14025,start,stop,y,c__4521__auto__,size__4522__auto__,b__14026,s__14024__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__14023_$_iter__14027(s__14028){
return (new cljs.core.LazySeq(null,((function (i__14025,start,stop,y,c__4521__auto__,size__4522__auto__,b__14026,s__14024__$2,temp__5735__auto__){
return (function (){
var s__14028__$1 = s__14028;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14028__$1);
if(temp__5735__auto____$1){
var s__14028__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14028__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__14028__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__14030 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__14029 = (0);
while(true){
if((i__14029 < size__4522__auto____$1)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__14029);
cljs.core.chunk_append(b__14030,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__14055 = (i__14029 + (1));
i__14029 = G__14055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14030),pucks$worlds$ai$world6$agents_$_iter__14023_$_iter__14027(cljs.core.chunk_rest(s__14028__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14030),null);
}
} else {
var x = cljs.core.first(s__14028__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world6$agents_$_iter__14023_$_iter__14027(cljs.core.rest(s__14028__$2)));
}
} else {
return null;
}
break;
}
});})(i__14025,start,stop,y,c__4521__auto__,size__4522__auto__,b__14026,s__14024__$2,temp__5735__auto__))
,null,null));
});})(i__14025,start,stop,y,c__4521__auto__,size__4522__auto__,b__14026,s__14024__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})());

var G__14056 = (i__14025 + (1));
i__14025 = G__14056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14026),pucks$worlds$ai$world6$agents_$_iter__14023(cljs.core.chunk_rest(s__14024__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14026),null);
}
} else {
var y = cljs.core.first(s__14024__$2);
return cljs.core.cons((function (){var start = cljs.core.rand_int((800));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (start,stop,y,s__14024__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__14023_$_iter__14031(s__14032){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__14024__$2,temp__5735__auto__){
return (function (){
var s__14032__$1 = s__14032;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14032__$1);
if(temp__5735__auto____$1){
var s__14032__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14032__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14032__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14034 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14033 = (0);
while(true){
if((i__14033 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14033);
cljs.core.chunk_append(b__14034,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__14057 = (i__14033 + (1));
i__14033 = G__14057;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14034),pucks$worlds$ai$world6$agents_$_iter__14023_$_iter__14031(cljs.core.chunk_rest(s__14032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14034),null);
}
} else {
var x = cljs.core.first(s__14032__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world6$agents_$_iter__14023_$_iter__14031(cljs.core.rest(s__14032__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__14024__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__14024__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})(),pucks$worlds$ai$world6$agents_$_iter__14023(cljs.core.rest(s__14024__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(781),(200)));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world6$agents_$_iter__14035(s__14036){
return (new cljs.core.LazySeq(null,(function (){
var s__14036__$1 = s__14036;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14036__$1);
if(temp__5735__auto__){
var s__14036__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14036__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14036__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14038 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14037 = (0);
while(true){
if((i__14037 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14037);
cljs.core.chunk_append(b__14038,(function (){var start = cljs.core.rand_int((800));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (i__14037,start,stop,x,c__4521__auto__,size__4522__auto__,b__14038,s__14036__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__14035_$_iter__14039(s__14040){
return (new cljs.core.LazySeq(null,((function (i__14037,start,stop,x,c__4521__auto__,size__4522__auto__,b__14038,s__14036__$2,temp__5735__auto__){
return (function (){
var s__14040__$1 = s__14040;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14040__$1);
if(temp__5735__auto____$1){
var s__14040__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14040__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__14040__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__14042 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__14041 = (0);
while(true){
if((i__14041 < size__4522__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__14041);
cljs.core.chunk_append(b__14042,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__14058 = (i__14041 + (1));
i__14041 = G__14058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14042),pucks$worlds$ai$world6$agents_$_iter__14035_$_iter__14039(cljs.core.chunk_rest(s__14040__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14042),null);
}
} else {
var y = cljs.core.first(s__14040__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world6$agents_$_iter__14035_$_iter__14039(cljs.core.rest(s__14040__$2)));
}
} else {
return null;
}
break;
}
});})(i__14037,start,stop,x,c__4521__auto__,size__4522__auto__,b__14038,s__14036__$2,temp__5735__auto__))
,null,null));
});})(i__14037,start,stop,x,c__4521__auto__,size__4522__auto__,b__14038,s__14036__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})());

var G__14059 = (i__14037 + (1));
i__14037 = G__14059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14038),pucks$worlds$ai$world6$agents_$_iter__14035(cljs.core.chunk_rest(s__14036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14038),null);
}
} else {
var x = cljs.core.first(s__14036__$2);
return cljs.core.cons((function (){var start = cljs.core.rand_int((800));
var stop = ((start + (100)) + cljs.core.rand_int((300)));
var iter__4523__auto__ = ((function (start,stop,x,s__14036__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__14035_$_iter__14043(s__14044){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__14036__$2,temp__5735__auto__){
return (function (){
var s__14044__$1 = s__14044;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14044__$1);
if(temp__5735__auto____$1){
var s__14044__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14044__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14044__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14046 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14045 = (0);
while(true){
if((i__14045 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14045);
cljs.core.chunk_append(b__14046,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__14060 = (i__14045 + (1));
i__14045 = G__14060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14046),pucks$worlds$ai$world6$agents_$_iter__14035_$_iter__14043(cljs.core.chunk_rest(s__14044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14046),null);
}
} else {
var y = cljs.core.first(s__14044__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world6$agents_$_iter__14035_$_iter__14043(cljs.core.rest(s__14044__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__14036__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__14036__$2,temp__5735__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,stop,(20)));
})(),pucks$worlds$ai$world6$agents_$_iter__14035(cljs.core.rest(s__14036__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(781),(200)));
})()),(function (){var locations = cljs.core.shuffle((function (){var iter__4523__auto__ = (function pucks$worlds$ai$world6$agents_$_iter__14047(s__14048){
return (new cljs.core.LazySeq(null,(function (){
var s__14048__$1 = s__14048;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__14048__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__14048__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__14047_$_iter__14049(s__14050){
return (new cljs.core.LazySeq(null,((function (s__14048__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__14050__$1 = s__14050;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__14050__$1);
if(temp__5735__auto____$1){
var s__14050__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14050__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__14050__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__14052 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__14051 = (0);
while(true){
if((i__14051 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__14051);
cljs.core.chunk_append(b__14052,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__14061 = (i__14051 + (1));
i__14051 = G__14061;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14052),pucks$worlds$ai$world6$agents_$_iter__14047_$_iter__14049(cljs.core.chunk_rest(s__14050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14052),null);
}
} else {
var y = cljs.core.first(s__14050__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$ai$world6$agents_$_iter__14047_$_iter__14049(cljs.core.rest(s__14050__$2)));
}
} else {
return null;
}
break;
}
});})(s__14048__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__14048__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300),(500),(700)], null)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$ai$world6$agents_$_iter__14047(cljs.core.rest(s__14048__$1)));
} else {
var G__14062 = cljs.core.rest(s__14048__$1);
s__14048__$1 = G__14062;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300),(500),(700)], null));
})());
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(pucks.worlds.ai.world6.ventbox(cljs.core.first(locations)),pucks.worlds.ai.world6.ventbox(cljs.core.second(locations)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (locations){
return (function (p,loc){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,loc], null)], 0));
});})(locations))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery(pucks.agents.user.user),pucks.agents.nursery.nursery(((function (locations){
return (function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.donor.donor(cljs.core.cst$kw$key),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.worlds.ai.world6.rand_PLUS__((5)),pucks.worlds.ai.world6.rand_PLUS__((5))], null)], null)], 0));
});})(locations))
),pucks.agents.zapper.zapper(),pucks.agents.zapper.zapper()], null),cljs.core.rest(cljs.core.rest(locations)))], 0));
})()], 0));
});
pucks.worlds.ai.world6.settings = (function pucks$worlds$ai$world6$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
