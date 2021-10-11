// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.utils.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('propeller.push.core');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.globals');
goog.require('goog.string');
goog.require('goog.string.format');
propeller.push.utils.helpers.keep_number_reasonable = (function propeller$push$utils$helpers$keep_number_reasonable(n){
if(cljs.core.integer_QMARK_(n)){
if((n > propeller.push.utils.globals.max_number_magnitude)){
return cljs.core.long$(propeller.push.utils.globals.max_number_magnitude);
} else {
if((n < (- propeller.push.utils.globals.max_number_magnitude))){
return cljs.core.long$((- propeller.push.utils.globals.max_number_magnitude));
} else {
return n;

}
}
} else {
if(cljs.core.truth_(isNaN(n))){
return 0.0;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,Infinity)) || ((n > propeller.push.utils.globals.max_number_magnitude)))){
return propeller.push.utils.globals.max_number_magnitude;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,-Infinity)) || ((n < (- propeller.push.utils.globals.max_number_magnitude))))){
return (- propeller.push.utils.globals.max_number_magnitude);
} else {
if(((((- propeller.push.utils.globals.min_number_magnitude) < n)) && ((n < propeller.push.utils.globals.min_number_magnitude)))){
return 0.0;
} else {
return n;

}
}
}
}

}
});
propeller.push.utils.helpers.reasonable_string_length_QMARK_ = (function propeller$push$utils$helpers$reasonable_string_length_QMARK_(string){
var length = cljs.core.count(string);
return (length <= propeller.push.utils.globals.max_string_length);
});
propeller.push.utils.helpers.reasonable_vector_length_QMARK_ = (function propeller$push$utils$helpers$reasonable_vector_length_QMARK_(vector){
var length = cljs.core.count(vector);
return (length <= propeller.push.utils.globals.max_vector_length);
});
propeller.push.utils.helpers.get_args_from_stacks = (function propeller$push$utils$helpers$get_args_from_stacks(state,stacks){
var state__$1 = state;
var stacks__$1 = cljs.core.reverse(stacks);
var args = cljs.core.List.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(stacks__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,state__$1,cljs.core.cst$kw$args,args], null);
} else {
var current_stack = cljs.core.first(stacks__$1);
if(propeller.push.state.empty_stack_QMARK_(state__$1,current_stack)){
return cljs.core.cst$kw$not_DASH_enough_DASH_args;
} else {
var G__13395 = propeller.push.state.pop_stack(state__$1,current_stack);
var G__13396 = cljs.core.rest(stacks__$1);
var G__13397 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(args,propeller.push.state.peek_stack(state__$1,current_stack));
state__$1 = G__13395;
stacks__$1 = G__13396;
args = G__13397;
continue;
}
}
break;
}
});
propeller.push.utils.helpers.make_instruction = (function propeller$push$utils$helpers$make_instruction(state,function$,arg_stacks,return_stack){
var popped_args = propeller.push.utils.helpers.get_args_from_stacks(state,arg_stacks);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(popped_args,cljs.core.cst$kw$not_DASH_enough_DASH_args)){
return state;
} else {
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(function$,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(popped_args));
var new_state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(popped_args);
if(typeof result === 'number'){
return propeller.push.state.push_to_stack(new_state,return_stack,propeller.push.utils.helpers.keep_number_reasonable(result));
} else {
if(((typeof result === 'string') && ((!(propeller.push.utils.helpers.reasonable_string_length_QMARK_(result)))))){
return state;
} else {
if(((cljs.core.vector_QMARK_(result)) && ((!(propeller.push.utils.helpers.reasonable_vector_length_QMARK_(result)))))){
return state;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,cljs.core.cst$kw$ignore_DASH_instruction)){
return state;
} else {
return propeller.push.state.push_to_stack(new_state,return_stack,result);

}
}
}
}
}
});
propeller.push.utils.helpers.get_stack_instructions = (function propeller$push$utils$helpers$get_stack_instructions(stacks){
var seq__13398_13440 = cljs.core.seq(cljs.core.deref(propeller.push.core.instruction_table));
var chunk__13399_13441 = null;
var count__13400_13442 = (0);
var i__13401_13443 = (0);
while(true){
if((i__13401_13443 < count__13400_13442)){
var vec__13416_13444 = chunk__13399_13441.cljs$core$IIndexed$_nth$arity$2(null,i__13401_13443);
var instruction_name_13445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13416_13444,(0),null);
var function_13446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13416_13444,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(function_13446)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13421 = "ERROR: Instruction %s does not have :stacks defined in metadata.";
var G__13422 = cljs.core.name(instruction_name_13445);
return goog.string.format(G__13421,G__13422);
})()),"\n","(:stacks (meta function))"].join('')));
}


