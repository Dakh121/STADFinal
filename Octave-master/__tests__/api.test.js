import * as artist from "../src/api/artist.js";
import * as playlist from '../src/api/playlist.js'
import * as song from '../src/api/song.js'
import { getDoc, deleteDoc } from "firebase/firestore";


const mockArtist = { description: "The Drake", name: "Drake", names: ['D', 'Dr', 'Dra', 'Drak', 'Drake'], imageUrl: "data:image/jpeg;base64,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" };
describe('artist.js', () => {
    // mock data used for testing
    let mockRef = null; // reference to mock artist

    beforeAll(async () => {
        // create the mock artist
        mockRef = await artist.addArtist(mockArtist);
    });

    afterAll(async () => {
        // delete the mock artist created in setup
        await deleteDoc(mockRef);
    });

    test('getArtist runs without error', async () => {
        await artist.getArtists((snapshot) => {
            let artists = [];
            snapshot.forEach((doc) => {
                expect(doc.data()).not.toBe(null); // contains artsts
            });
        });
    });

    test('addArtist runs without error', async () => {
        const tempArtist = { description: "The Bob", name: "Bob", names: ['B', 'Bo', 'Bob'], imageUrl: "www.google.com" };

        await artist.addArtist(tempArtist).then(d => {
            expect(d.id).not.toBe('');

            // delete this document after creation
            deleteDoc(d);
        });

    });

    // TODO how to fix the storage
    test('uploadArtistToStorage and getArtistImageURL runs without error', async () => {
        const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
        const uploadTask = artist.uploadArtistToStorage(bytes);
        await uploadTask.on("state_changed", (snapshot) => {
            // console.log(snapshot);
        });
        artist.getArtistImageURL(uploadTask.snapshot.ref);
    });

    test('searchArtist finds the correct artist', async () => {
        let querySnapshot = await artist.searchArtist('Drake');
        querySnapshot.forEach(doc => {
            expect(doc.data().name).toBe('Drake');
        })

    });

    test('getArtistById runs without error', async () => {
        await artist.getArtistById(mockRef.id).then((doc) => {
            expect(doc.id).toBe(mockRef.id);
        });

    });

    test('getRecentArtist returns 8 max artists when given no input', async () => {
        let querySnapshot = await artist.getRecentArtists();
        let artists = [];
        querySnapshot.forEach(doc => {
            artists.push(doc.data().name);
            expect(artists.length <= 8).toBeTruthy();
            // console.log(artists);
        })
    });

});

const mockSong = { name: 'Mock Song', url: 'Fake Url', imageUrl: 'Fake Image Url', artist: "Drake" }

