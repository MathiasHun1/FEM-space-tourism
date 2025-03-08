const DesignSystem = () => {
  return (
    <div className="design-cont wrapper bg-dark text-white flow-big">
      {/*--- COLORS  ---*/}
      <section className="flow">
        <h2 className="design-title ">
          <span>01</span>Colors
        </h2>
        <div
          className="design-colors ff-sans-normal flex"
          style={{ '--gap': '2rem' }}
        >
          <div className="bg-dark">blue-900</div>
          <div className="bg-light text-dark">blue-300</div>
          <div className="bg-white text-dark">white</div>
        </div>
      </section>

      {/*--- Typography  ---*/}
      <section className="flow">
        <h2 className="design-title">
          <span>02</span>
          Typography
        </h2>

        <div className="flex">
          <div className="flow-big" style={{ flexBasis: '100%' }}>
            <div>
              <p className="typo-title">
                Text-preset 1: Belfair regular 144px 0px
              </p>
              <h2 className="text-preset-1 uppercase ">Venus</h2>
            </div>
            <div>
              <p className="typo-title">
                Text-preset-2: Belfair regular 100px 0px
              </p>
              <h2 className="text-preset-2 uppercase">Earth</h2>
            </div>
            <div>
              <p className="typo-title">
                Text-preset-3: Belfair regular 56px 0px
              </p>
              <h2 className="text-preset-3 uppercase">Jupiter & Saturn</h2>
            </div>
            <div>
              <p className="typo-title">
                Text-preset-4: Belfair regular 32px 0px
              </p>
              <h2 className="text-preset-4 uppercase">
                Uranus, Neptune, Earth
              </h2>
            </div>
            <div>
              <p className="typo-title">
                Text-preset-5: Barlow-Condensed regular 28px 4px
              </p>
              <h2 className="text-preset-5 uppercase">Sedna, Eris, Ceres</h2>
            </div>
          </div>

          <div className="flow-big" style={{ flexBasis: '100%' }}>
            <div>
              <p className="typo-title">
                Text-preset-6: Belfair regular 28px 0px
              </p>
              <h2 className="text-preset-6 uppercase">384.000 km</h2>
            </div>
            <div>
              <p className="typo-title">
                Text-preset-7: Barlow condensed regular 14px 2px
              </p>
              <h2 className="text-preset-7 uppercase">Avg. distance</h2>
            </div>
            <div>
              <p className="typo-title">
                Text-preset-8: Barlow condensed regular 16px 2px
              </p>
              <h2 className="text-preset-8 uppercase">Europa</h2>
            </div>
            <div>
              <p className="typo-title">
                Text-preset-9: Barlow regular 18px 0px
              </p>
              <h2 className="text-preset-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nostrum temporibus nihil adipisci totam. Vel magni obcaecati,
                odio laudantium inventore culpa accusantium pariatur ratione.
                Expedita minus iusto eum, blanditiis tempore veniam?
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/*--- Components  ---*/}
      <section className="flow ">
        <h2 className="design-title">
          <span>03</span> Components
        </h2>

        <div className="design-components">
          <div style={{ flexBasis: '100%' }}>
            <a className="button-big text-dark ff-serif">Explore</a>
          </div>

          <div className="flex gap-md text-preset-8">
            <h2 className="numbered-title underline-indicator">
              <span>00</span>Menu
            </h2>
            <h2 className="numbered-title underline-indicator">
              <span>00</span>Menu
            </h2>
            <h2 className="numbered-title underline-indicator active">
              <span>00</span>Menu
            </h2>
          </div>
          <div className="flex" style={{ width: '200px' }}>
            <div className="dot-indicator"></div>
            <div className="dot-indicator"></div>
            <div className="dot-indicator active"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignSystem;
