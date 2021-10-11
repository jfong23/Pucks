// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world10');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.darter');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
pucks.worlds.dev.world10.agents = (function pucks$worlds$dev$world10$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__13654(s__13655){
return (new cljs.core.LazySeq(null,(function (){
var s__13655__$1 = s__13655;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13655__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13655__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world10$agents_$_iter__13654_$_iter__13656(s__13657){
return (new cljs.core.LazySeq(null,((function (s__13655__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13657__$1 = s__13657;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13657__$1);
if(temp__5735__auto____$1){
var s__13657__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13657__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13657__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13659 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13658 = (0);
while(true){
if((i__13658 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13658);
cljs.core.chunk_append(b__13659,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13688 = (i__13658 + (1));
i__13658 = G__13688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13659),pucks$worlds$dev$world10$agents_$_iter__13654_$_iter__13656(cljs.core.chunk_rest(s__13657__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13659),null);
}
} else {
var y = cljs.core.first(s__13657__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__13654_$_iter__13656(cljs.core.rest(s__13657__$2)));
}
} else {
return null;
}
break;
}
});})(s__13655__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13655__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world10$agents_$_iter__13654(cljs.core.rest(s__13655__$1)));
} else {
var G__13689 = cljs.core.rest(s__13655__$1);
s__13655__$1 = G__13689;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__13660(s__13661){
return (new cljs.core.LazySeq(null,(function (){
var s__13661__$1 = s__13661;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13661__$1);
if(temp__5735__auto__){
var s__13661__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13661__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13661__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13663 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13662 = (0);
while(true){
if((i__13662 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13662);
cljs.core.chunk_append(b__13663,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__13690 = (i__13662 + (1));
i__13662 = G__13690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13663),pucks$worlds$dev$world10$agents_$_iter__13660(cljs.core.chunk_rest(s__13661__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13663),null);
}
} else {
var y = cljs.core.first(s__13661__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__13660(cljs.core.rest(s__13661__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(201),(20)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__13664(s__13665){
return (new cljs.core.LazySeq(null,(function (){
var s__13665__$1 = s__13665;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13665__$1);
if(temp__5735__auto__){
var s__13665__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13665__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13665__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13667 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13666 = (0);
while(true){
if((i__13666 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13666);
cljs.core.chunk_append(b__13667,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__13691 = (i__13666 + (1));
i__13666 = G__13691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13667),pucks$worlds$dev$world10$agents_$_iter__13664(cljs.core.chunk_rest(s__13665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13667),null);
}
} else {
var y = cljs.core.first(s__13665__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__13664(cljs.core.rest(s__13665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__13668(s__13669){
return (new cljs.core.LazySeq(null,(function (){
var s__13669__$1 = s__13669;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13669__$1);
if(temp__5735__auto__){
var s__13669__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13669__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13669__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13671 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13670 = (0);
while(true){
if((i__13670 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13670);
cljs.core.chunk_append(b__13671,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)], 0)));

var G__13692 = (i__13670 + (1));
i__13670 = G__13692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13671),pucks$worlds$dev$world10$agents_$_iter__13668(cljs.core.chunk_rest(s__13669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13671),null);
}
} else {
var x = cljs.core.first(s__13669__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__13668(cljs.core.rest(s__13669__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(601),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__13672(s__13673){
return (new cljs.core.LazySeq(null,(function (){
var s__13673__$1 = s__13673;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13673__$1);
if(temp__5735__auto__){
var s__13673__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13673__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13673__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13675 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13674 = (0);
while(true){
if((i__13674 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13674);
cljs.core.chunk_append(b__13675,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)], 0)));

var G__13693 = (i__13674 + (1));
i__13674 = G__13693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13675),pucks$worlds$dev$world10$agents_$_iter__13672(cljs.core.chunk_rest(s__13673__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13675),null);
}
} else {
var x = cljs.core.first(s__13673__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__13672(cljs.core.rest(s__13673__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__13676(s__13677){
return (new cljs.core.LazySeq(null,(function (){
var s__13677__$1 = s__13677;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13677__$1);
if(temp__5735__auto__){
var s__13677__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13677__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13677__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13679 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13678 = (0);
while(true){
if((i__13678 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13678);
cljs.core.chunk_append(b__13679,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)], 0)));

var G__13694 = (i__13678 + (1));
i__13678 = G__13694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13679),pucks$worlds$dev$world10$agents_$_iter__13676(cljs.core.chunk_rest(s__13677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13679),null);
}
} else {
var x = cljs.core.first(s__13677__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__13676(cljs.core.rest(s__13677__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__13680(s__13681){
return (new cljs.core.LazySeq(null,(function (){
var s__13681__$1 = s__13681;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13681__$1);
if(temp__5735__auto__){
var s__13681__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13681__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13681__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13683 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13682 = (0);
while(true){
if((i__13682 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13682);
cljs.core.chunk_append(b__13683,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)], 0)));

var G__13695 = (i__13682 + (1));
i__13682 = G__13695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13683),pucks$worlds$dev$world10$agents_$_iter__13680(cljs.core.chunk_rest(s__13681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13683),null);
}
} else {
var y = cljs.core.first(s__13681__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__13680(cljs.core.rest(s__13681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__13684(s__13685){
return (new cljs.core.LazySeq(null,(function (){
var s__13685__$1 = s__13685;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13685__$1);
if(temp__5735__auto__){
var s__13685__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13685__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13685__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13687 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13686 = (0);
while(true){
if((i__13686 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13686);
cljs.core.chunk_append(b__13687,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)], 0)));

var G__13696 = (i__13686 + (1));
i__13686 = G__13696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13687),pucks$worlds$dev$world10$agents_$_iter__13684(cljs.core.chunk_rest(s__13685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13687),null);
}
} else {
var y = cljs.core.first(s__13685__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)], 0)),pucks$worlds$dev$world10$agents_$_iter__13684(cljs.core.rest(s__13685__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(801),(20)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery(pucks.agents.darter.darter),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)], 0))], null)], 0));
});
pucks.worlds.dev.world10.settings = (function pucks$worlds$dev$world10$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