var G__13447 = seq__13398_13440;
var G__13448 = chunk__13399_13441;
var G__13449 = count__13400_13442;
var G__13450 = (i__13401_13443 + (1));
seq__13398_13440 = G__13447;
chunk__13399_13441 = G__13448;
count__13400_13442 = G__13449;
i__13401_13443 = G__13450;
continue;
} else {
var temp__5735__auto___13451 = cljs.core.seq(seq__13398_13440);
if(temp__5735__auto___13451){
var seq__13398_13452__$1 = temp__5735__auto___13451;
if(cljs.core.chunked_seq_QMARK_(seq__13398_13452__$1)){
var c__4550__auto___13453 = cljs.core.chunk_first(seq__13398_13452__$1);
var G__13454 = cljs.core.chunk_rest(seq__13398_13452__$1);
var G__13455 = c__4550__auto___13453;
var G__13456 = cljs.core.count(c__4550__auto___13453);
var G__13457 = (0);
seq__13398_13440 = G__13454;
chunk__13399_13441 = G__13455;
count__13400_13442 = G__13456;
i__13401_13443 = G__13457;
continue;
} else {
var vec__13423_13458 = cljs.core.first(seq__13398_13452__$1);
var instruction_name_13459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13423_13458,(0),null);
var function_13460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13423_13458,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(function_13460)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13428 = "ERROR: Instruction %s does not have :stacks defined in metadata.";
var G__13429 = cljs.core.name(instruction_name_13459);
return goog.string.format(G__13428,G__13429);
})()),"\n","(:stacks (meta function))"].join('')));
}


var G__13461 = cljs.core.next(seq__13398_13452__$1);
var G__13462 = null;
var G__13463 = (0);
var G__13464 = (0);
seq__13398_13440 = G__13461;
chunk__13399_13441 = G__13462;
count__13400_13442 = G__13463;
i__13401_13443 = G__13464;
continue;
}
} else {
}
}
break;
}

