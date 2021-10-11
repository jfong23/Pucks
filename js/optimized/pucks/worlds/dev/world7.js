// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world7');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.opener');
goog.require('pucks.globals');
goog.require('pucks.agents.chest');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.gate');
pucks.worlds.dev.world7.agents = (function pucks$worlds$dev$world7$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__13800(s__13801){
return (new cljs.core.LazySeq(null,(function (){
var s__13801__$1 = s__13801;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13801__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13801__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world7$agents_$_iter__13800_$_iter__13802(s__13803){
return (new cljs.core.LazySeq(null,((function (s__13801__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13803__$1 = s__13803;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13803__$1);
if(temp__5735__auto____$1){
var s__13803__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13803__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13803__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13805 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13804 = (0);
while(true){
if((i__13804 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13804);
cljs.core.chunk_append(b__13805,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13818 = (i__13804 + (1));
i__13804 = G__13818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13805),pucks$worlds$dev$world7$agents_$_iter__13800_$_iter__13802(cljs.core.chunk_rest(s__13803__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13805),null);
}
} else {
var y = cljs.core.first(s__13803__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world7$agents_$_iter__13800_$_iter__13802(cljs.core.rest(s__13803__$2)));
}
} else {
return null;
}
break;
}
});})(s__13801__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13801__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(500)], null)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world7$agents_$_iter__13800(cljs.core.rest(s__13801__$1)));
} else {
var G__13819 = cljs.core.rest(s__13801__$1);
s__13801__$1 = G__13819;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__13806(s__13807){
return (new cljs.core.LazySeq(null,(function (){
var s__13807__$1 = s__13807;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13807__$1);
if(temp__5735__auto__){
var s__13807__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13807__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13807__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13809 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13808 = (0);
while(true){
if((i__13808 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13808);
cljs.core.chunk_append(b__13809,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)));

var G__13820 = (i__13808 + (1));
i__13808 = G__13820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13809),pucks$worlds$dev$world7$agents_$_iter__13806(cljs.core.chunk_rest(s__13807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13809),null);
}
} else {
var y = cljs.core.first(s__13807__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)),pucks$worlds$dev$world7$agents_$_iter__13806(cljs.core.rest(s__13807__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((300),(361),(20)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__13810(s__13811){
return (new cljs.core.LazySeq(null,(function (){
var s__13811__$1 = s__13811;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13811__$1);
if(temp__5735__auto__){
var s__13811__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13811__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13811__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13813 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13812 = (0);
while(true){
if((i__13812 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13812);
cljs.core.chunk_append(b__13813,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)));

var G__13821 = (i__13812 + (1));
i__13812 = G__13821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13813),pucks$worlds$dev$world7$agents_$_iter__13810(cljs.core.chunk_rest(s__13811__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13813),null);
}
} else {
var y = cljs.core.first(s__13811__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)),pucks$worlds$dev$world7$agents_$_iter__13810(cljs.core.rest(s__13811__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((440),(501),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__13814(s__13815){
return (new cljs.core.LazySeq(null,(function (){
var s__13815__$1 = s__13815;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13815__$1);
if(temp__5735__auto__){
var s__13815__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13815__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13815__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13817 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13816 = (0);
while(true){
if((i__13816 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13816);
cljs.core.chunk_append(b__13817,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)], 0)));

var G__13822 = (i__13816 + (1));
i__13816 = G__13822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13817),pucks$worlds$dev$world7$agents_$_iter__13814(cljs.core.chunk_rest(s__13815__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13817),null);
}
} else {
var y = cljs.core.first(s__13815__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)], 0)),pucks$worlds$dev$world7$agents_$_iter__13814(cljs.core.rest(s__13815__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((300),(501),(20)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(400)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.chest.chest(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(430)], null),cljs.core.cst$kw$inventory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.opener.opener(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(400)], null),cljs.core.cst$kw$rotation,pucks.globals.half_pi,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,(0)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(430)], null),cljs.core.cst$kw$radius,(30)], null)], 0))], null)], 0));
});
pucks.worlds.dev.world7.settings = (function pucks$worlds$dev$world7$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
