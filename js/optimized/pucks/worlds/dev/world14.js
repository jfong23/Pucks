// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world14');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.spawner');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
pucks.worlds.dev.world14.agents = (function pucks$worlds$dev$world14$agents(){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world14$agents_$_iter__16806(s__16807){
return (new cljs.core.LazySeq(null,(function (){
var s__16807__$1 = s__16807;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16807__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__16807__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world14$agents_$_iter__16806_$_iter__16808(s__16809){
return (new cljs.core.LazySeq(null,((function (s__16807__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__16809__$1 = s__16809;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__16809__$1);
if(temp__5735__auto____$1){
var s__16809__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16809__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16809__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16811 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16810 = (0);
while(true){
if((i__16810 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16810);
cljs.core.chunk_append(b__16811,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__16812 = (i__16810 + (1));
i__16810 = G__16812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16811),pucks$worlds$dev$world14$agents_$_iter__16806_$_iter__16808(cljs.core.chunk_rest(s__16809__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16811),null);
}
} else {
var y = cljs.core.first(s__16809__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),pucks$worlds$dev$world14$agents_$_iter__16806_$_iter__16808(cljs.core.rest(s__16809__$2)));
}
} else {
return null;
}
break;
}
});})(s__16807__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__16807__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(1901),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world14$agents_$_iter__16806(cljs.core.rest(s__16807__$1)));
} else {
var G__16813 = cljs.core.rest(s__16807__$1);
s__16807__$1 = G__16813;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(1901),(200)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.nursery.nursery(pucks.agents.spawner.spawner),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(1000)], null))], null)));
});
pucks.worlds.dev.world14.settings = (function pucks$worlds$dev$world14$settings(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$screen_DASH_size,(2000),cljs.core.cst$kw$scale,0.4,cljs.core.cst$kw$single_DASH_thread_DASH_mode,false,cljs.core.cst$kw$nursery_DASH_threshold,(10)], null);
});
