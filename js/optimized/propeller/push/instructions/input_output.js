// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.instructions.input_output');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.push.utils.macros');
propeller.push.instructions.input_output.handle_input_instruction = (function propeller$push$instructions$input_output$handle_input_instruction(state,instruction){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(state),instruction)){
var input = (function (){var G__14830 = cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(state);
return (instruction.cljs$core$IFn$_invoke$arity$1 ? instruction.cljs$core$IFn$_invoke$arity$1(G__14830) : instruction.call(null,G__14830));
})();
return propeller.push.state.push_to_stack(state,cljs.core.cst$kw$exec,input);
} else {
throw Error(["Undefined instruction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instruction)].join(''));
}
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$print_newline,cljs.core.with_meta((function (state){
var current_output = propeller.push.state.peek_stack(state,cljs.core.cst$kw$print);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$print);
return propeller.push.state.push_to_stack(popped_state,cljs.core.cst$kw$print,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_output),"\n"].join(''));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$print], null)], null)));
propeller.push.instructions.input_output._print = cljs.core.with_meta((function propeller$push$instructions$input_output$_print(stack,state){
if(propeller.push.state.empty_stack_QMARK_(state,stack)){
return state;
} else {
var top_item = propeller.push.state.peek_stack(state,stack);
var top_item_str = ((((typeof top_item === 'string') || (cljs.core.char_QMARK_(top_item))))?top_item:cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_item], 0)));
var current_output = propeller.push.state.peek_stack(state,cljs.core.cst$kw$print);
var popped_state = propeller.push.state.pop_stack(propeller.push.state.pop_stack(state,stack),cljs.core.cst$kw$print);
return propeller.push.state.push_to_stack(popped_state,cljs.core.cst$kw$print,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(top_item_str)].join(''));
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$print], null),cljs.core.cst$kw$name,"_print"], null));
var seq__14831_14879 = cljs.core.seq(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$char,cljs.core.cst$kw$code,cljs.core.cst$kw$exec,cljs.core.cst$kw$float,cljs.core.cst$kw$integer,cljs.core.cst$kw$string,cljs.core.cst$kw$vector_boolean,cljs.core.cst$kw$vector_float,cljs.core.cst$kw$vector_integer,cljs.core.cst$kw$vector_string], null));
var chunk__14838_14880 = null;
var count__14839_14881 = (0);
var i__14840_14882 = (0);
while(true){
if((i__14840_14882 < count__14839_14881)){
var stack__2790__auto___14883 = chunk__14838_14880.cljs$core$IIndexed$_nth$arity$2(null,i__14840_14882);
var seq__14841_14884 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.input_output._print], null));
var chunk__14843_14885 = null;
var count__14844_14886 = (0);
var i__14845_14887 = (0);
while(true){
if((i__14845_14887 < count__14844_14886)){
var func__2791__auto___14888 = chunk__14843_14885.cljs$core$IIndexed$_nth$arity$2(null,i__14845_14887);
var instruction_name__2792__auto___14889 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14883),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14888)))].join(''));
var metadata__2793__auto___14890 = (function (){var G__14868 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14888),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14883,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14883)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14888))))));
var fexpr__14867 = ((function (seq__14841_14884,chunk__14843_14885,count__14844_14886,i__14845_14887,seq__14831_14879,chunk__14838_14880,count__14839_14881,i__14840_14882,G__14868,instruction_name__2792__auto___14889,func__2791__auto___14888,stack__2790__auto___14883){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14841_14884,chunk__14843_14885,count__14844_14886,i__14845_14887,seq__14831_14879,chunk__14838_14880,count__14839_14881,i__14840_14882,G__14868,instruction_name__2792__auto___14889,func__2791__auto___14888,stack__2790__auto___14883))
;
return fexpr__14867(G__14868);
})();
var new_func__2794__auto___14891 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14888,stack__2790__auto___14883),metadata__2793__auto___14890);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14889,new_func__2794__auto___14891);


