chrome.storage = {
    sync: {
        get: function(keys, callback) {
            setTimeout(function() {
                callback({foo: 'bar'});
            }, 100);
        },
        set: function(items, callback) {
            setTimeout(callback, 100);
        },
        getBytesInUse: function(keys, callback) {
            setTimeout(function() {
                callback(42);
            }, 100);
        },
        remove: function(items, callback) {
            setTimeout(callback, 100);
        },
        clear: function(callback) {
            setTimeout(callback, 100);
        },
    },

    local: {
        get: function(keys, callback) {
            setTimeout(function() {
                callback({foo: 'bar'});
            }, 100);
        },
        set: function(items, callback) {
            setTimeout(callback, 100);
        },
        getBytesInUse: function(keys, callback) {
            setTimeout(function() {
                callback(42);
            }, 100);
        },
        remove: function(items, callback) {
            setTimeout(callback, 100);
        },
        clear: function(callback) {
            setTimeout(callback, 100);
        },
    },

    managed: {
        get: function(keys, callback) {
            setTimeout(function() {
                callback({foo: 'bar'});
            }, 100);
        },
        set: function(items, callback) {
            setTimeout(callback, 100);
        },
        getBytesInUse: function(keys, callback) {
            setTimeout(function() {
                callback(42);
            }, 100);
        },
        remove: function(items, callback) {
            setTimeout(callback, 100);
        },
        clear: function(callback) {
            setTimeout(callback, 100);
        },
    },

    onChanged: {
        addListener: function(callback) {
            setTimeout(callback, 100);
        },
    },
};

require('../dist/chrome-storage-promise.js');