var iter__4523__auto__ = (function propeller$push$utils$helpers$get_stack_instructions_$_iter__13430(s__13431){
return (new cljs.core.LazySeq(null,(function (){
var s__13431__$1 = s__13431;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13431__$1);
if(temp__5735__auto__){
var s__13431__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13431__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13431__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13433 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13432 = (0);
while(true){
if((i__13432 < size__4522__auto__)){
var vec__13434 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13432);
var instruction_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13434,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13434,(1),null);
if(clojure.set.subset_QMARK_(cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(function$)),stacks)){
cljs.core.chunk_append(b__13433,instruction_name);

var G__13465 = (i__13432 + (1));
i__13432 = G__13465;
continue;
} else {
var G__13466 = (i__13432 + (1));
i__13432 = G__13466;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13433),propeller$push$utils$helpers$get_stack_instructions_$_iter__13430(cljs.core.chunk_rest(s__13431__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13433),null);
}
} else {
var vec__13437 = cljs.core.first(s__13431__$2);
var instruction_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13437,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13437,(1),null);
if(clojure.set.subset_QMARK_(cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(function$)),stacks)){
return cljs.core.cons(instruction_name,propeller$push$utils$helpers$get_stack_instructions_$_iter__13430(cljs.core.rest(s__13431__$2)));
} else {
var G__13467 = cljs.core.rest(s__13431__$2);
s__13431__$1 = G__13467;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref(propeller.push.core.instruction_table));
});
propeller.push.utils.helpers.get_literal_type = (function propeller$push$utils$helpers$get_literal_type(data){
var literals = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,(function (thing){
return ((thing === true) || (thing === false));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,cljs.core.integer_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float,cljs.core.float_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char,cljs.core.char_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vector_boolean,(function (thing){
return ((cljs.core.vector_QMARK_(thing)) && (((cljs.core.first(thing) === true) || (cljs.core.first(thing) === false))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vector_float,(function (thing){
return ((cljs.core.vector_QMARK_(thing)) && (cljs.core.float_QMARK_(cljs.core.first(thing))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vector_integer,(function (thing){
return ((cljs.core.vector_QMARK_(thing)) && (cljs.core.integer_QMARK_(cljs.core.first(thing))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vector_string,(function (thing){
return ((cljs.core.vector_QMARK_(thing)) && (typeof cljs.core.first(thing) === 'string'));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$generic_DASH_vector,(function (thing){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,thing);
})], null)], null);
return cljs.core.first((function (){var iter__4523__auto__ = ((function (literals){
return (function propeller$push$utils$helpers$get_literal_type_$_iter__13468(s__13469){
return (new cljs.core.LazySeq(null,((function (literals){
return (function (){
var s__13469__$1 = s__13469;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13469__$1);
if(temp__5735__auto__){
var s__13469__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13469__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13469__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13471 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13470 = (0);
while(true){
if((i__13470 < size__4522__auto__)){
var vec__13472 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13470);
var stack = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13472,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13472,(1),null);
if(cljs.core.truth_((function$.cljs$core$IFn$_invoke$arity$1 ? function$.cljs$core$IFn$_invoke$arity$1(data) : function$.call(null,data)))){
cljs.core.chunk_append(b__13471,stack);

var G__13478 = (i__13470 + (1));
i__13470 = G__13478;
continue;
} else {
var G__13479 = (i__13470 + (1));
i__13470 = G__13479;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13471),propeller$push$utils$helpers$get_literal_type_$_iter__13468(cljs.core.chunk_rest(s__13469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13471),null);
}
} else {
var vec__13475 = cljs.core.first(s__13469__$2);
var stack = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13475,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13475,(1),null);
if(cljs.core.truth_((function$.cljs$core$IFn$_invoke$arity$1 ? function$.cljs$core$IFn$_invoke$arity$1(data) : function$.call(null,data)))){
return cljs.core.cons(stack,propeller$push$utils$helpers$get_literal_type_$_iter__13468(cljs.core.rest(s__13469__$2)));
} else {
var G__13480 = cljs.core.rest(s__13469__$2);
s__13469__$1 = G__13480;
continue;
}
}
} else {
return null;
}
break;
}
});})(literals))
,null,null));
});})(literals))
;
return iter__4523__auto__(literals);
})());
});
/**
 * Returns the literal stack corresponding to some vector stack.
 */
propeller.push.utils.helpers.get_vector_literal_type = (function propeller$push$utils$helpers$get_vector_literal_type(vector_stack){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(propeller.push.state.vec_stacks,vector_stack);
});
propeller.push.utils.helpers.print_state = (function propeller$push$utils$helpers$print_state(state){
var seq__13481 = cljs.core.seq(cljs.core.keys(propeller.push.state.empty_state));
var chunk__13482 = null;
var count__13483 = (0);
var i__13484 = (0);
while(true){
if((i__13484 < count__13483)){
var stack = chunk__13482.cljs$core$IIndexed$_nth$arity$2(null,i__13484);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goog.string.format("%-15s = ",stack)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack):cljs.core.List.EMPTY)], 0));

cljs.core.flush();


var G__13485 = seq__13481;
var G__13486 = chunk__13482;
var G__13487 = count__13483;
var G__13488 = (i__13484 + (1));
seq__13481 = G__13485;
chunk__13482 = G__13486;
count__13483 = G__13487;
i__13484 = G__13488;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13481);
if(temp__5735__auto__){
var seq__13481__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13481__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13481__$1);
var G__13489 = cljs.core.chunk_rest(seq__13481__$1);
var G__13490 = c__4550__auto__;
var G__13491 = cljs.core.count(c__4550__auto__);
var G__13492 = (0);
seq__13481 = G__13489;
chunk__13482 = G__13490;
count__13483 = G__13491;
i__13484 = G__13492;
continue;
} else {
var stack = cljs.core.first(seq__13481__$1);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goog.string.format("%-15s = ",stack)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack):cljs.core.List.EMPTY)], 0));

cljs.core.flush();


var G__13493 = cljs.core.next(seq__13481__$1);
var G__13494 = null;
var G__13495 = (0);
var G__13496 = (0);
seq__13481 = G__13493;
chunk__13482 = G__13494;
count__13483 = G__13495;
i__13484 = G__13496;
continue;
}
} else {
return null;
}
}
break;
}
});