var G__14892 = seq__14841_14884;
var G__14893 = chunk__14843_14885;
var G__14894 = count__14844_14886;
var G__14895 = (i__14845_14887 + (1));
seq__14841_14884 = G__14892;
chunk__14843_14885 = G__14893;
count__14844_14886 = G__14894;
i__14845_14887 = G__14895;
continue;
} else {
var temp__5735__auto___14896 = cljs.core.seq(seq__14841_14884);
if(temp__5735__auto___14896){
var seq__14841_14897__$1 = temp__5735__auto___14896;
if(cljs.core.chunked_seq_QMARK_(seq__14841_14897__$1)){
var c__4550__auto___14898 = cljs.core.chunk_first(seq__14841_14897__$1);
var G__14899 = cljs.core.chunk_rest(seq__14841_14897__$1);
var G__14900 = c__4550__auto___14898;
var G__14901 = cljs.core.count(c__4550__auto___14898);
var G__14902 = (0);
seq__14841_14884 = G__14899;
chunk__14843_14885 = G__14900;
count__14844_14886 = G__14901;
i__14845_14887 = G__14902;
continue;
} else {
var func__2791__auto___14903 = cljs.core.first(seq__14841_14897__$1);
var instruction_name__2792__auto___14904 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14883),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14903)))].join(''));
var metadata__2793__auto___14905 = (function (){var G__14870 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14903),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14883,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14883)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14903))))));
var fexpr__14869 = ((function (seq__14841_14884,chunk__14843_14885,count__14844_14886,i__14845_14887,seq__14831_14879,chunk__14838_14880,count__14839_14881,i__14840_14882,G__14870,instruction_name__2792__auto___14904,func__2791__auto___14903,seq__14841_14897__$1,temp__5735__auto___14896,stack__2790__auto___14883){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14841_14884,chunk__14843_14885,count__14844_14886,i__14845_14887,seq__14831_14879,chunk__14838_14880,count__14839_14881,i__14840_14882,G__14870,instruction_name__2792__auto___14904,func__2791__auto___14903,seq__14841_14897__$1,temp__5735__auto___14896,stack__2790__auto___14883))
;
return fexpr__14869(G__14870);
})();
var new_func__2794__auto___14906 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14903,stack__2790__auto___14883),metadata__2793__auto___14905);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14904,new_func__2794__auto___14906);


var G__14907 = cljs.core.next(seq__14841_14897__$1);
var G__14908 = null;
var G__14909 = (0);
var G__14910 = (0);
seq__14841_14884 = G__14907;
chunk__14843_14885 = G__14908;
count__14844_14886 = G__14909;
i__14845_14887 = G__14910;
continue;
}
} else {
}
}
break;
}

var G__14911 = seq__14831_14879;
var G__14912 = chunk__14838_14880;
var G__14913 = count__14839_14881;
var G__14914 = (i__14840_14882 + (1));
seq__14831_14879 = G__14911;
chunk__14838_14880 = G__14912;
count__14839_14881 = G__14913;
i__14840_14882 = G__14914;
continue;
} else {
var temp__5735__auto___14915 = cljs.core.seq(seq__14831_14879);
if(temp__5735__auto___14915){
var seq__14831_14916__$1 = temp__5735__auto___14915;
if(cljs.core.chunked_seq_QMARK_(seq__14831_14916__$1)){
var c__4550__auto___14917 = cljs.core.chunk_first(seq__14831_14916__$1);
var G__14918 = cljs.core.chunk_rest(seq__14831_14916__$1);
var G__14919 = c__4550__auto___14917;
var G__14920 = cljs.core.count(c__4550__auto___14917);
var G__14921 = (0);
seq__14831_14879 = G__14918;
chunk__14838_14880 = G__14919;
count__14839_14881 = G__14920;
i__14840_14882 = G__14921;
continue;
} else {
var stack__2790__auto___14922 = cljs.core.first(seq__14831_14916__$1);
var seq__14832_14923 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.input_output._print], null));
var chunk__14834_14924 = null;
var count__14835_14925 = (0);
var i__14836_14926 = (0);
while(true){
if((i__14836_14926 < count__14835_14925)){
var func__2791__auto___14927 = chunk__14834_14924.cljs$core$IIndexed$_nth$arity$2(null,i__14836_14926);
var instruction_name__2792__auto___14928 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14922),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14927)))].join(''));
var metadata__2793__auto___14929 = (function (){var G__14876 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14922,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14922)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14927))))));
var fexpr__14875 = ((function (seq__14832_14923,chunk__14834_14924,count__14835_14925,i__14836_14926,seq__14831_14879,chunk__14838_14880,count__14839_14881,i__14840_14882,G__14876,instruction_name__2792__auto___14928,func__2791__auto___14927,stack__2790__auto___14922,seq__14831_14916__$1,temp__5735__auto___14915){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14832_14923,chunk__14834_14924,count__14835_14925,i__14836_14926,seq__14831_14879,chunk__14838_14880,count__14839_14881,i__14840_14882,G__14876,instruction_name__2792__auto___14928,func__2791__auto___14927,stack__2790__auto___14922,seq__14831_14916__$1,temp__5735__auto___14915))
;
return fexpr__14875(G__14876);
})();
var new_func__2794__auto___14930 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14927,stack__2790__auto___14922),metadata__2793__auto___14929);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14928,new_func__2794__auto___14930);