describe('chrome-storage-promise', function() {
    describe('sync', function() {
        describe('.get', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.sync.get('foo').then(function(items) {
                    expect(items).to.eql({foo: 'bar'});
                    done();
                });
            });

            it('calls chrome.storage.sync.get with "foo"', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.sync, 'get');
                chrome.storage.promise.sync.get('foo').then(callback);
                assert(chrome.storage.sync.get.calledWithMatch('foo'));
            });
        });

        describe('.set', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.sync.set({foo: 'bar'}).then(function() {
                    done();
                });
            });

            it('calls chrome.storage.sync.set with {foo: "bar"}', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.sync, 'set');
                chrome.storage.promise.sync.set({foo: 'bar'}).then(callback);
                assert(chrome.storage.sync.set.calledWithMatch({foo: 'bar'}));
            });
        });

        describe('.getBytesInUse', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.sync.getBytesInUse('foo').then(function(bytesInUse) {
                    expect(bytesInUse).to.equal(42);
                    done();
                });
            });

            it('calls chrome.storage.sync.getBytesInUse with "foo"', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.sync, 'getBytesInUse');
                chrome.storage.promise.sync.getBytesInUse('foo').then(callback);
                assert(chrome.storage.sync.getBytesInUse.calledWithMatch('foo'));
            });
        });

        describe('.remove', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.sync.remove('foo').then(function() {
                    done();
                });
            });

            it('calls chrome.storage.sync.remove with "foo"', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.sync, 'remove');
                chrome.storage.promise.sync.remove('foo').then(callback);
                assert(chrome.storage.sync.remove.calledWithMatch('foo'));
            });
        });

        describe('.clear', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.sync.clear().then(function() {
                    done();
                });
            });

            it('calls chrome.storage.sync.clear', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.sync, 'clear');
                chrome.storage.promise.sync.clear().then(callback);
                assert(chrome.storage.sync.clear.calledWithMatch());
            });
        });
    });

    describe('local', function() {
        describe('.get', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.local.get('foo').then(function(items) {
                    expect(items).to.eql({foo: 'bar'});
                    done();
                });
            });

            it('calls chrome.storage.local.get with "foo"', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.local, 'get');
                chrome.storage.promise.local.get('foo').then(callback);
                assert(chrome.storage.local.get.calledWithMatch('foo'));
            });
        });

        describe('.set', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.local.set({foo: 'bar'}).then(function() {
                    done();
                });
            });

            it('calls chrome.storage.local.set with {foo: "bar"}', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.local, 'set');
                chrome.storage.promise.local.set({foo: 'bar'}).then(callback);
                assert(chrome.storage.local.set.calledWithMatch({foo: 'bar'}));
            });
        });

        describe('.getBytesInUse', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.local.getBytesInUse('foo').then(function(bytesInUse) {
                    expect(bytesInUse).to.equal(42);
                    done();
                });
            });

            it('calls chrome.storage.local.getBytesInUse with "foo"', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.local, 'getBytesInUse');
                chrome.storage.promise.local.getBytesInUse('foo').then(callback);
                assert(chrome.storage.local.getBytesInUse.calledWithMatch('foo'));
            });
        });

        describe('.remove', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.local.remove('foo').then(function() {
                    done();
                });
            });

            it('calls chrome.storage.local.remove with "foo"', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.local, 'remove');
                chrome.storage.promise.local.remove('foo').then(callback);
                assert(chrome.storage.local.remove.calledWithMatch('foo'));
            });
        });

        describe('.clear', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.local.clear().then(function() {
                    done();
                });
            });

            it('calls chrome.storage.local.clear', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.local, 'clear');
                chrome.storage.promise.local.clear().then(callback);
                assert(chrome.storage.local.clear.calledWithMatch());
            });
        });
    });

    describe('managed', function() {
        describe('.get', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.managed.get('foo').then(function(items) {
                    expect(items).to.eql({foo: 'bar'});
                    done();
                });
            });

            it('calls chrome.storage.managed.get with "foo"', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.managed, 'get');
                chrome.storage.promise.managed.get('foo').then(callback);
                assert(chrome.storage.managed.get.calledWithMatch('foo'));
            });
        });

        describe('.set', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.managed.set({foo: 'bar'}).then(function() {
                    done();
                });
            });

            it('calls chrome.storage.managed.set with {foo: "bar"}', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.managed, 'set');
                chrome.storage.promise.managed.set({foo: 'bar'}).then(callback);
                assert(chrome.storage.managed.set.calledWithMatch({foo: 'bar'}));
            });
        });

        describe('.getBytesInUse', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.managed.getBytesInUse('foo').then(function(bytesInUse) {
                    expect(bytesInUse).to.equal(42);
                    done();
                });
            });

            it('calls chrome.storage.managed.getBytesInUse with "foo"', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.managed, 'getBytesInUse');
                chrome.storage.promise.managed.getBytesInUse('foo').then(callback);
                assert(chrome.storage.managed.getBytesInUse.calledWithMatch('foo'));
            });
        });

        describe('.remove', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.managed.remove('foo').then(function() {
                    done();
                });
            });

            it('calls chrome.storage.managed.remove with "foo"', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.managed, 'remove');
                chrome.storage.promise.managed.remove('foo').then(callback);
                assert(chrome.storage.managed.remove.calledWithMatch('foo'));
            });
        });

        describe('.clear', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.managed.clear().then(function() {
                    done();
                });
            });

            it('calls chrome.storage.managed.clear', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.managed, 'clear');
                chrome.storage.promise.managed.clear().then(callback);
                assert(chrome.storage.managed.clear.calledWithMatch());
            });
        });
    });

    describe('onChanged', function() {
        describe('.addListener', function() {
            it('is thenable', function(done) {
                chrome.storage.promise.onChanged.addListener().then(function() {
                    done();
                });
            });

            it('calls chrome.storage.onChanged.addListener', function() {
                var callback = sinon.spy();
                sinon.stub(chrome.storage.onChanged, 'addListener');
                chrome.storage.promise.onChanged.addListener().then(callback);
                assert(chrome.storage.onChanged.addListener.calledWithMatch());
            });
        });
    });
});
