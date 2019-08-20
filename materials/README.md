NodeJS basic algorithm of modules search:
    1. Core modules
    2. ./node_modules
    3. ../node_modules
    4. ../../node_modules

NODE_PATH=.   - environmental variable which let us configure absolute pass to our folder location

nodejs = V8 + libuv

Событийный цикл

    Есть две очереди исполнения коллбеков.

    1. task queue
    2. microtask queue

Выполнение какой-то задачи и передача результата коллбеком сохраняется в task queue.
Выполнение промисов идет в microtask queue