// Note: impossible to achieve full branch coverage because the method cannot be run successfully. 
describe('playlist.js', () => {

    // mock data used for testing
    const mockUid = 'aDtwkK5v12NuX6mD8JJkf7RevgH3'
    let mockRef = null; // reference to mock playlist

    beforeAll(async () => {
        // create the mock playlist to be used in other tests
        mockRef = await playlist.createNewPlaylist('mock playlist', mockUid);
    });

    afterAll(async () => {
        // delete the mock artist created in setup
        await deleteDoc(mockRef);
    });

    test('create new playlist without error', async () => {
        const name = 'Test Playlist 1'
        await playlist.createNewPlaylist(name, mockUid).then(d => {
            expect(d.id).not.toBe('');
            // delete this document after creation
            deleteDoc(d);
        });;
    });

    test('delete newly created playlist without error', async () => {
        const name = 'Test Playlist 2'
        await playlist.createNewPlaylist(name, mockUid).then(d => {
            playlist.deletePlaylist(d.id);
        });
    })

    test('get playlist with id without error', async () => {
        await playlist.getPlaylist(mockRef.id).then((result) => {
            expect(result.id).toBe(mockRef.id) // check we got the same document
        });
    })

    // ERROR: cannot run query. 
    test('getAllPlaylist runs without error', async () => {
        const qSnapshot = await playlist.getAllPlaylists(mockUid, (snapshot) => {
            const playlists = snapshot.docs.map((doc) => doc.data().name);
            // there should exist at least the playlist we made in setup
            expect(playlists).toContainEqual('mock playlist');
        });

        // the snapshot should contain at least one document
        expect(qSnapshot.empty === false).toBeTruthy();
    });

    // ERROR: cannot run query. 
    test('getAllPlaylist runs without error without cb', async () => {
        const qSnapshot = await playlist.getAllPlaylists(mockUid);

        // the snapshot should contain at least one document
        expect(qSnapshot.empty === false).toBeTruthy();
    });



    test('add song to playlist without error', async () => {
        await playlist.addSongToPlaylist(mockRef.id, mockSong).then(d => {
            expect(d.id).not.toBe('');
            // delete this document after creation
            deleteDoc(d);
        });
    })

    test('add song to favorites without error', async () => {
        await playlist.addSongTofavorites(mockSong, mockUid).then(d => {
            expect(d.id).not.toBe('');
            // delete this document after creation
            deleteDoc(d);
        });
    });


    test('remove song from playlist without error', async () => {
        // add song first
        const songRef = await playlist.addSongToPlaylist(mockRef.id, mockSong);
        playlist.deleteSongFromPlaylist('playlistsongs', songRef.id)
    });

    test('get favorite songs without error', async () => {
        // add a song in favorite playlist
        let tempSongRef = await playlist.addSongTofavorites(mockSong, mockUid)

        // and make sure its present when getting all the favorite songs
        await playlist.getFavouriteSongs(mockUid).then((snapshot) => {
            const songs = snapshot.docs.map((doc) => doc.data().name);
            expect(songs).toContainEqual(mockSong.name);
        });

        // with
        await playlist.getFavouriteSongs(mockUid, (snapshot) => {
            snapshot.docs.map((doc) => doc.data().name);
        })

        // delete song after done
        deleteDoc(tempSongRef);
    });

    // BUG: cannot run query. 
    test('get playlist songs without error', async () => {
        // add a song in favorite playlist
        let tempSongRef = await playlist.addSongToPlaylist(mockRef.id, mockSong)

        // and make sure its present when getting all the favorite songs
        await playlist.getPlaylistSongs(mockRef.id).then((snapshot) => {
            const songs = snapshot.docs.map((doc) => doc.data().name);
            expect(songs).toContainEqual(mockSong.name);
        });

        // with
        await playlist.getPlaylistSongs(mockRef.id, (snapshot) => {
            snapshot.docs.map((doc) => doc.data().name);
        })

        // delete song after done
        deleteDoc(tempSongRef);
    });

    // BUG: cannot run query. 
    test('get playlist songs without error with cb', async () => {
        // add a song in favorite playlist
        let tempSongRef = await playlist.addSongToPlaylist(mockRef.id, mockSong)

        // with
        await playlist.getPlaylistSongs(mockRef.id, (snapshot) => {
            snapshot.docs.map((doc) => doc.data().name);
        })

        // delete song after done
        deleteDoc(tempSongRef);
    });
});


describe('song.js', () => {
    // mock data used for testing
    let mockRef = null; // reference to mock song

    beforeAll(async () => {
        // create the mock playlist to be used in other tests
        mockRef = await song.addSong({ name: 'Mock Song', url: 'Fake Url', imageUrl: 'Fake Image Url', artist: "Bob" });
    });

    afterAll(async () => {
        // delete the mock artist created in setup
        await deleteDoc(mockRef);
    });

    /*
    // TODO: figure out how to upload audio file 
    it('upload song', async () => {
        const image = path.join(__dirname, './mockFiles/mockImage.jpg')
        const file = fs.readFileSync(image, {encoding:'utf8'})

        let uploadTask =  await song.uploadSongToStorage(file).then((snapshot) => {
            console.log('done uploading');
        });

    }, 50000)
    */

    test('search song', async () => {
        await song.searchSong('Baby').then((snapshot) => {
            const songs = snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }));
        })
    });

    test('create new song without error', async () => {
        // console.log(mockSong);
        await song.addSong(mockSong).then(d => {
            expect(d.id).not.toBe('');
            // delete this document after creation
            deleteDoc(d);
        });;
    });

    test('get new releases runs without error', async () => {
        song.getNewReleases().then((snapshot) => {
            const songs = snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }));
        })
    });

    test('get paginated songs runs without error', async () => {
        const doc = await getDoc(mockRef);
        song.getPaginatedSongs(doc.data().createdAt).then((snapshot) => {
            const songs = snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }));
        })
    });
    
    test('get all songs from one artist', async() => {
        song.getArtistSongs({name: 'Drake'}).then((snapshot) => {
        })
    })
});