var G__14931 = seq__14832_14923;
var G__14932 = chunk__14834_14924;
var G__14933 = count__14835_14925;
var G__14934 = (i__14836_14926 + (1));
seq__14832_14923 = G__14931;
chunk__14834_14924 = G__14932;
count__14835_14925 = G__14933;
i__14836_14926 = G__14934;
continue;
} else {
var temp__5735__auto___14935__$1 = cljs.core.seq(seq__14832_14923);
if(temp__5735__auto___14935__$1){
var seq__14832_14936__$1 = temp__5735__auto___14935__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14832_14936__$1)){
var c__4550__auto___14937 = cljs.core.chunk_first(seq__14832_14936__$1);
var G__14938 = cljs.core.chunk_rest(seq__14832_14936__$1);
var G__14939 = c__4550__auto___14937;
var G__14940 = cljs.core.count(c__4550__auto___14937);
var G__14941 = (0);
seq__14832_14923 = G__14938;
chunk__14834_14924 = G__14939;
count__14835_14925 = G__14940;
i__14836_14926 = G__14941;
continue;
} else {
var func__2791__auto___14942 = cljs.core.first(seq__14832_14936__$1);
var instruction_name__2792__auto___14943 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14922),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14942)))].join(''));
var metadata__2793__auto___14944 = (function (){var G__14878 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14922,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14922)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14942))))));
var fexpr__14877 = ((function (seq__14832_14923,chunk__14834_14924,count__14835_14925,i__14836_14926,seq__14831_14879,chunk__14838_14880,count__14839_14881,i__14840_14882,G__14878,instruction_name__2792__auto___14943,func__2791__auto___14942,seq__14832_14936__$1,temp__5735__auto___14935__$1,stack__2790__auto___14922,seq__14831_14916__$1,temp__5735__auto___14915){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14832_14923,chunk__14834_14924,count__14835_14925,i__14836_14926,seq__14831_14879,chunk__14838_14880,count__14839_14881,i__14840_14882,G__14878,instruction_name__2792__auto___14943,func__2791__auto___14942,seq__14832_14936__$1,temp__5735__auto___14935__$1,stack__2790__auto___14922,seq__14831_14916__$1,temp__5735__auto___14915))
;
return fexpr__14877(G__14878);
})();
var new_func__2794__auto___14945 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14942,stack__2790__auto___14922),metadata__2793__auto___14944);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14943,new_func__2794__auto___14945);


var G__14946 = cljs.core.next(seq__14832_14936__$1);
var G__14947 = null;
var G__14948 = (0);
var G__14949 = (0);
seq__14832_14923 = G__14946;
chunk__14834_14924 = G__14947;
count__14835_14925 = G__14948;
i__14836_14926 = G__14949;
continue;
}
} else {
}
}
break;
}

var G__14950 = cljs.core.next(seq__14831_14916__$1);
var G__14951 = null;
var G__14952 = (0);
var G__14953 = (0);
seq__14831_14879 = G__14950;
chunk__14838_14880 = G__14951;
count__14839_14881 = G__14952;
i__14840_14882 = G__14953;
continue;
}
} else {
}
}
break;
}
