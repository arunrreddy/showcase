WINDOW_WIDTH = 1280
WINODW_HEIGHT = 720

function love.load()
  love.window.setMode(WINDOW_WIDTH, WINODW_HEIGHT, {
    fullscreen = false,
    resizable = false,
    vsync = true
  })
end

function love.draw()
  love.graphics.printf(
    'Hello Pong!',
    0,
    WINODW_HEIGHT / 2 - 6,
    WINDOW_WIDTH,
    'center'
  )
end
