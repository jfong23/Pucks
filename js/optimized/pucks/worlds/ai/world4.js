// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.ai.world4');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.gate');
goog.require('pucks.agents.chest');
pucks.worlds.ai.world4.agents = (function pucks$worlds$ai$world4$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__13908(s__13909){
return (new cljs.core.LazySeq(null,(function (){
var s__13909__$1 = s__13909;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13909__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13909__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world4$agents_$_iter__13908_$_iter__13910(s__13911){
return (new cljs.core.LazySeq(null,((function (s__13909__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13911__$1 = s__13911;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13911__$1);
if(temp__5735__auto____$1){
var s__13911__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13911__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13911__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13913 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13912 = (0);
while(true){
if((i__13912 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13912);
cljs.core.chunk_append(b__13913,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13932 = (i__13912 + (1));
i__13912 = G__13932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13913),pucks$worlds$ai$world4$agents_$_iter__13908_$_iter__13910(cljs.core.chunk_rest(s__13911__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13913),null);
}
} else {
var y = cljs.core.first(s__13911__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world4$agents_$_iter__13908_$_iter__13910(cljs.core.rest(s__13911__$2)));
}
} else {
return null;
}
break;
}
});})(s__13909__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13909__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$ai$world4$agents_$_iter__13908(cljs.core.rest(s__13909__$1)));
} else {
var G__13933 = cljs.core.rest(s__13909__$1);
s__13909__$1 = G__13933;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(701),(200)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__13914(s__13915){
return (new cljs.core.LazySeq(null,(function (){
var s__13915__$1 = s__13915;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13915__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13915__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world4$agents_$_iter__13914_$_iter__13916(s__13917){
return (new cljs.core.LazySeq(null,((function (s__13915__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13917__$1 = s__13917;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13917__$1);
if(temp__5735__auto____$1){
var s__13917__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13917__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13917__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13919 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13918 = (0);
while(true){
if((i__13918 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13918);
cljs.core.chunk_append(b__13919,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13934 = (i__13918 + (1));
i__13918 = G__13934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13919),pucks$worlds$ai$world4$agents_$_iter__13914_$_iter__13916(cljs.core.chunk_rest(s__13917__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13919),null);
}
} else {
var y = cljs.core.first(s__13917__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$ai$world4$agents_$_iter__13914_$_iter__13916(cljs.core.rest(s__13917__$2)));
}
} else {
return null;
}
break;
}
});})(s__13915__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13915__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(500)], null)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$ai$world4$agents_$_iter__13914(cljs.core.rest(s__13915__$1)));
} else {
var G__13935 = cljs.core.rest(s__13915__$1);
s__13915__$1 = G__13935;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((500),(701),(20)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__13920(s__13921){
return (new cljs.core.LazySeq(null,(function (){
var s__13921__$1 = s__13921;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13921__$1);
if(temp__5735__auto__){
var s__13921__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13921__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13921__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13923 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13922 = (0);
while(true){
if((i__13922 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13922);
cljs.core.chunk_append(b__13923,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)));

var G__13936 = (i__13922 + (1));
i__13922 = G__13936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13923),pucks$worlds$ai$world4$agents_$_iter__13920(cljs.core.chunk_rest(s__13921__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13923),null);
}
} else {
var y = cljs.core.first(s__13921__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)),pucks$worlds$ai$world4$agents_$_iter__13920(cljs.core.rest(s__13921__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((300),(361),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__13924(s__13925){
return (new cljs.core.LazySeq(null,(function (){
var s__13925__$1 = s__13925;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13925__$1);
if(temp__5735__auto__){
var s__13925__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13925__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13925__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13927 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13926 = (0);
while(true){
if((i__13926 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13926);
cljs.core.chunk_append(b__13927,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)));

var G__13937 = (i__13926 + (1));
i__13926 = G__13937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13927),pucks$worlds$ai$world4$agents_$_iter__13924(cljs.core.chunk_rest(s__13925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13927),null);
}
} else {
var y = cljs.core.first(s__13925__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)),pucks$worlds$ai$world4$agents_$_iter__13924(cljs.core.rest(s__13925__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((440),(501),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__13928(s__13929){
return (new cljs.core.LazySeq(null,(function (){
var s__13929__$1 = s__13929;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13929__$1);
if(temp__5735__auto__){
var s__13929__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13929__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13929__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13931 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13930 = (0);
while(true){
if((i__13930 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13930);
cljs.core.chunk_append(b__13931,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)], 0)));

var G__13938 = (i__13930 + (1));
i__13930 = G__13938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13931),pucks$worlds$ai$world4$agents_$_iter__13928(cljs.core.chunk_rest(s__13929__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13931),null);
}
} else {
var y = cljs.core.first(s__13929__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)], 0)),pucks$worlds$ai$world4$agents_$_iter__13928(cljs.core.rest(s__13929__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((300),(501),(20)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(400)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.chest.chest(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(430)], null),cljs.core.cst$kw$inventory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(430)], null),cljs.core.cst$kw$radius,(30)], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery(pucks.agents.user.user),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)], 0))], null)], 0));
});
pucks.worlds.ai.world4.settings = (function pucks$worlds$ai$world4$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
