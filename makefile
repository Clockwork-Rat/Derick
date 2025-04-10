
install:
	npm i

run:
	npm run dev:electron

build_linux:
	npm run dist:linux

run_linux:
	./dist/derick-0.0.0.AppImage

clean:
	rm -r dist/