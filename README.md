# Team `bystander.js`

> ICFP contest 2016 things

# Info

- Team member: @kt3k
- Languages: JavaScript, shell, nunjucks
- Rank: 47 (in the last snapshot)

# note

Visualization of `problem/system/1486.txt` causes `FATAL ERROR` of node v6.3.1.

```
$ ./bin/p2svg ./problems/system/1486.txt
Converting problem file to svg: ./problems/system/1486.txt

<--- Last few GCs --->

   10396 ms: Scavenge 393.8 (428.6) -> 389.8 (428.6) MB, 0.1 / 0 ms [allocation failure].
   10405 ms: Scavenge 393.8 (428.6) -> 389.8 (428.6) MB, 0.1 / 0 ms [allocation failure].
   10415 ms: Scavenge 393.8 (428.6) -> 389.8 (428.6) MB, 0.1 / 0 ms [allocation failure].
   10425 ms: Scavenge 393.8 (428.6) -> 389.8 (428.6) MB, 0.1 / 0 ms [allocation failure].
   10435 ms: Scavenge 393.8 (428.6) -> 389.8 (428.6) MB, 0.1 / 0 ms [allocation failure].


<--- JS stacktrace --->

==== JS stack trace =========================================

Security context: 0x80a780c9e31 <JS Object>
    1: multiplySmall(aka multiplySmall) [/Users/kt3k/tmp/bystander.js/node_modules/big-integer/BigInteger.js:281] [pc=0x17f45b622aec] (this=0x80a78004189 <undefined>,a=0x80a78004189 <undefined>,b=0x80a78004189 <undefined>)
    2: divMod1(aka divMod1) [/Users/kt3k/tmp/bystander.js/node_modules/big-integer/BigInteger.js:393] [pc=0x17f45b621aa6] (this=0x80a78004189 <undefined>,a=0x1e4966004131 <JS ...

FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory
 1: node::Abort() [/Users/kt3k/.nvm/versions/node/v6.3.1/bin/node]
 2: node::FatalException(v8::Isolate*, v8::Local<v8::Value>, v8::Local<v8::Message>) [/Users/kt3k/.nvm/versions/node/v6.3.1/bin/node]
 3: v8::internal::V8::FatalProcessOutOfMemory(char const*, bool) [/Users/kt3k/.nvm/versions/node/v6.3.1/bin/node]
 4: v8::internal::Heap::AllocateUninitializedFixedDoubleArray(int, v8::internal::PretenureFlag) [/Users/kt3k/.nvm/versions/node/v6.3.1/bin/node]
 5: v8::internal::Factory::NewFixedDoubleArray(int, v8::internal::PretenureFlag) [/Users/kt3k/.nvm/versions/node/v6.3.1/bin/node]
 6: v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleyDoubleElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)5> >::GrowCapacityAndConvertImpl(v8::internal::Handle<v8::internal::JSObject>, unsigned int) [/Users/kt3k/.nvm/versions/node/v6.3.1/bin/node]
 7: v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleyDoubleElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)5> >::Add(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyAttributes, unsigned int) [/Users/kt3k/.nvm/versions/node/v6.3.1/bin/node]
 8: v8::internal::JSObject::AddDataElement(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyAttributes, v8::internal::Object::ShouldThrow) [/Users/kt3k/.nvm/versions/node/v6.3.1/bin/node]
 9: v8::internal::Runtime::SetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode) [/Users/kt3k/.nvm/versions/node/v6.3.1/bin/node]
10: v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*) [/Users/kt3k/.nvm/versions/node/v6.3.1/bin/node]
11: 0x17f45b30961b
Abort trap: 6
```
