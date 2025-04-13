
install:
	npm i

run:
	npm run dev:electron

build_linux:
	npm run dist:linux

build_mac:
	npm run dist:mac

run_linux:
	./dist/derick-0.0.0.AppImage

clean:
	rm -r dist/